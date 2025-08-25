/* eslint-disable */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import dynamic from "next/dynamic";

const PlugSendIcpButton = dynamic(() => import("./plug"), { ssr: false });

// Fix default marker icons (Leaflet in bundlers)
const DefaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
(L.Marker.prototype as L.Marker).options.icon = DefaultIcon;

// Geocode a place name with Nominatim
// lib/geocode.ts
export async function geocode(place: string, opts?: { referer?: string }) {
  const referer = opts?.referer ?? process.env.APP_URL ?? "";

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", place);
  url.searchParams.set("format", "json");
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("limit", "1");

  const resp = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "User-Agent": "osm-osrm-directions/1.0 (https://example.com)",
      ...(referer ? { Referer: referer } : {}),
    },
  });
  if (!resp.ok) throw new Error(`Geocoding failed: ${resp.status}`);
  const data = await resp.json();
  if (!Array.isArray(data) || data.length === 0)
    throw new Error("No results found");
  const { lat, lon, display_name } = data[0];
  return {
    lat: parseFloat(lat),
    lon: parseFloat(lon),
    name: display_name as string,
  };
}

// Fetch OSRM route between two coords
async function routeOSRM(
  a: { lat: number; lon: number },
  b: { lat: number; lon: number }
) {
  const url = new URL(
    `https://router.project-osrm.org/route/v1/driving/${a.lon},${a.lat};${b.lon},${b.lat}`
  );
  url.searchParams.set("overview", "full");
  url.searchParams.set("geometries", "geojson");
  url.searchParams.set("alternatives", "false");

  const resp = await fetch(url.toString());
  if (!resp.ok) throw new Error(`Routing failed: ${resp.status}`);
  const data = await resp.json();
  if (!data.routes || data.routes.length === 0)
    throw new Error("No route found");
  const r = data.routes[0];
  const coords: [number, number][] = r.geometry.coordinates.map(
    (c: [number, number]) => [c[1], c[0]]
  );
  return {
    distanceMeters: r.distance,
    durationSeconds: r.duration,
    coordinates: coords,
  };
}

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (!points || points.length === 0) return;
    const b = L.latLngBounds(points);
    map.fitBounds(b, { padding: [40, 40] });
  }, [points, map]);
  return null;
}

export default function FreeDirectionsDemo() {
  const [fromText, setFromText] = useState("Lagos, Nigeria");
  const [toText, setToText] = useState("Ikeja, Nigeria");

  // For geolocation loading state
  const [geoLoading, setGeoLoading] = useState(false);
  // Handler for 'Ping My Location' button
  async function handlePingLocation() {
    setGeoLoading(true);
    setError(null);
    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser.");
      }
      await new Promise<void>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            try {
              const { latitude, longitude } = pos.coords;
              // Use Open-Meteo Geocoding API (no key required)
              const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}`;
              const resp = await fetch(url);
              if (!resp.ok) throw new Error("Reverse geocoding failed");
              const data = await resp.json();
              let name = "";
              if (data && data.results && data.results.length > 0) {
                const r = data.results[0];
                name = [r.name, r.admin1, r.country].filter(Boolean).join(", ");
              } else {
                name = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
              }
              setFromText(name);
              setFromCoord({ lat: latitude, lon: longitude, name });
            } catch (err) {
              setError(
                err instanceof Error
                  ? err.message
                  : "Failed to reverse geocode location"
              );
            }
            resolve();
          },
          (err) => {
            setError("Failed to get your location: " + err.message);
            reject(err);
          }
        );
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get location");
    } finally {
      setGeoLoading(false);
    }
  }

  const [fromCoord, setFromCoord] = useState<{
    lat: number;
    lon: number;
    name?: string;
  } | null>(null);
  const [toCoord, setToCoord] = useState<{
    lat: number;
    lon: number;
    name?: string;
  } | null>(null);
  const [route, setRoute] = useState<{
    distanceMeters: number;
    durationSeconds: number;
    coordinates: [number, number][];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const allPoints = useMemo(() => {
    const pts: [number, number][] = [];
    if (fromCoord) pts.push([fromCoord.lat, fromCoord.lon]);
    if (toCoord) pts.push([toCoord.lat, toCoord.lon]);
    if (route?.coordinates) pts.push(...route.coordinates);
    return pts;
  }, [fromCoord, toCoord, route]);

  async function handleFindRoute(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRoute(null);

    try {
      const [from, to] = await Promise.all([
        geocode(fromText),
        geocode(toText),
      ]);
      setFromCoord(from);
      setToCoord(to);
      const r = await routeOSRM(from, to);
      setRoute(r);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function prettyKm(m: number) {
    return (m / 1000).toFixed(1) + " km";
  }
  function prettyMin(s: number) {
    return Math.round(s / 60) + " min";
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <header className="p-4 md:p-6 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl md:text-3xl font-bold">
          Free OSM + OSRM Directions
        </h1>
        <p className="text-sm text-gray-500">
          Uber-like routing with open APIs (no key needed)
        </p>

        <PlugSendIcpButton />
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 md:p-6 flex-1">
        <section className="lg:col-span-1">
          <form
            onSubmit={handleFindRoute}
            className="bg-white text-black rounded-2xl shadow p-4 md:p-6 space-y-3"
          >
            <div>
              <label className="text-sm font-medium">From</label>
              <div className="flex gap-2">
                <input
                  className="w-full mt-1 rounded-xl border border-gray-300 p-3 tetxt-black focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="e.g., Lagos, Nigeria"
                  value={fromText}
                  onChange={(e) => setFromText(e.target.value)}
                  required
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  onClick={handlePingLocation}
                  disabled={geoLoading}
                  className="mt-1 px-3 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
                  title="Use your current location"
                >
                  {geoLoading ? "Locating..." : "Ping My Location"}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">To</label>
              <input
                className="w-full mt-1  text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="e.g., Ikeja, Nigeria"
                value={toText}
                onChange={(e) => setToText(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl p-3 font-semibold bg-black text-white shadow hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Finding route…" : "Get Directions"}
            </button>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl p-3">
                {error}
              </div>
            )}

            {route && (
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="bg-gray-100 rounded-xl p-3">
                  <div className="font-semibold">Distance</div>
                  <div>{prettyKm(route.distanceMeters)}</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-3">
                  <div className="font-semibold">ETA</div>
                  <div>{prettyMin(route.durationSeconds)}</div>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-3">
              Data © OpenStreetMap contributors, routing via OSRM.
            </p>
          </form>
        </section>

        <section className="lg:col-span-2">
          <div className="h-[60vh] lg:h-[78vh] bg-white rounded-2xl overflow-hidden shadow">
            <MapContainer
              center={[6.5244, 3.3792]}
              zoom={11}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {fromCoord && (
                <Marker position={[fromCoord.lat, fromCoord.lon]}></Marker>
              )}
              {toCoord && (
                <Marker position={[toCoord.lat, toCoord.lon]}></Marker>
              )}
              {route && <Polyline positions={route.coordinates} />}

              {allPoints.length > 0 && <FitBounds points={allPoints} />}
            </MapContainer>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center text-xs text-gray-500">
        Built with Next.js, Tailwind, Leaflet, Nominatim & OSRM — free and open.
      </footer>
    </div>
  );
}
