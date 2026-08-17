import { FormEvent, useEffect, useState } from 'react';
import mhImage from "./utils/mh.JPG";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  ChevronRight, 
  Code2, 
  Bug, 
  Terminal, 
  Database, 
  FileText, 
  User, 
  Briefcase, 
  Layers, 
  Award, 
  CheckCircle2,
  GraduationCap,
  AlertTriangle,
  RotateCcw,
  Command,
  Search,
  X,
  ArrowUpRight,
  Activity,
  Play
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from './utils/cn';

const QualityBoot = ({ complete }: { complete: () => void }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) return current;
        const next = Math.min(current + (current < 76 ? 8 : 4), 100);
        if (next === 100) window.setTimeout(complete, 360);
        return next;
      });
    }, 115);
    return () => window.clearInterval(timer);
  }, [complete]);
  const status = progress < 30 ? "Loading test environment" : progress < 76 ? "Checking experience modules" : progress < 100 ? "Verifying interface" : "All systems ready";
  return (
    <motion.div exit={{ y: "-100%", transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] } }} className="boot-screen">
      <div className="boot-grid" /><div className="boot-orb boot-orb-one" /><div className="boot-orb boot-orb-two" />
      <div className="relative z-10 w-full max-w-md px-7">
        <motion.div initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="boot-mark"><CheckCircle2 className="w-9 h-9" strokeWidth={2.4} /></motion.div>
        <p className="mt-9 text-xs font-bold tracking-[0.34em] text-blue-300">QUALITY ASSURANCE PORTFOLIO</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">SYSTEM<br /><span className="text-blue-400">CHECK</span></h1>
        <div className="mt-10 flex items-end justify-between font-mono text-xs text-slate-400"><span className="boot-status"><span className="boot-pulse" />{status}</span><span>{String(progress).padStart(3, '0')}%</span></div>
        <div className="mt-3 h-2 overflow-hidden rounded-full border border-white/10 bg-white/5 p-[2px]"><motion.div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-white" animate={{ width: `${progress}%` }} transition={{ ease: "easeOut", duration: 0.18 }} /></div>
        <div className="mt-7 flex justify-between font-mono text-[10px] tracking-[0.16em] text-slate-500"><span>UI / UX</span><span>API</span><span>DATABASE</span><span>READY</span></div>
      </div>
    </motion.div>
  );
};

const qaScenarios = [
  {
    title: "Payment succeeds, but no order is created.",
    description: "A customer completes payment at checkout and receives a successful gateway confirmation. The cart clears, but no order appears in their account or the admin panel.",
    module: "CHECKOUT", status: "REPRODUCED", impact: "REVENUE AT RISK",
    severity: "High", priority: "Urgent",
    explanation: "Payment without an order directly affects revenue and customer trust, so it needs an urgent fix."
  },
  {
    title: "A dashboard total is wrong after applying a date filter.",
    description: "The sales dashboard still displays the all-time revenue total after a user applies a custom date range. Individual rows correctly update to the selected range.",
    module: "REPORTING", status: "REPRODUCED", impact: "DECISIONS AFFECTED",
    severity: "Medium", priority: "High",
    explanation: "The core product still works, but incorrect financial reporting can lead to poor business decisions and should be prioritized."
  },
  {
    title: "The profile avatar does not update until refresh.",
    description: "After uploading a valid profile image, the upload succeeds and persists correctly. The old avatar remains visible until the user refreshes the browser.",
    module: "PROFILE UI", status: "REPRODUCED", impact: "VISUAL ONLY",
    severity: "Low", priority: "Normal",
    explanation: "This is a visible usability issue with a simple workaround. No data is lost and the primary flow succeeds."
  }
];

const bugHuntTasks = [
  { product: 'QA Starter Kit', price: 40, stock: 2, code: 'PROMO20', promo: 'Promo code applied — 20% discount active', defects: ['Promo confirmation does not change the total', 'Quantity can exceed the stated stock', 'Payment succeeds but no order is created'] },
  { product: 'API Testing Toolkit', price: 55, stock: 1, code: 'SAVE15', promo: 'Discount applied — 15% saved', defects: ['Discount confirmation does not change the total', 'Quantity can exceed the stated stock', 'Payment succeeds but no order is created'] },
  { product: 'Performance Test Pack', price: 70, stock: 3, code: 'LOAD10', promo: 'Promo code applied — 10% discount active', defects: ['Promo confirmation does not change the total', 'Quantity can exceed the stated stock', 'Payment succeeds but no order is created'] }
];

