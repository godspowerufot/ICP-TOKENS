"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4 text-center">
      {/* Header */}
      <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8 leading-relaxed">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </main>
  );
}
