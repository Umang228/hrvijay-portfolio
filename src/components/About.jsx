import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profilePhoto from "../assets/profile.jpg";
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
          <motion.div variants={fadeUp} className="relative w-full max-w-[300px] sm:max-w-[320px] justify-self-start">
            <div className="absolute -inset-3 rounded-3xl bg-brand-200/40 blur-xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-1.5 shadow-card">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-ink-800 to-ink-900">
                <img
                  src={profilePhoto}
                  alt="Portrait of Vijay Ramanan"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
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
                I graduated with a Civil Engineering degree from SRM Institute of
                Science and Technology in 2019. Then COVID happened. The construction
                industry came to a standstill and the job market I had prepared for
                simply became difficult to break into.
              </p>
              <p>
                Instead of waiting it out, I started volunteering. Across multiple
                NGOs in Hyderabad and Delhi, I worked with children whose parents had
                lost their jobs during the lockdowns and who could no longer attend
                school regularly. We supplemented their existing education system with
                online classes, helped them stay on track, and made sure a disrupted
                world did not become a disrupted childhood.
              </p>
              <p>
                It was not a full-time role. But it was the most full-time I had ever
                felt about anything. What I saw in that work changed how I thought about
                people entirely. When a parent loses a job, a child loses a classroom.
                Every problem that looks like an individual problem is almost always a
                system problem in disguise. And someone has to be the one who looks at
                the system. That pulled me toward people and organizations in a way
                nothing before had.
              </p>
              <p>
                So I enrolled for an MBA, and somewhere through that course I recognized
                something about myself that had actually been there since engineering.
                When I face a problem, I do not look at it as one big thing. I break it
                into fragments, work through each one with clarity, and build the
                solution from the ground up. The MBA gave me the language. The NGO years
                gave me the reason. That is how I ended up in HR. Not the obvious path
                from engineering, but the one that made complete sense given everything
                that happened.
              </p>
              <p>
                Three years in, I still approach every person&apos;s problem the same
                way. Find the fragment causing the rest to fail. Fix that, and the rest
                tends to follow.
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1Hrbu_hTEzp4OD2aDbdyoo9OFZixqek4R/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors group"
            >
              See my resume
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
