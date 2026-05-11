import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data/content";

const easeOut = [0.22, 1, 0.36, 1];

export default function Education() {
  return (
    <section
      id="education"
      style={{ backgroundColor: "rgb(251, 246, 207)" }}
      className="relative py-20 sm:py-24"
    >
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
            <GraduationCap size={13} className="text-navy-700" />
            Background
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight">
            Education &{" "}
            <span className="italic font-semibold text-navy-700">
              Certifications
            </span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2"
        >
          {education.map((e) => (
            <motion.article
              key={e.school}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: easeOut },
                },
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-ink-900/[0.06] bg-white p-6 sm:p-7 shadow-[0_8px_24px_-16px_rgba(30,58,100,0.18)] transition-all duration-500 hover:shadow-[0_18px_40px_-22px_rgba(30,58,100,0.28)]"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200/70 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <GraduationCap size={20} strokeWidth={2} />
                </span>
                <h3 className="font-serif text-xl sm:text-[22px] font-bold text-ink-900 leading-snug">
                  {e.school}
                </h3>
              </div>

              <p className="mt-5 text-sm font-bold text-navy-700">
                {e.degree}
              </p>

              <span className="mt-3 inline-flex items-center rounded-full bg-navy-700/10 px-3 py-1 text-xs font-medium text-navy-700">
                {e.period}
              </span>

              {e.desc && (
                <p className="mt-4 text-sm text-ink-600 leading-relaxed">
                  {e.desc}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Professional Certifications */}
        <div className="mx-auto mt-16 max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center font-serif text-2xl sm:text-3xl font-bold text-ink-900"
          >
            Professional Certifications
          </motion.h3>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {certifications.map((c) => (
              <motion.li
                key={c.name}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
                whileHover={{ y: -3 }}
                className="group flex items-start gap-3 rounded-xl border border-ink-900/[0.06] bg-white px-4 py-3.5 shadow-[0_6px_18px_-12px_rgba(30,58,100,0.18)] transition-all duration-500 hover:shadow-[0_12px_28px_-18px_rgba(30,58,100,0.25)]"
              >
                <Award
                  size={18}
                  className="mt-0.5 shrink-0 text-navy-700 transition-transform duration-500 group-hover:rotate-12"
                />
                <p className="text-sm text-ink-800 leading-snug">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-ink-500"> - {c.issuer}</span>
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
