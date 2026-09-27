import { PillarItem, ProgramItem, InsightItem } from "@/types";

export const PILLARS_DATA: PillarItem[] = [
  {
    id: "leadership",
    title: "Leadership",
    subtitle: "Adaptive, Empathetic & Visionary Direction",
    description:
      "Cultivating leaders who excel not only in analytical rigor but also in emotional intelligence, ethical stewardship, and the ability to mobilize diverse teams through ambiguity.",
    iconName: "Compass",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badge: "People & Direction",
    keyOutcomes: [
      "Multidisciplinary Team Facilitation & Conflict Resolution",
      "Executive Presence, C-Suite Storytelling & Public Speaking",
      "Ethical Decision-Making in High-Stakes Environments",
      "Resilience & Situational Agility Under Strict Deadlines",
    ],
    quote: "True leadership is demonstrated not in command, but in unlocking the collective brilliance of your team.",
  },
  {
    id: "consulting",
    title: "Consulting",
    subtitle: "Hypothesis-Driven Problem Solving & Analytical Rigor",
    description:
      "Mastering world-class management consulting toolkits: MECE issue trees, bottom-up quantitative modeling, primary stakeholder synthesis, and boardroom-ready strategic slide design.",
    iconName: "Briefcase",
    accentColor: "from-emerald-600/20 to-green-500/10",
    badge: "Strategic Excellence",
    keyOutcomes: [
      "Structured MECE Framing & Hypothesis-First Root Cause Analysis",
      "Commercial Due Diligence, Market Sizing & Financial Modeling",
      "Executive Synthesis & Pyramid Principle Deck Architecture",
      "Real-World Client Engagement & Change Management",
    ],
    quote: "We don't solve business problems with generic answers; we diagnose root causes with rigorous first principles.",
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Democratizing Strategic Literacy Across UI",
    description:
      "Bridging the business acumen gap by publishing open-access consulting frameworks, hosting hands-on bootcamps, and providing peer mentorship for multidisciplinary talent representing diverse faculties across Universitas Indonesia.",
    iconName: "GraduationCap",
    accentColor: "from-teal-600/20 to-cyan-500/10",
    badge: "Knowledge Sharing",
    keyOutcomes: [
      "Cross-Faculty Case Solving Workshops & Open Masterclasses",
      "Curated Public Toolkits via DWDG Common Repository",
      "1-on-1 Alumni Case Coaching & Interview Preparation",
      "Multidisciplinary Talent Representing Diverse Faculties Across Universitas Indonesia",
    ],
    quote: "Strategic thinking shouldn't be gated—it belongs to every curious mind aiming to solve complex societal challenges.",
  },
  {
    id: "do-well-do-good",
    title: "Do Well Do Good",
    subtitle: "Harmonizing Commercial Success & Social Impact",
    description:
      "Our founding philosophy and operational compass: ensuring that economic value creation is inextricably linked to sustainable development goals (SDGs), ethical stewardship, and societal empowerment.",
    iconName: "HeartHandshake",
    accentColor: "from-emerald-500/20 to-amber-500/10",
    badge: "Core Ethos",
    keyOutcomes: [
      "Pro-Bono Advisory for Indonesian Startups & Social Enterprises",
      "ESG & Sustainability Integration into Core Business Models",
      "Measurable Social Return on Investment (SROI) Frameworks",
      "Commitment to Ethical Leadership Throughout Career Trajectories",
    ],
    quote: "To 'Do Well' without 'Doing Good' is empty; to 'Do Good' without 'Doing Well' is unsustainable.",
  },
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "ccr",
    code: "CCR",
    title: "Company Campus Roadshow (CCR)",
    category: "Corporate Tour",
    shortDesc:
      "Integrated into the flagship DWDG Conference lineup during Q1 (March/April), connecting top university talents directly with premier management consultancies and corporate leaders.",
    fullDesc:
      "The Company Campus Roadshow (CCR) is an executive immersion initiative now integrated into the flagship DWDG Conference lineup during Q1 (March/April). Top undergraduate and graduate students gain direct access to senior leaders from MBB consultancies, tech leaders, and multinational corporations through keynote sessions, executive panel dialogues, and direct talent networking.",
    audience: "Undergraduate & Graduate Talents Across Universitas Indonesia",
    timeline: "Q1 (March / April) • Integrated into DWDG Conference",
    stats: [
      { label: "Timing", value: "Q1 Conference" },
      { label: "Focus", value: "Executive Access" },
      { label: "Format", value: "Immersion & Panel" },
    ],
    highlights: [
      "Integrated into the annual flagship DWDG Conference lineup in March/April",
      "Executive fireside sessions with MBB consultants, founders, and industry leaders",
      "Exclusive networking roundtables for high-performing prospective analysts",
      "Direct exposure to top-tier internship and graduate recruitment pathways",
    ],
    partners: ["McKinsey & Company", "BCG", "Bain & Company", "Shopee", "GoTo", "Unilever"],
    ctaText: "Partner as Conference Sponsor",
  },
  {
    id: "sibcc",
    code: "ShARE IBCC",
    title: "ShARE IBCC (Students International Business Case Competition by ShARE UI)",
    category: "Case Competition",
    shortDesc:
      "Southeast Asia's premiere international business case competition organized by the chapter, retaining the distinguished ShARE brand to preserve high-standing external brand equity.",
    fullDesc:
      "As mandated by the DWDG UI 26/27 Grand Design, our flagship case competition preserves the distinguished 'ShARE IBCC' name (and OverShARE) to maintain over a decade of established international brand equity among global university delegations, case federations, and corporate sponsors. Held annually across the winter/spring cycle (November to February/March), delegates crack complex real-world corporate challenges presented by corporate sponsors.",
    audience: "Undergraduate Delegations Worldwide (Teams of 3-4 Students)",
    timeline: "November - February / March (Winter / Spring Championship)",
    stats: [
      { label: "Target Teams", value: "230+" },
      { label: "Prize Pool", value: "USD 5,000+" },
      { label: "Brand Equity", value: "ShARE Retained" },
    ],
    highlights: [
      "Official Grand Design mandate: Retaining 'ShARE IBCC' to preserve international brand equity",
      "230+ participating university teams targeted across Asia-Pacific and beyond",
      "High-pressure real-world business case authored with corporate title sponsors",
      "Final rounds evaluated by MBB consultants and multinational executive judges",
    ],
    partners: ["Global Management Consultancies", "ASEAN Conglomerates", "Venture Funds"],
    ctaText: "Explore ShARE IBCC Sponsorship",
  },
  {
    id: "jade",
    code: "Jade Case Program",
    title: "Jade Case Program",
    category: "Training Community",
    shortDesc:
      "A 4-week intensive case interview training community open to both internal DWDG members and external university students, culminating in an MBB Grand Simulation.",
    fullDesc:
      "The Jade Case Program is an intensive 4-week case interview training community designed to build structural problem-solving mastery. Open to both internal DWDG members and external university students, it combines 4 weeks of rigorous framework drills and mock sparring, culminating in a live Grand Simulation mock interview evaluated by MBB consultants. Participants gain ongoing access to bi-monthly practice sessions and a shared case library.",
    audience: "Open to Both Internal DWDG Members & External University Students",
    timeline: "4-Week Intensive Drills + Ongoing Bi-Monthly Practice Sessions",
    stats: [
      { label: "Duration", value: "4 Weeks" },
      { label: "Finale", value: "MBB Grand Sim" },
      { label: "Continuity", value: "Bi-Monthly Hub" },
    ],
    highlights: [
      "4 weeks of structured framework drills, issue trees, and live peer sparring",
      "Culminating live Grand Simulation mock interview evaluated by active MBB consultants",
      "Open to both internal DWDG members and external university applicants",
      "Ongoing bi-monthly practice sessions and access to a shared case library",
    ],
    partners: ["Active MBB Consultants", "DWDG UI Alumni Network"],
    ctaText: "Apply for Next Cohort",
  },
  {
    id: "common",
    code: "DWDG Common",
    title: "DWDG Common",
    category: "Open Knowledge",
    shortDesc:
      "The open-access educational repository and public masterclass series democratizing strategic consulting toolkits for multidisciplinary students across Universitas Indonesia.",
    fullDesc:
      "Believing that structured problem solving should be accessible to all students regardless of academic discipline, DWDG Common is our public education vehicle. We publish open-source case decks, financial modeling templates, and host free masterclasses open to any university student eager to build commercial acumen.",
    audience: "Open to Students & Community Leaders Across All UI Faculties",
    timeline: "Continuous Digital Access & Public Masterclasses",
    stats: [
      { label: "Repository", value: "Open-Access" },
      { label: "Faculties", value: "Multidisciplinary" },
      { label: "Focus", value: "Toolkit Sharing" },
    ],
    highlights: [
      "Open-access MECE frameworks, issue tree guides, and structured slide decks",
      "Interactive webinars with consulting professionals and case champions",
      "Inclusive study cohorts pairing business and STEM/humanities students",
      "Hands-on case cracking challenges with structured peer feedback",
    ],
    partners: ["Universitas Indonesia Student Bodies", "Social Impact Coalitions"],
    ctaText: "Access Public Toolkits",
  },
  {
    id: "sup",
    code: "SUP",
    title: "Start-Up Projects (SUP)",
    category: "Pro-Bono Advisory",
    shortDesc:
      "Real-world pro-bono consulting engagements where student teams solve critical growth, market entry, and operational challenges for high-potential startups.",
    fullDesc:
      "Start-Up Projects (SUP) is the direct operational realization of our 'Do Well Do Good' ethos. Student teams act as pro-bono management consultants for 8 weeks, collaborating closely with Indonesian founders, social enterprises, and early-stage tech ventures on unit economic optimization, market entry, and operational roadmaps.",
    audience: "Early-Stage Startups, Social Enterprises, & Non-Profit Ventures",
    timeline: "Biannual Engagements (8 Weeks per Cycle)",
    stats: [
      { label: "Engagement", value: "8-Week Cycle" },
      { label: "Scope", value: "Pro-Bono Advisory" },
      { label: "Deliverable", value: "C-Suite Roadmap" },
    ],
    highlights: [
      "Comprehensive discovery, customer interviews, and market benchmarking",
      "Data-backed financial models and operational efficiency roadmaps",
      "Mid-point and final executive presentations delivered directly to Founders",
      "Supervised by senior advisors with consulting backgrounds",
    ],
    partners: ["Indonesian Tech Startups", "Social Enterprises", "Incubator Hubs"],
    ctaText: "Apply as Client Startup",
  },
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: "insight-climate-change",
    title: "Decarbonizing Industrial Operations: Decoupling Growth from Carbon in Southeast Asian Heavy Industries",
    category: "Climate Change",
    curriculumType: "Expertise Network Project (ENP)",
    readTime: "7 min read",
    date: "Stewardship 26/27",
    authors: "Junior Members & Climate Change ENMs",
    abstract:
      "A technical and economic assessment evaluating industrial electrification, waste-heat recovery, and localized carbon accounting protocols for mid-to-large manufacturing conglomerates.",
    keyTakeaways: [
      "Electrification of low-to-medium temperature thermal processes yields up to 34% carbon intensity reduction with payback periods under 4 years.",
      "Scope 1 and Scope 2 compliance requires localized emission factor registries tailored to the Java-Bali grid.",
      "Phased capital expenditures integrated with carbon tax offset schemes safeguard operating margins against export cross-border carbon tariffs.",
    ],
    featured: true,
  },
  {
    id: "insight-circular-economy",
    title: "Closing the Value Loop: Reverse Logistics, Traceability, and Byproduct Valorization",
    category: "Circular Economy",
    curriculumType: "Strategic Presentation (SP)",
    readTime: "6 min read",
    date: "Stewardship 26/27",
    authors: "Junior Members & Circular Economy ENMs",
    abstract:
      "Analyzing scalable reverse-logistics frameworks and digital chain-of-custody tracking to transform post-industrial waste streams into secondary raw materials.",
    keyTakeaways: [
      "Aggregating regional post-consumer packaging through tech-enabled collection hubs reduces virgin material reliance by 28%.",
      "RFID and barcode tracking at warehouse nodes solves the purity and contamination bottlenecks in secondary plastics recycling.",
      "Extended Producer Responsibility (EPR) mandates are turning waste compliance from an overhead expense into a reliable supply hedge.",
    ],
    featured: false,
  },
  {
    id: "insight-purpose-led",
    title: "Purpose as Strategy: Corporate Turnarounds and Long-Term Stakeholder Value Creation",
    category: "Purpose-Led Company",
    curriculumType: "Expertise Network Project (ENP)",
    readTime: "8 min read",
    date: "Stewardship 26/27",
    authors: "Junior Members & Purpose-Led Strategy ENMs",
    abstract:
      "Examining how incumbent Indonesian enterprises align multi-stakeholder governance with commercial profitability during periods of structural market disruption.",
    keyTakeaways: [
      "Companies with codified ESG and stakeholder charters demonstrate lower cost of capital during restructuring phases.",
      "Translating organizational purpose into operational KPIs prevents executive-level disconnect during turnaround sprints.",
      "Employee engagement and trust metrics serve as leading indicators for successful business model pivots.",
    ],
    featured: false,
  },
  {
    id: "insight-inclusive-products",
    title: "Democratizing Access: Unit Economics and Distribution Models for Grassroots Micro-Enterprises",
    category: "Inclusive Products",
    curriculumType: "Strategic Presentation (SP)",
    readTime: "6 min read",
    date: "Stewardship 26/27",
    authors: "Junior Members & Inclusive Products ENMs",
    abstract:
      "Investigating low-cost distribution architectures and flexible micro-financing products tailored for Tier-2 and Tier-3 Indonesian warungs and agricultural producers.",
    keyTakeaways: [
      "Embedded micro-credit with weekly repayment rhythms slashes non-performing loan rates below 1.8%.",
      "Agent-assisted digital onboarding overcomes digital literacy barriers twice as fast as pure self-serve mobile apps.",
      "Product bundling with essential inventory replenishment stabilizes daily working capital for informal retailers.",
    ],
    featured: false,
  },
  {
    id: "insight-inclusive-jobs",
    title: "Workforce Architecture for the Just Transition: Sustainable Reskilling and Decent Work",
    category: "Inclusive Jobs",
    curriculumType: "Strategic Presentation (SP)",
    readTime: "7 min read",
    date: "Stewardship 26/27",
    authors: "Junior Members & Inclusive Jobs ENMs",
    abstract:
      "A strategic playbook for designing inclusive job pathways, adaptive upskilling modules, and fair compensation systems amid rapid automation and green transitions.",
    keyTakeaways: [
      "Modular, micro-credential reskilling programs achieve 40% higher completion rates among frontline vocational workers.",
      "Fair wage indexing tied to localized productivity gains leads to quantifiable reductions in voluntary attrition.",
      "Proactive talent redeployment roadmaps mitigate union friction and severance liabilities during operational shifts.",
    ],
    featured: false,
  },
];

export const PLACEMENT_LOGOS = [
  { name: "McKinsey & Company", category: "MBB Consulting" },
  { name: "Boston Consulting Group", category: "MBB Consulting" },
  { name: "Bain & Company", category: "MBB Consulting" },
  { name: "Oliver Wyman", category: "Strategy Consulting" },
  { name: "Kearney", category: "Management Consulting" },
  { name: "Shopee", category: "Tech Decacorn" },
  { name: "GoTo", category: "Tech Ecosystem" },
  { name: "Traveloka", category: "Tech Unicorn" },
  { name: "Unilever", category: "Global FMCG" },
  { name: "Danone", category: "Global FMCG" },
  { name: "Bank Mandiri", category: "Financial Services" },
  { name: "World Bank", category: "Development Finance" },
];
