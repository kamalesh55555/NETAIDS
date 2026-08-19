// nctaids-main/src/components/conference/Navbar.tsx
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "eventInfo", href: "#about" },
  { key: "schedule", href: "#schedule" },
  { key: "collegeInfo", href: "#college-info" },
  { key: "contact", href: "#contact" },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // 1. Handle External Routes (e.g., /publication, /committee)
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo(0, 0); // <--- ADDED: Forces page to start at the top
      return;
    }

    // 2. Handle Hash Links (e.g., #contact)
    const sectionId = href.substring(1);

    // If we are already on the home page, just scroll to the section
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // If we are on another page, navigate home first, then scroll
    navigate("/");
    window.scrollTo(0, 0); // Optional: Reset to top before scrolling to section
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  // Check if a link is currently active
  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return location.pathname === href;
    }
    return false;
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/[0.03] py-1" 
          : "bg-transparent py-4"
      }`}
    >
      {/* Scroll Progress Bar — Gradient */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container-conference px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/*Logos - srm logo on lefts ide */}
          <button
            onClick={() => handleNavClick("#home")}
            className="hidden lg:flex items-center"
          >
            <img
              src="/logo.png"
              alt="SRM Logo"
              className="h-8 sm:h-10 lg:h-12 object-contain"
            />
          </button>

          {/*items*/}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? `text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/60 ${isActive(link.href) ? "text-emerald-700 bg-emerald-50/80" : ""}`
                    : `text-white/90 hover:text-white hover:bg-white/10 ${isActive(link.href) ? "text-white bg-white/15" : ""}`
                }`}
              >
                {t(`navbar.${link.key}`)}
                {/* Active indicator dot */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? "bg-emerald-600" : "bg-white"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/*right logo*/}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Language Switcher */}
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className={`text-sm font-medium rounded-md px-2 py-1 outline-none transition-colors border ${
                isScrolled ? "bg-white text-slate-700 border-slate-200" : "bg-white/10 text-white border-white/20"
              }`}
            >
              <option value="en" className="text-slate-800">English</option>
              <option value="ta" className="text-slate-800">தமிழ்</option>
              <option value="cy" className="text-slate-800">Welsh</option>
            </select>

            {/* CCRC Sponsor Top Right Logo */}
            <div className="flex items-center justify-center overflow-hidden rounded-md">
              <img 
                src="/sponsor-logo.jpeg" 
                alt="CCRC Creative Computing Research Centre" 
                className="h-10 w-auto object-contain"
              />
            </div>

            {import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && (
              <div className="flex items-center">
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-9 h-9 rounded-full ring-2 ring-emerald-500/30",
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </SignedIn>
              </div>
            )}
          </div>

          {/*for mobile*/}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/*logos*/}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="SRM Logo"
                className="h-7 object-contain"
              />
            </button>

            {/*hamburgen menu for mobile*/}
            <button
              aria-label="Toggle menu"
              className={`p-2 rounded-lg transition ${
                isScrolled
                  ? "text-slate-800 bg-slate-100"
                  : "text-white bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen((p) => !p)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t shadow-xl"
          >
            <div className="container-conference px-4 py-6 space-y-6">
              <div className="flex items-center justify-center gap-6 pb-4 border-b">
                <img src="/logo.png" className="h-8 object-contain" />
                <img
                  src="/logo_nctaids_main.jpg"
                  className="h-8 object-contain"
                />
              </div>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      w-full
                      px-5
                      py-3
                      rounded-xl
                      text-left
                      font-medium
                      transition-all
                      ${isActive(link.href)
                        ? "text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500"
                        : "text-slate-700 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700"
                      }
                    `}
                  >
                    {t(`navbar.${link.key}`)}
                  </button>
                ))}
              </div>

              {import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && (
                <SignedIn>
                  <div className="flex justify-center pt-4">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-11 h-11 ring-2 ring-emerald-500/30",
                        },
                      }}
                      afterSignOutUrl="/"
                    />
                  </div>
                </SignedIn>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
