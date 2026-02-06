"use client";

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const footerColumns = [
  {
    title: "Products",
    links: [
      "Cloud Hosting",
      "App Platform",
      "Managed Databases",
      "Static Sites",
      "Pricing",
    ],
  },
  {
    title: "Features",
    links: [
      "Global CDN",
      "Developer API",
      "24/7 Support",
      "One-click migrations",
      "Performance monitoring",
      "Dev tools",
      "Edge functions",
      "Plan add-ons",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Enterprise",
      "Agencies",
      "E-commerce",
      "Small business",
      "Non-profits",
      "High-traffic sites",
      "Case studies",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "Changelog",
      "Blog",
      "Newsletter",
      "Knowledge base",
      "Developer tools",
      "Comparisons",
      "Partner directory",
      "System status",
      "All resources",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Why choose us",
      "Careers",
      "Partners",
      "Research program",
      "Affiliate program",
      "Press",
      "Security and trust",
      "Contact us",
    ],
  },
];

const socialIcons = [
  {
    name: "GitHub",
    path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
  },
  {
    name: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
  },
  {
    name: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export default function FooterTwo() {
  return (
    <footer className={`${lexend.className} w-full pt-10 pl-2 pr-2 md:pl-10 md:pr-10`}>
      {/* Links Section */}
      <div className="bg-[#f4ede8] rounded-t-[24px] px-6 sm:px-2 lg:px-4 pt-12 pb-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Desktop: 5 columns */}
          <div className="hidden md:grid md:grid-cols-5 gap-x-6 lg:gap-x-10">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-[10px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] font-light text-[#3c3c3c] hover:text-[#1a1a1a] transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile: 2 columns, stacked */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:hidden">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">
                  {column.title}
                </h4>
                <ul className="space-y-[8px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] font-light text-[#3c3c3c] hover:text-[#1a1a1a] transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f4ede8] px-6 sm:px-10 lg:px-14 pb-2">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#2d2219] rounded-[14px] px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Logo + Social */}
            <div className="flex items-center gap-5">
              {/* Brand Logo */}
              <span className="text-white text-[20px] font-bold tracking-[-0.02em] mr-2">
                Cloudora
              </span>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.name}
                    href="#"
                    className="text-[#a89a8e] hover:text-white transition-colors duration-200"
                    aria-label={icon.name}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Language Selector */}
            <button className="flex items-center gap-2 px-5 py-[7px] rounded-full border border-[#5c4f43] text-[#d4c8bc] text-[13px] font-light hover:border-[#8a7d71] transition-colors duration-200">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              English
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#f4ede8] px-6 sm:px-10 lg:px-14 pb-6 pt-4">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-light text-[#6b5e52]">
            &copy; 2024 Cloudora Inc. All rights reserved. Cloudora&reg; is
            a registered trademark.{" "}
            <a
              href="#"
              className="font-medium text-[#3c3c3c] hover:text-[#1a1a1a] underline transition-colors duration-200"
            >
              Legal information.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
