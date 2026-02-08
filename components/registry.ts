import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export interface ComponentEntry {
  name: string;
  category: string;
  route: string;
  component: ComponentType;
}

const registry: ComponentEntry[] = [
  {
    name: "Apple Header",
    category: "Headers",
    route: "/apple-nav-one",
    component: dynamic(() => import("@/components/Headers/apple-headerOne")),
  },
  {
    name: "Apple Accordion",
    category: "Accordions",
    route: "/apple-accordion-one",
    component: dynamic(
      () => import("@/components/Accordions/apple-accordionOne")
    ),
  },
  {
    name: "FAQ Section",
    category: "FAQs",
    route: "/faq-one",
    component: dynamic(() => import("@/components/FAQs/faqOne")),
  },
  {
    name: "Footer One",
    category: "Footers",
    route: "/footer-one",
    component: dynamic(() => import("@/components/Footers/footerone")),
  },
  {
    name: "Footer Two",
    category: "Footers",
    route: "/footer-two",
    component: dynamic(() => import("@/components/Footers/footerTwo")),
  },
  {
    name: "Pricing Section",
    category: "Pricing",
    route: "/pricing-one",
    component: dynamic(
      () => import("@/components/PricingSections/pricing-One")
    ),
  },
  {
    name: "Treatments Grid",
    category: "Sections",
    route: "/treatments",
    component: dynamic(() => import("@/components/Treatments/treatment-One")),
  },
  {
    name: "Feature Perks",
    category: "Sections",
    route: "/featuer-perks",
    component: dynamic(() => import("@/components/features-persks")),
  },
  {
    name: "Down Scroll Effect",
    category: "Scroll Effects",
    route: "/down-scroll",
    component: dynamic(
      () => import("@/components/Downscrolleffect/downscroll")
    ),
  },
  {
    name: "Mega Menu Header",
    category: "Headers",
    route: "/header-two",
    component: dynamic(() => import("@/components/Headers/headerTwo")),
  },
  {
    name: "Mega Menu Header V3",
    category: "Headers",
    route: "/header-three",
    component: dynamic(() => import("@/components/Headers/headerThree")),
  },

  
  {
    name: "Hero Testimonial",
    category: "Testimonials",
    route: "/testimonial",
    component: dynamic(
      () => import("@/components/Testimonials/hero-testimonial")
    ),
  },
  {
    name: "Button Collection",
    category: "Buttons",
    route: "/button-one",
    component: dynamic(() => import("@/components/buttons/buttonone")),
  },
];

export default registry;
