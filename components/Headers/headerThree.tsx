//File :- Component for header three (light) with mega menu and mobile drawer, using GSAP for animations
//File: app/header-three/page.tsx
"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

/* ─── Small icons ─── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="M1 1l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m-6-6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Logo icon — double chevron mark */
function LogoIcon() {
  return (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
      <path
        d="M8 2C4 6 2 10 2 14c0 5 3 9 6 12 1-2 2-4 2-6 0-3-2-5-4-7 2-1 4-4 4-7 0-2-1-3-2-4z"
        fill="#0b1220"
      />
      <path
        d="M20 2c-4 4-6 8-6 12 0 5 3 9 6 12 1-2 2-4 2-6 0-3-2-5-4-7 2-1 4-4 4-7 0-2-1-3-2-4z"
        fill="#0b1220"
      />
    </svg>
  );
}

/* ─── Product card icons ─── */
function UsabilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="10" fill="#FDDCB5" />
      <circle cx="16" cy="16" r="8" fill="#F9A858" />
      <circle cx="32" cy="16" r="8" fill="#F9A858" />
      <circle cx="16" cy="32" r="8" fill="#F9A858" />
      <circle cx="32" cy="32" r="8" fill="#F9A858" />
      <path
        d="M24 18l1.5 3 3.5.5-2.5 2.5.6 3.5L24 26l-3.1 1.5.6-3.5L19 21.5l3.5-.5z"
        fill="white"
      />
    </svg>
  );
}

function RecruitmentIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#DBEAFE" />
      <circle cx="24" cy="24" r="12" fill="#93C5FD" />
      <circle cx="24" cy="24" r="5" fill="#3B82F6" />
      <circle cx="24" cy="24" r="2" fill="white" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4l6 10h-4l4 10h-4l4 10H18l4-10h-4l4-10h-4z"
        fill="#34D399"
      />
      <path
        d="M16 34l8 10 8-10"
        fill="#10B981"
      />
    </svg>
  );
}

