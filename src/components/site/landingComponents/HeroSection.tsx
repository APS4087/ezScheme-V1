// FILE: components/HeroSection.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="h-full w-full pt-44 relative flex items-center justify-center flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      <p className="text-center text-4xl md:text-6xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Simplifying Access to Government Schemes
      </p>
      <div className="bg-gradient-to-r from-violet-600 to-secondary-foreground text-transparent bg-clip-text relative">
        <h1 className="text-4xl md:text-9xl font-bold text-center md:text-[310px]">ezScheme</h1>
      </div>
      <div className="flex justify-center items-center relative md:mt-[-80px]">
        <Image src={"/assets/demo.png"} alt="Preview image" width={1200} height={1200} className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted" />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>
    </motion.section>
  );
}