const App = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'sqa' | 'dev'>('sqa');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [severity, setSeverity] = useState('');
  const [priority, setPriority] = useState('');
  const [triageResult, setTriageResult] = useState<'correct' | 'review' | ''>('');
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [qaMode, setQaMode] = useState<'functional' | 'api' | 'performance'>('functional');
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [testRunStatus, setTestRunStatus] = useState<'idle' | 'passed'>('idle');
  const [testStep, setTestStep] = useState(-1);
  const [checkoutQuantity, setCheckoutQuantity] = useState(1);
  const [promoApplied, setPromoApplied] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [loggedFindings, setLoggedFindings] = useState<string[]>([]);
  const [bugTaskIndex, setBugTaskIndex] = useState(0);
  const [bugHuntFinished, setBugHuntFinished] = useState(false);
  const [incidentFinished, setIncidentFinished] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 110, damping: 26, restDelta: 0.001 });

  const contactInfo = {
    email: "mehedyhasan78600@gmail.com",
    phone: "+8801795316264",
    location: "Farmgate, Dhaka-1215, Bangladesh",
    github: "https://github.com/mahedyhn",
    linkedin: "https://linkedin.com/in/mahedyhn"
  };

  const skills = [
    { category: "Manual Testing", items: ["Test Case Design", "Black/White Box Testing", "Functional Testing", "Regression Testing", "Smoke Testing", "UI/UX Testing", "Cross-Browser Testing"], icon: <Bug className="w-6 h-6" /> },
    { category: "QA Tools & Concepts", items: ["Jira (Bug Tracking)", "Postman", "Playwright", "JMeter", "Chrome DevTools", "SDLC/STLC", "CI/CD Basics"], icon: <Layers className="w-6 h-6" /> },
    { category: "Programming Languages", items: ["Java", "Python", "PHP", "JavaScript", "C", "C++"], icon: <Code2 className="w-6 h-6" /> },
    { category: "Web Technologies", items: ["HTML", "CSS", "Bootstrap", "Laravel", "React.js", "Node.js", "Express"], icon: <Terminal className="w-6 h-6" /> },
    { category: "Database & Tools", items: ["MySQL", "SQL", "Git", "GitHub", "VS Code", "PhpStorm"], icon: <Database className="w-6 h-6" /> },
    { category: "Documentation", items: ["Test Plans", "RTM", "Bug Reports", "Test Metrics", "Mind Maps"], icon: <FileText className="w-6 h-6" /> }
  ];

  const experiences = [
    {
      company: "Smart Software Ltd",
      role: "Junior SQA Engineer",
      period: "May 2026 — Present",
      location: "Dhaka",
      description: [
        "Performed manual, functional, and regression testing across enterprise ERP, POS, and HR & Payroll modules.",
        "Validated complex business logic, financial calculations, and role-based access control (RBAC).",
        "Tested e-commerce checkout flows and payment-gateway integrations.",
        "Conducted REST API and database testing while managing the end-to-end defect lifecycle in Jira."
      ]
    },
    {
      company: "Avian™ — Bangladesh's Trusted Tech Brand",
      role: "Trainee Software Quality Assurance Engineer",
      period: "Oct 2025 — Apr 2026",
      location: "Dhaka",
      description: [
        "Executed manual functional, smoke, UI/UX, and regression testing on the VPNMasterPro platform — covering VMP™ Pass Password Manager, VPN features, pricing, and download flows.",
        "Performed REST API testing for the VMP™ Pass browser extension, verifying autofill, password vault, and 2FA authenticator features.",
        "Tested published browser extensions on Firefox Add-ons Marketplace and Chrome Web Store, validating install flows.",
        "Validated multilingual/localization functionality across 30+ language variants, identifying content and rendering defects.",
        "Documented and reported bugs in Jira with detailed reproduction steps, severity, and priority classifications."
      ]
    },
    {
      company: "Bangladesh Bureau of Statistics",
      role: "ICT Supervisor — Economic Census 2024",
      period: "Nov 2024 — Jan 2025",
      location: "Pabna",
      description: [
        "Handled device configuration, maintenance, and technical troubleshooting for census operations.",
        "Provided technical support to enumerators and supervisors across the district.",
        "Managed data synchronization and backup processes to ensure data integrity."
      ]
    }
  ];

  const sqaProjects = [
    {
      title: "E-Commerce Test Automation",
      tech: "Playwright, End-to-End Testing",
      links: [{ label: "GitHub Repository", url: "https://github.com/mahedyhn/grameenphone-playwright-automation" }],
      details: [
        "Built end-to-end automated test coverage for key e-commerce user journeys.",
        "Applied Playwright to validate user-facing flows consistently across test runs."
      ]
    },
    {
      title: "API & Performance Testing",
      tech: "Postman, REST APIs, JMeter",
      links: [{ label: "Crypto Wallet API", url: "https://github.com/mahedyhn/crypto-wallet-api-testing" }, { label: "Restful Booker API", url: "https://github.com/mahedyhn/Restful-booker-api-testing" }, { label: "JMeter Performance", url: "https://github.com/mahedyhn/api-performance-testing-jmeter" }],
      details: [
        "Tested Crypto Wallet and Restful Booker APIs, validating requests, responses, and API behaviour.",
        "Performed API performance testing using JMeter."
      ]
    },
    {
      title: "QuickHire Job Portal — Manual QA Testing",
      tech: "Excel, Chrome DevTools, Firefox, Edge, Jira",
      links: [{ label: "GitHub Repository", url: "https://github.com/mahedyhn/QuickHire-Manual-Testing" }],
      details: [
        "Designed 42 test cases across 6 modules covering functional, UI, negative, boundary value, & browser compatibility testing.",
        "Prepared comprehensive FNA Test Plan (13 sections), Mind Map, Test Scenarios, Bug Report, Test Metrics.",
        "Delivered structured documentation in Excel (8 sheets) and PDF format."
      ]
    },
    {
      title: "Otec Website — Bechakena Admin Panel Testing",
      tech: "Manual Testing, Jira",
      links: [{ label: "GitHub Repository", url: "https://github.com/mahedyhn/Qtec-Website-Testing-Bechakena-Admin-Panel" }],
      details: [
        "Conducted manual testing of the Bechakena e-commerce admin panel, covering product management, order processing, and user role management.",
        "Performed UI/UX validation and identified functional defects; documented bugs with severity and priority."
      ]
    },
    {
      title: "Grameenphone Website — Manual Testing",
      tech: "Manual Testing, Excel",
      links: [{ label: "GitHub Repository", url: "https://github.com/mahedyhn/grameenphone_testing" }],
      details: [
        "Designed and executed 50+ test cases covering Recharge, Packages, and User Authentication modules.",
        "Performed negative testing on input fields (Mobile Number & Amount) and verified OTP validation logic.",
        "Created a Requirement Traceability Matrix (RTM) to ensure 100% test coverage."
      ]
    }
  ];

  const devProjects = [
    {
      title: "QuickHire — Full-Stack AI Recruitment App",
      tech: "React.js, Node.js, Express, MongoDB, OpenAI API, Material UI",
      links: [{ label: "GitHub Repository", url: "https://github.com/mahedyhn/quickhire" }],
      details: [
        "Developed an intelligent recruitment solution automating the hiring process using AI.",
        "Key features: automated resume parsing, AI-driven candidate ranking, and real-time messaging system."
      ]
    },
    {
      title: "User Management App",
      tech: "JavaScript (Full Stack)",
      links: [{ label: "GitHub Repository", url: "https://github.com/mahedyhn/user-management-app" }],
      details: [
        "Built a full-stack user management application with complete CRUD operations and authentication workflows."
      ]
    },
    {
      title: "PHP/Laravel Projects",
      tech: "PHP, Laravel, MySQL, Bootstrap",
      links: [{ label: "E-commerce", url: "https://github.com/mahedyhn/my_ecommerce" }, { label: "Newspaper", url: "https://github.com/mahedyhn/news_paper" }, { label: "Blog", url: "https://github.com/mahedyhn/our_blog" }, { label: "Rental", url: "https://github.com/mahedyhn/rental-website" }],
      details: [
        "Single Vendor E-commerce platform with product management, cart, and order processing.",
        "Newspaper website with article management, categories, and admin dashboard.",
        "Blogging website and Rental website with user authentication and dynamic content."
      ]
    }
  ];

  const training = [
    { title: "Full Stack SQA Engineer", provider: "IT Training BD", period: "Jan 2026 — Present" },
    { title: "Complete Web Development (PHP/Laravel)", provider: "UYLAB", period: "Jul — Sep 2025" },
    { title: "Complete Web Development", provider: "Programming Hero", period: "Jan — Jun 2025" },
    { title: "Web Dev PHP with Laravel (BASIS)", provider: "SEIP", period: "3 Months" },
    { title: "Professional English Communication", provider: "WSDA New Zealand", period: "Jan—Mar 2023" }
  ];

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setFormStatus('Your email app is opening with your message ready to send.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const checkTriage = () => {
    const scenario = qaScenarios[scenarioIndex];
    const isCorrect = severity === scenario.severity && priority === scenario.priority;
    setTriageResult(isCorrect ? 'correct' : 'review');
    if (isCorrect) {
      window.setTimeout(() => {
        if (scenarioIndex === qaScenarios.length - 1) {
          setIncidentFinished(true);
        } else {
          setScenarioIndex((current) => current + 1);
        }
        setSeverity('');
        setPriority('');
        setTriageResult('');
      }, 1800);
    }
  };
  const activeScenario = qaScenarios[scenarioIndex];
  const activeBugTask = bugHuntTasks[bugTaskIndex];
  const bugHuntScore = loggedFindings.length;
  const toggleFinding = (finding: string) => setLoggedFindings((current) => {
    const next = current.includes(finding) ? current.filter((item) => item !== finding) : [...current, finding];
    if (next.length === activeBugTask.defects.length && !current.includes(finding)) {
      window.setTimeout(() => {
        if (bugTaskIndex === bugHuntTasks.length - 1) {
          setBugHuntFinished(true);
        } else {
          setBugTaskIndex((index) => index + 1);
          setCheckoutQuantity(1); setPromoApplied(false); setPaymentComplete(false); setLoggedFindings([]);
        }
      }, 1300);
    }
    return next;
  });
  const qaModes = {
    functional: { label: 'Functional', code: 'UI-204', title: 'Checkout journey', metric: '12 / 12', metricLabel: 'checks passed', checks: ['Cart total recalculated', 'Promo code validated', 'Payment confirmation received'], color: 'cyan' },
    api: { label: 'API', code: 'API-188', title: 'Order service contract', metric: '200 OK', metricLabel: 'response verified', checks: ['Schema contract valid', 'Auth scope accepted', 'Payload persisted'], color: 'violet' },
    performance: { label: 'Performance', code: 'LOAD-76', title: 'Payment endpoint under load', metric: '284 ms', metricLabel: 'p95 response time', checks: ['500 virtual users', '0.02% error rate', 'Stable throughput'], color: 'amber' }
  };
  const activeQaMode = qaModes[qaMode];
  const runTestSimulation = () => {};
  const commandItems = [
    { label: 'About me', hint: 'PROFILE', href: '#about' },
    { label: 'Technical expertise', hint: 'SKILLS', href: '#skills' },
    { label: 'Professional journey', hint: 'EXPERIENCE', href: '#experience' },
    { label: 'Featured projects', hint: 'PROJECTS', href: '#projects' },
    { label: 'Try the QA Lab', hint: 'INTERACTIVE', href: '#qa-lab' },
    { label: 'Download my CV', hint: 'RESUME', href: '#resume' },
    { label: 'Get in touch', hint: 'CONTACT', href: '#contact' },
    { label: 'Open GitHub profile', hint: 'EXTERNAL', href: contactInfo.github, external: true }
  ];
  const filteredCommands = commandItems.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(commandQuery.toLowerCase()));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsCommandOpen((open) => !open);
      }
      if (event.key === 'Escape') setIsCommandOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <AnimatePresence>{isBooting && <QualityBoot complete={() => setIsBooting(false)} />}</AnimatePresence>
      <AnimatePresence>{isCommandOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="command-backdrop" onMouseDown={() => setIsCommandOpen(false)}>
        <motion.div role="dialog" aria-modal="true" aria-label="Portfolio command palette" initial={{ opacity: 0, y: -24, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} transition={{ type: 'spring', damping: 24, stiffness: 310 }} className="command-palette" onMouseDown={(event) => event.stopPropagation()}>
          <div className="command-search"><Search className="h-5 w-5 text-cyan-300" /><input autoFocus value={commandQuery} onChange={(event) => setCommandQuery(event.target.value)} placeholder="Jump anywhere…" aria-label="Search portfolio" /><button onClick={() => setIsCommandOpen(false)} aria-label="Close command palette"><X className="h-5 w-5" /></button></div>
          <div className="command-list"><p>QUICK NAVIGATION</p>{filteredCommands.length ? filteredCommands.map((item) => <a key={item.href} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} onClick={() => { setIsCommandOpen(false); setCommandQuery(''); }}><span className="command-item-icon"><Command className="h-3.5 w-3.5" /></span><span className="flex-1"><strong>{item.label}</strong><small>{item.hint}</small></span><ArrowUpRight className="h-4 w-4 text-slate-500" /></a>) : <div className="command-empty">No destinations found.</div>}</div>
          <div className="command-footer"><span><kbd>ESC</kbd> close</span><span><kbd>↵</kbd> open link</span></div>
        </motion.div>
      </motion.div>}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <div className="scroll-rail" aria-hidden="true"><span>SCROLL TO EXPLORE</span><div /><span>01—06</span></div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            MAHEDY.QA
          </motion.span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#qa-lab" className="hover:text-blue-600 transition-colors">QA Lab</a>
            <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button onClick={() => setIsCommandOpen(true)} className="hidden lg:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600" aria-label="Open quick navigation"><Command className="h-4 w-4" /><span>Quick jump</span><kbd className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px]">⌘K</kbd></button>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              {/* Placeholder for the user's photo from the CV */}
              
              <img 
                src={mhImage}
                alt="MD. MAHEDY HASAN NAIEM"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" title="Available for work"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            MD. MAHEDY HASAN NAIEM
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-blue-600 mb-8"
          >
            Junior Software Quality Assurance Engineer
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-xl">
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-200 transition-all font-semibold">
              <LinkedinIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
            <div className="flex items-center gap-3 justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Profile */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Profile Summary</h2>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <p className="text-lg text-slate-700 leading-relaxed relative z-10">
              Detail-oriented SQA Engineer with hands-on experience in manual functional, smoke, UI/UX, regression, API, database, and performance testing. Proficient in test case design, Jira-based defect management, Postman, Playwright, JMeter, and structured QA documentation. Experienced testing ERP, POS, HR & Payroll, e-commerce, and browser-extension products, with a continued focus on modern automation practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Flight Deck */}
      <section className="hidden" aria-hidden="true">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">THE QA FLIGHT DECK</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">See how I test<br /><span className="text-cyan-300">from every angle.</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">Choose a testing lens and run a miniature QA simulation. Each one mirrors the real checks I use to turn risky releases into confident launches.</p>
          </div>
          <div className="qa-deck-grid rounded-[2rem] border border-white/10 p-5 md:p-8">
            <div className="flex flex-col">
              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/5 p-1.5">{(Object.keys(qaModes) as Array<keyof typeof qaModes>).map((mode) => <button disabled={isTestRunning} key={mode} onClick={() => { setQaMode(mode); setTestRunStatus('idle'); setTestStep(-1); }} className={cn('rounded-xl px-2 py-3 text-xs font-bold transition-all disabled:cursor-wait disabled:opacity-50', qaMode === mode ? 'bg-white text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white')}>{qaModes[mode].label}</button>)}</div>
              <div className="mt-8 flex items-center gap-3"><span className={cn('qa-mode-dot', `qa-dot-${activeQaMode.color}`)} /><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-slate-500">TEST RUN / {activeQaMode.code}</p><h3 className="mt-1 text-xl font-bold text-white">{activeQaMode.title}</h3></div></div>
              <div className="mt-8 space-y-4">{activeQaMode.checks.map((check, index) => {
                const isActive = isTestRunning && index === testStep;
                const isPassed = testRunStatus === 'passed' || (isTestRunning && index < testStep);
                return <motion.div key={`${qaMode}-${check}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .08 }} className={cn('qa-check-row flex items-center gap-3 text-sm', isPassed ? 'is-passed text-slate-200' : isActive ? 'is-active text-white' : 'text-slate-500')}><span className="qa-check-number">0{index + 1}</span><span className="flex-1">{check}</span>{isPassed ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : isActive ? <Activity className="qa-running-spinner h-4 w-4 text-cyan-300" /> : <span className="font-mono text-[9px] tracking-wider">QUEUED</span>}</motion.div>;
              })}</div>
              <div className="mt-auto"><div className="qa-test-progress"><motion.div animate={{ width: `${testRunStatus === 'passed' ? 100 : Math.max(0, testStep) / activeQaMode.checks.length * 100}%` }} /></div><button onClick={runTestSimulation} disabled={isTestRunning} className="qa-run-button mt-4 w-full"><span className={isTestRunning ? 'qa-running-spinner' : ''}>{isTestRunning ? <Activity className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}</span>{isTestRunning ? `Checking ${testStep + 1} of ${activeQaMode.checks.length}…` : testRunStatus === 'passed' ? 'Run again' : 'Run test simulation'}</button></div>
            </div>
            <div className={cn('qa-visualizer', `qa-visualizer-${activeQaMode.color}`, isTestRunning && 'is-running')}>
              <div className="qa-visualizer-top"><span className="flex gap-1"><i /><i /><i /></span><span>{activeQaMode.code} / LIVE</span><span className="qa-live-indicator">ONLINE</span></div>
              <div className="qa-radar"><div className="qa-radar-ring ring-one" /><div className="qa-radar-ring ring-two" /><div className="qa-radar-ring ring-three" /><div className="qa-radar-cross" /><div className="qa-radar-sweep" /><span className="qa-radar-point point-one" /><span className="qa-radar-point point-two" /><span className="qa-radar-point point-three" /><div className="qa-radar-core"><Bug className="h-6 w-6" /></div></div>
              <div className="qa-metric"><div><p>{activeQaMode.metric}</p><span>{activeQaMode.metricLabel}</span></div><div className="qa-metric-orbit" /></div>
              <AnimatePresence>{testRunStatus === 'passed' && !isTestRunning && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="qa-pass-toast"><CheckCircle2 className="h-4 w-4" /> Test suite passed</motion.div>}</AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Professional Journey</h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-700 pb-12 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.company}</h3>
                    <p className="text-lg font-semibold text-slate-300">{exp.role}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-slate-400">
                    <span className="font-medium bg-slate-800 px-3 py-1 rounded-md text-sm">{exp.period}</span>
                    <span className="text-sm mt-1">{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-slate-400">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <div className="flex p-1 bg-slate-100 rounded-2xl w-full max-w-md">
              <button 
                onClick={() => setActiveProjectTab('sqa')}
                className={cn(
                  "flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
                  activeProjectTab === 'sqa' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                <Bug className="w-4 h-4" />
                SQA Projects
              </button>
              <button 
                onClick={() => setActiveProjectTab('dev')}
                className={cn(
                  "flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
                  activeProjectTab === 'dev' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                <Code2 className="w-4 h-4" />
                Dev Projects
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeProjectTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeProjectTab === 'sqa' ? sqaProjects : devProjects).map((project, index) => (
                <div key={index} className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100">
                    {project.tech}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-1.5"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-5">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-900 group hover:text-blue-600 transition-colors">
                        {project.links.length === 1 ? 'View on GitHub' : link.label}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive QA Lab */}
      <section id="qa-lab" className="qa-lab-section py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">INTERACTIVE QA LAB</p>
            <h2 className="mt-3 text-4xl font-bold text-white">Test it. Break it. Report it.</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">Use the live checkout below like a QA tester, identify the defects, then log your findings.</p>
          </div>
          <div className="bug-hunt mb-8 rounded-[2rem] border border-cyan-300/15 p-5 md:p-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><div><p className="font-mono text-[10px] font-black tracking-[.2em] text-cyan-300">BUG HUNT // SANDBOX</p><h3 className="mt-1 text-xl font-bold text-white">Mini checkout under test</h3></div><div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 font-mono text-xs text-cyan-100">TASK {bugTaskIndex + 1} / {bugHuntTasks.length} · FINDINGS: {bugHuntScore} / 3</div></div>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
              <div className="bug-checkout rounded-2xl p-5">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4"><span className="font-bold text-white">Your cart</span><span className="text-xs text-slate-400">Only {activeBugTask.stock} items left</span></div>
                <div className="flex items-center justify-between py-5"><div><p className="font-semibold text-white">{activeBugTask.product}</p><p className="text-sm text-slate-400">${activeBugTask.price}.00 each</p></div><div className="flex items-center gap-3 rounded-lg border border-slate-600 px-2 py-1"><button disabled={bugHuntFinished} onClick={() => setCheckoutQuantity(Math.max(1, checkoutQuantity - 1))} aria-label="Decrease quantity">−</button><span className="w-4 text-center font-bold text-white">{checkoutQuantity}</span><button disabled={bugHuntFinished} onClick={() => setCheckoutQuantity(checkoutQuantity + 1)} aria-label="Increase quantity">+</button></div></div>
                <div className="flex gap-2 border-t border-slate-700 pt-4"><input readOnly value={activeBugTask.code} className="min-w-0 flex-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-300" /><button disabled={bugHuntFinished} onClick={() => setPromoApplied(true)} className="rounded-lg bg-cyan-300 px-4 text-xs font-black text-slate-950">APPLY</button></div>
                {promoApplied && <p className="mt-2 text-xs font-semibold text-emerald-300">{activeBugTask.promo}</p>}
                <div className="mt-5 flex justify-between border-t border-slate-700 pt-4 font-bold text-white"><span>Total</span><span>${activeBugTask.price * checkoutQuantity}.00</span></div>
                <button disabled={bugHuntFinished} onClick={() => setPaymentComplete(true)} className="mt-5 w-full rounded-xl bg-white py-3 text-sm font-black text-slate-950">PAY ${activeBugTask.price * checkoutQuantity}.00</button>
                {paymentComplete && <p className="mt-3 rounded-lg bg-emerald-400/10 p-3 text-sm text-emerald-200">Payment successful. Thank you for your order!</p>}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"><p className="text-sm font-bold text-white">Log the defects you find</p><p className="mt-1 text-xs leading-relaxed text-slate-500">Interact with the checkout first. Select each issue you can reproduce.</p><div className="mt-5 space-y-3">{activeBugTask.defects.map((finding) => <button disabled={bugHuntFinished} key={finding} onClick={() => toggleFinding(finding)} className={cn('w-full rounded-xl border p-3 text-left text-sm transition-all disabled:cursor-not-allowed', loggedFindings.includes(finding) ? 'border-emerald-300 bg-emerald-300/10 text-emerald-100' : 'border-white/10 text-slate-400 hover:border-cyan-300/50 hover:text-white')}><span className="mr-2">{loggedFindings.includes(finding) ? '✓' : '○'}</span>{finding}</button>)}</div>{bugHuntScore === 3 && !bugHuntFinished && <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-emerald-400/15 p-3 text-sm font-semibold text-emerald-100">All issues found. Loading the next task…</motion.p>}{bugHuntFinished && <p className="mt-4 rounded-xl bg-emerald-400/15 p-3 text-sm font-semibold text-emerald-100">Bug Hunt complete — all unique checkout tasks were finished.</p>}</div>
            </div>
          </div>
          <div className="qa-terminal rounded-[2rem] border border-white/10 p-5 shadow-2xl md:p-8">
            <div className="mb-8 flex items-center gap-2 border-b border-white/10 pb-5"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" /><span className="ml-3 font-mono text-[10px] tracking-[0.18em] text-slate-500">{incidentFinished ? 'INCIDENT_QUEUE // COMPLETE' : `INCIDENT_QUEUE // ${String(scenarioIndex + 1).padStart(2, '0')} OF ${String(qaScenarios.length).padStart(2, '0')}`}</span><div className="ml-auto hidden gap-1 sm:flex">{qaScenarios.map((_, index) => <span key={index} className={cn('h-1.5 w-7 rounded-full transition-colors', incidentFinished || index === scenarioIndex ? 'bg-cyan-300' : 'bg-white/10')} />)}</div></div>
            <AnimatePresence mode="wait"><motion.div key={scenarioIndex} initial={{ opacity: 0, x: 18, filter: 'blur(5px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, x: -18, filter: 'blur(5px)' }} transition={{ duration: 0.32 }} className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
              <div>
                <div className="mb-4 flex items-center gap-2 text-amber-300"><AlertTriangle className="h-5 w-5" /><span className="font-mono text-xs font-bold tracking-widest">LIVE SCENARIO</span></div>
                <h3 className="text-2xl font-bold text-white">{activeScenario.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-400">{activeScenario.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 font-mono text-[10px] text-slate-400"><span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">MODULE: {activeScenario.module}</span><span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">STATUS: {activeScenario.status}</span><span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">IMPACT: {activeScenario.impact}</span></div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm font-bold text-white">Your triage decision</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">Severity</p>
                <div className="mt-2 grid grid-cols-3 gap-2">{['Low', 'Medium', 'High'].map((level) => <button disabled={triageResult === 'correct' || incidentFinished} key={level} onClick={() => { setSeverity(level); setTriageResult(''); }} className={cn('rounded-lg border px-2 py-2 text-xs font-bold transition-all disabled:cursor-not-allowed', severity === level ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 text-slate-400 hover:border-white/40')}>{level}</button>)}</div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">Priority</p>
                <div className="mt-2 grid grid-cols-3 gap-2">{['Normal', 'High', 'Urgent'].map((level) => <button disabled={triageResult === 'correct' || incidentFinished} key={level} onClick={() => { setPriority(level); setTriageResult(''); }} className={cn('rounded-lg border px-2 py-2 text-xs font-bold transition-all disabled:cursor-not-allowed', priority === level ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 text-slate-400 hover:border-white/40')}>{level}</button>)}</div>
                <button disabled={!severity || !priority || triageResult === 'correct' || incidentFinished} onClick={checkTriage} className="mt-6 w-full rounded-xl bg-white py-3 text-sm font-black text-slate-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-30">{incidentFinished ? 'ALL INCIDENTS COMPLETE' : triageResult === 'correct' ? 'NEXT INCIDENT LOADING…' : 'VERIFY DECISION'}</button>
                <AnimatePresence mode="wait">{triageResult && <motion.div key={triageResult} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={cn('mt-4 rounded-xl p-3 text-sm', triageResult === 'correct' ? 'bg-emerald-400/15 text-emerald-200' : 'bg-amber-400/15 text-amber-100')}>
                  {triageResult === 'correct' ? `Correct. ${activeScenario.explanation} Loading the next incident…` : `Review it: ${activeScenario.explanation} I would classify this as ${activeScenario.severity} severity and ${activeScenario.priority} priority.`}
                </motion.div>}</AnimatePresence>
                {triageResult === 'review' && <button onClick={() => { setSeverity(''); setPriority(''); setTriageResult(''); }} className="mx-auto mt-3 flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-white"><RotateCcw className="h-3 w-3" /> Try again</button>}
              </div>
            </motion.div></AnimatePresence>
          </div>
        </div>
      </section>

      {/* CV / Resume Section */}
      <section id="resume" className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Curriculum Vitae</h2>
            <p className="text-slate-600 max-w-xl">
              Preview or download my full resume for a detailed overview of my professional experience, skills, and certifications.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-bold text-slate-500 ml-4 uppercase tracking-widest">Mahedy_Hasan_Naiem_CV.pdf</span>
              </div>
              <a 
               href="https://drive.google.com/file/d/1VNbp2TUehz00myhDRB67pgjUPCKPRTIv/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            <div className="aspect-[1/1.4] w-full bg-slate-200 relative">
              {/* Replace the src with actual PDF link when uploaded */}
              <iframe
  src="https://drive.google.com/file/d/1VNbp2TUehz00myhDRB67pgjUPCKPRTIv/preview"
                className="w-full h-full border-none"
                title="Resume Preview"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-[2px]">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center pointer-events-auto">
                  <p className="font-bold text-slate-800 mb-2">Ready to take a closer look?</p>
                  <a href="/Mahedy_Hasan_Naiem_CV.pdf" download className="text-blue-600 text-sm font-bold underline">Click to Download PDF</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Courses & Training</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {training.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">{item.provider}</p>
                  <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's connect and work together!</h2>
                <p className="text-blue-100 text-lg mb-12 max-w-md">
                  I'm currently looking for new opportunities in Software Quality Assurance. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Email Me</p>
                      <p className="text-lg font-bold">{contactInfo.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Call Me</p>
                      <p className="text-lg font-bold">{contactInfo.phone}</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })}
                      placeholder="Your Name"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-white transition-all placeholder:text-blue-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
                      placeholder="Your Email"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-white transition-all placeholder:text-blue-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={contactForm.message}
                    onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
                    placeholder="Your Message"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-white transition-all placeholder:text-blue-200 resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  Send Message
                </button>
                {formStatus && <p className="text-center text-sm font-medium text-blue-100" role="status">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MAHEDY.QA</span>
            <p className="text-slate-500 text-sm mt-2">© 2026 MD. MAHEDY HASAN NAIEM. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="text-slate-400 hover:text-red-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
