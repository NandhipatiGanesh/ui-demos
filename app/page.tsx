"use client";

import Link from "next/link";
import registry from "@/components/registry";

const categoryColors: Record<string, string> = {
  Headers: "bg-blue-50 text-blue-600",
  Accordions: "bg-purple-50 text-purple-600",
  FAQs: "bg-amber-50 text-amber-600",
  Footers: "bg-emerald-50 text-emerald-600",
  Pricing: "bg-rose-50 text-rose-600",
  Sections: "bg-cyan-50 text-cyan-600",
  "Scroll Effects": "bg-indigo-50 text-indigo-600",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-[Circular]">
      {/* Header */}
      <div className="px-6 md:px-10 pt-12 pb-8 max-w-[1400px] mx-auto">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[#1d1d1f] tracking-[-0.03em]">
          UI Components
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#86868b] mt-2 tracking-[-0.01em]">
          Click any component to view the full interactive demo.
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-10 pb-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {registry.map((entry) => {
            const Component = entry.component;
            return (
              <Link
                key={entry.route}
                href={entry.route}
                className="group block"
              >
                <div className="bg-white rounded-[20px] overflow-hidden border border-black/[0.04] hover:shadow-lg hover:shadow-black/[0.06] transition-shadow duration-300">
                  {/* Preview Container */}
                  <div className="relative h-[320px] overflow-hidden bg-white">
                    <div
                      className="absolute top-0 left-0 origin-top-left pointer-events-none"
                      style={{
                        transform: "scale(0.35)",
                        width: "285.7%",
                        height: "285.7%",
                      }}
                    >
                      <Component />
                    </div>
                    {/* Fade overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Info Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-t border-black/[0.04]">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                          categoryColors[entry.category] ||
                          "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {entry.category}
                      </span>
                      <span className="text-[15px] font-semibold text-[#1d1d1f]">
                        {entry.name}
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-0.5 transition-all duration-200"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
