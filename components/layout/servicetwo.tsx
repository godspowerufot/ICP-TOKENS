import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
const MobileAppLanding = () => {
  return (
    <div className="min-h-screen w-screen  bg-[#7851A9] relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="relative z-10 container mx-auto px-4 pt-12">
        {/* Header Content */}
        <div className="text-center ">
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your World, On the Move - Rides,
            <br />
            Deliveries & Meals Made Simple
          </h1>
          <p className="text-sm md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
            We&apos;re not just an app. We&apos;re your shortcut to hassle-free
            living.
          </p>

          {/* Download Buttons */}
          <div className="flex w-full justify-center item-center space-x-4">
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

        {/* Phone Mockups */}

        <Image
          src="/images/phone-1.png"
          alt="Logo"
          width={500}
          height={500}
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  );
};

export default MobileAppLanding;
