"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

/* ─── Data ─── */
const brands = [
  "Tripadvisor",
  "Calm",
  "ClickUp",
  "NASA",
  "Hootsuite",
  "Konica Minolta",
];

const badges = [
  { rank: "#1", label: "WordPress\nHosting" },
  { rank: "", label: "Users Most\nLikely To\nRecommend" },
  { rank: "", label: "Best\nSupport" },
  { rank: "", label: "Best\nEst. ROI" },
  { rank: "", label: "Highest User\nAdoption" },
  { rank: "", label: "Best\nRelationship" },
];

const testimonials = [
  {
    name: "Jeff M.",
    role: "International Business Development Director",
    quote:
      "I often get asked about the best host and I am always happy to recommend them because I know they will never be a complaint.",
    color: "#3b82f6",
  },
  {
    name: "Vanessa H.",
    role: "Lead Product Manager at Google Support",
    quote:
      "The platform is fantastic. I smile every time I work with them. And smiling is hard to do when a server is melting down. Knowing they have my back makes the worst issues tolerable.",
    color: "#8b5cf6",
  },
  {
    name: "Paul L.",
    role: "Director of Digital",
    quote:
      "Moved 100 client sites over and it was so simple. They also upgraded our servers without me having to lift a finger. Customer for life.",
    color: "#f59e0b",
  },
];

/* ─── Quadrant chart floating icons ─── */
const floatingIcons = [
  { x: "72%", y: "18%", size: 38, bg: "#ff6a3d", letter: "N", shadow: true },
  { x: "55%", y: "30%", size: 24, bg: "#10b981", letter: "W", shadow: false },
  { x: "80%", y: "35%", size: 20, bg: "#6366f1", letter: "S", shadow: false },
  { x: "45%", y: "45%", size: 18, bg: "#ec4899", letter: "P", shadow: false },
  { x: "65%", y: "50%", size: 22, bg: "#f59e0b", letter: "F", shadow: false },
  { x: "35%", y: "55%", size: 16, bg: "#8b5cf6", letter: "D", shadow: false },
  { x: "50%", y: "62%", size: 20, bg: "#14b8a6", letter: "C", shadow: false },
  { x: "75%", y: "58%", size: 18, bg: "#ef4444", letter: "B", shadow: false },
  { x: "60%", y: "72%", size: 16, bg: "#64748b", letter: "H", shadow: false },
];

