import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Brain, Mic, BookOpen, GraduationCap, Lightbulb, Zap } from "lucide-react";

export const TracksSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tracks = [
    {
      title: t('tracks.track1Title'),
      desc: t('tracks.track1Desc'),
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
    },
    {
      title: t('tracks.track2Title'),
      desc: t('tracks.track2Desc'),
      icon: <Mic className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      title: t('tracks.track3Title'),
      desc: t('tracks.track3Desc'),
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      title: t('tracks.track4Title'),
      desc: t('tracks.track4Desc'),
      icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
      bg: "bg-orange-50",
    },
    {
      title: t('tracks.track5Title'),
      desc: t('tracks.track5Desc'),
      icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50",
    },
    {
      title: t('tracks.track6Title'),
      desc: t('tracks.track6Desc'),
      icon: <Zap className="w-6 h-6 text-red-600" />,
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="py-24 relative bg-white">
      <div className="container-conference relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t('tracks.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 ${track.bg} rounded-2xl flex items-center justify-center mb-6`}>
                {track.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{track.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{track.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
