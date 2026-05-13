import {
  UserPlus,
  Award,
  BookOpen,
  CalendarClock,
  Workflow,
  LayoutGrid,
  Target,
  CircleDollarSign,
  Scale,
} from "lucide-react";

export const profile = {
  name: "Vijay Ramanan",
  role: "HR Specialist | People Operations | Talent Strategy",
  tagline:
    "Building people-centric cultures through data-driven HR operations, strategic talent acquisition, and employee experience design.",
  phone: "+91 8870900365",
  email: "ramvijay.1312@gmail.com",
  location: "Chandigarh, India",
  linkedin: "linkedin.com/in/vijay-ramanan-5913601a1",
  linkedinUrl: "https://www.linkedin.com/in/vijay-ramanan-5913601a1",
};

export const stats = [
  {
    value: "3+",
    title: "Years of Experience",
    subtitle: "Across startup & enterprise",
  },
  {
    value: "50+",
    title: "Roles Closed",
    subtitle: "In under 9 months",
  },
  {
    value: "75%",
    title: "Payroll time saved",
    subtitle: "4 hours → under 1 hour",
  },
  {
    value: "82",
    title: "Engagement score",
    subtitle: "Improved from low-70s",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#competencies" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#connect" },
];

export const experiences = [
  {
    company: "Wellness Extract",
    location: "Mohali",
    role: "HR Specialist",
    period: "Oct 2024 - May 2026",
    bullets: [
      "Joined with no formal HR structure—informal hiring, manual payroll, no onboarding, and little documentation. Built HR, payroll, and people processes while the company kept growing.",
      "Implemented Zoho People+ end-to-end within 4 months. Payroll that used to take about 4 hours now runs in under 1 hour with zero salary errors.",
      "Built end-to-end recruitment from scratch across Technology, Marketing, Operations, and Content. Out of 27 offers extended, 23 candidates joined—an ~85% offer-to-join ratio in a market where candidates juggle multiple offers.",
      "Wrote 30+ SOPs covering HR, Finance, and Project Management (approved by the CTO and COO). Managers moved from escalating routine decisions upward to acting from clear reference documents.",
      "Ran 4 quarterly PMS cycles across 12+ reviews: 10 salary increments, 1 promotion, and 1 intern converted to full-time. Managed 8 PIPs; 6 led to genuine, sustained improvement.",
      "Raised employee satisfaction scores from 6.0 to 8.0 out of 10 over the course of the role.",
    ],
  },
  {
    company: "Elite Elevators",
    location: "Chennai",
    role: "HR Executive",
    period: "May 2023 - Oct 2024",
    bullets: [
      "Regional HRBP for 300+ employees across 8 cities in South, West, and North India. The two biggest challenges at the start were attrition running at 20–25% and hiring cycles that were too slow.",
      "Closed 50+ roles in 9 months and brought time-to-fill down from 13–15 days to 6–10 days—roughly a 45% improvement.",
      "Managed the recruitment-to-training pipeline for 52 NHT batches with an 85–95% batch-to-deployment conversion rate.",
      "On retention, focused on consistent personal attention: 100+ structured one-on-ones with frontline employees, biweekly performance check-ins with managers, and 80+ pulse surveys that fed directly into leadership action plans. Regional attrition held at around 15% against a company average of 20–25%.",
      "Helped move the organizational engagement score from the low 70s to 82 out of 100.",
      "This role taught me that retention is not something you fix with a policy—it is something you earn over time.",
    ],
  },
];

export const competencies = [
  {
    title: "Employee Lifecycle Management",
    desc: "From hire to exit: onboarding, transfers, records, and offboarding that stay consistent as teams scale.",
    Icon: Workflow,
    color: "blue",
  },
  {
    title: "Workforce Planning",
    desc: "Headcount scenarios, role design, and org structure aligned to business plans and growth stages.",
    Icon: LayoutGrid,
    color: "purple",
  },
  {
    title: "Talent Acquisition",
    desc: "Full-cycle recruitment, sourcing, offers, and candidate experience across functions and levels.",
    Icon: UserPlus,
    color: "sage",
  },
  {
    title: "Performance Management",
    desc: "Goal-setting, review cycles, calibrations, and PIPs tied to clear expectations and outcomes.",
    Icon: Target,
    color: "blue",
  },
  {
    title: "Compensation & Benefits",
    desc: "Benchmarking, pay structures, incentives, and benefits programs with clear, fair communication.",
    Icon: CircleDollarSign,
    color: "purple",
  },
  {
    title: "Statutory Compliance",
    desc: "PF, ESI, PT, TDS, and labor-law alignment with documentation and processes that hold up to scrutiny.",
    Icon: Scale,
    color: "sage",
  },
];

export const tools = [
  { name: "Zoho People+", brand: "zoho", color: "blue" },
  { name: "GreytHR", brand: "greythr", color: "purple" },
  { name: "Microsoft 365", brand: "microsoft365", color: "sage" },
  { name: "Miro", brand: "miro", color: "blue" },
  { name: "Jira and Confluence", brand: "jira-confluence", color: "purple" },
  { name: "Generative AI", brand: "googlegemini", color: "sage" },
];

export const education = [
  {
    school: "Chandigarh University",
    degree: "Master of Business Administration",
    period: "2021 - 2023",
    desc: "Specialized in HR Management and Business Strategy",
  },
  {
    school: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    period: "2015 - 2019",
    desc: "Engineering foundation with analytical problem-solving skills",
  },
];

export const certifications = [
  { name: "HR Foundations", issuer: "CIPD & LinkedIn" },
  {
    name: "Advancing Your Skills as an HR Business Partner",
    issuer: "LinkedIn",
  },
  {
    name: "Leading: Human Resource Management and Leadership",
    issuer: "Macquarie University",
  },
  {
    name: "Public Speaking Skills Professional Certificate",
    issuer: "Toastmasters International",
  },
];

export const publications = [
  {
    title: "Designing Performance Systems People Actually Use",
    venue: "People Matters · Feature",
    year: "2024",
    Icon: Award,
  },
  {
    title: "The Quiet Work of a Great Manager Academy",
    venue: "LinkedIn Editorial",
    year: "2023",
    Icon: BookOpen,
  },
  {
    title: "DEI Beyond Dashboards",
    venue: "HR Tech Conference, Panelist",
    year: "2023",
    Icon: CalendarClock,
  },
];
