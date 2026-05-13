import { motion } from "framer-motion";
import { stats } from "../data/content";

export default function Stats() {
  return (
    <section aria-label="Key results" className="relative py-4 sm:py-10">
      <div className="container-page">
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap items-start gap-x-10 gap-y-8 sm:gap-x-14"
        >
          {stats.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="min-w-[110px] max-w-[220px] text-left"
            >
              <dt className="font-serif text-4xl sm:text-5xl font-bold leading-none text-ink-900">
                {s.value}
              </dt>
              <dd className="mt-3 space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-ink-900 leading-snug">
                  {s.title}
                </p>
                <p className="text-[11px] sm:text-xs text-ink-600 leading-snug">
                  {s.subtitle}
                </p>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
