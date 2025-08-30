import Image from "next/image";
import { Button } from "../ui/Button";
import { HeroSectionProps } from "@/utils/interface/interface";

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center place-items-center">
        {/* Left Content */}
        <div className="lg:-mt-[8rem]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">{subtitle}</p>

          {/* App Store Buttons */}
          <div className="mt-6 flex space-x-4">
            <div className="flex  text-lg space-x-4">
              <Button className="flex   items-center text-sm lg:font-base px-5 py-3 bg-black text-white rounded-lg space-x-2">
                <Image
                  src={"/logo/apple-whitw.svg"}
                  width={20}
                  alt="
                       Apple Logo"
                  height={20}
                  className="w-5 h-5"
                />
                <span>Get the app</span>
              </Button>
              <Button className="flex items-center text-sm lg:text-base px-5 py-3 bg-black text-white rounded-lg space-x-2">
                <Image
                  src={"/logo/playstore-white.svg"}
                  width={20}
                  alt="
                       playstore Logo"
                  height={20}
                  className="w-5 h-5 text-white"
                />
                <span>Get the app</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center  ml-8 md:ml-0 md:justify-end">
          <Image
            src={imageSrc}
            alt="App preview"
            width={500}
            height={700}
            className="object-contain lg:w-full lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
}
