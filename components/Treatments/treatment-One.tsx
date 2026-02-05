"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Icons
const OncologyIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M32 8c-4 0-8 4-8 10s4 10 8 10 8-4 8-10-4-10-8-10z" />
        <path d="M24 18c-6 0-10 4-10 8s4 6 6 6" />
        <path d="M40 18c6 0 10 4 10 8s-4 6-6 6" />
        <path d="M32 28v20" />
        <path d="M26 36l6-4 6 4" />
        <circle cx="44" cy="12" r="4" />
        <path d="M44 16v6" />
        <path d="M41 19h6" />
    </svg>
);

const EndocrinologyIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M20 16h24v8H20z" />
        <path d="M24 24v4h16v-4" />
        <path d="M28 28v24c0 4-8 4-8 0V40" />
        <path d="M36 28v24c0 4 8 4 8 0V40" />
        <circle cx="32" cy="12" r="4" />
    </svg>
);

const InfertilityIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <ellipse cx="24" cy="32" rx="12" ry="16" />
        <path d="M36 32c8-4 16 0 16 8s-8 12-16 8" />
        <circle cx="20" cy="28" r="3" />
        <path d="M48 24c4-4 8-2 8 4" />
    </svg>
);

const MentalHealthIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M16 32c0-12 8-20 16-20s16 8 16 20c0 8-4 14-8 16v8H24v-8c-4-2-8-8-8-16z" />
        <path d="M24 28c2-2 4-2 8 2s6 4 8 2" />
        <path d="M20 36h24" />
        <circle cx="26" cy="32" r="2" fill="currentColor" />
        <circle cx="38" cy="32" r="2" fill="currentColor" />
    </svg>
);

const CardiologyIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M32 52s-20-12-20-28c0-8 6-12 12-12 4 0 8 4 8 4s4-4 8-4c6 0 12 4 12 12 0 16-20 28-20 28z" />
        <path d="M20 32h8l4-8 4 16 4-8h8" />
    </svg>
);

const NeurologyIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M24 56V44c-8-2-12-10-12-18 0-10 8-18 20-18s20 8 20 18c0 8-4 16-12 18v12" />
        <path d="M20 20c4 4 8 4 12 0s8-4 12 0" />
        <path d="M16 32h8M40 32h8" />
        <circle cx="28" cy="28" r="2" fill="currentColor" />
        <circle cx="36" cy="28" r="2" fill="currentColor" />
    </svg>
);

const RheumatologyIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M32 12v40" />
        <path d="M32 20h-8c-4 0-4 8 0 8h8" />
        <path d="M32 28h8c4 0 4 8 0 8h-8" />
        <path d="M32 36h-8c-4 0-4 8 0 8h8" />
        <circle cx="20" cy="24" r="3" />
        <circle cx="44" cy="32" r="3" />
        <circle cx="20" cy="40" r="3" />
    </svg>
);

const PlasticSurgeryIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M20 16c0 0-4 8-4 20s4 16 16 16 16-4 16-16-4-20-4-20" />
        <path d="M20 16c0-4 4-8 12-8s12 4 12 8" />
        <path d="M28 28c0 4 8 4 8 0" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <circle cx="40" cy="24" r="2" fill="currentColor" />
        <path d="M48 20l8-8M52 20l4-4" />
    </svg>
);

const RareDiseasesIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="32" cy="32" r="8" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
        <path d="M32 20v-8M32 52v-8" />
        <path d="M20 32h-8M52 32h-8" />
        <circle cx="20" cy="20" r="4" />
        <circle cx="44" cy="20" r="4" />
        <circle cx="20" cy="44" r="4" />
        <circle cx="44" cy="44" r="4" />
        <path d="M23 23l5 5M41 23l-5 5M23 41l5-5M41 41l-5-5" />
    </svg>
);

const SurrogacyIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="32" cy="32" r="16" />
        <circle cx="32" cy="32" r="8" />
        <path d="M32 24v-4M32 44v-4" />
        <path d="M24 32h-4M44 32h-4" />
        <path d="M32 28a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="none" stroke="#10b981" strokeWidth="2" />
        <circle cx="32" cy="32" r="2" fill="#ef4444" />
    </svg>
);

const treatments = [
    { name: "Oncology", icon: <OncologyIcon /> },
    { name: "Endocrinology", icon: <EndocrinologyIcon /> },
    { name: "Infertility", icon: <InfertilityIcon /> },
    { name: "Mental Health", icon: <MentalHealthIcon /> },
    { name: "Cardiology", icon: <CardiologyIcon /> },
    { name: "Neurology", icon: <NeurologyIcon /> },
    { name: "Rheumatology", icon: <RheumatologyIcon /> },
    { name: "Plastic Surgery", icon: <PlasticSurgeryIcon /> },
    { name: "Rare Diseases", icon: <RareDiseasesIcon /> },
    { name: "Surrogacy", icon: <SurrogacyIcon /> },
];

export default function TreatmentOne() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.set(".treatment-title, .treatment-card", {
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

        tl.to(".treatment-title", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
        });

        tl.to(".treatment-card", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
        }, "-=0.4");

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="py-20 px-6 font-[Circular]"
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="mb-12">
                    <h2 className="treatment-title text-3xl md:text-4xl font-bold text-[#1e3932] leading-snug">
                        Explore Treatments
                        <br />
                        across specialties
                    </h2>
                </div>

                {/* Treatment Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {treatments.map((treatment, index) => (
                        <div
                            key={index}
                            className="treatment-card bg-[#f9f9f9] rounded-3xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                            style={{
                                
                                minHeight: "180px",
                            }}
                        >
                            <div className="text-[#1e3932]">
                                {treatment.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 text-center">
                                {treatment.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
