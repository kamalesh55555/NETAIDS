import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FloatingRegisterButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 400px (past the hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10 flex flex-col items-end gap-2"
        >
          {/* Subtle pulse ring behind the button */}
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse-glow pointer-events-none" />
          
          <a
            href="/register"
            className="
              relative group flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 
              rounded-full font-bold text-white
              bg-slate-900/40 backdrop-blur-xl border border-white/10
              shadow-2xl shadow-emerald-900/20
              overflow-hidden transition-all duration-300
              hover:bg-slate-900/60 hover:scale-105 hover:border-emerald-500/50 hover:shadow-emerald-500/30
            "
          >
            {/* Inner glowing gradient on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-600/30 to-teal-500/30 transition-opacity duration-300" />
            
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:from-emerald-300 group-hover:to-teal-300 transition-colors duration-300">
              Register Now
            </span>
            
            <div className="relative z-10 bg-gradient-to-r from-emerald-500 to-teal-400 p-1.5 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
