import Link from "next/link";
import { Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#">Ride-Hailing</Link>
            </li>
            <li>
              <Link href="#">Package Delivery</Link>
            </li>
            <li>
              <Link href="#">Food & Groceries</Link>
            </li>
            <li>
              <Link href="#">Move for Business</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Sustainability</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Partner Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#">Become a Driver</Link>
            </li>
            <li>
              <Link href="#">List Your Restaurant</Link>
            </li>
            <li>
              <Link href="#">Courier Sign-Up</Link>
            </li>
            <li>
              <Link href="#">Partner Support</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Safety Center</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Cookie Policy</Link>
            </li>
            <li>
              <Link href="#">Licenses</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <Globe className="w-5 h-5" />
          <span className="text-sm">EN</span>
        </div>

        {/* Logo + Socials */}

        {/* App Store Buttons */}
        <div className="flex space-x-4">
          <Button className="flex items-center px-4 py-3 bg-white text-black rounded-lg space-x-2">
            <Image
              src={"/logo/apple.svg"}
              width={20}
              alt="
            Apple Logo"
              height={20}
              className="w-5 h-5"
            />
            <span>Get the app</span>
          </Button>
          <Button className="flex items-center px-4 py-3 bg-white text-black rounded-lg space-x-2">
            <Image
              src={"/logo/playstore.svg"}
              width={20}
              alt="
            playstore Logo"
              height={20}
              className="w-5 h-5"
            />
            <span>Get the app</span>
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-6">
          <Image
            src="/logo/footerlogo.svg"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain h-6 w-full"
          />
        </div>
        <div className="text-center text-gray-400 text-sm pb-6">
          © 2025 Move App. Moving people, packages, and possibilities.
        </div>
      </div>
    </footer>
  );
}
