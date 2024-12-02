// FILE: hooks/useSmoothScroll.ts
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
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
};