import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles, Clock } from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { t } = useTranslation();
  const isClerkEnabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  
  let isSignedIn = false;
  let openSignIn = () => {};

  try {
    if (isClerkEnabled) {
      const userContext = useUser();
      const clerkContext = useClerk();
      isSignedIn = userContext.isSignedIn || false;
      openSignIn = clerkContext.openSignIn;
    }
  } catch (e) {
    console.warn("Clerk hooks failed, likely due to missing Provider. Falling back to guest mode.");
  }
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-17T09:00:00");
    const pad = (n: number) => String(n).padStart(2, "0");

    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: pad(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ),
        minutes: pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        {/* Extra gradient mesh layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_80%,rgba(16,185,129,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(59,130,246,0.06),transparent)]" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px]" 
        />
        {/* Floating particles */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-2 h-2 bg-emerald-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-teal-400/25 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[70%] w-1 h-1 bg-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[75%] left-[30%] w-1.5 h-1.5 bg-emerald-300/20 rounded-full"
        />
      </div>

   
      <div className="container-conference relative z-10 text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] mb-4 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] sm:text-sm tracking-[0.18em] uppercase text-white/60 mb-3"
        >
          {t('hero.location')}
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 leading-tight"
        >
          {t('hero.titlePrefix')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">{t('hero.titleSuffix')}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-4 leading-tight"
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-6 max-w-4xl mx-auto"
        >
          {t('hero.descriptionPrefix')}
          <span className="text-emerald-400 font-semibold">
            {t('hero.descriptionHighlight1')}
          </span>
          {t('hero.descriptionAnd')}
          <span className="text-emerald-400 font-semibold">
            {t('hero.descriptionHighlight2')}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm md:text-base text-white/80">
            {t('hero.organisedBy')}
            <span className="text-emerald-400 font-semibold">
              {t('hero.department')}
            </span>
          </p>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/80 mb-6"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">{t('hero.date')}</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-emerald-400" />

          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">{t('hero.time')}</span>
          </div>
        </motion.div>

        
        {/* Countdown Timer — Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10 flex justify-center"
        >
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] px-4 sm:px-8 py-5 backdrop-blur-md">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <React.Fragment key={key}>
                {index > 0 && (
                  <div className="hidden sm:flex items-center">
                    <span className="text-white/20 text-2xl font-light">:</span>
                  </div>
                )}
                <div className="text-center min-w-[65px] sm:min-w-[75px]">
                  <div className="bg-white/[0.06] rounded-xl px-3 py-2 mb-1.5 border border-white/[0.06]">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums bg-clip-text text-transparent bg-gradient-to-b from-emerald-300 to-emerald-500">
                      {value}
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                    {t(`hero.countdown.${key}`)}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        
        {/* CTA Button — Enhanced with pulse glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center"
        >
          <a
  href="/register"
  className="group relative flex items-center gap-2 px-7 sm:px-9 py-3.5 text-base sm:text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald-900/30 animate-pulse-glow"
>
  {t('hero.registerBtn')}
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>

        </motion.div>
      </div>
    </section>
  );
};
