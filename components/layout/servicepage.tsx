"use client";
import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const ServicesPage = () => {
  const handleButtonClick = (title: string) => {
    console.log(`${title} button clicked`);
  };

  return (
    <div className="min-h-screen bg-black py-16 lg:py-24 px-6  w-screen mt-7 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Move People, Packages & Plates—Faster, Smarter, Happier!
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Why use three apps when one does it all? From wheels to meals,
            we&apos;ve got your world moving!
          </p>
        </div>

        {/* Service Card 1 - Ride Hailing */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Content Section */}
          <div className="flex-1 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              RIDE-HAILING: LIKE A VIP, BUT FOR EVERYONE
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Need wheels? We&apos;ve got jets (metaphorically).
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Why it&apos;s awesome:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    No surge-price surprises
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    ETAs sharper than your barber&apos;s lineup
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    Ride now, pay later (or now—you do you)
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleButtonClick("Ride-Hailing")}
              className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/move-1.png"
                alt="Happy driver in car"
                width={1000}
                height={600}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Service Card 2 - Package Delivery */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Content Section */}
          <div className="flex-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              PACKAGE DELIVERY: YOUR WISH IS OUR COMMAND
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Consider us your personal shipping genie.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Why it&apos;s awesome:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    Pickups faster than a pizza delivery
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    Proof of delivery (with photo or signature)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    Pricing so clear, it&apos;s basically glass
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleButtonClick("Package Delivery")}
              className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:order-1">
            <div className="relative">
              <Image
                src="/images/move-2.png"
                alt="Delivery person with packages"
                width={1000}
                height={600}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Service Card 3 - Food Delivery */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Content Section */}
          <div className="flex-1 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              FOOD DELIVERY: MEALS ON WHEELS
            </h2>
            <p className="text-lg text-white/90 mb-8">
              From kitchen to your door, faster than you can say &quot;I&apos;m
              hungry&quot;.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Why it&apos;s awesome:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    Hot food stays hot, cold food stays cold
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    Real-time tracking from prep to plate
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-left">
                    No minimum orders - even for that midnight snack
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleButtonClick("Food Delivery")}
              className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/move-3.png"
                alt="Food delivery person"
                width={1000}
                height={600}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
