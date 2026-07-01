import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "Event Info", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "College Info", href: "#college-info" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/5 overflow-hidden">
      {/* Top decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container-conference pt-24 pb-12 relative z-10">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide">NCTAIDS'26</h3>

            <p className="text-white/70 text-sm leading-relaxed">
              National Level Conference on TAMIL AI & DATA SCIENCE (NCTAIDS'26), organized by the Department of Computer
              Science & Engineering, SRM Institute of Science and Technology.
            </p>

            <p className="text-white/60 text-xs">
              17<sup>th</sup> & 18<sup>th</sup> September 2026 · Hybrid Mode
            </p>
          </div>

          {/*Links*/}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-5">
              Contact Co-ordinators
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 mt-0.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="leading-relaxed">
                  Department of Computer Science & Engineering<br />
                  SRM Institute of Science and Technology<br />
                  Vadapalani Campus, Chennai – 600026
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Dr. G. Paavai Anand</span>
              </li>

              <li className="flex gap-3 items-center">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Ms. S. Niveditha</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">

          <p className="text-white/50 text-sm text-center md:text-left">
            © 2026 NCTAIDS'26 · Department of Computer Science and Engineering, SRM IST Vadapalani.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              w-11 h-11 rounded-xl
              bg-emerald-500 text-slate-900
              flex items-center justify-center
              hover:bg-emerald-400
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-emerald-500/25
              transition-all duration-300
            "
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
