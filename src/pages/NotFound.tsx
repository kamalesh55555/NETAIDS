import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"
      />

      <div className="text-center relative z-10 px-6">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-6"
        >
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-extrabold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/30 to-white/5">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6"
        >
          <AlertTriangle className="w-4 h-4" />
          Page Not Found
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed"
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back to the conference.
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:from-emerald-500 hover:to-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald-900/30"
        >
          <Home className="w-4.5 h-4.5 group-hover:-translate-x-0.5 transition-transform" />
          Return to Home
        </motion.a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
