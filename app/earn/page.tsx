import Image from "next/image";
import bgImage from "@/public/images/header-2.png"; // replace with your background image
import FAQSection from "@/components/layout/Faq";

function RideSection() {
  return (
    <section className="w-full bg-white text-black">
      {/* Pick Your Perfect Ride */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
          Pick Your Perfect Ride
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          From budget-friendly to luxury, we’ve got wheels for every need—all in
          the app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="flex w-full  bg-primary rounded-lg flex-col md:flex-row gap-6">
            <div className=" text-white rounded-xl  p-6 flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">Go Basic</h3>
              <p className="mb-6">
                Fast, affordable rides with upfront pricing. Perfect for your
                daily commute or last-minute plans.
              </p>
              <button className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>

            {/* Card with Image */}
            <Image
              src="/images/samsung.png" // placeholder
              alt="Ride Options"
              width={500}
              height={400}
              className="object-cover  w-full lg:w-[300px] h-[300px]"
            />
          </div>

          {/* Card 2 */}
          <div className="flex w-full  bg-black rounded-lg flex-col md:flex-row gap-6">
            <div className=" text-white rounded-xl  p-6 flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">Go Comfort</h3>
              <p className="mb-6">
                Luxury vehicles with top-rated drivers. Ideal for business
                travel or when you want to treat yourself.
              </p>
              <button className="bg-white text-primary font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>

            {/* Card with Image */}
            <Image
              src="/images/samsung.png" // placeholder
              alt="Ride Options"
              width={500}
              height={400}
              className="object-cover  w-full lg:w-[300px] h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Get Moving in Minutes */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
          Get Moving in Minutes
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Three simple steps to your destination: Download, Request, and Go!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl h-fit items-center">
          {/* Left Image */}
          <Image
            src="/images/move-4.png" // placeholder
            alt="Woman in car"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />

          {/* Right Steps */}
          <div className="bg-primary text-white h-full p-8 space-y-18">
            {/* Step 1 */}
            <div className="flex items-start  space-x-4">
              <div className="w-10 h-10  lg:text-4xl lg:w-18 lg:h-18 flex items-center justify-center bg-white text-primary font-bold rounded-md">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-3xl">Download</h4>
                <p className="text-gray-200">
                  Get the app in under 30 seconds.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10  lg:text-4xl lg:w-18 lg:h-18 flex items-center justify-center bg-white text-primary font-bold rounded-md">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lg  lg:text-3xl">
                  Set Your Destination
                </h4>
                <p className="text-gray-200">
                  Enter where you’re headed—or pick from saved spots.
                </p>
              </div>
               
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10  lg:text-4xl lg:w-18 lg:h-18 flex items-center justify-center bg-white text-primary font-bold rounded-md">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-3xl">
                  Ride & Relax
                </h4>
                <p className="text-gray-200">
                  Track your driver in real-time with live ETA.
                </p>
              </div>
            </div>

            <button className="bg-white text-primary font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Download the App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[80vh] flex items-center">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Ride background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(270.95deg,rgba(0,0,0,0)_48.62%,#000000_84.43%)]"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl px-6 lg:px-12 text-white">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Your Ride, Your Way— <br /> Download to Get Moving!
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-xl">
            Skip the wait and surge pricing. Reliable rides at upfront prices,
            only on the Move App.
          </p>
          <button className="bg-white text-black font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition-colors">
            Download Now
          </button>
        </div>
      </div>
      <RideSection />
      <FAQSection />
    </>
  );
}
