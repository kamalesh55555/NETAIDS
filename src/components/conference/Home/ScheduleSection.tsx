import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Users, Mic2, CalendarDays, BrainCircuit, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const scheduleData = {
  day1: {
    date: "17th September 2026",
    title: "Day 1 Schedule",
    events: [
      {
        time: "Morning Session",
        title: "Session I",
        speaker: "Dr. Raj Ramachandran, Senior Lecturer in Technologies, Cardiff School of Technologies, Cardiff",
        type: "keynote",
        icon: Mic2,
        room: "Main Auditorium, Vadapalani Campus",
        topics: "Future of Neural Networks in Tamil NLP",
        chair: "Dr. S. Niveditha",
      },
      {
        time: "Morning Session",
        title: "Session II",
        speaker: "Dr. R. Rajkumar, Associate Professor, Vellore Institute of Technology (VIT), Chennai",
        type: "session",
        icon: Users,
        room: "Seminar Hall 1",
        topics: "Data Science methodologies for Regional Languages",
        chair: "Dr. G. Paavai Anand",
      },
      {
        time: "Afternoon Session",
        title: "Session III",
        speaker: "Mr. Venkatarangan Thirumalai, Founder Catalyst, Vishwak Solutions",
        type: "session",
        icon: Users,
        room: "Main Auditorium",
        topics: "Startup Ecosystem in Tamil Tech",
        chair: "Dr. G. Paavai Anand",
      },
      {
        time: "Afternoon Session",
        title: "Session IV",
        speaker: "Dr S. Chitrakala, Professor, DCSE & Director of Centre for Immersive Technologies, Anna University, Chennai",
        type: "keynote",
        icon: Mic2,
        room: "Virtual Mode / Seminar Hall 2",
        topics: "Immersive Technologies and AI",
        chair: "Dr. S. Niveditha",
      },
    ],
  },
  day2: {
    date: "18th September 2026",
    title: "Day 2 Schedule",
    events: [
      {
        time: "Morning Session",
        title: "Session V",
        speaker: "Mr. Akash V, Associate System Engineer, IBM",
        type: "session",
        icon: Users,
        room: "Main Auditorium",
        topics: "Enterprise AI Solutions & Integration",
        chair: "Dr. S. Niveditha",
      },
      {
        time: "Morning Session",
        title: "Session VI",
        speaker: "Dr. Subalalitha C.N, Founder of the AI startup FirstLanguage Technologies",
        type: "keynote",
        icon: Mic2,
        room: "Seminar Hall 1",
        topics: "Building LLMs for Indic Languages",
        chair: "Dr. G. Paavai Anand",
      },
      {
        time: "Afternoon Session",
        title: "Session VII",
        speaker: "Mr. Aazhi Senthilnathan, Founder & CEO, Ailaysa",
        type: "session",
        icon: Users,
        room: "Main Auditorium",
        topics: "Language Tech Innovations",
        chair: "Dr. G. Paavai Anand",
      },
      {
        time: "Afternoon Session",
        title: "Session VIII",
        speaker: "Dr. Na.e Kodaikkaavirinaadan U, Tech Lead Tech Mahindra, Chennai",
        type: "keynote",
        icon: Mic2,
        room: "Seminar Hall 2",
        topics: "Scaling Data Science Pipelines in Production",
        chair: "Dr. S. Niveditha",
      },
    ],
  },
};

const badgeStyles = {
  keynote: "bg-emerald-50 text-emerald-700 border-emerald-200",
  session: "bg-orange-50 text-orange-700 border-orange-200",
};

const getIcon = (type: string) => type === "keynote" ? Mic2 : Users;

