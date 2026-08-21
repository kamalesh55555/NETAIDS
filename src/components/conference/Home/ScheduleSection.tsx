import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mic2, Users, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const tamilResourcePersons = [
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

const chairPersons = [
  {
    name: "Dr. S. Niveditha",
    designation: "Session Chair",
    role: "Chair",
    type: "keynote",
  },
  {
    name: "Dr. G. Paavai Anand",
    designation: "Session Chair",
    role: "Chair",
    type: "keynote",
  },
];

const getIcon = (type: string) => (type === "keynote" ? Mic2 : Users);

const badgeStyles: Record<string, string> = {
  keynote: "bg-emerald-50 text-emerald-700 border-emerald-200",
  session: "bg-blue-50 text-blue-700 border-blue-200",
};

const roleBadgeStyles: Record<string, string> = {
  "Welsh Paper Evaluator": "bg-red-50 text-red-700 border-red-200",
  "Resource Person": "bg-slate-50 text-slate-600 border-slate-200",
  Chair: "bg-purple-50 text-purple-700 border-purple-200",
};

export const ScheduleSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resource-persons" className="py-24 bg-slate-50 relative overflow-hidden">
      <span id="schedule" className="sr-only" />
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
          <p className="text-slate-500 text-lg md:text-xl">
            Distinguished speakers, researchers, and evaluators guiding the conference
          </p>
        </motion.div>

        {/* TAMIL / INDIA RESOURCE PERSONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Tamil / India Resource Persons</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tamilResourcePersons.map((person, i) => (
              <PersonCard key={i} person={person} delay={i * 0.08} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* WELSH RESOURCE PERSONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Welsh Resource Persons & Evaluators</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {welshResourcePersons.map((person, i) => (
              <PersonCard key={i} person={person} delay={i * 0.08 + 0.3} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* SESSION CHAIRS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Session Chairs</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {chairPersons.map((person, i) => (
              <PersonCard key={i} person={person} delay={i * 0.08 + 0.5} inView={inView} />
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
const PersonCard = ({ person, delay, inView }: { person: any; delay: number; inView: boolean }) => {
  const Icon = getIcon(person.type);
  const roleBadge = roleBadgeStyles[person.role] || roleBadgeStyles["Resource Person"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-slate-50 to-emerald-50 border border-emerald-100 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-emerald-600" />
          </div>
          <span className={`text-[10px] px-2.5 py-1 rounded-md uppercase tracking-widest font-bold border ${roleBadge}`}>
            {person.role}
          </span>
        </div>

        <h4 className="text-lg font-extrabold text-slate-900 leading-tight mb-2">
          {person.name}
        </h4>
        <p className="text-sm text-slate-500 font-medium leading-relaxed border-l-2 border-emerald-200 pl-3">
          {person.designation}
        </p>
      </div>
    </motion.div>
  );
};
