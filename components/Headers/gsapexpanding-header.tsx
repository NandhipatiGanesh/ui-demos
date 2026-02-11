//File :- components/Headers/gsapexpanding-header.tsx
"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";

export default function GsapExpandingHeader() {
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    if (timelineRef.current?.isActive()) return;

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });
    timelineRef.current = tl;

    if (!isOpen) {
      // ---- OPEN ----
      // Two lines → X
      tl.to(
        bar1Ref.current,
        {
          top: "50%",
          y: "-50%",
          rotation: 45,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0,
      );
      tl.to(
        bar2Ref.current,
        {
          bottom: "50%",
          y: "50%",
          rotation: -45,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0,
      );

      // Expand the island
      tl.to(
        navRef.current,
        {
          maxWidth: "92rem",
          width: "calc(100% - 1rem)",
          duration: 1,
          ease: "power4.out",
        },
        0,
      );
      tl.to(
        headerRef.current,
        {
          borderRadius: "12px 12px 0 0",
          duration: 0.5,
          ease: "power2.out",
        },
        0,
      );

      // Reveal mega menu
      tl.fromTo(
        menuContentRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        0.15,
      );

      // Stagger in menu columns
      tl.fromTo(
        ".menu-col",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.3,
      );

      // Stagger in menu links
      tl.fromTo(
        ".menu-link",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        },
        0.45,
      );

      // Featured card
      tl.fromTo(
        ".featured-card",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.5,
      );
    } else {
      // ---- CLOSE ----
      // X → Two lines
      tl.to(
        bar1Ref.current,
        {
          top: "6px",
          y: "0%",
          rotation: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0,
      );
      tl.to(
        bar2Ref.current,
        {
          bottom: "6px",
          y: "0%",
          rotation: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0,
      );

      // Fade out content
      tl.to(
        ".menu-link, .menu-col, .featured-card",
        {
          y: -15,
          opacity: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.in",
        },
        0,
      );

      // Collapse mega menu
      tl.to(
        menuContentRef.current,
        {
          height: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0.2,
      );

      // Shrink island back
      tl.to(
        navRef.current,
        {
          maxWidth: "48rem",
          duration: 0.8,
          ease: "power4.out",
        },
        0.25,
      );
      tl.to(
        headerRef.current,
        {
          borderRadius: "12px",
          duration: 0.5,
          ease: "power2.out",
        },
        0.25,
      );
    }

    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] max-w-3xl font-aeonik"
    >
      {/* Header Bar */}
      <div
        ref={headerRef}
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-6 py-3 flex items-center justify-between relative z-10"
      >
        {/* Left - Menu */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div
              ref={bar1Ref}
              className="absolute w-full h-[2px] bg-white rounded-full top-[6px]"
            />
            <div
              ref={bar2Ref}
              className="absolute w-full h-[2px] bg-white rounded-full bottom-[6px]"
            />
          </div>
          <span className="text-base font-medium">Menu</span>
        </button>

        {/* Center - Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-white text-3xl font-bold tracking-wide">
            OSMO
          </span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-5 py-2 rounded-full border border-[#555] text-white text-sm font-medium hover:border-white transition-colors cursor-pointer">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-[#a3e635] text-black text-sm font-medium hover:bg-[#bef264] transition-colors cursor-pointer">
            Join
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        ref={menuContentRef}
        className="overflow-hidden bg-[#1a1a1a] border border-t-0 border-[#2a2a2a] rounded-b-xl"
        style={{ height: 0, opacity: 0 }}
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-5 p-6">
          {/* Column 1 - Our Products */}
          <div className="menu-col border border-[#2a2a2a] rounded-2xl p-8 flex flex-col bg-[#312E2E]/60">
            <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-8">
              Our Products
            </h3>
            <ul className="flex-1">
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a]"
                >
                  The Vault
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a] flex items-center gap-3"
                >
                  Page Transition Course
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    NEW
                  </span>
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a]"
                >
                  Icon Library
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#"
                className="menu-link text-white text-2xl font-medium hover:text-gray-300 transition-colors flex items-center gap-3"
              >
                Easings
                <span className="bg-[#333] text-[#888] text-[10px] font-bold px-2.5 py-1 rounded">
                  WIP
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="menu-col rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-8">
                Explore
              </h3>
              <ul>
                <li className="menu-link">
                  <a
                    href="#"
                    className="block py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a]"
                  >
                    Osmo Showcase
                  </a>
                </li>
                <li className="menu-link">
                  <a
                    href="#"
                    className="py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a] flex items-center"
                  >
                    Collection
                    <sup className="text-[#555] text-xs ml-1">152</sup>
                  </a>
                </li>
                <li className="menu-link">
                  <a
                    href="#"
                    className="block py-4 text-white text-2xl font-medium hover:text-gray-300 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="menu-link flex items-center gap-3 pt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#999] hover:text-white hover:bg-[#333] transition-colors"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#999] hover:text-white hover:bg-[#333] transition-colors"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#999] hover:text-white hover:bg-[#333] transition-colors"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3 - Featured Card */}
          <div className="featured-card menu-col border border-[#2a2a2a] rounded-2xl p-8 flex flex-col items-center text-center justify-center bg-[#312E2E]/60">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#666] text-[11px] font-medium tracking-[0.2em] uppercase">
                Available
              </span>
              <span className="bg-[#7c3aed] text-white text-[10px] font-bold px-2.5 py-1 rounded">
                TODAY
              </span>
            </div>

            <h2 className="text-white text-4xl font-bold leading-tight mb-8">
              Page Transition
              <br />
              Course
            </h2>

            <div className="w-40 h-40 rounded-full bg-[#2a2a2a] overflow-hidden mb-8 flex items-center justify-center relative">
              <div className="w-24 h-16 bg-[#3a3a3a] rounded-md rotate-[-6deg] absolute translate-x-[-4px]" />
              <div className="w-24 h-16 bg-[#444] rounded-md rotate-[6deg] absolute translate-x-[4px]" />
              <div className="w-24 h-16 bg-[#4a4a4a] rounded-md absolute z-10" />
            </div>

            <a
              href="#"
              className="px-7 py-3 border border-[#555] rounded-full text-white text-sm font-medium hover:border-white transition-colors"
            >
              More info
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className="md:hidden flex flex-col px-4 py-4 gap-2 overflow-y-auto"
          style={{ height: "calc(100dvh - 4rem)" }}
        >
          {/* Our Products */}
          <div className="menu-col border border-[#2a2a2a] rounded-2xl p-4 bg-[#312E2E]/60">
            <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-2">
              Our Products
            </h3>
            <ul>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-white text-xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a]"
                >
                  The Vault
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="py-2 text-white text-xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a] flex items-center gap-3"
                >
                  Page Transition Course
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    NEW
                  </span>
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-white text-xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a]"
                >
                  Icon Library
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-white text-xl font-medium hover:text-gray-300 transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="menu-col mt-2 px-2">
            <ul>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-3.5 text-white text-xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a]"
                >
                  Osmo Showcase
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="py-3.5 text-white text-xl font-medium hover:text-gray-300 transition-colors border-b border-[#2a2a2a] flex items-center"
                >
                  Collection
                  <sup className="text-[#555] text-xs ml-1">152</sup>
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-3.5 text-white text-xl font-medium hover:text-gray-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile CTAs */}
          <div className="menu-col mt-auto pt-6 flex flex-col gap-3">
            <button className="menu-link w-full py-3.5 rounded-full bg-[#2a2a2a] text-white text-base font-medium hover:bg-[#333] transition-colors cursor-pointer">
              Member Login
            </button>
            <button className="menu-link w-full py-3.5 rounded-full bg-[#a3e635] text-black text-base font-medium hover:bg-[#bef264] transition-colors cursor-pointer">
              Join Osmo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
