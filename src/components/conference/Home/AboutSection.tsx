import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Cpu, Sparkles, Target, Lightbulb, Globe } from "lucide-react";
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

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  const handleMouseMove = (e: any) => {
    if (locked) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    x = clamp(x, 0, 100);
    y = clamp(y, 0, 100);
    setPos({ x, y });
  };

  const toggleLock = () => setLocked((prev) => !prev);
  const zoom = 3;

  const outcomes = t('about.outcomes', { returnObjects: true }) as string[];
  const objectives = t('about.objectives', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="container-conference relative z-10" ref={ref}>
        {/* TOP SECTION: About & Poster */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              {t('about.badge')}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t('about.title')}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              {t('about.desc1')}
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {t('about.desc2')}
            </p>
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
              onMouseLeave={() => { if (!locked) setShowMagnifier(false); }}
              onMouseMove={handleMouseMove}
              onClick={toggleLock}
            >
              <img
                src="/main_poster.jpg"
                alt="Tamil-Welsh Conference Poster"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute top-3 right-3 text-[10px] px-2.5 py-1 bg-black/60 text-white rounded-full z-20 backdrop-blur-sm border border-white/10">
                {locked ? t('about.unlock') : t('about.hoverZoom')}
              </span>
              {(showMagnifier || locked) && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-white/80 shadow-2xl z-30 bg-white"
                  style={{
                    width: "160px",
                    height: "160px",
                    top: `calc(${pos.y}% - 80px)`,
                    left: `calc(${pos.x}% - 80px)`,
                    backgroundImage: "url('/main_poster.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${zoom * 100}%`,
                    backgroundPosition: `${pos.x * zoom - 50}% ${pos.y * zoom - 50}%`,
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: Vision & Why Tamil/Welsh */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.visionTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('about.visionDesc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.whyTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('about.whyDesc')}</p>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Objectives */}
        <div className="max-w-4xl mx-auto">
          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-emerald-500" />
              {t('about.objectivesTitle')}
            </h3>
            <ul className="space-y-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {Array.isArray(objectives) && objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
