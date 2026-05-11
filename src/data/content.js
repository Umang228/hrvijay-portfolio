import {
  Users,
  TrendingUp,
  GraduationCap,
  BarChart3,
  Briefcase,
  Award,
  BookOpen,
  Globe,
  Settings,
  UserPlus,
  HeartHandshake,
  Wallet,
  ClipboardList,
  ClipboardCheck,
  LineChart,
  Headphones,
  CalendarCheck,
  CalendarClock,
  MessageSquare,
  FileBadge,
} from "lucide-react";

export const profile = {
  name: "Vijay Ramanan",
  role: "HR Specialist | People Operations | Talent Strategy",
  tagline:
    "Building people-centric cultures through data-driven HR operations, strategic talent acquisition, and employee lifecycle excellence.",
  phone: "+91 88709 00365",
  email: "vijay.ramanan@email.com",
  location: "Chandigarh, India",
  linkedin: "linkedin.com/in/vijayramanan",
  linkedinUrl: "https://www.linkedin.com/in/vijayramanan",
};

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
    location: "Chandigarh",
    role: "HR Specialist (HRBP, Operations & Talent Acquisition)",
    period: "Oct 2024 - Present",
    bullets: [
      "Built end-to-end recruitment from scratch; achieved 85% offer-to-join ratio across Technology, Marketing, Operations, and Content verticals",
      "Implemented Zoho People+ within 4 months; reduced payroll processing time by 75% from 4 hours to under 1 hour per pay cycle",
      "Designed and deployed 30+ SOPs across HR, Finance, and Project Management; reduced escalation dependency on 8 reporting managers",
      "Ran 4 quarterly PMS cycles covering 12+ appraisal reviews; 6 of 8 (75%) PIPs resulted in sustained performance improvement",
      "Improved employee satisfaction scores from 6.0 to 8.0 through quarterly pulse surveys and targeted engagement",
    ],
  },
  {
    company: "Elite Elevators",
    location: "Chennai",
    role: "HR Executive (Talent Acquisition & Regional HRBP)",
    period: "May 2023 - Oct 2024",
    bullets: [
      "Designated Regional HRBP for 300+ employees across 8 cities spanning South, West, and North India",
      "Closed 50+ roles across entry-to-mid levels in 9 months; reduced Time-to-Fill from 13-15 days to 6-10 days (~45% improvement)",
      "Managed end-to-end recruitment-to-training pipeline for 52 NHT batches with 85-95% batch-to-deployment conversion rate",
      "Maintained regional attrition at ~15% against organizational average of 20-25% (5-10pp below benchmark)",
      "Contributed to improving organizational engagement score from low-70s to 82/100 through 80+ pulse surveys",
    ],
  },
];

export const competencies = [
  {
    title: "HR Operations",
    desc: "End-to-end HR processes, payroll automation, SOP design",
    Icon: Settings,
    color: "blue",
  },
  {
    title: "Talent Acquisition",
    desc: "Full-cycle recruitment, sourcing frameworks, offer management",
    Icon: UserPlus,
    color: "purple",
  },
  {
    title: "Employee Relations",
    desc: "Engagement, grievance handling, culture building",
    Icon: Users,
    color: "blue",
  },
  {
    title: "Payroll & Compliance",
    desc: "Statutory compliance, TDS, PF, PT frameworks",
    Icon: Wallet,
    color: "purple",
  },
  {
    title: "Performance Management",
    desc: "PMS cycles, PIP management, appraisal reviews",
    Icon: ClipboardCheck,
    color: "sage",
  },
  {
    title: "eNPS & Pulse Surveys",
    desc: "Sentiment analysis, feedback synthesis, action planning",
    Icon: ClipboardList,
    color: "purple",
  },
  {
    title: "Attrition Management",
    desc: "Retention strategies, exit analysis, biweekly reviews",
    Icon: LineChart,
    color: "sage",
  },
  {
    title: "HRBP Support",
    desc: "Business partnering, headcount planning, stakeholder management",
    Icon: Headphones,
    color: "purple",
  },
  {
    title: "Onboarding & BGV",
    desc: "Structured workflows, background verification coordination",
    Icon: CalendarCheck,
    color: "sage",
  },
];

export const tools = [
  { name: "Workday", Icon: Briefcase, color: "blue" },
  { name: "Greenhouse", Icon: Users, color: "purple" },
  { name: "Lattice", Icon: TrendingUp, color: "sage" },
  { name: "Culture Amp", Icon: MessageSquare, color: "blue" },
  { name: "BambooHR", Icon: FileBadge, color: "purple" },
  { name: "Notion", Icon: BookOpen, color: "sage" },
  { name: "Tableau", Icon: BarChart3, color: "blue" },
  { name: "LinkedIn Talent", Icon: Globe, color: "purple" },
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
