"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            <Image
              src="/logo/applogo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button className="text-black hover:text-black flex items-center">
                Product{" "}
                <span className="ml-1">
                  <ChevronDown />
                </span>
              </button>
              {/* Dropdown example */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg p-3">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Option 1
                </Link>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Option 2
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-black hover:text-black flex items-center">
                Earn with move{" "}
                <span className="ml-1">
                  {" "}
                  <ChevronDown />
                </span>
              </button>
            </div>

            <Link href="/company" className="text-black hover:text-black">
              Company
            </Link>
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <Link
              href="/register"
              className="bg-black  text-white px-5 py-3 rounded-lg hover:bg-gray-900"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button className="bg-black" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <Link href="/" className="block text-gray-700">
            Product
          </Link>
          <Link href="/" className="block text-gray-700">
            Earn with move
          </Link>
          <Link href="/company" className="block text-gray-700">
            Company
          </Link>
          <Link
            href="/register"
            className="block bg-black text-white text-center px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
