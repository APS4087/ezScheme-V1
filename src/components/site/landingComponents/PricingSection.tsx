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

  return (
    <motion.section
      ref={ref}
      className="flex justify-center items-center flex-col gap-4 md:mt-40 z-20 pt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl text-center">Choose your plans</h2>
      <p className="text-muted-foreground text-center">
        Explore our plans and pricing options to get started on simplifying access to government schemes today!
      </p>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {'border-2 border-violet-600' : card.title === 'Unlimited Saas',})}>
            <CardHeader>
              <CardTitle className={clsx('', {'text-muted-foreground' : card.title !== 'Unlimited Saas',})}>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">/month</span>
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
              <Link href={`/agency?plan=${card.priceId}`} className={clsx('w-full text-center bg-violet-600 p-2 rounded-md', {'!bg-muted-foreground' : card.title === 'Unlimited Saas',})}>
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}