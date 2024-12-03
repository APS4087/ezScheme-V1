// FILE: page.tsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroSection from "@/components/site/landingComponents/HeroSection";
import FeaturesSection from "@/components/site/landingComponents/FeaturesSection";
import PricingSection from "@/components/site/landingComponents/PricingSection";
import FAQSection from "@/components/site/landingComponents/FAQSection";
import AboutSection from "@/components/site/landingComponents/AboutSection";
import Countdown from '@/components/site/landingComponents/Countdown';

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = ({ children, id }) => {
  return (
    <div id={id} className="section-wrapper">
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
      <SectionWrapper id="hero">
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper id="features">
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper id="pricing">
        <PricingSection />
      </SectionWrapper>
      <SectionWrapper id="faq">
        <FAQSection />
      </SectionWrapper>
      <SectionWrapper id="countdown">
        <Countdown />
      </SectionWrapper>
    </>
  );
}