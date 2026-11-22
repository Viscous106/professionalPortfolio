import type { Portfolio } from '@/lib/types';

// Facts here mirror the resume fact file (~/Downloads/Imp/Resume/src/data.yaml). Change them there first.
export const portfolio: Portfolio = {
  name: 'Yash Virulkar',
  firstName: 'Yash',
  tagline: 'An engineer building agent infrastructure and smart contracts, based in Bangalore.',
  status: 'Open to roles',
  location: 'Bangalore, India',
  email: 'yash.virulkar@proton.me',
  resumeHref: '/Yash_Virulkar_Resume.pdf',
  intro:
    '2× hackathon winner and co-founder of Mergit (2nd place, ETHGlobal Mumbai). I build agent runtimes, Solidity contracts and full-stack products, from compositors to smart contracts.',

  cases: [
    {
      name: 'Mergit',
      kicker: 'Agent infrastructure / Web3',
      href: 'https://mergit.site',
      linkLabel: 'Explore the work',
      panel: {
        headline: 'Pay for what you',
        accent: 'got',
        blurb: 'A trust and settlement layer for AI-agent work: agents do real dev tasks, and the work settles only on verified outcomes. I co-founded it and build most of it.',
        features: [
          { icon: 'receipt', label: 'Signed receipts' },
          { icon: 'escrow', label: 'On-chain escrow' },
          { icon: 'identity', label: 'ENS identities' },
        ],
        tiles: [
          { value: '~50', label: 'people using it', note: 'Live and invite-only' },
          { value: '2nd', label: 'ETHGlobal Mumbai', note: 'November 2026' },
        ],
      },
    },
    {
      name: 'nodeLive',
      kicker: 'Real-time / EdTech',
      href: 'https://github.com/Viscous106/nodeLive',
      linkLabel: 'Explore the work',
      panel: {
        headline: 'Live classes,',
        accent: 'in sync',
        blurb: 'A production-grade live classroom on the Zoom Meeting SDK. A FastAPI and WebSocket engine keeps every student on the same quiz, poll and leaderboard state.',
        features: [
          { icon: 'tools', label: 'Teaching tools' },
          { icon: 'sync', label: 'WebSocket sync' },
          { icon: 'spark', label: 'Claude doubt solver' },
        ],
        tiles: [
          { value: '11', label: 'real-time tools', note: 'Quizzes, polls, leaderboards' },
          { value: 'Zoom', label: 'Meeting SDK', note: 'Inside the classroom' },
        ],
      },
    },
    {
      name: 'Orkflow',
      kicker: 'Multi-agent orchestration',
      href: 'https://github.com/shri771/Orkflow',
      linkLabel: 'Explore the work',
      panel: {
        headline: 'Agents, wired in',
        accent: 'YAML',
        blurb: 'An orchestration engine for multi-agent systems, co-built with a teammate. I wrote its CLI, global and local config scopes, MCP tool integration and memory.',
        features: [
          { icon: 'cli', label: 'Cobra CLI' },
          { icon: 'flow', label: 'MCP tools' },
          { icon: 'memory', label: 'ChromaDB memory' },
        ],
        tiles: [
          { value: '17', label: 'merged PRs', note: 'From me, in Go' },
          { value: 'Go', label: 'single binary', note: 'Runs anywhere' },
        ],
      },
    },
    {
      name: 'omniBox',
      kicker: 'Agent runtime',
      href: 'https://github.com/Viscous106/omniBox',
      linkLabel: 'Explore the work',
      panel: {
        headline: 'Delegate the',
        accent: 'goal',
        blurb: 'Hand it a goal and it is split across tool-using agents. The orchestrator enforces budgets and loop guards, so runs finish instead of spiralling.',
        features: [
          { icon: 'goal', label: 'Goal decomposition' },
          { icon: 'budget', label: 'Hard budgets' },
          { icon: 'loop', label: 'Loop guards' },
        ],
        tiles: [
          { value: 'Goal', label: 'in, results out', note: 'No workflow to define' },
          { value: 'Py', label: 'Python', note: 'Tool-using agents' },
        ],
      },
    },
    {
      name: 'CrownOS',
      kicker: 'Linux desktop / contributor',
      href: 'https://github.com/Crown-OS',
      linkLabel: 'Explore the work',
      panel: {
        headline: 'A desktop for',
        accent: 'agents',
        blurb: 'An agentic Linux desktop written in Rust, with its own Wayland compositor, bar, launcher and dock. I contributed to the project.',
        features: [
          { icon: 'window', label: 'Wayland compositor' },
          { icon: 'chip', label: 'Written in Rust' },
          { icon: 'link', label: 'Phone link' },
        ],
        tiles: [
          { value: '48', label: 'repositories', note: 'In the Crown-OS org' },
          { value: 'Rust', label: 'end to end', note: 'Compositor to apps' },
        ],
      },
    },
  ],

  stats: [
    { value: '6', label: 'Merged open-source PRs', note: 'KCL, Karmada, OpenWISP' },
    { value: '2×', label: 'Hackathon wins', note: 'Incl. 2nd at ETHGlobal Mumbai' },
    { value: '~50', label: 'People using Mergit', note: 'Live and invite-only' },
    { value: '1', label: 'Research paper', note: 'Pay for What You Got' },
  ],

  capabilities: [
    {
      icon: 'agents',
      title: 'Agent systems',
      body: 'Runtimes, orchestration and the receipts that prove what an agent did.',
      items: ['Mergit', 'omniBox', 'Orkflow'],
    },
    {
      icon: 'contract',
      title: 'Smart contracts',
      body: 'Solidity tested in Foundry: identity, escrow, staking and reputation.',
      items: ['Solidity', 'Foundry', 'ENS'],
    },
    {
      icon: 'server',
      title: 'Systems and infra',
      body: 'Rust, Go and the boxes it all runs on, deployed by CI on every push.',
      items: ['Rust', 'Go', 'Nix', 'Kubernetes'],
    },
  ],

  oss: [
    {
      project: 'KCL',
      repo: 'kcl-lang/kcl',
      pr: '#2106',
      href: 'https://github.com/kcl-lang/kcl/pull/2106',
      title: 'Fixed a runtime deadlock by releasing the plugin dispatch lock before invoking the handler',
      language: 'Rust',
      date: 'Jul 2026',
    },
    {
      project: 'KCL',
      repo: 'kcl-lang/kcl',
      pr: '#2105',
      href: 'https://github.com/kcl-lang/kcl/pull/2105',
      title: 'Guarded a current_dir() panic on the wasm32 target',
      language: 'Rust',
      date: 'Jul 2026',
    },
    {
      project: 'Karmada',
      repo: 'karmada-io/karmada',
      pr: '#7489',
      href: 'https://github.com/karmada-io/karmada/pull/7489',
      title: 'Added end-to-end tests for overflow cluster affinities in the scheduler',
      language: 'Go',
      date: 'May 2026',
    },
    {
      project: 'OpenWISP',
      repo: 'openwisp/openwisp-config',
      pr: '#245',
      href: 'https://github.com/openwisp/openwisp-config/pull/245',
      title: 'Added SIGUSR2 support to force a configuration reload in the OpenWrt agent',
      language: 'Lua',
      date: 'Jan 2026',
    },
    {
      project: 'OpenWISP',
      repo: 'openwisp/netjsonconfig',
      pr: '#381',
      href: 'https://github.com/openwisp/netjsonconfig/pull/381',
      title: 'Fixed SSID boolean coercion in device configuration rendering',
      language: 'Python',
      date: 'Mar 2026',
    },
    {
      project: 'OpenWISP',
      repo: 'openwisp/openwisp-controller',
      pr: '#1190',
      href: 'https://github.com/openwisp/openwisp-controller/pull/1190',
      title: 'Removed deprecated code paths ahead of the 1.2.0 release',
      language: 'Python',
      date: 'Jan 2026',
    },
  ],

  orgs: [
    {
      name: 'KCL',
      logo: '/logos/kcl-lang.png',
      foundation: 'CNCF Sandbox',
      languages: 'Rust',
      merged: 2,
      summary: 'A runtime deadlock fix in plugin dispatch, and a wasm32 panic guard.',
      href: 'https://github.com/search?q=is%3Apr+is%3Amerged+author%3AViscous106+org%3Akcl-lang&type=pullrequests',
    },
    {
      name: 'Karmada',
      logo: '/logos/karmada-io.png',
      foundation: 'CNCF',
      languages: 'Go',
      merged: 1,
      summary: 'End-to-end tests for overflow cluster affinities in the multi-cluster scheduler.',
      href: 'https://github.com/search?q=is%3Apr+is%3Amerged+author%3AViscous106+org%3Akarmada-io&type=pullrequests',
    },
    {
      name: 'OpenWISP',
      logo: '/logos/openwisp.png',
      foundation: 'Network and WiFi controller',
      languages: 'Python, Lua',
      merged: 3,
      summary: 'A config-reload signal for the OpenWrt agent, an SSID fix, and deprecation cleanup.',
      href: 'https://github.com/search?q=is%3Apr+is%3Amerged+author%3AViscous106+org%3Aopenwisp&type=pullrequests',
    },
  ],

  experience: [
    {
      title: 'Co-founder',
      org: 'Mergit',
      logo: '/logos/mergit-io.png',
      logoAlt: 'Mergit logo',
      dates: 'Jun 2026 – Present',
      summary: 'Product, full stack, Solidity contracts and production deployment.',
    },
    {
      title: 'Web3 Lead',
      org: 'Open Source Club, Scaler School of Technology',
      logo: '/logos/scaler-mark.svg',
      logoAlt: 'Scaler School of Technology logo',
      badge: 'Web3',
      dates: '2025 – Present',
      summary:
        'In the club since 2025 and leading its Web3 track since Oct 2026: sessions, events and hackathons for a ~200-member club. I also maintain the club’s learning repository, forked 65 times.',
    },
  ],
  education: [
    { school: 'Scaler School of Technology', degree: 'Computer Science', dates: 'Aug 2025 – May 2029' },
    { school: 'IIT Madras', degree: 'BS in Data Science', dates: 'Sep 2024 – Sep 2028' },
  ],
  certifications: ['CS50 Cybersecurity, Harvard', 'DevOps, Boot.dev', 'DBMS, Boot.dev'],
  skills: [
    { category: 'Languages', skills: ['Python', 'TypeScript', 'Go', 'Rust', 'Solidity', 'Java', 'SQL', 'Bash'] },
    { category: 'Backend & web', skills: ['FastAPI', 'Django', 'React', 'Next.js', 'WebSockets'] },
    { category: 'Web3', skills: ['Solidity', 'Foundry', 'EVM / Base', 'ENS'] },
    { category: 'Infra', skills: ['Docker', 'Kubernetes', 'CI/CD', 'Caddy', 'Nix / NixOS'] },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Viscous106', icon: 'github' },
    { label: 'X', href: 'https://x.com/viscous106', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-virulkar-338418329', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:yash.virulkar@proton.me', icon: 'email' },
    { label: 'Instagram', href: 'https://instagram.com/ynvirulkar', icon: 'instagram' },
  ],
};
