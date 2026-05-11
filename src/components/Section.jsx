import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-12 text-center"
          >
            {eyebrow && (
              <motion.span variants={fadeUp} className="eyebrow">
                {eyebrow}
              </motion.span>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="section-title mt-4 text-balance"
              >
                {title}
              </motion.h2>
            )}
            {intro && (
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-4 max-w-2xl text-ink-600 text-balance"
              >
                {intro}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
