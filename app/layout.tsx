import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";
import "leaflet/dist/leaflet.css"; // Global Leaflet CSS
// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-poppins", // optional: expose as CSS variable
});

export const metadata = {
  title: "MOVVE",
  description:
    "MOVVE is your all-in-one mobility and delivery platform – from ride booking and ride sharing to food and parcel delivery, we connect people, drivers, and vendors seamlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased !bg-white font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
