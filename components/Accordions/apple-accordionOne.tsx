"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

const accordionData = [
  {
    title: "iPhone and Mac",
    description:
      "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/overview/shared-features/hero_features_left__37j8yz8ksiqm_large.jpg",
  },
  {
    title: "iPhone and Apple Watch",
    description:
      "Unlock your iPhone instantly with Apple Watch. Get directions on your iPhone and receive haptic feedback on your wrist when it's time to turn. Use your Apple Watch to find your iPhone, even if it's on silent. And when you're working out, see your Apple Watch metrics on your iPhone.",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/overview/shared-features/hero_features_middle__calo9u012as2_large.jpg",
  },
  {
    title: "iPhone and AirPods",
    description:
      "AirPods are the perfect wireless companion for iPhone. Set them up with one tap, and they'll work seamlessly across all your Apple devices. With Personalised Spatial Audio, you'll get sound that's tuned just for you. And with the Conversation Awareness feature, AirPods Pro automatically lower your media volume when someone speaks to you.",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/overview/shared-features/hero_features_right__ecaub3zfqlqq_large.jpg",
  },
];

export default function AppleAccordionOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const setContentRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      contentRefs.current[index] = el;
    },
    []
  );

  // Set initial heights on mount
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

      // Fade out old image
      tl.to(imageRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 0.3,
        ease: "power2.in",
      });

      // Collapse previous content
      if (prevContent) {
        tl.to(
          prevContent,
          {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut",
          },
          0
        );
      }

      // Expand new content
      if (nextContent) {
        tl.to(
          nextContent,
          {
            height: "auto",
            opacity: 1,
            duration: 0.45,
            ease: "power3.inOut",
          },
          0.15
        );
      }

      // Swap image src and fade in
      tl.call(
        () => {
          setActiveIndex(index);
        },
        [],
        0.3
      );

      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        0.35
      );
    },
    [activeIndex]
  );

  return (
    <div className="w-full flex justify-center px-4 py-10">
      <div className="w-full max-w-[1224px] bg-[#f5f5f7] rounded-[28px] overflow-hidden font-[Circular]">
        <div className="flex flex-col md:flex-row">
          {/* Left: Accordion */}
          <div className="w-full md:w-[42%] p-8 md:p-10 lg:p-12">
            {accordionData.map((item, index) => (
              <div key={item.title}>
                {/* Accordion Header */}
                <button
                  className="w-full flex items-center justify-between py-5 cursor-pointer group"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-[-0.025em] leading-tight text-left">
                    {item.title}
                  </h3>
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1L9 9L17 1"
                      stroke="#86868b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  ref={(el) => setContentRef(el, index)}
                  className="overflow-hidden"
                >
                  <p className="text-[15px] md:text-[16px] text-[#1d1d1f] leading-[1.6] pb-5 tracking-[-0.01em]">
                    {item.description}
                  </p>
                </div>

                {/* Divider */}
                {index < accordionData.length - 1 && (
                  <div className="h-[1px] bg-[#d2d2d7]" />
                )}
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[58%] flex items-center justify-center p-4 md:p-6">
            <div
              ref={imageRef}
              className="w-full h-[300px] md:h-[480px] rounded-[20px] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={accordionData[activeIndex].image}
                alt={accordionData[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
