import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mic2, Users, GraduationCap, Sparkles, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const chiefGuest = {
  name: "Dr. Madhan Karky",
  designation: "Lyricist, Research Technologist & Founder, Karky Research Foundation (KaReFo)",
  role: "Chief Guest",
  type: "keynote",
};

const tamilResourcePersons = [
  {
    name: "Dr. T.V Geetha",
    designation: "Program Committee Member",
    role: "Resource Person",
    type: "keynote",
  },
  {
    name: "Dr. Raj Ramachandran",
    designation: "Senior Lecturer in Technologies, Cardiff School of Technologies, Cardiff",
    role: "Welsh Paper Evaluator",
    type: "keynote",
  },
  {
    name: "Dr. R. Rajkumar",
    designation: "Associate Professor, Vellore Institute of Technology (VIT), Chennai",
    role: "Resource Person",
    type: "session",
  },
  {
    name: "Mr. Venkatarangan Thirumalai",
    designation: "Founder Catalyst, Vishwak Solutions",
    role: "Resource Person",
    type: "session",
  },
  {
    name: "Dr. S. Chitrakala",
    designation: "Professor, DCSE & Director of Centre for Immersive Technologies, Anna University, Chennai",
    role: "Resource Person",
    type: "keynote",
  },
  {
    name: "Mr. Akash V",
    designation: "Associate System Engineer, IBM",
    role: "Resource Person",
    type: "session",
  },
  {
    name: "Dr. Subalalitha C.N",
    designation: "Founder of the AI startup FirstLanguage Technologies",
    role: "Resource Person",
    type: "keynote",
  },
  {
    name: "Mr. Aazhi Senthilnathan",
    designation: "Founder & CEO, Ailaysa",
    role: "Resource Person",
    type: "session",
  },
  {
    name: "Dr. Na.e Kodaikkaavirinaadan U",
    designation: "Tech Lead, Tech Mahindra, Chennai",
    role: "Resource Person",
    type: "keynote",
  },
];

const welshResourcePersons = [
  {
    name: "Dr. Raj Ramachandran",
    designation: "Senior Lecturer in Technologies, Cardiff School of Technologies, Cardiff",
    role: "Welsh Paper Evaluator",
    type: "keynote",
  },
  {
    name: "Daniel Tiplady",
    designation: "Pennaeth y Gymraeg, Met Caerdydd",
    role: "Resource Person",
    type: "session",
  },
  {
    name: "Fiona Carroll",
    designation: "Darllenydd, Met Caerdydd",
    role: "Resource Person",
    type: "session",
  },
  {
    name: "Hywel Luff",
    designation: "Resource Person, Wales",
    role: "Resource Person",
    type: "session",
  },
];

const chairPersons = [];

const getIcon = (type: string) => (type === "keynote" ? Mic2 : Users);

const badgeStyles: Record<string, string> = {
  keynote: "bg-emerald-50 text-emerald-700 border-emerald-200",
  session: "bg-blue-50 text-blue-700 border-blue-200",
};

export const ScheduleSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Map roles to their i18n keys
  const getRoleLabel = (role: string): string => {
    switch (role) {
      case "Chief Guest": return t("schedule.chiefGuest");
      case "Welsh Paper Evaluator": return t("schedule.welshPaperEvaluator");
      case "Resource Person": return t("schedule.resourcePerson");
      case "Chair": return t("schedule.chairRole");
      default: return role;
    }
  };

  const roleBadgeStyles: Record<string, string> = {
    "Chief Guest": "bg-amber-100 text-amber-900 border-amber-300 font-bold",
    "Welsh Paper Evaluator": "bg-red-50 text-red-700 border-red-200",
    "Resource Person": "bg-slate-50 text-slate-600 border-slate-200",
    Chair: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <section id="resource-persons" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <span id="schedule" className="sr-only" />
      {/* Ambient glowing background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-orange-400/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-emerald-400/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container-conference relative z-10 px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            {t("schedule.titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">{t("schedule.titleSuffix")}</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl">
            {t("schedule.description")}
          </p>
        </motion.div>

        {/* CHIEF GUEST SPOTLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{t("schedule.chiefGuest")}</h3>
          </div>

          <div className="bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 border-2 border-amber-300/90 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl shadow-amber-500/10 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              {t("schedule.chiefGuestKeynote")}
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-2.5 tracking-tight">
              {chiefGuest.name}
            </h4>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-lg mx-auto leading-relaxed border-t border-amber-200/60 pt-3 mt-3">
              {chiefGuest.designation}
            </p>
          </div>
        </motion.div>

        {/* TAMIL / INDIA RESOURCE PERSONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{t("schedule.tamilResourcePersons")}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {tamilResourcePersons.map((person, i) => (
              <PersonCard key={i} person={person} delay={i * 0.08} inView={inView} getRoleLabel={getRoleLabel} roleBadgeStyles={roleBadgeStyles} />
            ))}
          </div>
        </motion.div>

        {/* WELSH RESOURCE PERSONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{t("schedule.welshResourcePersons")}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {welshResourcePersons.map((person, i) => (
              <PersonCard key={i} person={person} delay={i * 0.08 + 0.3} inView={inView} getRoleLabel={getRoleLabel} roleBadgeStyles={roleBadgeStyles} />
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

// ---------------------------------------------------------
// Person Card Component
// ---------------------------------------------------------
const PersonCard = ({ person, delay, inView, getRoleLabel, roleBadgeStyles }: { person: any; delay: number; inView: boolean; getRoleLabel: (role: string) => string; roleBadgeStyles: Record<string, string> }) => {
  const Icon = getIcon(person.type);
  const roleBadge = roleBadgeStyles[person.role] || roleBadgeStyles["Resource Person"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 sm:p-3 bg-gradient-to-br from-slate-50 to-emerald-50 border border-emerald-100 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
          </div>
          <span className={`text-[10px] px-2 sm:px-2.5 py-1 rounded-md uppercase tracking-widest font-bold border ${roleBadge}`}>
            {getRoleLabel(person.role)}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight mb-2">
          {person.name}
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed border-l-2 border-emerald-200 pl-3">
          {person.designation}
        </p>
      </div>
    </motion.div>
  );
};
