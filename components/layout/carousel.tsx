import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhatsMovingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Welcome 500+ New Move Partners This Month!",
      description:
        "Our driver and courier network just grew by 30%! Meet Maria, a former teacher who now earns 2X more with Move's flexible schedules. 'I choose my hours and still make rent early.'",
    },
    {
      id: 2,
      title: "Welcome 500+ New Move Partners This Month!",
      description:
        "Our driver and courier network just grew by 30%! Meet Maria, a former teacher who now earns 2X more with Move's flexible schedules. 'I choose my hours and still make rent early.'",
    },
    {
      id: 3,
      title: "Welcome 500+ New Move Partners This Month!",
      description:
        "Our driver and courier network just grew by 30%! Meet Maria, a former teacher who now earns 2X more with Move's flexible schedules. 'I choose my hours and still make rent early.'",
    },
    {
      id: 4,
      title: "Welcome 500+ New Move Partners This Month!",
      description:
        "Our driver and courier network just grew by 30%! Meet Maria, a former teacher who now earns 2X more with Move's flexible schedules. 'I choose my hours and still make rent early.'",
    },
  ];

  const testimonials = [
    {
      name: "Alex T.",
      text: "I've tried every app—Move is the only one where drivers actually show up on time. My 8AM meetings thank you!",
      rating: 5,
    },
    {
      name: "Alex T.",
      text: "I've tried every app—Move is the only one where drivers actually show up on time. My 8AM meetings thank you!",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen  w-screen ">
      {/* What's Moving Section */}
      <div className="w-screen py-12 lg:px-8 bg-[#7951a922] mx-auto mb-16">
        <div className="flex max-w-7xl px-4 justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              What&apos;s Moving?
            </h1>
            <p className="text-gray-600">
              The latest features, partnerships, and wins powering your world.
            </p>
          </div>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-3  transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative  max-w-7xl  overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white rounded-lg overflow-hidden h-full">
                  {/* Placeholder Image */}
                  <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Image Placeholder</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {card.description}
                    </p>
                    <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center lg:flex-row flex-col mt-6 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2  transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2  transition-shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Don&apos;t take our word for it—here&apos;s what our community says!
        </h2>
        <p className="text-gray-600 mb-12">
          5,000+ five-star reviews and counting...
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 ">
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-2">
                {testimonial.name}
              </h4>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic">{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsMovingCarousel;
