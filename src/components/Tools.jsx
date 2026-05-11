import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { tools } from "../data/content";

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

export default function Tools() {
  return (
    <section id="tools" className="relative py-20 sm:py-14">
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
            <Wrench size={13} className="text-navy-700" />
            Toolkit
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight">
            Tools &{" "}
            <span className="italic font-semibold text-navy-700">
              Platforms
            </span>
          </h2>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {tools.map(({ name, Icon, color }) => {
            const c = colorMap[color] ?? colorMap.blue;
            return (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: easeOut },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-3 rounded-2xl border border-ink-900/[0.06] bg-white p-4 shadow-[0_8px_24px_-16px_rgba(30,58,100,0.18)] transition-all duration-500 hover:shadow-[0_16px_36px_-22px_rgba(30,58,100,0.25)]"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${c.bg} ${c.text} ring-1 ${c.ring} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>
                <span className="font-serif text-base font-semibold text-ink-900">
                  {name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
