// ============================================================
// SITE CONFIGURATION — Edit all brand details here.
// This is the single source of truth for the entire website.
// ============================================================

export const siteConfig = {
  // ── Firm identity ─────────────────────────────────────────
  firm: {
    name: "ProcessPilot AI",
    shortName: "ProcessPilot",
    tagline: "Make your business AI-ready without wasting money on the wrong tools.",
    subTagline:
      "We study your workflows first. Then we recommend the tools, automations, and digital systems that can genuinely reduce manual work and give owners clearer control.",
    credibilityStatement:
      "ProcessPilot AI is built within a group with over 45 years of consulting and project experience, bringing structured problem-solving, disciplined reporting, and practical implementation thinking to the AI transformation space.",
    location: "Serving owner-led businesses internationally",
    foundedYear: 2026,
    trustLine:
      "Built for owner-led businesses still relying on Excel, WhatsApp, paper files, and manual approvals.",
  },

  // ── Contact details ────────────────────────────────────────
  contact: {
    email: "hello@processpilot.ai",
    phone: "+000 0000 000000",
    whatsapp: "+000 0000 000000",
    whatsappUrl: "https://wa.me/0000000000", // Replace with real number: https://wa.me/60123456789
    linkedin: "https://www.linkedin.com/company/processpilot-ai",
    // TODO: Replace with your actual form recipient or API endpoint
    formRecipient: "hello@processpilot.ai",
  },

  // ── Call-to-action labels ──────────────────────────────────
  cta: {
    primary: "Book a Free Consultation",
    secondary: "See What We Assess",
    whatsapp: "WhatsApp Us",
    formSubmit: "Send Message",
    formSuccess:
      "Thank you. Our team will contact you to schedule your free consultation.",
  },

  // ── SEO ────────────────────────────────────────────────────
  seo: {
    title: "ProcessPilot AI — Business Process & AI Consulting",
    description:
      "We help owner-led businesses identify where AI, automation, and digital tools can save time, reduce manual work, and improve operational control. First consultation is free.",
    url: "https://www.processpilot.ai",
    ogImage: "/og-image.jpg", // TODO: Add a 1200×630px OG image to /public/og-image.jpg
    twitterHandle: "@processpilotai",
  },

  // ── Problem cards (Section 2) ──────────────────────────────
  problems: [
    {
      title: "Too much work happens manually",
      description: "Hours lost every day to tasks that could be automated or streamlined.",
    },
    {
      title: "Excel and WhatsApp run critical operations",
      description: "Business-critical data lives in spreadsheets, chat threads, and email chains.",
    },
    {
      title: "Owners lack real-time visibility",
      description: "Management decisions are based on memory and gut feel, not live data.",
    },
    {
      title: "Reports are slow and unreliable",
      description: "Month-end reports arrive too late to act on — and are often incomplete.",
    },
    {
      title: "Teams repeat the same work",
      description: "The same documents, emails, and tasks are prepared again across different files.",
    },
    {
      title: "Approvals depend on follow-up",
      description: "No structured process means decisions get delayed, missed, or forgotten.",
    },
    {
      title: "Tools are disconnected",
      description: "Systems that should talk to each other require manual data transfer between them.",
    },
    {
      title: "AI feels important but unclear",
      description: "You know it matters, but where does it actually fit inside your business?",
    },
  ],

  // ── How it works (Section 4) ──────────────────────────────
  process: [
    {
      step: 1,
      title: "Free Consultation",
      description:
        "We meet to understand your business, your pain points, and whether our process is the right fit. No obligation, no selling.",
    },
    {
      step: 2,
      title: "Deep Workflow Study",
      description:
        "We interview key people, review current tools, study documents, observe processes, and map exactly how work gets done — including every inefficiency, bottleneck, and missed automation opportunity.",
    },
    {
      step: 3,
      title: "Report & Roadmap Delivered",
      description:
        "You receive a structured assessment: workflow maps, AI opportunity matrix, digital maturity score, recommended tools, and a prioritised implementation roadmap.",
    },
    {
      step: 4,
      title: "You Choose the Support Level",
      description:
        "Assessment only. Assessment plus roadmap. Or end-to-end implementation, vendor coordination, dashboards, training, and ongoing monitoring. Your choice.",
    },
  ],

  // ── Deliverables (Section 5) ──────────────────────────────
  deliverables: [
    {
      title: "Workflow Maps",
      description: "Visual maps of how your business actually operates today.",
      icon: "GitBranch",
    },
    {
      title: "Pain-Point Report",
      description: "Documented inefficiencies, bottlenecks, and manual dependencies.",
      icon: "AlertCircle",
    },
    {
      title: "AI Opportunity Matrix",
      description: "Scored matrix of AI and automation opportunities ranked by impact.",
      icon: "LayoutGrid",
    },
    {
      title: "Recommended Tools & Systems",
      description: "Curated, vendor-neutral tool recommendations with rationale.",
      icon: "Layers",
    },
    {
      title: "Estimated Savings & Impact",
      description: "Projected time savings and efficiency gains per opportunity area.",
      icon: "TrendingUp",
    },
    {
      title: "Implementation Roadmap",
      description: "Phased, prioritised plan from quick wins to strategic transformation.",
      icon: "Map",
    },
    {
      title: "Dashboard & KPI Recommendations",
      description: "What to measure, how to measure it, and what visibility to create.",
      icon: "BarChart2",
    },
    {
      title: "Digital Maturity Score",
      description: "A baseline assessment of where your business stands digitally.",
      icon: "Award",
    },
    {
      title: "Training & Rollout Plan",
      description: "How to bring your team along for lasting adoption and usage.",
      icon: "Users",
    },
    {
      title: "Vendor Scope (if required)",
      description: "Implementation or vendor engagement brief for selected tools.",
      icon: "FileText",
    },
  ],

  // ── Before / After (Section 6) ────────────────────────────
  beforeAfter: [
    {
      label: "Sales & CRM",
      before: "Sales follow-ups happen through WhatsApp messages and memory.",
      after: "CRM reminders, lead status tracking, and AI-assisted follow-up drafts.",
    },
    {
      label: "Management Reporting",
      before: "Management reports are prepared manually at the end of each month.",
      after: "Live dashboard showing sales, collections, pending tasks, and operational KPIs.",
    },
    {
      label: "Approvals & Workflows",
      before: "Approvals happen verbally or across scattered messages with no audit trail.",
      after: "Structured approval workflow with clear responsibility, tracking, and audit trail.",
    },
    {
      label: "Document & Template Work",
      before: "Staff repeatedly prepare the same documents, emails, and messages from scratch.",
      after: "AI-assisted templates, document generation, and automated internal workflows.",
    },
  ],

  // ── Services (Section 7) ──────────────────────────────────
  services: [
    {
      id: "consultation",
      title: "Business Process & AI Consultation",
      description:
        "A free first meeting to understand your business, your pain points, and whether our detailed workflow study is the right fit.",
      icon: "MessageSquare",
    },
    {
      id: "workflow-study",
      title: "Workflow Study & Process Mapping",
      description:
        "We interview key people, review current tools, study documents, and map exactly how work gets done — including inefficiencies and bottlenecks.",
      icon: "GitBranch",
    },
    {
      id: "ai-assessment",
      title: "AI Opportunity Assessment",
      description:
        "A structured analysis identifying where AI, automation, dashboards, or digital tools can reduce friction and improve management control.",
      icon: "Search",
    },
    {
      id: "tool-recommendation",
      title: "Tool and System Recommendation",
      description:
        "Vendor-neutral recommendations for AI tools, CRMs, ERPs, workflow tools, automation platforms, and dashboards suited to your business.",
      icon: "Layers",
    },
    {
      id: "roadmap",
      title: "Automation and Dashboard Roadmap",
      description:
        "A clear, prioritised plan showing what to fix, automate, or implement — with expected impact and phased rollout steps.",
      icon: "Map",
    },
    {
      id: "implementation",
      title: "End-to-End Implementation Support",
      description:
        "We coordinate vendors, support implementation, configure dashboards, and ensure your team can actually use the new systems.",
      icon: "Rocket",
    },
    {
      id: "training",
      title: "Training and Adoption Support",
      description:
        "Practical training for your team to use the new tools, supported by SOPs, documentation, and adoption tracking.",
      icon: "GraduationCap",
    },
    {
      id: "retainer",
      title: "Ongoing Digital Transformation Retainer",
      description:
        "Continuous support as your business evolves — adding automations, monitoring performance, and identifying new AI opportunities.",
      icon: "RefreshCw",
    },
  ],

  // ── Case study placeholders (Section 9) ───────────────────
  caseStudies: [
    {
      title: "Workflow Modernisation for a Trading Business",
      description:
        "Mapping manual procurement and inventory processes, identifying automation opportunities and dashboard requirements.",
      status: "Coming soon",
    },
    {
      title: "AI-Assisted Reporting for a Project Company",
      description:
        "Replacing manual month-end reporting with live project dashboards and automated stakeholder updates.",
      status: "Available after first client rollout",
    },
    {
      title: "Approval Workflow Transformation",
      description:
        "Replacing verbal approvals and WhatsApp confirmations with structured, auditable digital workflows.",
      status: "Coming soon",
    },
    {
      title: "Customer Follow-Up Automation",
      description:
        "Implementing CRM and AI-assisted follow-up for a professional service business.",
      status: "Available after first client rollout",
    },
  ],

  // ── FAQs (Section 10) ─────────────────────────────────────
  faqs: [
    {
      question: "Is the first meeting really free?",
      answer:
        "Yes, completely. The first consultation has no cost and no obligation. We use it to understand your business and your current pain points — and to be honest about whether our workflow study is the right fit for you.",
    },
    {
      question: "Do you sell software or earn from recommendations?",
      answer:
        "No. We are paid for our consulting work, not for recommending tools. We study your workflows first, then recommend the tools, automations, or systems that genuinely fit — regardless of vendor.",
    },
    {
      question: "Do we have to implement everything you recommend?",
      answer:
        "No. You choose the level of support you need. Some clients want the assessment only. Others want a roadmap and tool selection. Others want full end-to-end implementation, training, and ongoing monitoring. Every engagement is structured around your priorities.",
    },
    {
      question: "What kind of improvements can we expect?",
      answer:
        "Our assessments are designed to identify concrete opportunities: time savings, better management visibility, reduced manual work, faster reporting, and clearer operational control. The actual impact depends on implementation quality and team adoption.",
    },
    {
      question: "How do you handle confidential business information?",
      answer:
        "All client information — including documents, workflows, processes, and business data — is treated as strictly confidential. We do not share, publish, or reference client information without explicit permission.",
    },
  ],

  // ── Footer ────────────────────────────────────────────────
  footer: {
    tagline: "Practical AI and process transformation for owner-led businesses.",
    disclaimer:
      "Estimated savings and impact depend on implementation quality, data availability, and team adoption.",
    privacyUrl: "/privacy",
    termsUrl: "/terms",
  },
};

export type SiteConfig = typeof siteConfig;
