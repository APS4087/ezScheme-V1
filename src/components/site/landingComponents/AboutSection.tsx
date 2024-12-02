// FILE: components/AboutSection.tsx
'use client';

import Paragraph from "./Paragraph";

export default function AboutSection() {
  const paragraph = "ezScheme is a solution that simplifies access to government schemes by consolidating information and tailoring it to individual needs. Our platform features personalized video content, a virtual assistant for detailed queries, and a recommendation engine to identify relevant schemes based on user input.";

  return (

    <section className="flex justify-center items-center flex-col gap-8 md:mt-40 z-20 pt-10 px-4">
      <h2 className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-gray-300 text-center mb-4">
        About ezScheme
      </h2>
      <div className="my-24">
        <div style={{ height: "10vh" }}></div>  {/* Spacer before paragraph */}
        <Paragraph paragraph={paragraph} />
        <div style={{ height: "10vh" }}></div>  {/* Spacer after paragraph */}
      </div>
    </section>

  );
}