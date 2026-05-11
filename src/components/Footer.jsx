import { Heart } from "lucide-react";
import { profile } from "../data/content";

function LinkedInIcon({ size = 13, className = "" }) {
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

const credits = [
  { name: "Umang", url: "https://www.linkedin.com/in/goyal-umang/" },
  { name: "Robin", url: "https://www.linkedin.com/in/robin-jamwal/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream-200/60 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <p className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-ink-600">
          <span>Made with</span>
          <Heart
            size={14}
            className="text-brand-500 fill-brand-500 animate-pulse"
            aria-label="love"
          />
          <span>by</span>
          {credits.map((c, i) => (
            <span key={c.name} className="inline-flex items-center gap-1">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-medium text-ink-900 transition-colors hover:text-brand-500"
              >
                {c.name}
                <LinkedInIcon
                  size={12}
                  className="opacity-60 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5"
                />
              </a>
              {i === 0 && <span className="text-ink-500">and</span>}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
