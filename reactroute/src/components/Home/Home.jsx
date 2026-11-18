import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <section className="relative py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Download Now
        </h1>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-orange-700 text-white rounded-lg hover:opacity-80"
        >
          Download
        </Link>
      </section>

      <div className="grid place-items-center mt-20">
        <img
  src="https://images.unsplash.com/photo-1527430253228-e93688616381"
  alt="demo"
  className="w-48 sm:w-96"
/>

      </div>

      <h2 className="text-center text-2xl sm:text-4xl py-12 font-medium">
        Lorem Ipsum Yojo
      </h2>
    </div>
  );
}
