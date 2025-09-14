"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const MovveWaitlistComponent = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Show modal immediately when page mounts
  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleSubmit = async () => {
    if (email.trim()) {
      try {
        const { data, error } = await supabase
          .from("waitlist")
          .insert([{ email }]);

        if (error) throw error;
        console.log("Submitted:", data);
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
          setShowModal(false); // close modal after success
        }, 3000);
      } catch (error) {
        console.error("Error submitting:", error);
      }
    }
  };

  return (
    <>
      {/* Modal Backdrop */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#000000b5] backdrop-blur-2xl bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Main Heading */}
            <h1 className="text-2xl lg:text-4xl font-bold text-black mb-4 leading-tight text-center">
              Be first in line for our launch—
              <br />
              exclusive perks await early joiners.
            </h1>

            {/* Subheading */}
            <p className="text-sm lg:text-lg text-gray-600 max-w-md mx-auto leading-relaxed mb-8 text-center">
              Think of this as cutting the virtual line. First in = first to
              ride, first to save, and first to brag about it to friends.
            </p>

            {/* Email Form */}
            <div className="w-full flex justify-center items-center">
              <div className="flex flex-col lg:w-[470px] sm:flex-row gap-0 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
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
              <p className="mt-6 text-green-600 font-medium text-center">
                🎉 You&apos;re on the list! We&lsquo;ll notify you when Movve
                launches.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovveWaitlistComponent;
