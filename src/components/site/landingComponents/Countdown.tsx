// FILE: components/Countdown.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const calculateTimeLeft = () => {
  const difference = +new Date('2025-01-01') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <motion.div
        key={interval}
        className="flex flex-col items-center p-4 border border-primary/20 rounded-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-violet-600 to-secondary-foreground bg-clip-text text-transparent">
          {timeLeft[interval]}
        </span>
        <span className="text-sm md:text-lg uppercase tracking-widest text-muted-foreground mt-2">
          {interval}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-600 to-secondary-foreground bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Coming Soon
      </motion.h1>
      <motion.p 
        className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We are working hard to bring you the best experience. Stay tuned!
      </motion.p>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
      </motion.div>
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="mailto:info@ezscheme.com" className="bg-violet-600 text-white py-3 px-6 rounded-full hover:bg-primary-dark transition">
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}