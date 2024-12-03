// FILE: components/PricingSection.tsx
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constanst";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PricingSection() {
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
        Choose your plans
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8">
        Explore our plans and pricing options to get started on simplifying access to government schemes today!
      </p>
      <div className="flex justify-center gap-8 flex-wrap mt-6">
        {pricingCards.map((card, index) => (
          <motion.div
            key={card.title}
            className="w-full sm:w-[500px] flex flex-col justify-between"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <Card className={clsx('flex flex-col justify-between', {'border-2 border-violet-600' : card.title === 'Premium Plan',})}>
              <CardHeader>
                <CardTitle className={clsx('', {'text-muted-foreground' : card.title !== 'Premium Plan',})}>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/{card.duration}</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/agency?plan=${card.priceId}`} className={clsx('w-full text-center bg-violet-600 p-2 rounded-md', {'!bg-muted-foreground' : card.title === 'Premium Plan',})}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}