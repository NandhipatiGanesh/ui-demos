"use client";

import Link from "next/link";
import { Epilogue } from "next/font/google";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const epilogue = Epilogue({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const plans = [
    {
        name: "Global Lite",
        price: "$10",
        period: "/Month",
        features: [
            "Global Health Coverage IN 50L-3Cr",
            "USA Health Advisor",
            "Discounted USA Medication",
            "Visa Assistance",
            "Preventative Genetic Screening",
            "Global Concierge Service",
        ],
    },
    {
        name: "Global Family",
        price: "$45",
        period: "/Month",
        features: [
            "Global Health Coverage IN 50L-3Cr",
            "USA Health Advisor",
            "Discounted USA Medication",
            "Visa Assistance",
            "Preventative Genetic Screening",
            "Global Concierge Service",
        ],
    },
];

export default function PricingOne() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Set initial states
        gsap.set(".pricing-title, .pricing-subtitle, .pricing-card, .card-item", {
            opacity: 0,
            y: 30,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Animate title
        tl.to(".pricing-title", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
        });

        // Animate subtitle
        tl.to(".pricing-subtitle", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
        }, "-=0.5");

        // Animate cards with stagger
        tl.to(".pricing-card", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        }, "-=0.3");

        // Animate card children with stagger
        tl.to(".card-item", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
        }, "-=0.5");

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className={`py-20 px-6 ${epilogue.className}`}
            style={{ backgroundColor: "#181c24" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="pricing-title text-4xl md:text-5xl font-semibold text-white mb-5">
                        Global Plans
                    </h2>
                    <p className="pricing-subtitle text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        World&apos;s Best USA Healthcare, Now Accessible and Affordable with
                        <br />
                        MediPocket Global Membership Plan
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="pricing-card rounded-4xl p-8 md:p-10"
                            style={{
                                backgroundColor: "#1f2533",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                            }}
                        >
                            {/* Plan Name */}
                            <h3 className="card-item text-xl md:text-2xl font-semibold text-white mb-6">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="card-item mb-8">
                                <p className="text-gray-500 text-sm mb-1">Starting at</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl md:text-5xl font-semibold text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-2xl md:text-3xl text-white">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-10">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="card-item flex items-start gap-2 text-gray-300 text-sm"
                                    >
                                        <span className="text-gray-500 mt-1.5">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="#"
                                className="card-item inline-flex items-center justify-center w-48 py-4 rounded-full text-sm font-medium transition-all duration-200 bg-white text-[#1f2533] hover:bg-transparent hover:text-white border border-transparent hover:border-white"
                                style={{
                                    border: "1px solid rgba(255, 255, 255, 0.3)",
                                }}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
