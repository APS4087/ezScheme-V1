// FILE: components/Preloader.tsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const Preloader = () => {
  useEffect(() => {
    const loadingText = new SplitType(".loading-text.initial", { types: "chars" });
    const completeText = new SplitType(".loading-text.complete", { types: "chars" });
    const titleText = new SplitType(".content h1", { types: "chars" });
    const paragraphText = new SplitType(".content p", { types: "chars" });

    gsap.set(".loading-text.complete", { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    gsap.to(loadingText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    });

    const colorStages = [
      { bg: "rgb(0, 0, 0)", text: "rgb(230, 225, 215)" }, // Start with black
      { bg: "rgb(200, 180, 160)", text: "rgb(60, 66, 55)" },
      { bg: "rgb(230, 225, 215)", text: "rgb(60, 66, 55)" },
      { bg: "rgb(100, 110, 90)", text: "rgb(230, 225, 215)" },
      { bg: "rgb(0, 0, 0)", text: "rgb(230, 225, 215)" } // End with black
    ];

    function updateColors(progress: number) {
      const stage = Math.floor(progress / (100 / (colorStages.length - 1)));
      if (stage < colorStages.length) {
        const preloader = document.querySelector(".preloader") as HTMLElement;
        const progressBar = document.querySelector(".progress-bar") as HTMLElement;
        if (preloader) {
          preloader.style.backgroundColor = colorStages[stage].bg;
        }
        if (progressBar) {
          progressBar.style.backgroundColor = colorStages[stage].text;
        }
        document
          .querySelectorAll(".loading-text .char, .percentage")
          .forEach((el) => {
            if (el instanceof HTMLElement) {
              el.style.color = colorStages[stage].text;
            }
          });
      }
    }

    const tl = gsap.timeline();

    tl.to(".progress-bar", {
      width: "100%",
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        const percentage = document.querySelector(".percentage") as HTMLElement;
        if (percentage) {
          percentage.textContent = progress.toString();
        }
        updateColors(progress);
      }
    })
      .to(".loading-text.initial", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(
        ".loading-text.complete",
        {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut"
        },
        "<"
      )
      .to(
        completeText.chars,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.out"
        },
        "<0.2"
      )
      .to(".preloader", {
        y: "-100vh",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.8,
        onComplete: () => {
          document.body.style.overflow = 'auto'; // Enable scrolling
        }
      })
      .set(
        ".content",
        {
          visibility: "visible"
        },
        "-=1"
      )
      .to(
        [titleText.chars, paragraphText.chars],
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.02,
          ease: "power4.out"
        },
        "-=0.5"
      )
      .set(".preloader", {
        display: "none"
      });
  }, []);

  return (
    <div className="preloader fixed top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center z-50">
      <div className="progress-container w-72 h-1 bg-gray-600 mb-5 relative z-10">
        <div className="progress-bar absolute left-0 top-0 h-full w-0 bg-white"></div>
      </div>
      <div className="text-container h-12 relative overflow-hidden my-5 w-48">
        <div className="loading-text initial absolute w-full text-center text-white text-lg uppercase">
          Loading
        </div>
        <div className="loading-text complete absolute w-full text-center text-white text-lg uppercase">
          Complete
        </div>
      </div>
      <div className="percentage fixed bottom-8 right-8 text-white text-6xl opacity-10">0</div>
    </div>
  );
};

export default Preloader;