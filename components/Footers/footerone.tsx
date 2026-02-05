import Link from "next/link";

// Social Media Icons
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const YoutubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const PinterestIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

// Country Flag Components
const IndiaFlag = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
        <svg viewBox="0 0 36 36" className="w-full h-full">
            <rect y="0" width="36" height="12" fill="#FF9933"/>
            <rect y="12" width="36" height="12" fill="#FFFFFF"/>
            <rect y="24" width="36" height="12" fill="#138808"/>
            <circle cx="18" cy="18" r="3.5" fill="#000080"/>
            <circle cx="18" cy="18" r="2.5" fill="#FFFFFF"/>
        </svg>
    </div>
);

const SingaporeFlag = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
        <svg viewBox="0 0 36 36" className="w-full h-full">
            <rect y="0" width="36" height="18" fill="#ED2939"/>
            <rect y="18" width="36" height="18" fill="#FFFFFF"/>
            <path d="M8 6a6 6 0 0 1 0 12 6 6 0 0 0 0-12" fill="#FFFFFF"/>
            <g fill="#FFFFFF">
                <polygon points="12,4 12.5,5.5 14,5.5 12.75,6.5 13.25,8 12,7 10.75,8 11.25,6.5 10,5.5 11.5,5.5"/>
                <polygon points="15,6 15.4,7 16.5,7 15.5,7.7 15.9,8.7 15,8 14.1,8.7 14.5,7.7 13.5,7 14.6,7"/>
                <polygon points="16,9 16.4,10 17.5,10 16.5,10.7 16.9,11.7 16,11 15.1,11.7 15.5,10.7 14.5,10 15.6,10"/>
                <polygon points="15,12 15.4,13 16.5,13 15.5,13.7 15.9,14.7 15,14 14.1,14.7 14.5,13.7 13.5,13 14.6,13"/>
                <polygon points="12,13 12.5,14.5 14,14.5 12.75,15.5 13.25,17 12,16 10.75,17 11.25,15.5 10,14.5 11.5,14.5"/>
            </g>
        </svg>
    </div>
);

const UAEFlag = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
        <svg viewBox="0 0 36 36" className="w-full h-full">
            <rect x="0" y="0" width="10" height="36" fill="#00732F"/>
            <rect x="10" y="0" width="26" height="12" fill="#00732F"/>
            <rect x="10" y="12" width="26" height="12" fill="#FFFFFF"/>
            <rect x="10" y="24" width="26" height="12" fill="#000000"/>
            <rect x="0" y="0" width="10" height="36" fill="#FF0000"/>
        </svg>
    </div>
);

const USAFlag = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
        <svg viewBox="0 0 36 36" className="w-full h-full">
            <rect width="36" height="36" fill="#B22234"/>
            <g fill="#FFFFFF">
                <rect y="2.77" width="36" height="2.77"/>
                <rect y="8.31" width="36" height="2.77"/>
                <rect y="13.85" width="36" height="2.77"/>
                <rect y="19.38" width="36" height="2.77"/>
                <rect y="24.92" width="36" height="2.77"/>
                <rect y="30.46" width="36" height="2.77"/>
            </g>
            <rect width="14.4" height="19.38" fill="#3C3B6E"/>
            <g fill="#FFFFFF" fontSize="3">
                <text x="2" y="4">*</text><text x="5" y="4">*</text><text x="8" y="4">*</text><text x="11" y="4">*</text>
                <text x="3.5" y="7">*</text><text x="6.5" y="7">*</text><text x="9.5" y="7">*</text>
                <text x="2" y="10">*</text><text x="5" y="10">*</text><text x="8" y="10">*</text><text x="11" y="10">*</text>
                <text x="3.5" y="13">*</text><text x="6.5" y="13">*</text><text x="9.5" y="13">*</text>
                <text x="2" y="16">*</text><text x="5" y="16">*</text><text x="8" y="16">*</text><text x="11" y="16">*</text>
            </g>
        </svg>
    </div>
);

// Logo Component
const OmnicureLogo = () => (
    <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="white">
            <circle cx="20" cy="8" r="5"/>
            <ellipse cx="8" cy="22" rx="4" ry="8" transform="rotate(-30 8 22)"/>
            <ellipse cx="32" cy="22" rx="4" ry="8" transform="rotate(30 32 22)"/>
            <ellipse cx="14" cy="32" rx="4" ry="8" transform="rotate(-60 14 32)"/>
            <ellipse cx="26" cy="32" rx="4" ry="8" transform="rotate(60 26 32)"/>
            <rect x="18" y="10" width="4" height="18" rx="2"/>
        </svg>
        <span className="text-white text-2xl font-semibold tracking-wide">Omnicure</span>
    </div>
);

export default function Footerone() {
    const usefulLinks = [
        { label: "Home", href: "#" },
        { label: "Second Opinion", href: "#" },
        { label: "Treatment in USA", href: "#" },
        { label: "Clinal Trial", href: "#" },
        { label: "USA Hospital", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Blogs", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Medical Intake Form", href: "#" },
    ];

    const legalLinks = [
        { label: "Privacy Policies", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "License", href: "#" },
        { label: "Resources", href: "#" },
        { label: "Downloads", href: "#" },
    ];

    const contactInfo = [
        { flag: <IndiaFlag />, title: "India Office :", location: "Gurugram, Hariyana" },
        { flag: <SingaporeFlag />, title: "Singapore Office :", location: "68 Circular Rd., Singapore" },
        { flag: <UAEFlag />, title: "UAE Office :", location: "Dubai, UAE" },
        { flag: <USAFlag />, title: "USA Office :", location: "Los Angeles, California, US" },
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, href: "#", label: "Facebook" },
        { icon: <InstagramIcon />, href: "#", label: "Instagram" },
        { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
        { icon: <YoutubeIcon />, href: "#", label: "YouTube" },
        { icon: <PinterestIcon />, href: "#", label: "Pinterest" },
    ];

    return (
        <footer className="bg-[#1e3932] text-white font-[Circular]">
            {/* Top Section - Logo and Social Icons */}
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">
                    <OmnicureLogo />

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e3932] hover:bg-white/90 transition-colors"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/20"></div>

                {/* Main Content - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12">
                    {/* About Medipocket */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">About Medipocket</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            MediPocket is a cross-border care USA platform bridging the gap in speciality care
                            by connecting patients around the world from their homes to the top hospitals and
                            specialists in the USA.
                        </p>
                    </div>

                    {/* Useful Link */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Useful Link</h3>
                        <ul className="space-y-3">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    {contact.flag}
                                    <div>
                                        <p className="text-white text-sm font-medium">{contact.title}</p>
                                        <p className="text-white/70 text-xs">{contact.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Email Button */}
                        <Link
                            href="mailto:health@omnicure.com"
                            className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-[#2d4a44] rounded-lg hover:bg-[#3a5c55] transition-colors"
                        >
                            <MailIcon />
                            <span className="text-sm">health@omnicure.com</span>
                        </Link>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="h-px bg-white/20"></div>

                {/* Copyright */}
                <div className="py-6">
                    <p className="text-white/70 text-sm">
                        <span className="mr-2">&copy;</span>
                        2023 Omnicure USA. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
