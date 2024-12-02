// FILE: components/FeaturesSection.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="flex justify-center items-center flex-col gap-8 md:mt-40 z-20 pt-10 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-6xl font-semibold text-gray-700 dark:text-gray-300 text-center mb-4">
        Features of ezScheme
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8">
        ezScheme simplifies access to government schemes by consolidating information and tailoring it to individual needs.
      </p>
      <div className="flex justify-center gap-8 flex-wrap mt-6">
        <motion.div
          className="w-full sm:w-[500px] flex flex-col justify-between"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Personalized Video Content</CardTitle>
              <CardDescription>Get personalized video content tailored to your needs.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <video width="500" height="281" autoPlay loop muted playsInline>
                <source src="/assets/videoGenerationDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="w-full sm:w-[500px] flex flex-col justify-between"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Virtual Assistant</CardTitle>
              <CardDescription>Ask detailed queries and get instant responses.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <video width="500" height="281" autoPlay loop muted playsInline>
                <source src="/assets/virtualAssitantDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="w-full sm:w-[500px] flex flex-col justify-between"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Engine</CardTitle>
              <CardDescription>Identify relevant schemes based on your input.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <video width="500" height="281" autoPlay loop muted playsInline>
                <source src="/assets/recommendationDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}