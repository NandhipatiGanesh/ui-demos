"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";


const products = [
  {
    name: "iPhone 17 Pro",
    label: "Currently viewing",
    labelColor: "#86868b",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/site/localnav/nav_iphone_17pro__bbl5of2aqwwy_large.png",
    active: true,
  },
  {
    name: "iPhone Air",
    label: "New",
    labelColor: "#bf4800",
    image:
      "https://www.apple.com/v/iphone-17-pro/d/images/site/localnav/nav_iphone_air__fmkp5gbcs3ue_large.png",
  },
  {
    name: "iPhone 17",
    label: "New",
    labelColor: "#bf4800",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/site/localnav/nav_iphone_17__gk01c50a6wia_large.png",
  },
  {
    name: "iPhone 16",
    label: "",
    labelColor: "",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/site/localnav/nav_iphone_16__fxugp3d2s6qi_large.png",
  },
  {
    name: "iPhone 16e",
    label: "",
    labelColor: "",
    image:
      "https://www.apple.com/in/iphone-17-pro/images/site/localnav/nav_iphone_16e__efzgo7vh4kmu_large.png",
  },
  {
    name: "Compare",
    label: "",
    labelColor: "",
    image:
      "https://www.apple.com/v/iphone-17-pro/d/images/site/localnav/nav_compare__ean73ffuyga6_large.png",
  },
  {
    name: "Accessories",
    label: "",
    labelColor: "",
    image:
      "https://www.apple.com/v/iphone-17-pro/d/images/site/localnav/nav_accessories__fpsp2ndzk466_large.png",
  },
];

const navLinks = [
  ["Highlights", "Cameras", "Shared Features"],
  ["Design", "Performance", "Accessories"],
];

