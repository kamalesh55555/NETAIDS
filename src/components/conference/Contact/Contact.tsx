// nctaids-main/src/pages/Contact.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Sparkles, User } from "lucide-react";
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
                <p className="text-slate-900 font-medium break-all">
                  disrmbilanguageconference@gmail.com
                </p>
              </div>
            </div>

            {/* Phone card - Person 1: Kamalesh Kumar K */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {t('contact.contactLabel')}
                </p>
                <div className="space-y-2 mt-1">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="text-slate-900 font-medium text-sm">
                      {t('contact.phone1Name')}
                    </span>
                    <span className="text-slate-500 text-sm">–</span>
                    <a href="tel:+919444411410" className="text-emerald-600 font-semibold text-sm hover:underline">
                      {t('contact.phone1Number')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="text-slate-900 font-medium text-sm">
                      {t('contact.phone2Name')}
                    </span>
                    <span className="text-slate-500 text-sm">–</span>
                    <a href="tel:+918015060079" className="text-emerald-600 font-semibold text-sm hover:underline">
                      {t('contact.phone2Number')}
                    </a>
                  </div>
                </div>
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

            {/* Registration QR card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-0.5 group text-center mt-6">
              <p className="text-sm font-semibold text-slate-700">
                Scan to Register
              </p>
              <img 
                src="/qr-register.jpg" 
                alt="Registration QR Code" 
                className="w-40 h-40 object-contain rounded-xl border border-slate-100 shadow-sm"
              />
            </div>
          </motion.div>

          {/* RIGHT – MAP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group min-h-[350px] sm:min-h-[420px]"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677f8e2e3c3d%3A0x1b90e9bfaaa0f8f8!2sSRM%20Institute%20of%20Science%20and%20Technology%20-%20Vadapalani%20Campus!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full min-h-[350px] sm:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
