// FILE: components/FAQSection.tsx
'use client';

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "What is ezScheme?",
    answer: "ezScheme is a solution that simplifies access to government schemes by consolidating information and tailoring it to individual needs.",
  },
  {
    question: "How does the recommendation engine work?",
    answer: "The recommendation engine identifies relevant schemes based on user input and provides personalized suggestions.",
  },
  {
    question: "What features does ezScheme offer?",
    answer: "ezScheme offers personalized video content, a virtual assistant for detailed queries, and a recommendation engine to identify relevant schemes.",
  },
  {
    question: "What are the future enhancements?",
    answer: "Future enhancements include smarter scheme recommendations, topic-based model questions, saved business context, and predictive scheme relevance.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={ref}
      className="flex justify-center items-center flex-col gap-4 md:mt-40 z-20 pt-10 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-gray-300 text-center mb-4">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4 mt-6 w-full max-w-2xl">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              {activeIndex === index ? (
                <ChevronUp className="text-gray-700 dark:text-gray-300" />
              ) : (
                <ChevronDown className="text-gray-700 dark:text-gray-300" />
              )}
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="text-muted-foreground mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}