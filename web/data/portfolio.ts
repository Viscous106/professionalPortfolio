import type { Portfolio } from '@/lib/types';

export const portfolio: Portfolio = {
  name: 'Yash Virulkar',
  tagline: 'Building across AI, systems, and the web.',
  intro:
    'I design and ship agentic AI systems, low-level tooling, and full-stack products — and I like understanding every layer, from smart contracts to compositors.',
  location: 'Bangalore, India',
  photo: 'https://github.com/Viscous106.png',
  resumeHref: '/Yash_Virulkar_Resume.pdf',
  about: [
    "I'm a computer-science and data-science student who builds across the stack — from AI agent orchestration and reinforcement-learning environments to a Rust-built operating system and on-chain smart contracts.",
    'I study a BSc in Data Science at IIT Madras and CS at Scaler School of Technology, and I spend most of my time turning ambitious ideas into working systems. I daily-drive Arch and Nix, contribute to open source, and dig into security for fun.',
    "Whatever the domain, I care about understanding the whole system rather than just the surface.",
  ],
  skills: [
    { category: 'Languages', skills: ['Python', 'Go', 'Rust', 'Java', 'JavaScript / TypeScript', 'C++', 'Bash'] },
    { category: 'Web', skills: ['React', 'Next.js', 'Node.js', 'HTML', 'CSS'] },
    { category: 'AI / ML', skills: ['LLMs', 'Agent Orchestration', 'Reinforcement Learning'] },
    { category: 'Web3', skills: ['Solidity', 'Smart Contracts', 'Monad'] },
    { category: 'Systems / Infra', skills: ['Kubernetes', 'Linux (Arch, Nix)', 'Git'] },
    { category: 'Security', skills: ['Offensive Security', 'CTF / Hacking Notes'] },
  ],
  projects: [
    {
      name: 'omniBox',
      blurb:
        'Assign any goal to an AI: it decomposes the task, spins up specialized agents, uses your tools, and delivers results — no workflows to define.',
      tech: ['Python', 'LLMs', 'Multi-agent'],
      repo: 'https://github.com/Viscous106/omniBox',
      tag: 'AI',
    },
    {
      name: 'Orkflow',
      blurb:
        'A YAML-driven orchestration engine for multi-agent AI systems — define your agents, wire their collaboration, and run complex workflows without writing orchestration code.',
      tech: ['Go', 'Multi-agent', 'YAML'],
      repo: 'https://github.com/Viscous106/Orkflow',
      tag: 'AI',
    },
    {
      name: 'nodeLive',
      blurb:
        'An AI meeting dashboard built on the Zoom SDK — live transcription and meeting intelligence.',
      tech: ['Python', 'Zoom SDK', 'LLMs'],
      repo: 'https://github.com/Viscous106/nodeLive',
      demo: 'https://nodelive-twbw.onrender.com/',
      tag: 'AI',
    },
    {
      name: 'rs-shell',
      blurb:
        'A POSIX-style shell implemented from scratch in Rust, built through the CodeCrafters "build your own shell" challenge.',
      tech: ['Rust'],
      repo: 'https://github.com/Viscous106/rs-shell',
      tag: 'Systems',
    },
    {
      name: 'RuView',
      blurb:
        'WiFi DensePose: turns commodity WiFi signals into real-time human pose estimation, vital-sign monitoring, and presence detection — no camera required.',
      tech: ['Python', 'ML', 'Signal Processing'],
      repo: 'https://github.com/Viscous106/RuView',
      tag: 'AI',
    },
    {
      name: 'VISC-ASSistant',
      blurb:
        'An offline, ultra-low-power voice-automation daemon for Arch Linux: a wake-word engine launches a suite of desktop apps hands-free without draining the battery.',
      tech: ['Python', 'Arch Linux', 'Wake-word'],
      repo: 'https://github.com/Viscous106/VISC-ASSistant',
      tag: 'Systems',
    },
    {
      name: 'mergit',
      blurb:
        'An AI-agent workspace where agents complete real dev and GitHub tasks and generate on-chain proof of their work, identity, reputation, and accountability — backed by Solidity contracts (AgentPassport, ProofOfWork, ReputationRegistry, AuditTrail) on Monad.',
      tech: ['AI Agents', 'Solidity', 'Monad'],
      repo: 'https://github.com/mergit-io',
      tag: 'AI + Web3',
    },
    {
      name: 'CrownOS',
      blurb:
        'A Linux desktop environment built from scratch in Rust — its own compositor, bar, launcher, app dock, and notification daemon, plus a bootable ISO and an Android companion app.',
      tech: ['Rust', 'Linux', 'Wayland'],
      repo: 'https://github.com/Crown-OS',
      demo: 'https://github.com/Crown-OS/crownos-website',
      tag: 'Systems',
    },
  ],
  timeline: [
    {
      title: 'BSc, Data Science',
      org: 'IIT Madras',
      period: '2024 – 2028',
    },
    {
      title: 'Computer Science',
      org: 'Scaler School of Technology',
      period: '2024 – 2029',
    },
    {
      title: 'Core Member',
      org: 'Open Source Club — SST',
      period: 'Present',
      detail: 'Driving open-source culture and projects on campus.',
    },
  ],
  achievements: [
    {
      title: 'Open-source contributor',
      detail: 'Contributions to OpenWISP (network/WiFi controllers) and Karmada (multi-cloud Kubernetes orchestration).',
      href: 'https://github.com/Viscous106',
    },
    {
      title: 'Currently building — mergit',
      detail: 'An on-chain AI-agent accountability platform (Solidity contracts on Monad).',
      href: 'https://github.com/mergit-io',
    },
    {
      title: 'Currently building — CrownOS',
      detail: 'A from-scratch, Rust-built Linux desktop environment and OS.',
      href: 'https://github.com/Crown-OS',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Viscous106', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-virulkar-338418329', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:virulkaryashed@gmail.com', icon: 'email' },
    { label: 'X', href: 'https://x.com/yash_virulkar_', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com/ynvirulkar', icon: 'instagram' },
  ],
  codingNotesHref: 'https://github.com/Viscous106/codingNotes',
};