export const ScheduleSection = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scheduleData = t("schedule", { returnObjects: true }) as any;
  const currentSchedule = scheduleData[activeDay];

  return (
    <section id="schedule" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Ambient glowing background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-orange-400/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-emerald-400/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container-conference relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {t("schedule.titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">{t("schedule.titleSuffix")}</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl">
            {t("schedule.subtitle")} <strong>{t("schedule.dateHighlight")}</strong>
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-20 relative z-20"
        >
          {(["day1", "day2"] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-4 rounded-2xl text-base font-bold tracking-wide transition-all duration-300 relative overflow-hidden group ${
                activeDay === day
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-500/30 scale-105 border border-transparent"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-lg"
              }`}
            >
              <span className="relative z-10">{scheduleData[day].title}</span>
            </button>
          ))}
        </motion.div>

        {/* Neural Timeline Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto relative"
          >
            {/* The Central Glowing Spine */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 md:-translate-x-1/2 rounded-full overflow-hidden bg-slate-200">
              <motion.div 
                className="w-full h-full bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* The Date Nucleus (Top of Spine) */}
            <div className="relative z-20 flex justify-start md:justify-center mb-16">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="ml-0 md:ml-0 flex items-center gap-3 px-6 py-3 bg-white border-2 border-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <CalendarDays className="w-5 h-5 text-emerald-600" />
                <span className="font-extrabold text-slate-800 tracking-wide">{currentSchedule.date}</span>
              </motion.div>
            </div>

            {/* The Events */}
            <div className="space-y-12 md:space-y-24 relative z-10 pb-12">
              {currentSchedule.events.map((event: any, idx: number) => {
                const isEven = idx % 2 === 0;
                event.icon = getIcon(event.type);
                return (
                  <SessionNode 
                    key={idx} 
                    event={event} 
                    align={isEven ? "left" : "right"} 
                    delay={idx * 0.3 + 0.5} 
                    t={t}
                  />
                );
              })}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// Helper Components
// ---------------------------------------------------------

const SessionNode = ({ event, align, delay = 0, t }: { event: any; align: "left" | "right", delay?: number, t: any }) => {
  const Icon = event.icon;
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
      align === "left" ? "md:justify-start" : "md:justify-end"
    }`}>
      
      {/* The Central Synapse Node */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.4 }}
        className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] z-20"
      />

      {/* The Connecting Branch Line (Desktop only) */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ delay: delay + 0.2, duration: 0.4 }}
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r ${
          align === "left" 
            ? "right-[50%] from-emerald-500 to-transparent origin-right" 
            : "left-[50%] from-emerald-500 to-transparent origin-left"
        } opacity-50 z-0`}
      />

      {/* The Card */}
      <motion.div
        initial={{ opacity: 0, x: align === "left" ? -50 : 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.3, type: "spring", bounce: 0.4 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative w-[85%] md:w-[42%] ml-[50px] md:ml-0 bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 md:hover:-translate-y-2 transition-all duration-300 z-10 group overflow-hidden cursor-pointer`}
      >
        {/* Subtle decorative glow inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />

        <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-gradient-to-br from-slate-50 to-emerald-50 border border-emerald-100 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                  {event.time}
                </span>
              </div>
              <span className={`inline-block text-[10px] px-2.5 py-1 rounded-md uppercase tracking-widest font-bold border ${badgeStyles[event.type as keyof typeof badgeStyles]}`}>
                {event.title}
              </span>
            </div>
          </div>
          
          {/* Expand icon */}
          <div className={`p-2 rounded-full transition-colors duration-300 ${isExpanded ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500"}`}>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`} />
          </div>
        </div>

        <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight mb-3 relative z-10">
          {event.speaker.split(',')[0]}
        </h4>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed border-l-2 border-emerald-200 pl-3 relative z-10">
          {event.speaker.split(',').slice(1).join(',').trim()}
        </p>

        {/* Accordion Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden relative z-10"
            >
              <div className="pt-6 border-t border-slate-200 grid gap-4 text-sm text-slate-600 bg-slate-50/50 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="font-bold min-w-[70px] text-slate-800">{t("schedule.topic")}</div>
                  <div>{event.topics}</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="font-bold min-w-[70px] text-slate-800">{t("schedule.room")}</div>
                  <div>{event.room}</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="font-bold min-w-[70px] text-slate-800">{t("schedule.chair")}</div>
                  <div>{event.chair}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};