/* ─── Component ─── */
export default function HeroTestimonial() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".ht-brands span", {
        opacity: 0,
        y: 12,
        stagger: 0.06,
        duration: 0.4,
      })
        .from(
          ".ht-card",
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".ht-heading",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          badgesRef.current?.children || [],
          {
            opacity: 0,
            y: 14,
            stagger: 0.06,
            duration: 0.35,
          },
          "-=0.15"
        )
        .from(
          ".ht-cta",
          {
            opacity: 0,
            y: 18,
            duration: 0.4,
          },
          "-=0.2"
        )
        .from(
          ".ht-chart",
          {
            opacity: 0,
            scale: 0.92,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".ht-chart-icon",
          {
            opacity: 0,
            scale: 0,
            stagger: 0.04,
            duration: 0.35,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          testimonialsRef.current?.children || [],
          {
            opacity: 0,
            y: 24,
            stagger: 0.1,
            duration: 0.45,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center bg-gradient-to-b from-[#ffe0c8] via-[#fff3ec] to-[#fff7f1] px-4 pb-20 pt-14 font-[Circular]"
    >
      <div className="w-full max-w-[1080px]">
        {/* ─── Trusted brands ─── */}
        <div className="text-center mb-12">
          <p className="text-[14px] text-[#7a667d] mb-5">
            Trusted by 230,000+ businesses and brands around the world
          </p>
          <div className="ht-brands flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#2d1f33] flex items-center gap-2"
              >
                {/* Brand icon circle */}
                <span className="w-6 h-6 rounded-full bg-[#2d1f33] flex items-center justify-center text-white text-[9px] font-bold">
                  {brand[0]}
                </span>
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Main hero card ─── */}
        <div className="ht-card rounded-[28px] bg-[radial-gradient(ellipse_at_top_left,_#ff6a3d22,_#0d0610_40%,_#060309_100%)] p-8 md:p-10 shadow-[0_30px_80px_rgba(9,5,19,0.7)] overflow-hidden">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] items-start">
            {/* Left content */}
            <div>
              {/* G2 rating */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-full bg-[#ff5722] flex items-center justify-center text-white text-[10px] font-bold">
                  G
                </span>
                <span className="text-[#ffb648] text-sm tracking-wide">
                  ★★★★★
                </span>
                <span className="text-[13px] text-[#c2b8c8]">4.8/5</span>
              </div>

              {/* Heading */}
              <h1 className="ht-heading text-white text-[28px] md:text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] mb-6">
                #1 WordPress Hosting Provider.
                <br />
                Our Customers Have Spoken.
              </h1>

              {/* G2 Award badges */}
              <div
                ref={badgesRef}
                className="flex flex-wrap gap-2 mb-7"
              >
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="relative w-[80px] rounded-lg border border-white/[0.08] bg-[#130b18] overflow-hidden"
                  >
                    {/* Badge header */}
                    <div className="flex items-center justify-between bg-[#ff5722] px-2 py-[3px]">
                      <span className="text-white text-[6px] font-bold uppercase tracking-wider">
                        Winter 2025
                      </span>
                      <span className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center text-white text-[5px] font-bold">
                        G
                      </span>
                    </div>
                    {/* Badge body */}
                    <div className="px-2 py-2 text-center">
                      {badge.rank && (
                        <p className="text-white text-[16px] font-bold leading-none mb-1">
                          {badge.rank}
                        </p>
                      )}
                      <p className="text-[#c2b8c8] text-[7px] leading-[1.3] whitespace-pre-line uppercase font-semibold tracking-wide">
                        {badge.label}
                      </p>
                      <p className="text-[#7a667d] text-[6px] mt-1 uppercase tracking-wider">
                        Mid-Market
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="ht-cta inline-flex items-center gap-2 rounded-full bg-[#1a0e22] border border-white/[0.08] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#251530] transition-colors">
                Make the switch today
                <span className="text-[16px]">→</span>
              </button>
            </div>

            {/* Right - G2 Quadrant chart */}
            <div className="ht-chart relative aspect-[5/4] w-full rounded-2xl border border-white/[0.06] bg-[#0c0812] overflow-hidden">
              {/* Chart labels */}
              <span className="absolute top-3 left-4 text-[9px] text-[#5a4d63] tracking-wide">
                Contenders
              </span>
              <span className="absolute top-3 right-4 text-[9px] text-[#5a4d63] tracking-wide">
                Leaders
              </span>
              <span className="absolute bottom-3 left-4 text-[9px] text-[#5a4d63] tracking-wide">
                Niche
              </span>
              <span className="absolute bottom-3 right-16 text-[9px] text-[#5a4d63] tracking-wide">
                Satisfaction
              </span>
              <span className="absolute bottom-3 right-4 text-[9px] text-[#5a4d63] tracking-wide">
                High Performers
              </span>
              {/* Right side label */}
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-[#5a4d63] tracking-wide"
                style={{ writingMode: "vertical-rl" }}
              >
                Market Presence
              </span>

              {/* Grid lines */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-white/[0.04]" />
                <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white/[0.04]" />
              </div>

              {/* Floating icons */}
              {floatingIcons.map((icon, i) => (
                <div
                  key={i}
                  className="ht-chart-icon absolute flex items-center justify-center rounded-lg text-white font-bold"
                  style={{
                    left: icon.x,
                    top: icon.y,
                    width: icon.size,
                    height: icon.size,
                    backgroundColor: icon.bg,
                    fontSize: icon.size * 0.38,
                    boxShadow: icon.shadow
                      ? `0 0 30px ${icon.bg}88`
                      : "none",
                    zIndex: icon.shadow ? 2 : 1,
                  }}
                >
                  {icon.letter}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Reviews count + navigation ─── */}
        <div className="flex items-center gap-3 mt-8 mb-5 px-1">
          <p className="text-[14px] text-[#4a384f] font-medium">
            1,200+ reviews and counting
          </p>
          <div className="flex gap-2">
            <button className="w-7 h-7 rounded-full border border-[#d4c5db] flex items-center justify-center text-[#7a667d] hover:border-[#4a384f] hover:text-[#4a384f] transition-colors">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M6.5 1.5L3 5L6.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-7 h-7 rounded-full border border-[#d4c5db] flex items-center justify-center text-[#7a667d] hover:border-[#4a384f] hover:text-[#4a384f] transition-colors">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M3.5 1.5L7 5L3.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ─── Testimonial cards ─── */}
        <div
          ref={testimonialsRef}
          className="grid gap-4 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-[#e8dde0]/60 bg-gradient-to-b from-[#1a0e22] to-[#120a18] p-5 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-white text-[14px] font-semibold leading-snug mb-3">
                {t.name.split(".")[0]}.{" "}
                <span className="font-normal text-[#c2b8c8]">{t.role}</span>
              </h3>

              {/* Quote */}
              <p className="text-[#b0a3b8] text-[13px] leading-[1.6] flex-1 mb-5">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-[13px] font-semibold">
                    {t.name}
                  </p>
                  <p className="text-[#8a7d92] text-[11px]">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