/* ─── Platform overview icon grid (simulated product icons) ─── */
function PlatformIconGrid() {
  const icons = [
    { color: "#F59E0B", shape: "check" },
    { color: "#10B981", shape: "play" },
    { color: "#3B82F6", shape: "circle" },
    { color: "#A855F7", shape: "pin" },
    { color: "#F97316", shape: "box" },
    { color: "#10B981", shape: "funnel" },
    { color: "#EC4899", shape: "rect" },
    { color: "#EF4444", shape: "cursor" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {icons.map((ic, i) => (
        <div
          key={i}
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${ic.color}20` }}
        >
          <div
            className="w-6 h-6 rounded-md"
            style={{ backgroundColor: ic.color }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Nav data ─── */
type NavItemType = "product" | "solutions" | "link";

interface NavItem {
  label: string;
  type: NavItemType;
  hasMega?: boolean;
}

const navItems: NavItem[] = [
  { label: "Product", type: "product", hasMega: true },
  { label: "Solutions", type: "solutions", hasMega: true },
  { label: "Customers", type: "link" },
  { label: "Pricing", type: "link" },
  { label: "Resources", type: "link" },
];

const solutionsColumns = [
  {
    title: "By team",
    items: ["Product", "Design", "Content", "Marketing", "Research"],
  },
  {
    title: "By use case",
    items: [
      "Gather Qualitative Insights",
      "Validate Design Concepts",
      "Prioritize Your Roadmap",
      "Content Design",
      "Continuous Research",
      "Workflow Automation & AI",
    ],
  },
  {
    title: "By industry",
    items: [
      "Government",
      "Airlines & Aviation Services",
      "Banking & Financial Services",
      "Technology & Software",
    ],
  },
];

const productCards = [
  { title: "Usability Testing", Icon: UsabilityIcon },
  { title: "Participant Recruitment", Icon: RecruitmentIcon },
  { title: "Navigation & Content Testing", Icon: NavigationIcon },
];

/* ─── HeaderThree (light) ─── */
export default function HeaderThree() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  const openDropdown = useCallback((index: number) => {
    const item = navItems[index];
    if (item.type === "link") {
      setActiveIndex(null);
      return;
    }
    if (animating.current) return;
    animating.current = true;
    const dd = dropdownRef.current;
    const ov = overlayRef.current;
    if (!dd || !ov) return;
    setActiveIndex(index);
    gsap.set(dd, { display: "block", height: 0, opacity: 1 });
    gsap.set(ov, { display: "block", opacity: 0 });
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => { animating.current = false; },
    });
    tl.to(ov, { opacity: 1, duration: 0.18 });
    tl.to(
      dd,
      { height: "auto", duration: 0.34, ease: "power3.inOut" },
      "-=0.12"
    );
    tl.fromTo(
      ".h3-dropdown-content",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.32 },
      "-=0.2"
    );
  }, []);

  const closeDropdown = useCallback(() => {
    if (animating.current || activeIndex === null) return;
    animating.current = true;
    const dd = dropdownRef.current;
    const ov = overlayRef.current;
    if (!dd || !ov) return;
    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: () => {
        setActiveIndex(null);
        animating.current = false;
        gsap.set(dd, { display: "none" });
        gsap.set(ov, { display: "none" });
      },
    });
    tl.to(".h3-dropdown-content", { opacity: 0, y: 8, duration: 0.16 });
    tl.to(dd, { height: 0, duration: 0.28, ease: "power3.inOut" }, "-=0.1");
    tl.to(ov, { opacity: 0, duration: 0.16 }, "-=0.12");
  }, [activeIndex]);

  const openMobile = useCallback(() => {
    setMobileOpen(true);
    const menu = mobileMenuRef.current;
    if (!menu) return;
    gsap.set(menu, { display: "flex", x: "100%" });
    gsap.set(".h3-mobile-item", { x: 20, opacity: 0 });
    gsap.set(".h3-mobile-cta", { y: 20, opacity: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(menu, { x: "0%", duration: 0.36 });
    tl.to(
      ".h3-mobile-item",
      { x: 0, opacity: 1, duration: 0.32, stagger: 0.06 },
      "-=0.18"
    );
    tl.to(".h3-mobile-cta", { y: 0, opacity: 1, duration: 0.28 }, "-=0.12");
  }, []);

  const closeMobile = useCallback(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: () => {
        setMobileOpen(false);
        setMobileAccordion(null);
        gsap.set(menu, { display: "none" });
      },
    });
    tl.to(".h3-mobile-cta", { y: 20, opacity: 0, duration: 0.16 });
    tl.to(
      ".h3-mobile-item",
      {
        x: 20,
        opacity: 0,
        duration: 0.26,
        stagger: { each: 0.04, from: "end" },
      },
      "-=0.12"
    );
    tl.to(menu, { x: "100%", duration: 0.34 }, "-=0.08");
  }, []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (
        activeIndex !== null &&
        navWrapperRef.current &&
        !navWrapperRef.current.contains(e.target as Node)
      )
        closeDropdown();
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [activeIndex, closeDropdown]);

  /* ─── Dropdown content renderers ─── */
  function renderProductDropdown() {
    return (
      <div className="h3-dropdown-content grid grid-cols-3 gap-4 p-2">
        {/* Left column — product cards */}
        <div className="flex flex-col gap-3">
          {productCards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow"
            >
              <card.Icon />
              <span className="text-[#0b1220] font-semibold text-[16px]">
                {card.title}
              </span>
            </a>
          ))}
        </div>

        {/* Middle column — Platform Overview */}
        <a
          href="#"
          className="bg-white rounded-2xl flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="flex-1 flex items-center justify-center p-6">
            <PlatformIconGrid />
          </div>
          <div className="flex items-center justify-between px-6 pb-5">
            <span className="text-[#0b1220] font-semibold text-[16px]">
              Platform Overview
            </span>
            <ArrowRight />
          </div>
        </a>

        {/* Right column — What's New */}
        <a
          href="#"
          className="bg-white rounded-2xl flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="flex-1 overflow-hidden rounded-t-2xl">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop&crop=faces"
              alt="What's New"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-[#0b1220] font-semibold text-[16px]">
              What&apos;s New
            </span>
            <ArrowRight />
          </div>
        </a>
      </div>
    );
  }

  function renderSolutionsDropdown() {
    return (
      <div className="h3-dropdown-content flex p-6">
        {solutionsColumns.map((col, idx) => (
          <div
            key={col.title}
            className={`flex-1 ${idx > 0 ? "border-l border-gray-200 pl-8" : ""} ${idx < solutionsColumns.length - 1 ? "pr-8" : ""}`}
          >
            <p className="text-[#0b1220] font-semibold text-[15px] mb-5">
              {col.title}
            </p>
            <div className="flex flex-col gap-4">
              {col.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#0b1220] text-[15px] hover:text-[#10B981] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderDropdownContent() {
    if (activeIndex === null) return null;
    const item = navItems[activeIndex];
    if (item.type === "product") return renderProductDropdown();
    if (item.type === "solutions") return renderSolutionsDropdown();
    return null;
  }

  /* ─── Mobile sub‑items ─── */
  function renderMobileSubItems(item: NavItem) {
    if (item.type === "link") return null;

    if (item.type === "product") {
      return (
        <div className="pl-2 pb-4">
          {productCards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="flex items-center gap-4 py-3 h3-mobile-item"
            >
              <card.Icon />
              <span className="text-lg font-semibold text-[#0b1220]">
                {card.title}
              </span>
            </a>
          ))}
        </div>
      );
    }

    if (item.type === "solutions") {
      return (
        <div className="pl-2 pb-6">
          {solutionsColumns.map((col, i) => (
            <div key={i} className="mb-5">
              <p className="text-sm font-medium text-[#374151] mb-3">
                {col.title}
              </p>
              {col.items.map((it) => (
                <a
                  key={it}
                  className="block py-2.5 text-xl font-semibold text-[#0b1220] h3-mobile-item"
                  href="#"
                >
                  {it}
                </a>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return null;
  }

  return (
    <div className="w-full px-6 py-6" style={{ fontFamily: "var(--font-rethink-sans), system-ui, sans-serif" }}>
      <div ref={navWrapperRef} className="max-w-[1200px] mx-auto relative">
        {/* ─── Overlay ─── */}
        <div
          ref={overlayRef}
          onClick={closeDropdown}
          className="hidden fixed inset-0 bg-black/6 z-40"
        />

        {/* ─── Unified nav + dropdown container ─── */}
        <nav className="bg-[#f3f4f5] rounded-2xl relative z-50">
          {/* Top bar */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2">
                <LogoIcon />
                <span className="text-[18px] font-bold text-[#0b1220]">
                  Optimal
                </span>
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, i) => (
                  <button
                    key={item.label}
                    onMouseEnter={() => {
                      if (activeIndex !== null && item.type !== "link")
                        openDropdown(i);
                    }}
                    onClick={() =>
                      item.type === "link"
                        ? undefined
                        : activeIndex === i
                          ? closeDropdown()
                          : openDropdown(i)
                    }
                    className={`text-[15px] font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                      activeIndex === i
                        ? "bg-white shadow-sm text-[#0b1220]"
                        : "bg-transparent text-[#0b1220] hover:bg-white/50"
                    }`}
                  >
                    {item.label}
                    {item.hasMega && (
                      <ChevronDown
                        className={`transition-transform duration-200 ${
                          activeIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-[#0b1220] text-[15px] font-medium hidden md:inline"
              >
                Login
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-b from-[#00c16a] to-[#00a858] text-white font-semibold shadow-md text-[15px]"
              >
                Try for Free
              </a>
              <button
                className="md:hidden"
                onClick={mobileOpen ? closeMobile : openMobile}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M3.9 8a.9.9 0 100 1.8h16.2a.9.9 0 100-1.8H3.9zm0 6.2a.9.9 0 000 1.8h16.2a.9.9 0 100-1.8H3.9z"
                    fill="#0b1220"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ─── Dropdown (expands inside the same container) ─── */}
          <div ref={dropdownRef} className="hidden overflow-hidden p-[16px]">
            <div className="border-t border-gray-200/60 mx-4 p-2" />
            {renderDropdownContent()}
          </div>
        </nav>

        {/* ─── Mobile drawer ─── */}
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 hidden md:hidden z-50 flex-col"
        >
          <div className="absolute inset-0 bg-[#f7f8f8] p-6 overflow-auto flex flex-col">
            {/* Mobile header */}
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <LogoIcon />
                <span className="text-[18px] font-bold text-[#0b1220]">
                  Optimal
                </span>
              </a>
              <button
                onClick={closeMobile}
                className="w-10 h-10 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 4l12 12M16 4L4 16"
                    stroke="#0b1220"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile nav items */}
            <div className="mt-10 flex-1">
              {[...navItems, { label: "Login", type: "link" as const }].map(
                (item, i) => (
                  <div
                    key={item.label}
                    className="border-b border-gray-200/60 h3-mobile-item"
                  >
                    <button
                      onClick={() =>
                        item.type === "link"
                          ? undefined
                          : setMobileAccordion(mobileAccordion === i ? null : i)
                      }
                      className="flex items-center justify-between w-full py-5"
                    >
                      <span className="text-2xl font-semibold text-[#0b1220]">
                        {item.label}
                      </span>
                      {item.type !== "link" && (
                        <ChevronDown
                          className={`text-[#0b1220] transition-transform duration-200 ${
                            mobileAccordion === i ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    <div
                      className="overflow-hidden"
                      style={{
                        maxHeight: mobileAccordion === i ? "800px" : "0px",
                        transition: "max-height 300ms ease",
                      }}
                    >
                      {mobileAccordion === i && renderMobileSubItems(item)}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pb-4">
              <a
                className="block w-full text-center py-4 rounded-full bg-[#00c16a] text-white text-lg font-semibold h3-mobile-cta"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
