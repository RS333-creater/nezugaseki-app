import { motion } from "framer-motion";

const Bubbles = () => {
  const bubbleArray = [...Array(20)]; 
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbleArray.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          style={{
            width: Math.random() * 12 + 4 + "px",
            height: Math.random() * 12 + 4 + "px",
            left: Math.random() * 100 + "%",
            bottom: "-5%",
          }}
          animate={{
            y: ["0%", "-120vh"],
            opacity: [0, 0.4, 0],
            x: ["0%", (Math.random() - 0.5) * 50 + "%"],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const OceanHero = ({ badge, title, description }) => {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] flex items-center overflow-hidden" style={{ backgroundColor: '#082f49' }}>
      <div 
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url(/images/gaikan-2.jpg)" }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,47,73,0.9), rgba(12,74,110,0.4), rgba(8,47,73,0.9))' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, #082f49)' }} />

      <Bubbles />

      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 pointer-events-none z-20">
        <motion.svg viewBox="0 0 100 1000" className="h-[200%] w-full opacity-30" animate={{ y: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,0 C30,150 70,350 30,500 C-10,650 30,850 70,1000 L0,1000 Z" />
        </motion.svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 pointer-events-none z-20">
        <motion.svg viewBox="0 0 100 1000" className="h-[200%] w-full opacity-30" animate={{ y: ["-50%", "0%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} preserveAspectRatio="none">
          <path fill="#ffffff" d="M100,0 C70,150 30,350 70,500 C110,650 70,850 30,1000 L100,1000 Z" />
        </motion.svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-8 sm:px-24 py-20 text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {badge && <span className="inline-block px-4 py-1.5 mb-8 text-xs font-black tracking-widest bg-white/10 backdrop-blur-xl rounded-full border border-white/20 uppercase">{badge}</span>}
          <h1 className="text-4xl sm:text-8xl font-black tracking-tighter leading-tight mb-8 drop-shadow-2xl">{title}</h1>
          {description && <p className="text-lg sm:text-2xl font-bold text-sky-50 leading-relaxed max-w-2xl drop-shadow-md">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
};

const OceanPage = ({ badge, title, description, children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#082f49' }}>
      <div className="fixed inset-0 z-0" style={{ background: 'linear-gradient(to bottom, #0c4a6e, #082f49, #020617)' }} />
      <OceanHero badge={badge} title={title} description={description} />
      <Bubbles />
      <main className="container mx-auto px-4 sm:px-28 py-12 sm:py-24 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default OceanPage;