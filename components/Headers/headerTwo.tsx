"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

/* ─── Nav data ─── */
interface SubSection {
  heading?: string;
  items: { name: string; external?: boolean }[];
}

interface FeaturedCard {
  tag: string;
  title: string;
  desc: string;
  img: string;
  linkText: string;
}

interface ContactCard {
  icon: "chat" | "phone" | "community";
  title: string;
  desc: string;
}

interface NavItemMega {
  label: string;
  type: "mega";
  columns: {
    title: string;
    sections: SubSection[];
  }[];
  featured?: FeaturedCard;
}

interface NavItemContact {
  label: string;
  type: "contact";
  cards: ContactCard[];
}

interface NavItemLink {
  label: string;
  type: "link";
}

type NavItem = NavItemMega | NavItemContact | NavItemLink;

const navItems: NavItem[] = [
  {
    label: "Platform",
    type: "mega",
    columns: [
      {
        title: "WordPress highlights",
        sections: [
          {
            items: [
              { name: "Managed hosting for WordPress" },
              { name: "Free site migrations" },
              { name: "Automatic Updates" },
              { name: "Edge caching" },
              { name: "APM tool" },
              { name: "WordPress Add-ons" },
              { name: "Cloudflare integration" },
              { name: "Security & backups" },
              { name: "Expert support" },
            ],
          },
        ],
      },
      {
        title: "Platform extensions",
        sections: [
          {
            items: [{ name: "DevNexora" }, { name: "API" }],
          },
          {
            heading: "Sevalla",
            items: [
              { name: "Application hosting", external: true },
              { name: "Database hosting", external: true },
              { name: "Static site hosting", external: true },
            ],
          },
        ],
      },
    ],
    featured: {
      tag: "What's New",
      title: "Analytics",
      desc: "You can dig deeper into MyNexora site Analytics",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      linkText: "More changelogs",
    },
  },
  {
    label: "Solutions",
    type: "mega",
    columns: [
      {
        title: "By use case",
        sections: [
          {
            items: [
              { name: "WordPress agencies" },
              { name: "Enterprise hosting" },
              { name: "WooCommerce stores" },
              { name: "Multisite hosting" },
              { name: "High-traffic sites" },
            ],
          },
        ],
      },
      {
        title: "By industry",
        sections: [
          {
            items: [
              { name: "Healthcare" },
              { name: "Education" },
              { name: "Finance" },
              { name: "E-commerce" },
              { name: "Media & Publishing" },
            ],
          },
        ],
      },
    ],
    featured: {
      tag: "Case Study",
      title: "Enterprise Migration",
      desc: "How a Fortune 500 company migrated 200+ sites in 48 hours",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      linkText: "Read more case studies",
    },
  },
  {
    label: "Pricing",
    type: "link",
  },
  {
    label: "Resources",
    type: "mega",
    columns: [
      {
        title: "Learn",
        sections: [
          {
            items: [
              { name: "Blog" },
              { name: "Resource center" },
              { name: "Nexora Academy" },
              { name: "Ebooks" },
              { name: "Webinars" },
            ],
          },
        ],
      },
      {
        title: "Developer",
        sections: [
          {
            items: [
              { name: "Documentation", external: true },
              { name: "System status", external: true },
              { name: "Changelog" },
              { name: "API reference", external: true },
            ],
          },
        ],
      },
    ],
    featured: {
      tag: "Featured",
      title: "Speed Optimization",
      desc: "The complete guide to WordPress site speed in 2025",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop",
      linkText: "View all resources",
    },
  },
  {
    label: "Contact",
    type: "contact",
    cards: [
      {
        icon: "chat",
        title: "Contact us",
        desc: "Get in touch with our support team for help with your account.",
      },
      {
        icon: "phone",
        title: "Talk to sales",
        desc: "Discuss your requirements with our enterprise sales team.",
      },
      {
        icon: "community",
        title: "Ask the community",
        desc: "Connect with other users and developers in our community.",
      },
    ],
  },
];

/* ─── Icons ─── */
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 1L5 5L9 1" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      className="ml-[6px] mt-[1px] opacity-40"
    >
      <path
        d="M1 11L11 1M11 1H3M11 1V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIcon({ type }: { type: "chat" | "phone" | "community" }) {
  if (type === "chat") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

