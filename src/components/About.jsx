import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "./Section";

export default function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "rgb(251, 246, 207)" }}
      className="relative pt-12 sm:pt-16 pb-20 sm:pb-24"
    >
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid items-center gap-10 md:grid-cols-[0.65fr_1.35fr]"
        >
          <motion.div variants={fadeUp} className="relative mx-auto md:mx-0 max-w-[260px] w-full">
            <div className="absolute -inset-3 rounded-3xl bg-brand-200/40 blur-xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-1.5 shadow-card">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-ink-800 to-ink-900">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Portrait of Vijay Ramanan"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-4 rounded-2xl bg-white px-4 py-3 shadow-card border border-cream-200"
            >
              <p className="text-[11px] uppercase tracking-widest text-ink-500">Currently</p>
              <p className="text-sm font-medium text-ink-900">Sr. HRBP · Northwind</p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <span className="eyebrow">About</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-ink-900">
              Building <em className="italic text-brand-500">People-Centric</em>
              <br />
              Cultures.
            </h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                I am an HR leader with over a decade of experience partnering with
                founders, executives and engineering leaders to build the kind of
                workplaces people want to stay at. My work sits at the intersection
                of strategy, operations and human craft.
              </p>
              <p>
                Whether it is rebuilding a performance system, scaling a manager
                academy or quietly resolving a difficult conversation, I treat every
                program as a product — measured, iterated and built with care.
              </p>
            </div>

            <a
              href="#experience"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors group"
            >
              See my journey
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
