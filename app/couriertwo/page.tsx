"use client";
import React from "react";
import { Check } from "lucide-react";

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
            Reach Thousands of Hungry Customers— No Delivery Hassle{" "}
          </h1>
          <p className="text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Join Move’s restaurant network and boost sales with our reliable
            delivery fleet and marketing support.{" "}
          </p>
          <button
            onClick={handleBecomeACourier}
            className="bg-black text-white font-semibold lg:py-4 lg:px-8 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-lg"
          >
            List Your Restaurant
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <Image
          src="/images/couriertwo.png"
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
            <h2 className="text-2xl lg:text-5xl font-bold text-black mb-6">
              Why Partner With Move? (3-Point Grid)
            </h2>
            <p className="text-sm lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Grow your customer base without the overhead—let Move handle
              delivery while you focus on great food.
            </p>
          </div>

          {/* Content Section with Image and Benefits */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Image Section */}
            <div className="flex-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/couriertwoone.png"
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
                    More Orders, Less Work{" "}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-9">
                  <li>
                    • 30% avg. sales increase for partnersWe handle delivery
                  </li>
                  <li>• logistics so you can focus on cooking.</li>
                </ul>
              </div>

              {/* Total Flexibility */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Fair Pricing
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-9">
                  <li>
                    • Low 15% commission feeKeep more profits vs. other apps (no
                    hidden charges).
                  </li>
                </ul>
              </div>

              {/* Easy Payouts */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Marketing Boost
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-9">
                  <li>
                    • Featured in-app promotionsGet spotlighted to 50K+ local
                    food lovers monthly.
                  </li>
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
