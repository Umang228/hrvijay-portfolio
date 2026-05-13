import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, ArrowUpRight, Calendar } from "lucide-react";
import { profile } from "../data/content";

const easeOut = [0.22, 1, 0.36, 1];

function telHref(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("91") ? `tel:+${digits}` : `tel:+91${digits}`;
}

function LinkedInIcon({ size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const contacts = [
  {
    Icon: User,
    label: "Name",
    value: profile.name,
  },
  {
    Icon: Phone,
    label: "Contact number",
    value: profile.phone,
    href: telHref(profile.phone),
  },
  {
    Icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    Icon: MapPin,
    label: "Location",
    value: profile.location,
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
  },
];

export default function Connect() {
  return (
    <section id="connect" className="relative py-20 sm:py-24">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-sky-200/70">
              <Mail size={13} />
              Get in Touch
            </span>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-[1.08]">
              Let&apos;s Have a{" "}
              <span className="italic font-semibold text-navy-700">
                Real Conversation :)
              </span>
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-base text-ink-700 leading-relaxed">
              <p>
                I am not looking to send a resume into a void. I am looking to
                talk to people who are building something and need HR to work
                properly—whether that is setting up a function from scratch,
                fixing retention problems, or finding an HRBP who will actually
                show up for managers and employees.
              </p>
              <p>
                If any of that sounds like what you need, send me a message. I
                respond to everyone.
              </p>
              <p>
                Best way to reach me is through the contact details here or
                directly on LinkedIn.
              </p>
            </div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
              }}
              className="mt-10 space-y-5"
            >
              {contacts.map((c) => (
                <ContactItem key={c.label} {...c} />
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
            className="relative rounded-2xl border border-ink-900/[0.06] bg-white p-7 sm:p-8 shadow-[0_18px_40px_-22px_rgba(30,58,100,0.25)]"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              I respond to everyone
            </span>

            <p className="mt-5 font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              What I&apos;m open to
            </p>
            <p className="mt-3 text-sm text-ink-600 leading-relaxed">
              Currently open to full-time HR roles, HRBP and HR Operations
              positions, and short-term consulting work around HR system setup
              and compliance frameworks.
            </p>

            <a
              href={`mailto:${profile.email}`}
              style={{
                background:
                  "linear-gradient(135deg, rgb(18, 16, 32) 0%, rgb(26, 58, 92) 100%)",
                boxShadow: "rgba(26, 58, 92, 0.2) 0px 4px 16px",
              }}
              className="group mt-7 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[rgba(26,58,92,0.35)_0px_8px_24px]"
            >
              <Calendar size={15} />
              Send me a message
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ Icon, label, value, href }) {
  const Wrap = href ? "a" : "div";
  const isExternal = href?.startsWith("http");
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -14 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      }}
    >
      <Wrap
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex items-center gap-4"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200/70 transition-all duration-300 group-hover:bg-sky-200 group-hover:scale-105">
          <Icon size={18} />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium text-sky-700">{label}</p>
          <p className="mt-0.5 text-base font-semibold text-ink-900 break-words">
            {value}
          </p>
        </div>
      </Wrap>
    </motion.li>
  );
}
