"use client";
import React from "react";
import { Check } from "lucide-react";

// Mock Next.js Image component for this environment
import Image from "next/image";
import MovveHowItWorksComponent from "@/components/layout/howitworks";

const MovveDeliveryPage = () => {
  const handleBecomeACourier = () => {
    console.log("Become a courier clicked");
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[22px] text-center lg:text-6xl font-bold text-black mb-6 leading-tight">
            Earn on Your Schedule— Deliver Anything, Anywhere
          </h1>
          <p className="text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Use what you&lsquo;ve got! Deliver by bike, car, or scooter and earn
            on your terms. Our smart routing ensures you maximize earnings
            whether you&lsquo;re covering short hops or longer hauls
          </p>
          <button
            onClick={handleBecomeACourier}
            className="bg-black text-white font-semibold lg:py-4 lg:px-8 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-lg"
          >
            Become a courier
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <Image
          src="/images/courier.png"
          alt="Delivery person handing package to customer"
          width={1200}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Why Deliver Section */}
      <div className="bg-white py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Why Deliver With Move?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Deliver on your schedule—no shifts, no quotas, just open the app
              when you&apos;re ready to work
            </p>
          </div>

          {/* Content Section with Image and Benefits */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Image Section */}
            <div className="flex-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/courier-2.png"
                  alt="Happy delivery person with packages"
                  width={600}
                  height={700}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="flex-1 lg:order-2">
              {/* Higher Earnings */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Higher Earnings
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-9">
                  <li>• Keep 80% of delivery fees + 100% tips</li>
                  <li>• Surge pricing during peak hours</li>
                </ul>
              </div>

              {/* Total Flexibility */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Total Flexibility
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-9">
                  <li>• Work mornings, nights, or weekends</li>
                  <li>• Accept only orders you want</li>
                </ul>
              </div>

              {/* Easy Payouts */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Easy Payouts
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-9">
                  <li>• Cash out daily for a $1 fee</li>
                  <li>• Free weekly bank deposits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovveHowItWorksComponent />
    </div>
  );
};

export default MovveDeliveryPage;
