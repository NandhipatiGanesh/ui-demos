"use client";

import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeaderOne() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (href: string) => () => {
    if (pathname === href) return;

    const wrapper = document.querySelector(".page-transition") as
      | HTMLElement
      | null;
    const path = document.querySelector(".page-transition-path") as
      | SVGPathElement
      | null;

    if (!wrapper || !path) {
      router.push(href);
      return;
    }

    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    gsap.set(wrapper, { opacity: 1 });
    gsap.set(path, { attr: { d: start } });
    gsap.to(path, {
      attr: { d: end },
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => router.push(href),
    });
  };

  return (
    <>
      <div
        className={`z-200   w-full flex items-center justify-between py-6 px-8 bg-white shadow-md ${dmSans.className} `}
      >
        <ul className="flex gap-8 text-gray-800 font-bold">
          <li className="cursor-pointer" onClick={handleNavigate("/")}>
            Home
          </li>
          <li className="cursor-pointer" onClick={handleNavigate("/featuer-perks")}>
            Demos
          </li>
          <li className="cursor-pointer" onClick={handleNavigate("/about")}>
            About
          </li>
          <li className="cursor-pointer" onClick={handleNavigate("/contact")}>
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}
