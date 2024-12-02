// FILE: components/FAQSection.tsx
'use client'; 

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="flex justify-center items-center flex-col gap-4 md:mt-40 z-20 pt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl text-center">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4 mt-6 w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">What is ezScheme?</h3>
          <p className="text-muted-foreground">
            ezScheme is a solution that simplifies access to government schemes by consolidating information and tailoring it to individual needs.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">How does the recommendation engine work?</h3>
          <p className="text-muted-foreground">
            The recommendation engine identifies relevant schemes based on user input and provides personalized suggestions.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">What features does ezScheme offer?</h3>
          <p className="text-muted-foreground">
            ezScheme offers personalized video content, a virtual assistant for detailed queries, and a recommendation engine to identify relevant schemes.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">What are the future enhancements?</h3>
          <p className="text-muted-foreground">
            Future enhancements include smarter scheme recommendations, topic-based model questions, saved business context, and predictive scheme relevance.
          </p>
        </div>
      </div>
    </motion.section>
  );
}