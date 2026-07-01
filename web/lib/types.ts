export type SkillGroup = { category: string; skills: string[] };

export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  repo: string;
  demo?: string;
  tag: 'AI' | 'Web3' | 'Systems' | 'Web' | 'AI + Web3';
};

export type TimelineEntry = {
  title: string;      // e.g. "BSc, Data Science"
  org: string;        // e.g. "IIT Madras"
  period: string;     // e.g. "2024 – 2028"
  detail?: string;
};

export type Achievement = {
  title: string;
  detail: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'email';
};

export type Portfolio = {
  name: string;
  tagline: string;
  intro: string;
  location: string;
  photo: string;
  resumeHref: string;
  about: string[];
  skills: SkillGroup[];
  projects: Project[];
  timeline: TimelineEntry[];
  achievements: Achievement[];
  socials: SocialLink[];
  codingNotesHref: string;
};
