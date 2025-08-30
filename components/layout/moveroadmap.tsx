import React from "react";
import Image from "next/image";

const MovveRoadmapSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-14 px-6 w-screen lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-between gap-8 lg:gap-16">
          {/* Left Content Section */}
          <div className="flex-1 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              From first ride to daily earnings—your roadmap to success
            </h1>

            {/* Step 1 */}
            <div className="flex  flex-col lg:flex-row gap-6 mb-10">
              <div className="flex-shrink-0">
                <div className="w-[5em] h-[5em] bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                  Sign Up & Go Online
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• 5-minute application</li>
                  <li>• Instant background check</li>
                  <li>• Start driving in &lt;48 hrs</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex  flex-col lg:flex-row gap-6 mb-10">
              <div className="flex-shrink-0">
                <div className="w-[5em] h-[5em] bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                  Accept Rides & Earn
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• See fares upfront</li>
                  <li>• Choose rides that fit your schedule</li>
                  <li>• Track earnings in real-time</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex  flex-col lg:flex-row gap-6 mb-10">
              <div className="flex-shrink-0">
                <div className="w-[5em] h-[5em] bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                  Get Paid Your Way
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Cash out daily or weekly</li>
                  <li>• Keep 75-85% of every fare + tips</li>
                  <li>• Earn bonuses for top ratings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup Section */}
          <div className="flex-1  lg:bg-primary rounded-xl  h-full lg:order-2 flex justify-center">
            <Image
              src="/images/ph-1.png"
              alt="Driver using app"
              width={400}
              height={800}
              className=" lg:w-96 lg:h-[40em] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovveRoadmapSection;
