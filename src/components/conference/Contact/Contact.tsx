// nctaids-main/src/pages/Contact.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4 border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5" />
            {t('contact.badge')}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('contact.title')}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            {t('contact.description')}
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-xl mx-auto lg:mx-0"
          >
            {/* Email card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {t('contact.emailLabel')}
                </p>
                <p className="text-slate-900 font-medium">
                  nctaids.2026@gmail.com
                </p>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {t('contact.contactLabel')}
                </p>
                <p className="text-slate-900 font-medium">
                  {t('contact.phone')}
                </p>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {t('contact.locationLabel')}
                </p>
                <p className="text-slate-900 font-medium leading-relaxed">
                  {t('contact.address1')} <br />
                  {t('contact.address2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – MAP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Map label overlay */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-emerald-500" />
                {t('contact.mapLabel')}
              </span>
            </div>
            <iframe
              title="SRMIST Vadapalani Campus Map"
              src="https://www.google.com/maps?q=SRM%20Institute%20of%20Science%20and%20Technology%20Vadapalani&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