export default function AppleHeaderOne() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const collapsedRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimating = useRef(false);

  const expand = useCallback(() => {
    if (isAnimating.current || isExpanded) return;
    isAnimating.current = true;
    setIsExpanded(true);

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
    tlRef.current = tl;

    const container = containerRef.current;
    const expanded = expandedRef.current;
    if (!container || !expanded) return;

    // Set initial states for expanded content
    gsap.set(expanded, { display: "block", opacity: 0 });
    gsap.set(".apple-nav-close", { scale: 0, opacity: 0 });
    gsap.set(".apple-nav-product", { y: 30, opacity: 0 });
    gsap.set(".apple-nav-divider", { scaleX: 0 });
    gsap.set(".apple-nav-info", { y: 20, opacity: 0 });
    gsap.set(".apple-nav-section", { y: 20, opacity: 0 });
    gsap.set(".apple-nav-link-item", { y: 15, opacity: 0 });
    gsap.set(".apple-nav-bottom-link", { y: 15, opacity: 0 });
    gsap.set(".apple-nav-arrow", { x: -10, opacity: 0 });

    // Collapse bar fade out
    tl.to(collapsedRef.current, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        if (collapsedRef.current) collapsedRef.current.style.display = "none";
      },
    });

    // Expand the container height
    tl.to(
      container,
      {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      },
      "-=0.1"
    );

    // Fade in expanded content
    tl.to(
      expanded,
      {
        opacity: 1,
        duration: 0.3,
      },
      "-=0.3"
    );

    // Close button pop in
    tl.to(
      ".apple-nav-close",
      {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );

    // Products stagger in
    tl.to(
      ".apple-nav-product",
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Arrow slide in
    tl.to(
      ".apple-nav-arrow",
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
      },
      "-=0.2"
    );

    // Divider scale in
    tl.to(
      ".apple-nav-divider",
      {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.15"
    );

    // Info section
    tl.to(
      ".apple-nav-info",
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
      },
      "-=0.2"
    );

    // Overview section
    tl.to(
      ".apple-nav-section",
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
      },
      "-=0.15"
    );

    // Nav links stagger
    tl.to(
      ".apple-nav-link-item",
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.15"
    );

    // Bottom links stagger
    tl.to(
      ".apple-nav-bottom-link",
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.08,
      },
      "-=0.15"
    );
  }, [isExpanded]);

  const collapse = useCallback(() => {
    if (isAnimating.current || !isExpanded) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: () => {
        setIsExpanded(false);
        isAnimating.current = false;
        if (expandedRef.current) expandedRef.current.style.display = "none";
        if (collapsedRef.current) {
          collapsedRef.current.style.display = "flex";
          gsap.to(collapsedRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
    });

    // Reverse stagger - bottom links first
    tl.to(".apple-nav-bottom-link", {
      y: 10,
      opacity: 0,
      duration: 0.2,
      stagger: { each: 0.04, from: "end" },
    });

    tl.to(
      ".apple-nav-link-item",
      {
        y: 10,
        opacity: 0,
        duration: 0.2,
        stagger: { each: 0.03, from: "end" },
      },
      "-=0.15"
    );

    tl.to(
      ".apple-nav-section",
      {
        y: 10,
        opacity: 0,
        duration: 0.2,
      },
      "-=0.1"
    );

    tl.to(
      ".apple-nav-info",
      {
        y: 10,
        opacity: 0,
        duration: 0.2,
      },
      "-=0.1"
    );

    tl.to(
      ".apple-nav-divider",
      {
        scaleX: 0,
        duration: 0.25,
      },
      "-=0.1"
    );

    tl.to(
      ".apple-nav-product",
      {
        y: 15,
        opacity: 0,
        duration: 0.25,
        stagger: { each: 0.03, from: "end" },
      },
      "-=0.15"
    );

    tl.to(
      ".apple-nav-close",
      {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      },
      "-=0.15"
    );

    tl.to(expandedRef.current, {
      opacity: 0,
      duration: 0.2,
    });

    tl.to(
      containerRef.current,
      {
        height: 52,
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.1"
    );
  }, [isExpanded]);

  return (
    <div className="w-full flex justify-center px-4 pt-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-[1024px] bg-[#fbfbfd] rounded-[36px] overflow-hidden font-[Circular] border-1 border-gray-100"
        style={{
          height: 52,
          boxShadow: "0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Collapsed State */}
        <div
          ref={collapsedRef}
          className="flex items-center justify-between h-[52px] px-6 pr-3 cursor-pointer"
          onClick={expand}
        >
          <span
            className="text-[17px] font-semibold text-[#1d1d1f] tracking-[-0.01em] font-[Circular]"
            
          >
            iPhone 17 Pro
          </span>
          <div className="flex items-center gap-3">
            <button
              className="px-4 py-[6px] rounded-full border border-[#0071e3] text-[#0071e3] text-[14px] font-normal bg-transparent hover:bg-[#0071e3] hover:text-white transition-colors duration-200"
              
            >
              Explore
            </button>
            <button
              className="px-5 py-[6px] rounded-full bg-[#0071e3] text-white text-[14px] font-normal hover:bg-[#0077ED] transition-colors duration-200"
            >
              Buy
            </button>
          </div>
        </div>

        {/* Expanded State */}
        <div
          ref={expandedRef}
          className="hidden"
        >
          {/* Close Button */}
          <button
            className="apple-nav-close absolute top-4 right-4 z-10 w-[36px] h-[36px] rounded-full bg-[#1d1d1f] flex items-center justify-center hover:bg-[#333] transition-colors"
            onClick={collapse}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Product Carousel */}
          <div className="relative px-8 pt-18 pb-4">
            <div className="flex items-start justify-start gap-0 overflow-x-auto scrollbar-hide">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="apple-nav-product flex flex-col items-center flex-shrink-0 cursor-pointer group"
                  style={{ width: 140 }}
                >
                  <div className="w-[80px] h-[100px] flex items-end justify-center mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[90px] w-auto object-contain"
                    />
                  </div>
                  <span
                    className={`text-[12px] tracking-[-0.01em] ${
                      product.active
                        ? "text-[#1d1d1f] font-semibold"
                        : "text-[#1d1d1f] font-normal"
                    }`}
                  >
                    {product.name}
                  </span>
                  {product.label && (
                    <span
                      className="text-[12px] mt-[1px]"
                      style={{ color: product.labelColor }}
                    >
                      {product.label}
                    </span>
                  )}
                  {!product.label && <span className="text-[12px] mt-[1px] opacity-0">.</span>}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="apple-nav-arrow absolute right-4 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm border border-black/5 hover:bg-white transition-colors">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path
                  d="M1.5 1L8.5 8L1.5 15"
                  stroke="#1d1d1f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="px-8">
            <div
              className="apple-nav-divider h-[1px] bg-[#d2d2d7] origin-left"
            />
          </div>

          {/* Product Info */}
          <div className="apple-nav-info flex items-center flex-wrap  justify-between px-8 py-8">
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] tracking-[-0.025em] leading-tight">
              iPhone 17 Pro
            </h2>
            <div className="flex  items-start md:items-center gap-5">
              <div className="md:text-right text-left">
                <p className="text-[14px] font-semibold text-[#1d1d1f]">
                  From ₹134900.00 <span className="text-[11px] align-super">*</span>
                </p>
                <p className="text-[12px] text-[#6e6e73] mt-[2px]">
                  or ₹21650.00/mo. for 6 mo.<span className="text-[11px] align-super">‡</span>
                </p>
              </div>
              <button className="px-6 py-[9px] rounded-full bg-[#0071e3] text-white text-[15px] font-normal hover:bg-[#0077ED] transition-colors duration-200">
                Buy
              </button>
            </div>
          </div>

          {/* Overview Section */}
          <div className="apple-nav-section px-8 pb-4">
            <button className="flex items-center gap-1 text-[14px] text-[#6e6e73]">
              Overview
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-[1px]">
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#6e6e73"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="px-8 pb-4">
            {navLinks.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-0 mb-2">
                {row.map((link) => (
                  <span
                    key={link}
                    className="apple-nav-link-item text-[14px] font-semibold text-[#1d1d1f] cursor-pointer hover:text-[#0071e3] transition-colors duration-200"
                    style={{ width: "33.333%" }}
                  >
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Links */}
          <div className="px-8 pb-10 flex flex-col gap-3 pt-2">
            <a
              href="#"
              className="apple-nav-bottom-link text-[14px] text-[#bf4800] hover:underline flex items-center gap-1"
            >
              Tech Specs
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" className="mt-[1px]">
                <path
                  d="M1 1L5.5 5L1 9"
                  stroke="#bf4800"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="apple-nav-bottom-link text-[14px] text-[#bf4800] hover:underline flex items-center gap-1"
            >
              Switch from Android
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" className="mt-[1px]">
                <path
                  d="M1 1L5.5 5L1 9"
                  stroke="#bf4800"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
