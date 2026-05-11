import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { competencies } from "../data/content";

const easeOut = [0.22, 1, 0.36, 1];

const colorMap = {
  blue: {
    bg: "bg-sky-100",
    text: "text-sky-700",
    ring: "ring-sky-200/70",
  },
  purple: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    ring: "ring-violet-200/70",
  },
  sage: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    ring: "ring-emerald-200/70",
  },
};

export default function Competencies() {
  return (
    <section
      id="competencies"
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
            <Layers size={13} className="text-navy-700" />
            What I Do
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight">
            Core{" "}
            <span className="italic font-semibold text-navy-700">
              Competencies
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {competencies.map(({ title, desc, Icon, color }) => {
            const c = colorMap[color] ?? colorMap.blue;
            return (
              <motion.article
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: easeOut },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-ink-900/[0.06] bg-white p-6 sm:p-7 shadow-[0_8px_24px_-16px_rgba(30,58,100,0.2)] transition-all duration-500 hover:shadow-[0_18px_40px_-22px_rgba(30,58,100,0.28)]"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${c.bg} ${c.text} ring-1 ${c.ring} transition-all duration-500 group-hover:scale-105 group-hover:rotate-3`}
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-serif text-xl sm:text-[22px] font-bold text-ink-900 leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {desc}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
