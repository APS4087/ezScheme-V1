// FILE: page.tsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroSection from "@/components/site/landingComponents/HeroSection";
import FeaturesSection from "@/components/site/landingComponents/FeaturesSection";
import PricingSection from "@/components/site/landingComponents/PricingSection";
import FAQSection from "@/components/site/landingComponents/FAQSection";

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = ({ children }) => {
  return (
    <div className="section-wrapper">
      {children}
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const bodyScrollBar = document.querySelector('body');

    gsap.to(bodyScrollBar, {
      scrollTrigger: {
        trigger: bodyScrollBar,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      duration: 1.5,
      ease: 'power1.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper>
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper>
        <PricingSection />
      </SectionWrapper>
      <SectionWrapper>
        <FAQSection />
      </SectionWrapper>
    </>
  );
}