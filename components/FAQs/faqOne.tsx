"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  {
    question: "When can I see/measure effects?",
    answer:
      "Consistent and correct usage is very important. Generally speaking after 3-4 weeks of use, you should be able to track the difference of the relevant biomarker for you. Contact us for more information.",
  },
  {
    question: "What is the difference between red light and NIR light?",
    answer:
      "Red light (630-660nm) is visible and primarily benefits the skin's surface, while Near-Infrared (NIR) light (810-850nm) is invisible and penetrates deeper into tissues, muscles, and joints for recovery and inflammation reduction.",
  },
  {
    question: "Is red light an alternative to sunlight?",
    answer:
      "Red light therapy is not a direct replacement for sunlight, but it provides specific wavelengths that offer targeted benefits without UV exposure. It can complement your natural light intake, especially during winter months.",
  },
  {
    question:
      "Why does it look like that the LEDs are switched off in the NIR setting?",
    answer:
      "Near-Infrared light operates at wavelengths beyond the visible spectrum (810-850nm), so it appears dim or invisible to the human eye. The LEDs are fully active — you may notice a faint red glow, but the therapeutic light is being emitted.",
  },
  {
    question: "How long should each session last?",
    answer:
      "We recommend 10-20 minutes per treatment area per session. Start with shorter sessions and gradually increase. For best results, maintain a consistent routine of 3-5 sessions per week.",
  },
  {
    question: "Can I use red light therapy with other treatments?",
    answer:
      "Yes, red light therapy can be safely combined with most skincare routines and wellness practices. However, avoid using it immediately after photosensitising treatments. Consult your healthcare provider if you are on medication that increases light sensitivity.",
  },
];

export default function FaqOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);

  const setContentRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      contentRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === 0) {
        gsap.set(el, { height: "auto", opacity: 1 });
      } else {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });
  }, []);

  const toggle = useCallback(
    (index: number) => {
      if (isAnimating.current || index === activeIndex) return;
      isAnimating.current = true;

      const prevContent = contentRefs.current[activeIndex];
      const nextContent = contentRefs.current[index];

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      // Collapse previous
      if (prevContent) {
        tl.to(prevContent, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power3.inOut",
        });
      }

      // Expand new
      if (nextContent) {
        tl.to(
          nextContent,
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power3.inOut",
          },
          0.1
        );
      }

      tl.call(() => setActiveIndex(index), [], 0.15);
    },
    [activeIndex]
  );

  return (
    <div className="w-full bg-[#faf6f1] font-[Circular]">
      <div className="max-w-[1224px] mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 lg:gap-24">
          {/* Left: CTA */}
          <div className="w-full md:w-[38%] flex flex-col justify-center">
            <p className="text-[26px] md:text-[32px] lg:text-[32px] leading-[1.3] tracking-[-0.02em]">
              <span className="text-[#b5b0a8]">
                We believe in meaningful conversations. To help you out, we
                provide
              </span>
              <br />
              <span className="text-[#1a1a1a] font-semibold">
                a free 20-minute call to answer your questions.
              </span>
            </p>

            <div className="mt-10">
              <button className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-[16px] font-medium px-8 py-4 rounded-full hover:bg-[#333] transition-colors duration-200">
                Book a free call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="w-full md:w-[62%] flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f0ebe4] rounded-[16px] px-7 py-6 cursor-pointer transition-colors duration-200 hover:bg-[#ebe5dd]"
                onClick={() => toggle(index)}
              >
                {/* Question Row */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] leading-[1.4] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 7l5 5 5-5"
                        stroke="#1a1a1a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  ref={(el) => setContentRef(el, index)}
                  className="overflow-hidden"
                >
                  <p className="text-[14px] md:text-[15px] text-[#7a756d] leading-[1.6] pt-4 pb-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
