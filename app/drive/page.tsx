"use client";
import Image from "next/image";
import HeroBanner from "@/components/layout/Herobanner";

import React from "react";
import { Check } from "lucide-react";
import MovveRoadmapSection from "@/components/layout/moveroadmap";

import { FileText, Clock, Car } from "lucide-react";

const MovveStartDrivingSection = () => {
  return (
    <div className=" bg-[#7851A91A] py-16 lg:py-12 px-6 w-screen lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            How to Start Driving With Movve
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From application to first fare in as little as 48 hours—here&apos;s
            your roadmap
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Step 1 - Apply Online */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-black">Apply Online</h3>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Fill out basic info: license, vehicle details, contact info
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Consent to instant background check (no drug test required)
                </span>
              </li>
            </ul>
          </div>

          {/* Step 2 - Onboard */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-black">
                Onboard (24-48 Hours)
              </h3>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Receive Movve decal and driver activation kit via email
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete 15-minute safety orientation video</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Upload vehicle inspection form (template provided)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MovveDriveSection = () => {
  const handleButtonClick = (service: string) => {
    console.log(`Learn more about ${service} clicked`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-white py-16 lg:py-24 px-6 w-screen lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Why Drive With Movve?
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Set your own hours, earn on your terms—no shifts, no boss, just you
            in control.
          </p>
        </div>

        {/* Service Card 1 - Earn More, Keep More */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Image Section */}
          <div className="flex-1 lg:order-1">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/images/drive-1.png"
                alt="Happy driver in car"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
              Earn More, Keep More
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                💰 Higher Take-Home Pay
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Keep 75-85% of every fare (vs. 60-70% on other apps)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    100% of tips go straight to you
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Surge zones pay 2-3x during peak demand
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black mb-6 mt-8 flex items-center gap-2">
                📊 Transparent Earnings
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    See fare breakdowns before accepting rides
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    No hidden deductions—know exactly what you&lsquo;ll make
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleButtonClick("Higher Earnings")}
              className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Service Card 2 - Work Life Your Way */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Content Section */}
          <div className="flex-1 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
              Work Life Your Way
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                🛡️ True Flexibility
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Drive whenever you want—no shifts or quotas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Pause earnings instantly for family, side gigs, or breaks
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black mb-6 mt-8 flex items-center gap-2">
                🗺️ Your Territory, Your Rules
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Set favorite neighborhoods to avoid long pickups
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Destination mode for trips heading your way
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleButtonClick("Flexibility")}
              className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:order-2">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/images/drive-2.png"
                alt="Driver in control of their schedule"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Additional Support Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Image Section */}
          <div className="flex-1 lg:order-1">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/images/drive-3.png"
                alt="Driver support and community"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
              Support When You Need It
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                🤝 Driver-First Support
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    24/7 human support—not just chatbots
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Weekly pay with instant cash-out options
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-left">
                    Driver rewards program and fuel discounts
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleButtonClick("Driver Support")}
              className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <>
      <HeroBanner
        bgImage="/images/driver.png"
        title="Drive When You Want, Where You Want"
        subtitle="Be your own boss with Move's rider-friendly platform. Set your hours and control your journey."
        buttonText="Download Now"
        onButtonClick={() => alert("App Download Started!")}
      />
      <MovveDriveSection />
      <MovveStartDrivingSection />
      <MovveRoadmapSection />
    </>
  );
}
