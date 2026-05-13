import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/content";

const easeOut = [0.22, 1, 0.36, 1];

export default function Education() {
  return (
    <section
      id="education"
      style={{ backgroundColor: "rgb(251, 246, 207)" }}
      className="relative py-20 sm:py-24"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-ink-700 backdrop-blur-sm">
            <GraduationCap size={13} className="text-navy-700" />
            Education
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight">
            Educational{" "}
            <span className="italic font-semibold text-navy-700">
              qualifications
            </span>
          </h2>
        </motion.div>

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
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-ink-900 leading-snug">
                    {e.degree}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-ink-700 leading-snug">
                      {e.school}
                    </p>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-navy-700/10 px-3 py-1 text-xs font-medium text-navy-700">
                      {e.period}
                    </span>
                  </div>
                </div>
              </div>

              {e.desc && (
                <p className="mt-5 text-sm text-ink-600 leading-relaxed">
                  {e.desc}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
