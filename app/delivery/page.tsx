"use client";

import HeroSection from "@/components/layout/AppHearder";
import FAQSection from "@/components/layout/Faq";
import MobileAppLanding from "@/components/layout/servicetwo";
import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-screen overflow-x-hidden flex flex-col justify-center">
      <HeroSection
        title="Restaurant Food at Ride-Hailing Speed"
        subtitle="Skip the lines and cold fries—get fresh meals from top local spots delivered in under 30 minutes."
        imageSrc="/images/header-3.png"
      />

      <div className="max-w-screen mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl h-fit items-center">
          {/* Left Background with Gradient */}
          <div className="relative w-full h-[500px] md:h-full rounded-xl overflow-hidden">
            {/* Background Image */}
            <Image
              src="/images/delivery.png"
              alt="Woman in car"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(270.95deg,rgba(0,0,0,0)_48.62%,#000000_84.43%)]"></div>
          </div>

          {/* Right Steps */}
          <div className="bg-white text-black h-full p-8 space-y-18">
            {/* Step 1 */}
            <h1 className="text-3xl lg:text-4xl font-bold ">
              {" "}
              Find favorites, order fast, track live—all in the app
            </h1>

            <div className="flex  items-start space-x-4">
              <div className="w-10 h-10 lg:text-4xl lg:w-18 lg:h-18 flex items-center justify-center bg-white text-black font-bold rounded-md">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-3xl">Download</h4>
                <p className="text-[#6C757D]">
                  Get the app in under 30 seconds.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 lg:text-4xl lg:w-18 lg:h-18 flex items-center justify-center bg-white text-black font-bold rounded-md">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-3xl">
                  Set Your Destination
                </h4>
                <p className="text-[#6C757D]">
                  Enter where you’re headed—or pick from saved spots.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 lg:text-4xl lg:w-18 lg:h-18 flex items-center justify-center bg-white text-black font-bold rounded-md">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-3xl">
                  Ride & Relax
                </h4>
                <p className="text-[#6C757D]">
                  Track your driver in real-time with live ETA.
                </p>
              </div>
            </div>

            <button className="bg-black text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Download the App
            </button>
          </div>
        </div>
      </div>
      <MobileAppLanding />
      <FAQSection />
    </main>
  );
}
