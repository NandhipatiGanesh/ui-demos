"use client";

import { useRef, useLayoutEffect, useCallback } from "react";
import { gsap } from "gsap";

/* ─── Color themes ─── */
interface BtnTheme {
  bg: string;
  iconBg: string;
  text: string;
  iconStroke: string;
  border: string;
}

const themes: Record<string, BtnTheme> = {
  gray: {
    bg: "#e8e8ed",
    iconBg: "#d4d4da",
    text: "#1d1d1f",
    iconStroke: "#1d1d1f",
    border: "#d2d2d7",
  },
  purple: {
    bg: "#ede5ff",
    iconBg: "#7e5cef",
    text: "#3b1d8e",
    iconStroke: "#ffffff",
    border: "#d4c5f7",
  },
  blue: {
    bg: "#dbeafe",
    iconBg: "#3b82f6",
    text: "#1e3a5f",
    iconStroke: "#ffffff",
    border: "#bfdbfe",
  },
  dark: {
    bg: "#1a0a2e",
    iconBg: "#7e5cef",
    text: "#ffffff",
    iconStroke: "#ffffff",
    border: "#2d1b4e",
  },
  orange: {
    bg: "#fff1e6",
    iconBg: "#ff6a3d",
    text: "#7c2d12",
    iconStroke: "#ffffff",
    border: "#fed7aa",
  },
  green: {
    bg: "#d1fae5",
    iconBg: "#10b981",
    text: "#064e3b",
    iconStroke: "#ffffff",
    border: "#a7f3d0",
  },
};

