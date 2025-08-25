export const metadata = {
  title: "Free OSM + OSRM Directions",
  description: "Uber-like routing with open APIs (no key)",
};

import "./globals.css";
import "leaflet/dist/leaflet.css"; // Global Leaflet CSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
