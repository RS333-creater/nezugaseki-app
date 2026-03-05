import { motion } from "framer-motion";

const OceanHero = ({ badge, title, description }) => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/gaikan-2.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-sky-900/55 to-slate-950/75" />

        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(900px 500px at 20% 25%, rgba(255,255,255,0.18), transparent 60%), radial-gradient(800px 450px at 75% 60%, rgba(56,189,248,0.16), transparent 60%)"
          }}
          animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -bottom-16 left-10 h-28 w-28 rounded-full bg-white/10 blur-[1px]"
          animate={{ y: [0, -110, 0], x: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/3 h-16 w-16 rounded-full bg-sky-200/10 blur-[1px]"
          animate={{ y: [0, -140, 0], x: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-20 right-20 h-20 w-20 rounded-full bg-white/10 blur-[1px]"
          animate={{ y: [0, -130, 0], x: [0, -14, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl">
            {badge ? (
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs sm:text-sm text-sky-50 tracking-wide ring-1 ring-white/20 backdrop-blur">
                {badge}
              </p>
            ) : null}
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-wide text-white drop-shadow">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-sky-50/90">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-1 left-0 w-full">
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 1440 120"
            className="w-[200%] h-20 sm:h-24 opacity-70"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255,255,255,0.18)"
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </motion.svg>
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 1440 120"
            className="absolute bottom-0 w-[200%] h-20 sm:h-24 opacity-60"
            animate={{ x: ["-10%", "-60%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(56,189,248,0.16)"
              d="M0,72L96,74.7C192,77,384,83,576,80C768,77,960,64,1152,58.7C1344,53,1536,53,1632,53.3L1728,53L1728,120L1632,120C1536,120,1344,120,1152,120C960,120,768,120,576,120C384,120,192,120,96,120L0,120Z"
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

const OceanPage = ({ badge, title, description, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-x-hidden py-8 space-y-12 text-slate-900"
    >
      <OceanHero badge={badge} title={title} description={description} />
      <div className="container space-y-12 pb-10 sm:pb-14">{children}</div>
    </motion.div>
  );
};

export default OceanPage;
