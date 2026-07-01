// nctaids-main/src/components/common/PageHero.tsx
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export const PageHero = ({
  title,
  subtitle,
  bgImage = "/srm-campus.jpg",
}: PageHeroProps) => {
  return (
    <section
      className="
        relative
        h-[70vh]
        min-h-[460px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      
      {/* Floating particles for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-2 h-2 bg-emerald-400/30 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-teal-400/25 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[70%] w-1 h-1 bg-white/15 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >

        <h1
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            tracking-tight
            text-white
            mb-6
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              text-white/85
              text-base
              md:text-lg
              lg:text-xl
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Multi-layer wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          {/* Back wave — subtle */}
          <path
            d="M0,120 C360,200 720,160 1080,180 1260,190 1380,150 1440,130 L1440,200 L0,200 Z"
            fill="#f8fafc"
            fillOpacity="0.4"
          />
          {/* Front wave — solid */}
          <path
            d="M0,100 C240,180 480,180 720,140 960,100 1200,80 1440,110 L1440,200 L0,200 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
};
