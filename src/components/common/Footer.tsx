import {
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { key: "home", href: "#hero" },
    { key: "eventInfo", href: "#about" },
    { key: "resourcePersons", href: "#resource-persons" },
    { key: "committee", href: "#committee" },
    { key: "collegeInfo", href: "#college-info" },
    { key: "contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/5 overflow-hidden">
      {/* Top decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container-conference pt-16 sm:pt-24 pb-8 sm:pb-12 relative z-10">

        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-14">
          
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold tracking-wide">{t('footer.title')}</h3>

            <p className="text-white/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>

            <p className="text-white/60 text-xs">
              {t('footer.dateText')}
            </p>
          </div>

          {/*Links*/}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-5">
              {t('footer.quickLinks')}
            </h4>

            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {t(`navbar.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-5">
              {t('footer.contactCoordinators')}
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 mt-0.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="leading-relaxed">
                  {t('footer.addressLine1')}<br />
                  {t('footer.addressLine2')}<br />
                  {t('footer.addressLine3')}
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>{t('footer.coordinator1')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 sm:gap-6">

          <p className="text-white/50 text-xs sm:text-sm text-center md:text-left">
            {t('footer.copyright')}
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              w-10 h-10 sm:w-11 sm:h-11 rounded-xl
              bg-emerald-500 text-slate-900
              flex items-center justify-center
              hover:bg-emerald-400
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-emerald-500/25
              transition-all duration-300
              active:scale-95
            "
          >
            <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
