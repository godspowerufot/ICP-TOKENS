"use client";
import MobileAppLanding from "@/components/layout/servicetwo";
import React, { useState } from "react";

const MovveWaitlistComponent = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (email.trim()) {
      try {
        const response = await fetch(
          "https://68bb246484055bce63f14b39.mockapi.io/api/email",
          {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const result = await response.json();
        console.log("Submitted:", result);

        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 3000);
      } catch (error) {
        console.error("Error submitting:", error);
      }
    }
  };

  return (
    <>
      <div className=" bg-white flex items-center justify-center py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-2xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Be first in line for our launch—
            <br />
            exclusive perks await early joiners.
          </h1>

          {/* Subheading */}
          <p className="text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Think of this as cutting the virtual line. First in = first to ride,
            first to save, and first to brag about it to friends.
          </p>

          {/* Email Form */}
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-0 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-500 border-none outline-none text-lg"
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="bg-black text-white font-semibold py-4 px-8 hover:bg-gray-800 transition-colors text-lg disabled:bg-gray-600"
              >
                {isSubmitted ? "Added!" : "Join Waitlist"}
              </button>
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <p className="mt-6 text-green-600 font-medium">
              🎉 You&apos;re on the list! We&lsquo;ll notify you when Movve
              launches.
            </p>
          )}
        </div>
      </div>
      <MobileAppLanding />
    </>
  );
};

export default MovveWaitlistComponent;
