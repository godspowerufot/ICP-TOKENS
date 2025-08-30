"use client";
import React from "react";
import Image from "next/image";

const MovveHowItWorksComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 lg:py-16 px-6 w-screen lg:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          {/* Left Content Section */}
          <div className="flex-1 lg:order-1">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                How It Works
              </h1>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Apply online → 2. Upload your menu → 3. Start filling orders. We
                handle the rest!
              </p>

              {/* Step 1 */}
              <div className="flex gap-6 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="text-3xl font-bold text-black">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Apply Online
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 5-min form + virtual kitchen tour</li>
                    <li>• Approval in &lt;48 hrs</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="text-3xl font-bold text-black">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Set Up Your Menu
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Upload dishes, photos, and dietary tags</li>
                    <li>• Our team optimizes listings for you</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="text-3xl font-bold text-black">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Start Selling
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Receive pickup alerts when orders arrive</li>
                    <li>• Track drivers like your own delivery team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup Section */}
          <div className="flex-1 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src="/images/how-it-works.png"
              alt="How It Works Phone Mockup"
              width={400}
              height={800}
              className="w-72 lg:w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovveHowItWorksComponent;
