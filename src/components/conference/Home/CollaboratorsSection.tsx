import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export const CollaboratorsSection = () => {
  const { t } = useTranslation();
  
  const accreditations: any[] = t('collaborators.accreditations', { returnObjects: true }) as any;
  const rankings: any[] = t('collaborators.rankings', { returnObjects: true }) as any;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const cardHover = "hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl";

  return (
    <section id="college-info" className="py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        
        {/* AICTE VAANI Sponsored */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 uppercase tracking-wide">
            AICTE VAANI <span className="text-emerald-600">{t('collaborators.aicteSponsored')}</span>
          </h2>
          <div className="flex justify-center">
            <div className="bg-white border-2 border-emerald-100 shadow-xl shadow-emerald-900/5 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300">
              <img 
                src="/aicte-logo.jpeg" 
                alt="AICTE VAANI Sponsored Logo" 
                className="h-32 md:h-40 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png";
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
            {t('collaborators.supportedBy')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('collaborators.accreditationsTitle')} <span className="text-emerald-600">{t('collaborators.accreditationsHighlight')}</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {accreditations.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                relative bg-white border border-slate-200 rounded-3xl
                h-48 w-72 flex flex-col items-center justify-center p-6 text-center
                shadow-lg ${cardHover} transition-all duration-300
              `}
            >
              <div className="absolute inset-0 rounded-3xl bg-emerald-400/5 blur-xl -z-10" />
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[60%] max-w-[80%] object-contain mb-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=" + partner.subtitle;
                }}
              />
              <h3 className="font-bold text-slate-800 text-sm">{partner.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Rankings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('collaborators.rankingsTitle')} <span className="text-emerald-600">{t('collaborators.rankingsHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankings.map((rank, index) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`
                bg-white border border-slate-200 rounded-2xl p-6
                shadow-md ${cardHover} transition-all duration-300 flex flex-col justify-center items-center text-center
              `}
            >
              <h4 className="text-lg font-bold text-emerald-700 mb-2">{rank.name}</h4>
              <p className="text-sm text-slate-600 font-medium">{rank.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};