/* ─── Component ─── */
export default function HeaderTwo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  /* ── Desktop dropdown open/close ── */
  const openDropdown = useCallback(
    (index: number) => {
      const item = navItems[index];
      if (item.type === "link") {
        setActiveIndex(null);
        return;
      }
      if (isAnimating.current) return;
      isAnimating.current = true;

      const dropdown = dropdownRef.current;
      const overlay = overlayRef.current;
      if (!dropdown || !overlay) return;

      if (activeIndex !== null && activeIndex !== index) {
        setActiveIndex(index);
        gsap.fromTo(
          ".h2-dropdown-content",
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
            onComplete: () => {
              isAnimating.current = false;
            },
          },
        );
        return;
      }

      setActiveIndex(index);

      gsap.set(dropdown, { display: "block", height: 0, opacity: 1 });
      gsap.set(overlay, { display: "block", opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.to(overlay, { opacity: 1, duration: 0.25 });
      tl.to(
        dropdown,
        { height: "auto", duration: 0.4, ease: "power3.inOut" },
        "-=0.2",
      );
      tl.fromTo(
        ".h2-dropdown-content",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.35 },
        "-=0.2",
      );
    },
    [activeIndex],
  );

  const closeDropdown = useCallback(() => {
    if (isAnimating.current || activeIndex === null) return;
    isAnimating.current = true;

    const dropdown = dropdownRef.current;
    const overlay = overlayRef.current;
    if (!dropdown || !overlay) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: () => {
        setActiveIndex(null);
        isAnimating.current = false;
        gsap.set(dropdown, { display: "none" });
        gsap.set(overlay, { display: "none" });
      },
    });

    tl.to(".h2-dropdown-content", { opacity: 0, y: 8, duration: 0.2 });
    tl.to(
      dropdown,
      { height: 0, duration: 0.3, ease: "power3.inOut" },
      "-=0.1",
    );
    tl.to(overlay, { opacity: 0, duration: 0.2 }, "-=0.15");
  }, [activeIndex]);

  /* ── Mobile menu ── */
  const openMobile = useCallback(() => {
    setMobileOpen(true);
    const menu = mobileMenuRef.current;
    if (!menu) return;

    gsap.set(menu, { display: "flex", x: "100%" });
    gsap.set(".h2-mobile-item", { x: 30, opacity: 0 });
    gsap.set(".h2-mobile-bottom", { y: 20, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(menu, { x: "0%", duration: 0.4, ease: "power3.inOut" });
    tl.to(
      ".h2-mobile-item",
      { x: 0, opacity: 1, duration: 0.35, stagger: 0.05 },
      "-=0.2",
    );
    tl.to(".h2-mobile-bottom", { y: 0, opacity: 1, duration: 0.3 }, "-=0.1");
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

    tl.to(".h2-mobile-bottom", { y: 20, opacity: 0, duration: 0.2 });
    tl.to(
      ".h2-mobile-item",
      {
        x: 30,
        opacity: 0,
        duration: 0.25,
        stagger: { each: 0.03, from: "end" },
      },
      "-=0.1",
    );
    tl.to(menu, { x: "100%", duration: 0.35, ease: "power3.inOut" }, "-=0.1");
  }, []);

  /* ── Click outside to close ── */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        activeIndex !== null &&
        navWrapperRef.current &&
        !navWrapperRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [activeIndex, closeDropdown]);

  /* ── Render dropdown content ── */
  function renderDropdown() {
    if (activeIndex === null) return null;
    const item = navItems[activeIndex];

    if (item.type === "contact") {
      return (
        <div className="h2-dropdown-content grid grid-cols-3 gap-0 px-10 py-10">
          {item.cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="group flex items-start gap-4 px-6 py-5 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/[0.06] text-[#c4c4e0] flex items-center justify-center group-hover:text-white group-hover:bg-white/[0.1] transition-colors">
                <ContactIcon type={card.icon} />
              </div>
              <div>
                <p className="text-white font-semibold text-[15px] mb-[6px] group-hover:text-[#c9a0ff] transition-colors">
                  {card.title}
                </p>
                <p className="text-[#7c7c99] text-[13px] leading-[1.5]">
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      );
    }

    if (item.type === "mega") {
      return (
        <div className="h2-dropdown-content flex px-10 py-10 gap-0">
          {/* Columns */}
          {item.columns.map((col, colIdx) => (
            <div
              key={col.title}
              className="flex-1"
              style={{ minWidth: colIdx === 0 ? "280px" : "220px" }}
            >
              <h3 className="text-[15px] font-bold text-white mb-6">
                {col.title}
              </h3>
              {col.sections.map((section, sIdx) => (
                <div key={sIdx} className={sIdx > 0 ? "mt-6" : ""}>
                  {section.heading && (
                    <h4 className="text-[15px] font-bold text-white mb-4">
                      {section.heading}
                    </h4>
                  )}
                  <div className="flex flex-col gap-[14px]">
                    {section.items.map((sub) => (
                      <a
                        key={sub.name}
                        href="#"
                        className="flex items-center text-[14px] text-[#b0b0c8] hover:text-white transition-colors duration-150"
                      >
                        {sub.name}
                        {sub.external && <ExternalArrow />}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Featured card */}
          {item.featured && (
            <div className="w-[300px] flex-shrink-0 pl-10 border-l border-white/[0.08]">
              <h3 className="text-[15px] font-bold text-white mb-5">
                {item.featured.tag}
              </h3>
              <div className="rounded-xl overflow-hidden mb-4 bg-white/[0.04]">
                <div className="p-4 pb-0">
                  <h4 className="text-white text-[18px] font-semibold mb-3">
                    {item.featured.title}
                  </h4>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.featured.img}
                  alt={item.featured.title}
                  className="w-full h-[150px] object-cover rounded-b-lg"
                />
              </div>
              <p className="text-[#7c7c99] text-[13px] leading-[1.6] mb-4">
                {item.featured.desc}
              </p>
              <a
                href="#"
                className="text-[#c9a0ff] text-[13px] font-medium hover:text-[#dbb8ff] transition-colors flex items-center gap-1"
              >
                {item.featured.linkText}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-[1px]"
                >
                  <path
                    d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      );
    }

    return null;
  }

  /* ── Mobile accordion content ── */
  function renderMobileSubItems(item: NavItem) {
    if (item.type === "link") return null;

    if (item.type === "contact") {
      return (
        <div className="flex flex-col gap-2 pb-4 pl-1">
          {item.cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="flex items-center gap-3 py-2 text-[#c4c4e0] hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.06] text-[#c4c4e0] flex items-center justify-center flex-shrink-0">
                <ContactIcon type={card.icon} />
              </div>
              <span className="text-[15px]">{card.title}</span>
            </a>
          ))}
        </div>
      );
    }

    if (item.type === "mega") {
      return (
        <div className="flex flex-col gap-5 pb-4 pl-1">
          {item.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-bold text-[#7c7c99] tracking-[0.04em] mb-3">
                {col.title}
              </p>
              {col.sections.map((section, sIdx) => (
                <div key={sIdx} className={sIdx > 0 ? "mt-3" : ""}>
                  {section.heading && (
                    <p className="text-[13px] font-bold text-[#b0b0c8] mb-2 mt-2">
                      {section.heading}
                    </p>
                  )}
                  {section.items.map((sub) => (
                    <a
                      key={sub.name}
                      href="#"
                      className="flex items-center py-[6px] text-[15px] text-[#c4c4e0] hover:text-white transition-colors"
                    >
                      {sub.name}
                      {sub.external && <ExternalArrow />}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-[Circular]">
      {/* Backdrop overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/40 z-40 hidden"
        onClick={closeDropdown}
      />

      {/* ─── Navbar ─── */}
      <div
        ref={navWrapperRef}
        className="w-full flex justify-center px-4 pt-4 relative z-50"
      >
        <nav
          ref={navBarRef}
          className={`w-full max-w-[1200px] bg-[#181516] relative transition-[border-radius] duration-200 ${
            activeIndex !== null ? "rounded-t-2xl" : "rounded-2xl"
          }`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between h-[64px] px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-white font-bold text-[18px] tracking-[-0.01em]">
                Nexora
              </span>
            </a>

            {/* Desktop nav items */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() =>
                    item.type === "link"
                      ? undefined
                      : activeIndex === i
                        ? closeDropdown()
                        : openDropdown(i)
                  }
                  onMouseEnter={() => {
                    if (activeIndex !== null && item.type !== "link") {
                      openDropdown(i);
                    }
                  }}
                  className={`flex items-center gap-[5px] px-4 py-[7px] rounded-full text-[14px] font-medium transition-colors duration-200 ${
                    activeIndex === i
                      ? "bg-white/[0.12] text-white"
                      : "text-[#c4c4e0] hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.type !== "link" && (
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        activeIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-[#c4c4e0] hover:text-white transition-colors">
                <SearchIcon />
              </button>
              <a
                href="#"
                className="text-[#c4c4e0] hover:text-white text-[14px] font-medium transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                className="px-5 py-[8px] rounded-full bg-gradient-to-r from-[#7e5cef] to-[#6d4de0] text-white text-[14px] font-semibold hover:from-[#8e6ff5] hover:to-[#7d5df0] transition-all duration-200 shadow-lg shadow-[#7e5cef]/25"
              >
                Try for free
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
              onClick={mobileOpen ? closeMobile : openMobile}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.9 8a.9.9 0 100 1.8h16.2a.9.9 0 100-1.8H3.9zm0 6.2a.9.9 0 000 1.8h16.2a.9.9 0 100-1.8H3.9z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* ─── Desktop dropdown (absolute, overlays page) ─── */}
        <div
          ref={dropdownRef}
          className="hidden absolute top-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1200px] bg-[#181516] rounded-b-2xl overflow-hidden z-[51]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {renderDropdown()}
        </div>
      </div>

      {/* ─── Mobile menu ─── */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-[60] bg-[#181516] hidden flex-col lg:hidden"
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between h-[64px] px-6 flex-shrink-0">
          <a href="#" className="flex items-center gap-2">
            <span className="text-white font-bold text-[18px]">Nexora</span>
          </a>
          <button
            onClick={closeMobile}
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Search bar */}
        <div className="px-6 pb-4 h2-mobile-item">
          <div className="flex items-center gap-3 bg-white/[0.06] rounded-xl px-4 py-3">
            <SearchIcon className="text-[#7c7c99] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white text-[15px] outline-none w-full placeholder-[#7c7c99]"
            />
          </div>
        </div>

        {/* Mobile nav items */}
        <div className="flex-1 overflow-y-auto px-6 scrollbar-hide">
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className="h2-mobile-item border-b border-white/[0.06]"
            >
              <button
                className="flex items-center justify-between w-full py-4 text-left"
                onClick={() =>
                  item.type === "link"
                    ? undefined
                    : setMobileAccordion(mobileAccordion === i ? null : i)
                }
              >
                <span className="text-white text-[17px] font-semibold">
                  {item.label}
                </span>
                {item.type !== "link" && (
                  <ChevronDown
                    className={`text-[#7c7c99] transition-transform duration-200 ${
                      mobileAccordion === i ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: mobileAccordion === i ? "600px" : "0px",
                  opacity: mobileAccordion === i ? 1 : 0,
                }}
              >
                {renderMobileSubItems(item)}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile bottom */}
        <div className="h2-mobile-bottom flex flex-col gap-3 px-6 pb-8 pt-4 flex-shrink-0">
          <a
            href="#"
            className="text-center py-3 rounded-xl bg-white/[0.06] text-white text-[15px] font-semibold hover:bg-white/[0.1] transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="text-center py-3 rounded-xl bg-gradient-to-r from-[#7e5cef] to-[#6d4de0] text-white text-[15px] font-semibold shadow-lg shadow-[#7e5cef]/25"
          >
            Try for free
          </a>
        </div>
      </div>

      {/* ─── Demo page content ─── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20">
        <div className="text-center">
          <h1 className="text-[48px] font-bold text-[#1a0a2e] tracking-[-0.03em] leading-tight">
            The fastest, most secure
            <br />
            cloud platform
          </h1>
          <p className="text-[18px] text-[#6b6b80] mt-4 max-w-[520px] mx-auto leading-relaxed">
            Premium managed hosting for ambitious projects. Built for speed,
            designed for scale.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="#"
              className="px-7 py-[12px] rounded-full bg-[#1a0a2e] text-white text-[15px] font-semibold hover:bg-[#2a1a4e] transition-colors"
            >
              Get started
            </a>
            <a
              href="#"
              className="px-7 py-[12px] rounded-full border-2 border-[#1a0a2e] text-[#1a0a2e] text-[15px] font-semibold hover:bg-[#1a0a2e] hover:text-white transition-colors"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
