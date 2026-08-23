import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Crown, Award, UserCheck, Users, Sparkles, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CommitteeMember {
  name: string;
  role: string;
  affiliation: string;
  highlight?: boolean;
}

const chiefPatrons: CommitteeMember[] = [
  {
    name: "Dr. T.R. Paarivendhar",
    role: "Founder Chancellor",
    affiliation: "SRMIST",
  },
  {
    name: "Dr. Ravi Pachamuthu",
    role: "Pro-Chancellor (Admin)",
    affiliation: "SRMIST",
  },
  {
    name: "Dr. P. Sathyanarayanan",
    role: "Pro-Chancellor (Academics)",
    affiliation: "SRMIST",
  },
  {
    name: "Ms. Harini Ravi",
    role: "Director, Institutional Development",
    affiliation: "SRMIST",
  },
];

const patrons: CommitteeMember[] = [
  {
    name: "Dr. C. Muthamizhchelvan",
    role: "Vice-Chancellor",
    affiliation: "SRMIST",
  },
  {
    name: "Dr. S. Ponnusamy",
    role: "Registrar",
    affiliation: "SRMIST",
  },
  {
    name: "Dr. K. Gunasekaran",
    role: "CoE",
    affiliation: "SRMIST",
  },
  {
    name: "Dr. C. V. Jayakumar",
    role: "Dean (FET)",
    affiliation: "SRMIST, Vadapalani Campus",
  },
  {
    name: "Dr. C. Gomathy",
    role: "VP Academics",
    affiliation: "SRMIST, Vadapalani Campus",
  },
  {
    name: "Dr. S. Karthikeyan",
    role: "VP Examinations",
    affiliation: "SRMIST, Vadapalani Campus",
  },
  {
    name: "Dr. D. S. Vijayan",
    role: "Associate Dean (Research)",
    affiliation: "SRMIST, Vadapalani Campus",
  },
  {
    name: "Dr. K. Ramachandran",
    role: "Research Coordinator",
    affiliation: "SRMIST, Vadapalani Campus",
  },
];

const convener: CommitteeMember = {
  name: "Dr. Golda Dilip",
  role: "Professor & Head, CSE Department",
  affiliation: "SRMIST, Vadapalani Campus",
  highlight: true,
};

const organizingSecretaries: CommitteeMember[] = [
  {
    name: "Dr. G. Paavai Anand",
    role: "Assistant Professor, CSE Department",
    affiliation: "SRMIST, Vadapalani Campus",
  },
  {
    name: "Ms. S. Niveditha",
    role: "Assistant Professor, CSE Department",
    affiliation: "SRMIST, Vadapalani Campus",
  },
  {
    name: "Dr. Indhumathy",
    role: "Assistant Professor, CSE Department",
    affiliation: "SRMIST, Vadapalani Campus",
  },
];

export const CommitteeSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="committee" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-conference relative z-10 px-4 sm:px-6 max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 border border-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            Conference Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Committee</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl">
            Distinguished university leadership, advisory patrons, and organizing team of TWC 2026
          </p>
        </motion.div>

        {/* 1. CHIEF PATRONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-sm">
              <Crown className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Chief Patrons</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chiefPatrons.map((member, i) => (
              <CommitteeCard
                key={member.name}
                member={member}
                delay={i * 0.08}
                inView={inView}
                badgeClass="bg-amber-50 text-amber-800 border-amber-200"
                accentColor="border-amber-500/30"
              />
            ))}
          </div>
        </motion.div>

        {/* 2. PATRONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Patrons</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patrons.map((member, i) => (
              <CommitteeCard
                key={member.name}
                member={member}
                delay={i * 0.06 + 0.1}
                inView={inView}
                badgeClass="bg-teal-50 text-teal-800 border-teal-200"
                accentColor="border-teal-500/30"
              />
            ))}
          </div>
        </motion.div>

        {/* 3. CONVENER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-sm">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Convener</h3>
          </div>

          <div className="max-w-md mx-auto">
            <CommitteeCard
              member={convener}
              delay={0.3}
              inView={inView}
              badgeClass="bg-emerald-50 text-emerald-800 border-emerald-300"
              accentColor="border-emerald-500"
              isFeatured
            />
          </div>
        </motion.div>

        {/* 4. ORGANIZING SECRETARIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Organizing Secretaries</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {organizingSecretaries.map((member, i) => (
              <CommitteeCard
                key={member.name}
                member={member}
                delay={i * 0.08 + 0.4}
                inView={inView}
                badgeClass="bg-blue-50 text-blue-800 border-blue-200"
                accentColor="border-blue-500/30"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// Committee Member Card Component (No images, premium typography)
// ---------------------------------------------------------
interface CardProps {
  member: CommitteeMember;
  delay: number;
  inView: boolean;
  badgeClass: string;
  accentColor: string;
  isFeatured?: boolean;
}

const CommitteeCard = ({
  member,
  delay,
  inView,
  badgeClass,
  accentColor,
  isFeatured = false,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className={`
        relative rounded-2xl p-6 text-center transition-all duration-300 group
        ${
          isFeatured
            ? "bg-gradient-to-b from-emerald-50/50 via-white to-teal-50/30 border-2 border-emerald-400 shadow-xl shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1.5"
            : "bg-slate-50/70 hover:bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1"
        }
      `}
    >
      {/* Decorative accent top bar */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full bg-gradient-to-r ${isFeatured ? "from-emerald-500 to-teal-400" : "from-slate-300 to-slate-400 group-hover:from-emerald-500 group-hover:to-teal-400"} transition-all duration-300`} />

      <div className="pt-2">
        <h4 className={`font-bold text-slate-900 mb-2 leading-snug tracking-tight ${isFeatured ? "text-xl sm:text-2xl" : "text-lg"}`}>
          {member.name}
        </h4>

        <div className="inline-block mb-3">
          <span className={`text-xs px-3 py-1 rounded-full font-semibold border inline-block ${badgeClass}`}>
            {member.role}
          </span>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{member.affiliation}</span>
        </div>
      </div>
    </motion.div>
  );
};
