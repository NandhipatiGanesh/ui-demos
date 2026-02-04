"use client";

import { useEffect, useRef } from "react";
import { DM_Sans } from "next/font/google";
import { gsap } from "gsap";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FeaturesPersks() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".perk-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          clearProps: "transform",
        },
      );

      const headings = gsap.utils.toArray<HTMLElement>(".reveal");
      gsap.fromTo(
        headings,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          clearProps: "transform",
        },
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const scrollSlider = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = Math.max(slider.clientWidth * 0.8, 280);
    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={dmSans.className}>
      <section className="w-full py-20 bg-white sm:h-[700px] h-[900px] my-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="reveal  text-3xl md:text-4xl font-bold text-gray-900 -tracking-[0.2px]">
            What Makes Our Care Different
          </h2>

          <p className="reveal  text-gray-600 mt-3 max-w-xl mx-auto ">
            Four pillars that guide every consultation, plan, and follow-up.
          </p>

          <div className="relative mt-12 py-10" ref={cardsRef}>
            <div
              id="perks-slider"
              ref={sliderRef}
              className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory px-1 
						md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:items-stretch md:auto-rows-fr
						[scrollbar-width:none] [-ms-overflow-style:none] 
						[&::-webkit-scrollbar]:hidden"
            >
              <div
                className="perk-card cardOne bg-gray-50 rounded-2xl p-6 pt-8 text-center h-full md:h-full flex flex-col
							min-w-[80%] snap-center md:min-w-0 
              transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-center justify-center bg-white mx-auto w-[55px] h-[55px] border border-gray-100 rounded-[16px] my-4">
                  <img
                    src="http://praanavaidya.advaitlabs.com/wp-content/uploads/2026/01/Diagnosis.avif"
                    alt="Diagnosis icon"
                    className="mx-auto w-[32px] h-[32px] object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Diagnosis</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Deep assessment beyond surface symptoms
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  We identify root imbalances using classical methods and modern
                  clinical understanding.
                </p>
              </div>

              <div
                className="perk-card cardTwo bg-gray-50 rounded-2xl p-6 pt-8 text-center h-full md:h-full flex flex-col
							min-w-[80%] snap-center md:min-w-0 
              transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-center justify-center bg-white mx-auto w-[55px] h-[55px] border border-gray-100 rounded-[16px] my-4">
                  <img
                    src="http://praanavaidya.advaitlabs.com/wp-content/uploads/2026/01/Treatment.avif"
                    alt="Treatment icon"
                    className="mx-auto w-[32px] h-[32px] object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Treatment</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Personalized therapies for lasting results
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Each treatment plan aligns body constitution, condition
                  severity, and lifestyle factors.
                </p>
              </div>

              <div
                className="perk-card cardThree bg-gray-50 rounded-2xl p-6 pt-8 text-center h-full md:h-full flex flex-col
							min-w-[80%] snap-center md:min-w-0 
              transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-center justify-center bg-white mx-auto w-[55px] h-[55px] border border-gray-100 rounded-[16px] my-4">
                  <img
                    src="http://praanavaidya.advaitlabs.com/wp-content/uploads/2026/01/Lifestyle.avif"
                    alt="Lifestyle icon"
                    className="mx-auto w-[32px] h-[32px] object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Lifestyle</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Daily habits that restore balance
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  We guide sustainable routines supporting digestion, sleep,
                  immunity, and mental clarity.
                </p>
              </div>

              <div
                className="perk-card cardFour bg-gray-50 rounded-2xl p-6 pt-8 text-center h-full md:h-full flex flex-col
							min-w-[80%] snap-center md:min-w-0 
              transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-center justify-center bg-white mx-auto w-[55px] h-[55px] border border-gray-100 rounded-[16px] my-4">
                  <img
                    src="http://praanavaidya.advaitlabs.com/wp-content/uploads/2026/01/Community.avif"
                    alt="Community icon"
                    className="mx-auto w-[32px] h-[32px] object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">Community</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Healing supported through shared learning
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Our community fosters accountability, education, and
                  collective growth toward wellness.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6 md:hidden">
              <button
                id="slider-prev"
                className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center"
                aria-label="Previous"
                onClick={() => scrollSlider("prev")}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.78 15.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                id="slider-next"
                className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center"
                aria-label="Next"
                onClick={() => scrollSlider("next")}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.22 4.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L11.69 10 7.22 5.53a.75.75 0 0 1 0-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  sm:py-20 bg-[#FFF7F2] py-30 mt-10 hidden">
        <div className="container mx-auto px-6 text-center -mt-[370px] sm:-mt-[300px]">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
            See a quick walkthrough of our approach
          </h3>

          <div className="mt-10 flex justify-center">
            <div className="rounded-2xl bg-black w-full max-w-3xl h-72 md:h-96 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Overview video"
                allowFullScreen
              ></iframe>

              <div className="w-full h-full bg-black"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
