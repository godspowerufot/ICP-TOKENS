"use client";

// app/page.tsx
import dynamic from "next/dynamic";

const FreeDirectionsDemo = dynamic(
  () => import("../components/FreeDirectionsDemo"),
  { ssr: false }
);

export default function HomePage() {
  return <FreeDirectionsDemo />;
}
