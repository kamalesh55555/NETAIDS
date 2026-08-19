import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Cpu, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [locked, setLocked] = useState(false);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMouseMove = (e) => {
    if (locked) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    // Allow full edge movement
    x = clamp(x, 0, 100);
    y = clamp(y, 0, 100);

    setPos({ x, y });
  };

  const toggleLock = () => setLocked((prev) => !prev);

  // Zoom level (must match backgroundSize)
  const zoom = 3;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="container-conference relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative left accent line */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-transparent rounded-full hidden lg:block" />

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4 border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5" />
              {t('about.badge')}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t('about.title1')}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">{t('about.title2')}</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              {t('about.desc1_part1')}
              <strong>(Tamil-Welsh Conference)</strong>
              {t('about.desc1_part2')}
            </p>

            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              {t('about.desc2_part1')}
              <strong>
                {t('about.techList')}
              </strong>
              {t('about.desc2_part2')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="p-1.5 rounded-lg bg-emerald-100">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">
                  {t('about.feature1')}
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="p-1.5 rounded-lg bg-emerald-100">
                  <Users className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">
                  {t('about.feature2')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE WITH MAGNIFIER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-xs sm:max-w-sm aspect-[283/400] rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden cursor-zoom-in group"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => {
                if (!locked) setShowMagnifier(false);
              }}
              onMouseMove={handleMouseMove}
              onClick={toggleLock}
            >
              <img
                src="/main_poster.jpg"
                alt="Tamil-Welsh Conference 2026 Poster"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <span className="absolute top-3 right-3 text-[10px] px-2.5 py-1 bg-black/60 text-white rounded-full z-20 backdrop-blur-sm border border-white/10">
                {locked ? t('about.unlock') : t('about.hoverZoom')}
              </span>

              {(showMagnifier || locked) && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-white/80 shadow-2xl z-30"
                  style={{
                    width: "160px",
                    height: "160px",
                    top: `calc(${pos.y}% - 80px)`,
                    left: `calc(${pos.x}% - 80px)`,
                    backgroundImage: "url('/main_poster.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${zoom * 100}%`,
                    backgroundPosition: `${pos.x * zoom - 50}% ${
                      pos.y * zoom - 50
                    }%`,
                    transition: "background-position 0.05s linear",
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
