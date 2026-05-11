import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "../data/content";

const easeOut = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-14">
      <div className="container-page">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-ink-700 backdrop-blur-sm">
            <Briefcase size={13} className="text-navy-700" />
            Career Journey
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight">
            Professional{" "}
            <span className="italic font-semibold text-navy-700">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* center vertical line (desktop) / left line (mobile) */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 w-px bg-ink-900/15 left-4 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0; // even → card on RIGHT, date on LEFT (matches screenshot for first item)
  // To match screenshot: first card (i=0) on RIGHT, second (i=1) on LEFT
  const cardOnRight = isLeft;

  return (
    <li className="relative">
      {/* Center node dot */}
      <motion.span
        aria-hidden
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: easeOut, delay: 0.1 }}
        className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 z-10 grid place-items-center"
      >
        <span className="h-3 w-3 rounded-full bg-navy-700 ring-4 ring-[rgb(254,252,232)]" />
      </motion.span>

      <div
        className={`grid gap-6 md:gap-10 md:grid-cols-2 items-start ${
          cardOnRight ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        {/* Date column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className={`pl-12 md:pl-0 ${
            cardOnRight ? "md:text-right md:pr-12" : "md:pl-12"
          }`}
        >
          <p className="text-sm font-medium text-ink-700 mt-5">{exp.period}</p>
        </motion.div>

        {/* Card column */}
        <motion.div
          initial={{ opacity: 0, x: cardOnRight ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className={`pl-12 md:pl-0 ${
            cardOnRight ? "md:pl-12" : "md:pr-12"
          }`}
        >
          <ExperienceCard exp={exp} />
        </motion.div>
      </div>
    </li>
  );
}

function ExperienceCard({ exp }) {
  return (
    <article className="group rounded-2xl border border-ink-900/[0.07] bg-white/85 p-6 sm:p-7 shadow-[0_10px_30px_-18px_rgba(30,58,100,0.25)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(30,58,100,0.35)] hover:border-navy-700/20">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200/70 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shrink-0">
          <Briefcase size={18} strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 leading-tight">
            {exp.company}
          </h3>
          {exp.location && (
            <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-ink-500">
              <MapPin size={11} className="opacity-70" />
              {exp.location}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold text-navy-700">{exp.role}</p>

      <ul className="mt-4 space-y-3">
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ink-700"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
