"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import registry from "@/components/registry";

export default function Breadcrumb() {
  const pathname = usePathname();
  const entry = registry.find((e) => e.route === pathname);

  if (!entry) return null;

  return (
    <nav className="fixed bottom-5 right-5 z-50 font-[Circular]">
      <div className="flex items-center gap-1.5 text-[13px] bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg shadow-black/[0.08] border border-black/[0.06]">
        <Link
          href="/"
          className="text-[#0071e3] hover:underline transition-colors"
        >
          Home
        </Link>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          className="mx-0.5"
        >
          <path
            d="M1 1l3.5 3.5L1 8"
            stroke="#86868b"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#86868b]">{entry.category}</span>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          className="mx-0.5"
        >
          <path
            d="M1 1l3.5 3.5L1 8"
            stroke="#86868b"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#1d1d1f] font-medium">{entry.name}</span>
      </div>
    </nav>
  );
}
