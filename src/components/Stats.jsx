import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Roles Closed" },
  { value: "75%", label: "Payroll Time Saved" },
  { value: "82", label: "Engagement Score" },
];

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
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="min-w-[110px] text-left"
            >
              <dt className="font-serif text-4xl sm:text-5xl font-bold leading-none text-ink-900">
                {s.value}
              </dt>
              <dd className="mt-3 text-xs sm:text-sm text-ink-700 leading-snug">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
