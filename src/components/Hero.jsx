import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  Network,
  Calendar,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../data/content";

const easeOut = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-32 pb-8 sm:pb-10 overflow-hidden"
    >
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-navy-700 leading-relaxed">
              HR Specialist
              <span className="mx-2 text-navy-500/50">|</span>
              People Operations
              <span className="mx-2 text-navy-500/50">|</span>
              Talent Strategy
            </p>

            <h1 className="mt-7 font-serif font-bold text-[64px] sm:text-7xl lg:text-[88px] xl:text-[100px] leading-[0.95] text-ink-900 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
                className="block"
              >
                Vijay
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
                className="block"
              >
                Ramanan
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.35 }}
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-ink-700"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#connect"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(18, 16, 32) 0%, rgb(26, 58, 92) 100%)",
                  boxShadow: "rgba(26, 58, 92, 0.2) 0px 4px 16px",
                }}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[rgba(26,58,92,0.35)_0px_8px_24px]"
              >
                Let's Connect
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#experience"
                style={{
                  color: "rgb(18, 16, 32)",
                  border: "1.5px solid rgba(26, 58, 92, 0.25)",
                  background: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              >
                View Experience
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — orbit / network composition */}
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────── */

const tiles = [
  {
    angle: 215,
    radius: 0.46,
    bg: "bg-pastel-blue",
    ring: "ring-sky-300/50",
    Icon: Users,
    iconColor: "text-sky-700/80",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    floatDelay: 0,
  },
  {
    angle: 325,
    radius: 0.46,
    bg: "bg-pastel-purple",
    ring: "ring-violet-300/50",
    Icon: BarChart3,
    iconColor: "text-violet-700/80",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    floatDelay: 0.4,
  },
  {
    angle: 145,
    radius: 0.46,
    bg: "bg-pastel-sage",
    ring: "ring-emerald-300/50",
    Icon: CalendarDays,
    iconColor: "text-emerald-700/80",
    size: "h-12 w-12 sm:h-14 sm:w-14",
    floatDelay: 0.6,
  },
  {
    angle: 30,
    radius: 0.46,
    bg: "bg-pastel-peach",
    ring: "ring-orange-300/50",
    Icon: Calendar,
    iconColor: "text-orange-700/80",
    size: "h-12 w-12 sm:h-14 sm:w-14",
    floatDelay: 0.8,
  },
];

const orbitDots = [
  { angle: 270, radius: 0.5, size: 4 },
  { angle: 0, radius: 0.34, size: 3 },
  { angle: 110, radius: 0.5, size: 3 },
  { angle: 60, radius: 0.34, size: 4 },
  { angle: 200, radius: 0.34, size: 3 },
  { angle: 240, radius: 0.5, size: 3 },
];

function polar(angleDeg, radiusFraction) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(rad) * radiusFraction * 100}%`,
    top: `${50 + Math.sin(rad) * radiusFraction * 100}%`,
  };
}

function HeroOrbit() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
    >
      {/* concentric rings */}
      <Ring fraction={0.96} dur={48} />
      <Ring fraction={0.66} dur={36} reverse />
      <Ring fraction={0.36} dur={26} />

      {/* dots placed precisely on rings */}
      {orbitDots.map((d, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
          style={{
            ...polar(d.angle, d.radius),
            width: d.size,
            height: d.size,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-900/25"
        />
      ))}

      {/* tiles on the outer ring */}
      {tiles.map((t, i) => (
        <Tile key={i} {...t} delay={0.5 + i * 0.12} />
      ))}

      {/* big navy tile, dead center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.9 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.04 }}
          className="grid h-24 w-24 sm:h-28 sm:w-28 place-items-center rounded-2xl bg-navy-500 ring-2 ring-navy-700/25 shadow-[0_18px_40px_-12px_rgba(30,58,100,0.55)]"
        >
          <Network className="text-white" size={36} strokeWidth={1.8} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Ring({ fraction, dur = 30, reverse = false }) {
  return (
    <motion.div
      aria-hidden
      style={{ width: `${fraction * 100}%`, height: `${fraction * 100}%` }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        className="h-full w-full rounded-full border border-ink-900/[0.08]"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

function Tile({
  angle,
  radius,
  bg,
  ring,
  Icon,
  iconColor,
  size,
  delay = 0,
  floatDelay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      style={polar(angle, radius)}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        className={`${size} ${bg} ${ring} ring-1 grid place-items-center rounded-2xl shadow-[0_10px_24px_-10px_rgba(30,58,100,0.3)]`}
      >
        <Icon className={iconColor} size={22} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}
