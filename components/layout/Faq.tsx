"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

const faqs = [
  {
    question: "How do I pay for rides in the app?",
    answer:
      "You can pay using your preferred payment method, including credit/debit cards, digital wallets, or in-app credits.",
  },
  {
    question: "Can I schedule rides in advance?",
    answer:
      "Yes, Move lets you schedule rides ahead of time so you’re always on schedule.",
  },
  {
    question: "What if my driver cancels?",
    answer:
      "If your driver cancels, you’ll automatically be matched with the next available driver nearby.",
  },
  {
    question: "Are there ride discounts for new users?",
    answer:
      "Yes, new users often receive promotional discounts when signing up.",
  },
  {
    question: "How does Move ensure driver safety?",
    answer:
      "All drivers are background-checked, trained, and monitored through real-time safety features.",
  },
  {
    question: "Is Move available in my city?",
    answer:
      "Move is expanding rapidly. Check the app to see availability in your city.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="  bg-white w-screen">
      <div className="  text-white lg:px-16 py-10  p-6 bg-black mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
          Got Questions? We’ve Got Answers
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Everything you need to know before you download and ride.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-gray-400 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary font-sans text-white h-[30em] p-4 flex flex-col justify-center items-center m-3 lg:p-[8rem] lg:m-[4rem]  rounded-md text-center">
        <h2 className="text-3xl lg:text-6xl font-bold mb-2">
          Turn Your Vehicle Into a Reliable Income Stream
        </h2>
        <p className="mb-4 text-base lg:text-xl ">
          Join our platform today and start earning effortlessly.
        </p>
        <Button className="bg-white font-light text-primary px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          start Driving today
        </Button>
      </div>
    </section>
  );
}
