export type Link = { label: string; href: string };

export type IconName =
  | 'receipt'
  | 'escrow'
  | 'identity'
  | 'tools'
  | 'sync'
  | 'spark'
  | 'cli'
  | 'flow'
  | 'memory'
  | 'goal'
  | 'budget'
  | 'loop'
  | 'window'
  | 'chip'
  | 'link'
  | 'agents'
  | 'contract'
  | 'server';

/** One slide of the case-study carousel. The dark panel is made of real text and numbers, never screenshots. */
export type CaseStudy = {
  name: string;
  kicker: string;
  href: string;
  linkLabel: string;
  panel: {
    headline: string;
    accent: string;
    blurb: string;
    features: { icon: IconName; label: string }[];
    tiles: { value: string; label: string; note: string }[];
  };
};

export type Stat = { value: string; label: string; note: string };

export type Capability = { icon: IconName; title: string; body: string; items: string[] };

export type OssContribution = {
  project: string;
  repo: string;
  pr: string;
  href: string;
  title: string;
  language: string;
  date: string;
};

export type ExperienceEntry = { title: string; org: string; logo: string; logoAlt: string; badge?: string; dates: string; summary: string };

export type OrgContribution = {
  name: string;
  logo: string;
  foundation: string;
  languages: string;
  merged: number;
  summary: string;
  href: string;
};

export type EducationEntry = { school: string; degree: string; dates: string };

export type SkillGroup = { category: string; skills: string[] };

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'email';
};

export type Portfolio = {
  name: string;
  firstName: string;
  tagline: string;
  status: string;
  location: string;
  email: string;
  resumeHref: string;
  intro: string;
  cases: CaseStudy[];
  stats: Stat[];
  capabilities: Capability[];
  oss: OssContribution[];
  orgs: OrgContribution[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: string[];
  skills: SkillGroup[];
  socials: SocialLink[];
};
