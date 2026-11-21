import type { Portfolio } from '@/lib/types';

export const portfolio: Portfolio = {
  name: 'Yash Virulkar',
  tagline: 'Building across AI, systems, and the web.',
  intro:
    'Co-founder of Mergit (2nd place, ETHGlobal Mumbai). I design and ship agentic AI systems, smart contracts, and full-stack products — and I like understanding every layer, from smart contracts to compositors.',
  location: 'Bangalore, India',
  photo: 'https://github.com/Viscous106.png',
  resumeHref: '/Yash_Virulkar_Resume.pdf',
  about: [
    "I co-founded Mergit, a trust and settlement layer for AI-agent work: agents complete real development tasks and work settles on verified outcomes, not attempts. I own the product and build most of it — the web app, the agent runtime, the Solidity contracts, and the production deployment. It won 2nd place at ETHGlobal Mumbai and is live, invite-only, with ~50 users.",
    'I have six merged pull requests to CNCF and open-source infrastructure — KCL, Karmada, and OpenWISP — in Rust, Go, and Python. I study CS at Scaler School of Technology and a BS in Data Science at IIT Madras, lead the Web3 track of the Open Source Club there, and daily-drive NixOS.',
    "Whatever the domain, I care about understanding the whole system rather than just the surface.",
  ],
  skills: [
    { category: 'Languages', skills: ['Python', 'Go', 'Rust', 'Java', 'JavaScript / TypeScript', 'C++', 'Bash', 'Perl'] },
    { category: 'Web', skills: ['React', 'Next.js', 'Node.js', 'HTML', 'CSS'] },
    { category: 'AI / ML', skills: ['LLMs', 'Agent Orchestration', 'Reinforcement Learning'] },
    { category: 'Web3', skills: ['Solidity', 'Foundry', 'EVM / Base', 'ENS'] },
    { category: 'Systems / Infra', skills: ['Kubernetes', 'Docker', 'Linux (Arch, NixOS)', 'Git', 'Neovim'] },
    { category: 'Security', skills: ['Offensive Security', 'CTF / Hacking Notes'] },
  ],
  projects: [
    {
      name: 'mergit',
      blurb:
        'Co-founder. A trust and settlement layer for AI-agent work: agents complete real dev and GitHub tasks, emit signed, hash-chained execution receipts, and settle on verified outcomes via Solidity contracts on Base Sepolia, with ENS names for every agent. 2nd place at ETHGlobal Mumbai; live and invite-only.',
      tech: ['TypeScript', 'Python', 'Rust', 'Solidity'],
      repo: 'https://github.com/mergit-io/mergit',
      demo: 'https://mergit.site',
      tag: 'AI + Web3',
    },
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
        'A YAML-driven orchestration engine for multi-agent AI systems, co-built with a teammate — I wrote its CLI, config scopes, MCP integration, and memory.',
      tech: ['Go', 'Multi-agent', 'YAML'],
      repo: 'https://github.com/Viscous106/Orkflow',
      tag: 'AI',
    },
    {
      name: 'nodeLive',
      blurb:
        'A production-grade live classroom on the Zoom Meeting SDK with 11 real-time teaching tools — server-timed quizzes, polls, leaderboards, and a Claude-powered doubt solver with live-transcript context.',
      tech: ['FastAPI', 'WebSockets', 'Zoom SDK'],
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
      name: 'VISC-ASSistant',
      blurb:
        'An offline, ultra-low-power voice-automation daemon for Arch Linux: a wake-word engine launches a suite of desktop apps hands-free without draining the battery.',
      tech: ['Python', 'Arch Linux', 'Wake-word'],
      repo: 'https://github.com/Viscous106/VISC-ASSistant',
      tag: 'Systems',
    },
    {
      name: 'CrownOS',
      blurb:
        'Contributor to CrownOS, an agentic Linux desktop written in Rust — its own compositor, bar, launcher, app dock, and notification daemon, plus a bootable ISO and an Android companion app.',
      tech: ['Rust', 'Linux', 'Wayland'],
      repo: 'https://github.com/Crown-OS',
      demo: 'https://github.com/Crown-OS/crownos-website',
      tag: 'Systems',
    },
    {
      name: 'Abstain',
      blurb: 'Self-healing API services — APIs that detect failures and recover on their own.',
      tech: ['Python'],
      repo: 'https://github.com/Viscous106/Abstain',
      tag: 'Systems',
    },
    {
      name: 'Receiptify',
      blurb: 'A full-stack app that turns photos of receipts into structured, usable data.',
      tech: ['TypeScript', 'Full-stack'],
      repo: 'https://github.com/Viscous106/Receiptify',
      tag: 'Web',
    },
    {
      name: 'iUseNixBtw',
      blurb: 'My declarative NixOS configuration — the whole machine, reproducible from a repo.',
      tech: ['Nix', 'Shell', 'NixOS'],
      repo: 'https://github.com/Viscous106/iUseNixBtw',
      tag: 'Systems',
    },
    {
      name: 'claude-skills',
      blurb: 'A personal toolkit of Claude Code skills, agents, and slash commands.',
      tech: ['Python', 'Claude Code'],
      repo: 'https://github.com/Viscous106/claude-skills',
      tag: 'AI',
    },
  ],
  timeline: [
    {
      title: 'Co-founder',
      org: 'Mergit',
      period: 'Jun 2026 – Present',
      detail: 'Product, full stack, Solidity contracts, and deployment. 2nd place at ETHGlobal Mumbai.',
    },
    {
      title: 'Web3 Lead',
      org: 'Open Source Club — SST',
      period: 'Oct 2026 – Present',
      detail: 'Leading the Web3 track of a ~200-member club: sessions, events, and hackathons.',
    },
    {
      title: 'Core Member',
      org: 'Open Source Club — SST',
      period: '2025 – Present',
      detail: 'Mentoring students to their first merged pull request.',
    },
    {
      title: 'Computer Science',
      org: 'Scaler School of Technology',
      period: '2025 – 2029',
    },
    {
      title: 'BSc, Data Science',
      org: 'IIT Madras',
      period: '2024 – 2028',
    },
    {
      title: 'Member',
      org: 'AI/ML Club — SST',
      period: 'Present',
    },
  ],
  achievements: [
    {
      title: '2nd place, ETHGlobal Mumbai',
      detail: 'Nov 2026, with Mergit — a trust and settlement layer for AI-agent work, with ENS names for every agent.',
      href: 'https://mergit.site',
    },
    {
      title: 'Six merged open-source PRs',
      detail: 'KCL (CNCF Sandbox, Rust): a runtime deadlock fix and a wasm32 panic guard. Karmada (CNCF, Go): scheduler E2E tests. OpenWISP (Python, Lua): config reload, SSID fix, and deprecation cleanup.',
      href: 'https://github.com/search?q=is%3Apr+is%3Amerged+author%3AViscous106+org%3Akcl-lang+org%3Akarmada-io+org%3Aopenwisp&type=pullrequests',
    },
    {
      title: 'Research paper — Pay for What You Got',
      detail: 'Sole author. Verifiable execution receipts, cost-adjusted reputation, and outcome-contingent settlement for agent markets.',
      href: 'https://research.mergit.site',
    },
    {
      title: 'GitHub achievements',
      detail: 'Pull Shark ×2, Pair Extraordinaire, YOLO, and Quickdraw badges; member of the Crown-OS, mergit-io, and Scaler Open Source Labs organizations.',
      href: 'https://github.com/Viscous106',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Viscous106', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-virulkar-338418329', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:yash.virulkar@proton.me', icon: 'email' },
    { label: 'X', href: 'https://x.com/viscous106', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com/ynvirulkar', icon: 'instagram' },
  ],
  codingNotesHref: 'https://github.com/Viscous106/codingNotes',
};
