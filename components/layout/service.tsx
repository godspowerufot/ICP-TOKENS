"use client";
import {
  CardData,
  ServiceCardProps,
  ServiceCardsGridProps,
} from "@/utils/interface/interface";
import Image from "next/image";
import { Button } from "../ui/Button";
// Interface for ServiceCard component props

const ServiceCard: React.FC<ServiceCardProps> = ({
  type,
  title,
  description,
  buttonText,
  image,
  backgroundColor,
  onButtonClick,
  className = "",
  style = {},
}) => {
  const isLeft = type === "left";
  const bgColor = isLeft ? "#8B5FBF" : backgroundColor;

  return (
    <div
      className={`rounded-md relative  font-sans  h-fit px-8  pt-8  lg:pt-0 flex items-center gap-8  lg:h-[380px] ${
        isLeft ? "lg:flex-row" : " flex-col  lg:flex-row-reverse"
      } lg:flex-row md:flex-col  flex-col ${className}`}
      style={{ backgroundColor: bgColor, ...style }}
    >
      {/* Content Section */}
      <div className="flex-1 flex flex-col h-[80%] justify-between space-y-6">
        <div>
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
            {title}
          </h2>
          <p className="text-white/90 text-lg  lg:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <Button
          onClick={onButtonClick}
          className="bg-white text-gray-800  font-light py-4 px-8 lg:py-3 lg:px-5 rounded-[5px] bottom-0 relative w-fit text-lg"
        >
          {buttonText}
        </Button>
      </div>
      {/* Phone/Image Section */}
      <div className="flex-1 lg:mt-10 flex justify-center items-center">
        {/* Map Area */}
        {image && (
          <Image
            width={300}
            height={300}
            src={image}
            alt="Map"
            className="w-[350px] h-full  object-cover"
          />
        )}
      </div>
    </div>
  );
};

const ServiceCardsGrid: React.FC<ServiceCardsGridProps> = ({
  cards,
  gridTitle = "",
  gridSubtitle = "",
  gridClassName = "",
}) => {
  const defaultCardData: CardData[] = [
    {
      type: "left",
      title: "Instant Rides, Anytime",
      description:
        "Get reliable transportation in minutes with upfront pricing and live driver tracking.",
      buttonText: "Book a Ride Now",
      backgroundColor: "#8B5FBF",
      image: "/images/map.png",
    },
    {
      type: "right",
      title: "On-Demand Delivery",
      description:
        "Send parcels, documents, or gifts fast—with real-time updates and proof of delivery.",
      buttonText: "Send a Package Today",
      backgroundColor: "#000000",
      image: "/images/map.png",
    },
    {
      type: "right",
      title: "Food Delivery Made Easy",
      description:
        "Order from your favorite restaurants and get fresh meals delivered to your door.",
      buttonText: "Order Food Now",
      backgroundColor: "#2D5A87",
      image: "/images/map.png",
    },
    {
      type: "left",
      title: "Business Solutions",
      description:
        "Scale your business with our enterprise logistics and transportation solutions.",
      buttonText: "Learn More",
      backgroundColor: "#1A4B3A",
      image: "/images/map.png",
    },
  ];

  const cardData = cards || defaultCardData;

  const handleButtonClick = (cardTitle: string) => {
    alert(`${cardTitle} button clicked!`);
  };

  return (
    <div className={`min-h-screen px-8 ${gridClassName}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{gridTitle}</h1>
          <p className="text-xl text-gray-600">{gridSubtitle}</p>
        </div>

        {/* Desktop: 2x2 Grid, Mobile: Single Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              type={card.type}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              backgroundColor={card.backgroundColor}
              image={card.image}
              onButtonClick={() => handleButtonClick(card.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsGrid;
