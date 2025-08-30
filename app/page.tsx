"use client";
import HeroSection from "@/components/layout/AppHearder";
import ServiceCardsGrid from "@/components/layout/service";
import ServicesPage from "@/components/layout/servicepage";
import MobileAppLanding from "@/components/layout/servicetwo";
import React, { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import WhatsMovingCarousel from "@/components/layout/carousel";
interface Tab {
  id: string;
  label: string;
}

interface Content {
  title: string;
  subtitle: string;
  benefits: string[];
  buttonText: string;
  image: string;
}

interface ContentMap {
  [key: string]: Content;
}

const EarnMore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("driver");

  const tabs: Tab[] = [
    { id: "driver", label: "Driver" },
    { id: "couriers", label: "Couriers" },
    { id: "food-vendors", label: "Food Vendors" },
  ];

  const content: ContentMap = {
    driver: {
      title: "Turn Your Car Into a Money Machine",
      subtitle: "Why Partner With Us?",
      benefits: [
        "Higher Earnings: Keep up to 85% of fares + tips",
        "Flexible Hours: Work mornings, nights, or weekends—you control your schedule",
        "Zero Surprise Costs: No rental fees or hidden deductions",
        "Safety First: In-app SOS button and 24/7 support",
      ],
      buttonText: "Start Driving Today",
      image: "/api/placeholder/600/400",
    },
    couriers: {
      title: "Deliver Packages, Earn Money",
      subtitle: "Why Choose Courier Work?",
      benefits: [
        "Competitive Pay: Earn per delivery with bonus opportunities",
        "Flexible Schedule: Choose your own working hours",
        "No Vehicle Required: Use bike, motorcycle, or car",
        "Quick Payments: Get paid weekly or instantly",
      ],
      buttonText: "Start Delivering Today",
      image: "/api/placeholder/600/400",
    },
    "food-vendors": {
      title: "Grow Your Food Business",
      subtitle: "Why List Your Restaurant?",
      benefits: [
        "Increase Revenue: Reach thousands of hungry customers",
        "Easy Setup: Get listed in minutes with our simple process",
        "Marketing Support: Featured listings and promotional tools",
        "Real-time Orders: Instant notifications and order management",
      ],
      buttonText: "Join as Vendor",
      image: "/api/placeholder/600/400",
    },
  };

  const currentContent = content[activeTab];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Earn More, Work Smarter,
            <br />
            Grow Faster
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you drive, deliver, or serve food—we&apos;re your shortcut
            to steady income and happy customers.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border max-w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:text-primary hover:bg-purple-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {activeTab === "driver" && (
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 relative">
                  {/* Simulated car interior with driver */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="text-6xl">🚗</div>
                  </div>
                </div>
              )}

              {activeTab === "couriers" && (
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-300 to-blue-400 relative flex items-center justify-center">
                  <div className="text-8xl">📦</div>
                  <div className="absolute bottom-8 right-8">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <div className="text-2xl">✓</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "food-vendors" && (
                <div className="w-full h-96 lg:h-[500px]  relative flex items-center justify-center">
                  <Image
                    src="/images/move-3.png"
                    alt="Food delivery person"
                    width={1000}
                    height={600}
                    className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {currentContent.title}
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {currentContent.subtitle}
              </h3>

              <ul className="space-y-4 mb-8">
                {currentContent.benefits.map(
                  (benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  )
                )}
              </ul>

              <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                {currentContent.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden flex flex-col justify-center">
      <HeroSection
        title="Ride Smarter, Deliver Faster – All in One App"
        subtitle="Book affordable rides or send packages instantly with real-time tracking and transparent pricing."
        imageSrc="/images/header-1.png"
      />
      <section className="bg-gray-50  pt-5 flex flex-col justify-center items-center font-sans md:py-16 w-full">
        <h1 className="text-black font-bold text-[2em] md:text-5xl text-md">
          Why choose Move App?
        </h1>
        <h2 className="text-[#6C757D]  mt-1 md:mt-3 text-sm">
          Rides that save time. Deliveries that save effort.
        </h2>
        <ServiceCardsGrid />
        <ServicesPage />
        <MobileAppLanding />
        <EarnMore />
        <WhatsMovingCarousel />
      </section>
    </main>
  );
}
