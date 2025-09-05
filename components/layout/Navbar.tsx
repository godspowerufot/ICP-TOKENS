"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [earnOpen, setEarnOpen] = useState(false);

  // toggle handlers (mutually exclusive dropdowns)
  const toggleProduct = () => {
    setProductOpen(!productOpen);
    if (!productOpen) setEarnOpen(false); // close Earn if opening Product
  };

  const toggleEarn = () => {
    setEarnOpen(!earnOpen);
    if (!earnOpen) setProductOpen(false); // close Product if opening Earn
  };

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
            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProduct}
                className="text-black hover:text-gray-700 flex items-center"
              >
                Product{" "}
                <span className="ml-1">
                  <ChevronDown />
                </span>
              </button>

              {productOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-lg p-3 z-50 w-48">
                  <Link
                    href="/drive"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Ride Booking
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Ride Sharing
                  </Link>
                  <Link
                    href="/courier"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Food Delivery
                  </Link>
                  <Link
                    href="/couriertwo"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Parcel Delivery
                  </Link>
                </div>
              )}
            </div>

            {/* Earn Dropdown */}
            <div className="relative">
              <button
                onClick={toggleEarn}
                className="text-black hover:text-gray-700 flex items-center"
              >
                Earn with move{" "}
                <span className="ml-1">
                  <ChevronDown />
                </span>
              </button>

              {earnOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-lg p-3 z-50 w-56">
                  <Link
                    href="/earn"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Become a Driver
                  </Link>
                  <Link
                    href="/food"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Become a Food Vendor
                  </Link>
                  <Link
                    href="/delivery"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Become a Delivery Agent
                  </Link>
                  <Link
                    href="/couriertwo"
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Parcel Delivery
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/drive"
              className="text-black hover:text-gray-700 px-4 py-2"
            >
              Company
            </Link>
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <Link
              href="/waitlist"
              className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-900"
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
        <div className="md:hidden text-black px-4 pb-4 space-y-4">
          <button
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 rounded-md"
            onClick={toggleProduct}
          >
            Product
          </button>
          {productOpen && (
            <div className="ml-4 space-y-2">
              <Link
                href="/drive"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Ride Booking
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Ride Sharing
              </Link>
              <Link
                href="/courier"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Food Delivery
              </Link>
              <Link
                href="/couriertwo"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Parcel Delivery
              </Link>
            </div>
          )}

          <button
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 rounded-md"
            onClick={toggleEarn}
          >
            Earn with move
          </button>
          {earnOpen && (
            <div className="ml-4 space-y-2">
              <Link
                href="/earn"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Become a Driver
              </Link>
              <Link
                href="/food"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Become a Food Vendor
              </Link>
              <Link
                href="/delivery"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Become a Delivery Agent
              </Link>
            </div>
          )}

          <Link
            href="/company"
            className="block px-4 py-2 text-black hover:bg-gray-100 rounded-md"
          >
            Company
          </Link>
          <Link
            href="/waitlist"
            className="block bg-black text-white text-center px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
