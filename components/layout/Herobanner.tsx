"use client";

import Image from "next/image";

interface HeroBannerProps {
  bgImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function HeroBanner({
  bgImage,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: HeroBannerProps) {
  return (
    <div className="relative w-full h-[80vh] flex items-center">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(270.95deg,rgba(0,0,0,0)_48.62%,#000000_84.43%)]"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl px-6 lg:px-12 text-white">
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-xl">
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          className="bg-white text-black font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
