"use client";

import HeroSection from "@/components/layout/AppHearder";
import FAQSection from "@/components/layout/Faq";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
export default function Page() {
  return (
    <main className="max-w-screen overflow-x-hidden flex flex-col justify-center">
      <HeroSection
        title="Delivery at Ride-Hailing Speed"
        subtitle="On-demand couriers deliver packages across town in minutes, not days. No queues, no paperwork, just reliable delivery."
        imageSrc="/images/header-4.png"
      />
      <div className="max-w-7xl lg:-mb-[4.5rem] text-black mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
          Delivery That Works How You Work{" "}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          From urgent documents to scheduled shipments—we’ve got your back with
          speed and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex w-full  bg-primary rounded-xl items-center flex-col gap-6">
            <Image
              src="/images/screen-1.png" // placeholder
              alt="Ride Options"
              width={500}
              height={400}
              className="object-cover  w-full lg:w-[300px] h-[300px]"
            />
            <div className=" text-white rounded-xl  p-6 flex flex-col items-center justify-between">
              <h3 className="text-xl  lg:text-4xl font-bold mb-4">
                Lightning Fast
              </h3>
              <p className="mb-6 text-center">
                90% of deliveries completed same-day&quot;From documents to
                dumbbells—we move it fast{" "}
              </p>
              <Button className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </Button>
            </div>

            {/* Card with Image */}
          </div>

          {/* Card 2 */}
          <div className="flex w-full  bg-black rounded-lg  items-center flex-col  gap-6">
            <div className=" text-white rounded-xl pt-6 px-6 flex flex-col justify-between">
              <h3 className="text-xl  lg:text-4xl text-center font-bold mb-4">
                Flexible & Secure Payments
              </h3>
              <p className="mb-6 text-center">
                Pay with cash, card, or mobile wallet—all transactions are
                encrypted for safety.
              </p>
              <Button className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </Button>
            </div>

            {/* Card with Image */}
            <Image
              src="/images/screen-2.png" // placeholder
              alt="Ride Options"
              width={500}
              height={400}
              className="object-cover  w-full mt-[3rem] lg:w-[300px] h-[300px]"
            />
          </div>
          {/* card-3 */}
          <div className="flex w-full  bg-primary items-center rounded-lg flex-col gap-6">
            <Image
              src="/images/screen-3.png" // placeholder
              alt="Ride Options"
              width={500}
              height={400}
              className="object-cover  w-full lg:w-[300px] h-[300px]"
            />{" "}
            <div className=" text-white  text-center rounded-xl  p-6 flex flex-col justify-between">
              <h3 className="text-xl lg:text-4xl font-bold mb-4">
                No Size Games
              </h3>
              <p className="mb-6">
                Priced by urgency, not weightSmall box? Pay for small. No sneaky
                oversized fees.
              </p>
              <Button className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </Button>
            </div>
            {/* Card with Image */}
          </div>
        </div>
      </div>
      <FAQSection />
    </main>
  );
}