/* ─── Expandable Icon Button ─── */
function ExpandableButton({
  label = "Learn more",
  color = "gray",
}: {
  label?: string;
  color?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const textWidth = useRef(0);
  const isOpen = useRef(false);
  const theme = themes[color] || themes.gray;

  // Measure text width on mount
  useLayoutEffect(() => {
    const wrapper = textWrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;

    wrapper.style.width = "auto";
    textWidth.current = text.offsetWidth;
    wrapper.style.width = "0px";
  }, []);

  const expand = useCallback(() => {
    if (isOpen.current) return;
    isOpen.current = true;

    const btn = btnRef.current;
    const wrapper = textWrapperRef.current;
    const text = textRef.current;
    if (!btn || !wrapper || !text) return;

    gsap.killTweensOf([btn, wrapper, text]);

    const tl = gsap.timeline();

    tl.to(wrapper, {
      width: textWidth.current + 16,
      duration: 0.55,
      ease: "elastic.out(1, 0.72)",
    });

    tl.fromTo(
      text,
      { opacity: 0, x: 12 },
      { opacity: 1, x: 0, duration: 0.3, ease: "power3.out" },
      "-=0.45"
    );

    tl.to(btn, { paddingLeft: 18, duration: 0.4, ease: "power3.out" }, 0);
  }, []);

  const collapse = useCallback(() => {
    if (!isOpen.current) return;
    isOpen.current = false;

    const btn = btnRef.current;
    const wrapper = textWrapperRef.current;
    const text = textRef.current;
    if (!btn || !wrapper || !text) return;

    gsap.killTweensOf([btn, wrapper, text]);

    const tl = gsap.timeline();

    tl.to(text, { opacity: 0, x: 8, duration: 0.15, ease: "power2.in" });

    tl.to(
      wrapper,
      { width: 0, duration: 0.4, ease: "elastic.out(1, 0.8)" },
      "-=0.05"
    );

    tl.to(btn, { paddingLeft: 5, duration: 0.35, ease: "power3.out" }, 0);
  }, []);

  return (
    <button
      ref={btnRef}
      onMouseEnter={expand}
      onMouseLeave={collapse}
      className="btn-item flex items-center gap-0 cursor-pointer rounded-full border"
      style={{
        height: 48,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: theme.bg,
        borderColor: theme.border,
      }}
    >
      <div
        ref={textWrapperRef}
        className="overflow-hidden flex-shrink-0"
        style={{ width: 0 }}
      >
        <span
          ref={textRef}
          className="text-[15px] font-semibold whitespace-nowrap block pl-1 pr-3"
          style={{ color: theme.text }}
        >
          {label}
        </span>
      </div>

      <span
        className="flex-shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: theme.iconBg }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.iconStroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </button>
  );
}

/* ─── Main Component ─── */
export default function ButtonOne() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".btn-item", {
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-6 py-20 font-[Circular]"
    >
      <div className="w-full max-w-[900px] space-y-16">
        {/* ─── Expandable Icon Button (Hero) ─── */}
        <div>
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            Expandable Icon
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <ExpandableButton label="Learn more" color="gray" />
            <ExpandableButton label="Get started" color="purple" />
            <ExpandableButton label="Subscribe" color="orange" />
            <ExpandableButton label="Explore" color="blue" />
            <ExpandableButton label="Join now" color="green" />
            <ExpandableButton label="Try for free" color="dark" />
          </div>
        </div>

        {/* ─── Primary Buttons ─── */}
        <div>
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            Primary
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-item px-6 py-3 rounded-full bg-[#1a0a2e] text-white text-[14px] font-semibold hover:bg-[#2a1a4e] transition-colors">
              Get started
            </button>
            <button className="btn-item px-6 py-3 rounded-full bg-gradient-to-r from-[#7e5cef] to-[#6d4de0] text-white text-[14px] font-semibold hover:from-[#8e6ff5] hover:to-[#7d5df0] transition-all shadow-lg shadow-[#7e5cef]/25">
              Try for free
            </button>
            <button className="btn-item px-6 py-3 rounded-full bg-[#0071e3] text-white text-[14px] font-semibold hover:bg-[#0077ED] transition-colors">
              Buy now
            </button>
            <button className="btn-item px-6 py-3 rounded-full bg-[#ff6a3d] text-white text-[14px] font-semibold hover:bg-[#ff7a52] transition-colors shadow-lg shadow-[#ff6a3d]/25">
              Subscribe
            </button>
          </div>
        </div>

        {/* ─── Secondary / Outline ─── */}
        <div>
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            Secondary
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-item px-6 py-3 rounded-full border-2 border-[#1a0a2e] text-[#1a0a2e] text-[14px] font-semibold hover:bg-[#1a0a2e] hover:text-white transition-colors">
              Learn more
            </button>
            <button className="btn-item px-6 py-3 rounded-full border-2 border-[#7e5cef] text-[#7e5cef] text-[14px] font-semibold hover:bg-[#7e5cef] hover:text-white transition-colors">
              View pricing
            </button>
            <button className="btn-item px-6 py-3 rounded-full border border-[#d2d2d7] text-[#1d1d1f] text-[14px] font-semibold hover:border-[#1d1d1f] transition-colors">
              Explore
            </button>
            <button className="btn-item px-6 py-[10px] rounded-full border border-[#0071e3] text-[#0071e3] text-[14px] font-medium hover:bg-[#0071e3] hover:text-white transition-colors">
              Contact sales
            </button>
          </div>
        </div>

        {/* ─── Ghost / Minimal ─── */}
        <div>
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            Ghost
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-item px-5 py-2.5 rounded-lg text-[#1d1d1f] text-[14px] font-medium hover:bg-black/[0.05] transition-colors">
              Cancel
            </button>
            <button className="btn-item px-5 py-2.5 rounded-lg text-[#0071e3] text-[14px] font-medium hover:bg-[#0071e3]/[0.08] transition-colors">
              Learn more →
            </button>
            <button className="btn-item px-5 py-2.5 rounded-lg text-[#ff6a3d] text-[14px] font-medium hover:bg-[#ff6a3d]/[0.08] transition-colors">
              View changelog →
            </button>
            <button className="btn-item text-[14px] font-medium text-[#6e6e73] underline underline-offset-4 decoration-[#d2d2d7] hover:text-[#1d1d1f] hover:decoration-[#1d1d1f] transition-colors">
              Skip for now
            </button>
          </div>
        </div>

        {/* ─── With Icons ─── */}
        <div>
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            With Icons
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-item inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a0a2e] text-white text-[14px] font-semibold hover:bg-[#2a1a4e] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Continue
            </button>
            <button className="btn-item inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] text-[14px] font-semibold hover:border-[#1d1d1f] transition-colors shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download
            </button>
            <button className="btn-item inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] text-white text-[14px] font-semibold hover:bg-[#333] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </button>
            <button className="btn-item inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff6a3d] text-white text-[14px] font-semibold hover:bg-[#ff7a52] transition-colors shadow-lg shadow-[#ff6a3d]/25">
              Make the switch
              <span className="text-[16px]">→</span>
            </button>
          </div>
        </div>

        {/* ─── Sizes ─── */}
        <div>
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            Sizes
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-item px-4 py-1.5 rounded-full bg-[#1a0a2e] text-white text-[12px] font-semibold hover:bg-[#2a1a4e] transition-colors">
              Small
            </button>
            <button className="btn-item px-6 py-3 rounded-full bg-[#1a0a2e] text-white text-[14px] font-semibold hover:bg-[#2a1a4e] transition-colors">
              Medium
            </button>
            <button className="btn-item px-8 py-4 rounded-full bg-[#1a0a2e] text-white text-[16px] font-semibold hover:bg-[#2a1a4e] transition-colors">
              Large
            </button>
          </div>
        </div>

        {/* ─── Dark variants ─── */}
        <div className="rounded-2xl bg-[#1a0a2e] p-8">
          <p className="text-[12px] font-bold text-[#7c7c99] uppercase tracking-[0.1em] mb-5">
            On Dark
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-item px-6 py-3 rounded-full bg-white text-[#1a0a2e] text-[14px] font-semibold hover:bg-[#f0f0f0] transition-colors">
              Get started
            </button>
            <button className="btn-item px-6 py-3 rounded-full border border-white/20 text-white text-[14px] font-semibold hover:bg-white/[0.08] transition-colors">
              Learn more
            </button>
            <button className="btn-item px-6 py-3 rounded-full bg-gradient-to-r from-[#7e5cef] to-[#6d4de0] text-white text-[14px] font-semibold hover:from-[#8e6ff5] hover:to-[#7d5df0] transition-all shadow-lg shadow-[#7e5cef]/25">
              Try for free
            </button>
            <button className="btn-item px-5 py-2.5 rounded-lg text-[#a78bfa] text-[14px] font-medium hover:bg-white/[0.06] transition-colors">
              View docs →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
