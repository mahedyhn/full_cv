import { useState } from 'react';
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
  CheckCircle2 
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
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils/cn';

const App = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'sqa' | 'dev'>('sqa');

  const contactInfo = {
    email: "mehedyhasan78600@gmail.com",
    phone: "+8801795316264",
    location: "Farmgate, Dhaka-1215, Bangladesh",
    github: "https://github.com/mahedyhn",
    linkedin: "https://linkedin.com/in/mahedyhn"
  };

  const skills = [
    { category: "Manual Testing", items: ["Test Case Design", "Black/White Box Testing", "Functional Testing", "Regression Testing", "Smoke Testing", "UI/UX Testing", "Cross-Browser Testing"], icon: <Bug className="w-6 h-6" /> },
    { category: "QA Tools & Concepts", items: ["Jira (Bug Tracking)", "Postman", "Newman", "Chrome DevTools", "SDLC/STLC", "CI/CD Basics"], icon: <Layers className="w-6 h-6" /> },
    { category: "Programming Languages", items: ["Java", "Python", "PHP", "JavaScript", "C", "C++"], icon: <Code2 className="w-6 h-6" /> },
    { category: "Web Technologies", items: ["HTML", "CSS", "Bootstrap", "Laravel", "React.js", "Node.js", "Express"], icon: <Terminal className="w-6 h-6" /> },
    { category: "Database & Tools", items: ["MySQL", "Git", "GitHub", "VS Code", "PhpStorm"], icon: <Database className="w-6 h-6" /> },
    { category: "Documentation", items: ["Test Plans", "RTM", "Bug Reports", "Test Metrics", "Mind Maps"], icon: <FileText className="w-6 h-6" /> }
  ];

  const experiences = [
    {
      company: "Avian™ — Bangladesh's Trusted Tech Brand",
      role: "Junior Software Quality Assurance Engineer",
      period: "Jan 2026 — Present",
      location: "Dhaka",
      description: [
        "Executed manual functional, smoke, UI/UX, and regression testing on the VPNMasterPro platform — covering VMP™ Pass Password Manager, VPN features, pricing, and download flows.",
        "Performed cross-browser compatibility testing (Chrome, Firefox, Edge) on the VMP™ Pass browser extension, verifying autofill, password vault, 2FA authenticator, and data breach monitoring features.",
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
      title: "QuickHire Job Portal — Manual QA Testing",
      tech: "Excel, Chrome DevTools, Firefox, Edge, Jira",
      details: [
        "Designed 42 test cases across 6 modules covering functional, UI, negative, boundary value, & browser compatibility testing.",
        "Prepared comprehensive FNA Test Plan (13 sections), Mind Map, Test Scenarios, Bug Report, Test Metrics.",
        "Delivered structured documentation in Excel (8 sheets) and PDF format."
      ]
    },
    {
      title: "Otec Website — Bechakena Admin Panel Testing",
      tech: "Manual Testing, Jira",
      details: [
        "Conducted manual testing of the Bechakena e-commerce admin panel, covering product management, order processing, and user role management.",
        "Performed UI/UX validation and identified functional defects; documented bugs with severity and priority."
      ]
    },
    {
      title: "Grameenphone Website — Manual Testing",
      tech: "Manual Testing, Excel",
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
      details: [
        "Developed an intelligent recruitment solution automating the hiring process using AI.",
        "Key features: automated resume parsing, AI-driven candidate ranking, and real-time messaging system."
      ]
    },
    {
      title: "User Management App",
      tech: "JavaScript (Full Stack)",
      details: [
        "Built a full-stack user management application with complete CRUD operations and authentication workflows."
      ]
    },
    {
      title: "PHP/Laravel Projects",
      tech: "PHP, Laravel, MySQL, Bootstrap",
      details: [
        "Single Vendor E-commerce platform with product management, cart, and order processing.",
        "Newspaper website with article management, categories, and admin dashboard.",
        "Blogging website and Rental website with user authentication and dynamic content."
      ]
    }
  ];

  const training = [
    { title: "Full Stack SQA Engineer", provider: "IT Training BD", period: "2026 — Running" },
    { title: "Complete Web Development (PHP/Laravel)", provider: "UYLAB", period: "4 Months" },
    { title: "Complete Web Development", provider: "Programming Hero", period: "Jan—Jun 2025" },
    { title: "Web Dev PHP with Laravel (BASIS)", provider: "SEIP", period: "3 Months" },
    { title: "Professional English Communication", provider: "WSDA New Zealand", period: "Jan—Mar 2023" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
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
            <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              {/* Placeholder for the user's photo from the CV */}
              <img 
                src="utils/2--.JPG" 
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
              Detail-oriented Junior SQA Engineer with hands-on experience in manual functional, smoke, UI/UX, regression, and cross-browser compatibility testing. 
              Proficient in test case design, bug reporting via Jira, API testing with Postman, and structured documentation. 
              Passionate about software quality and continuously upskilling in automation, SDLC/STLC, and modern QA practices.
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
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group">
                    View Details 
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
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
                href="https://drive.google.com/file/d/1EZtUivvBdJDjme7UtjFDofoxnqxM8NjV/view?usp=sharing/" 
                download 
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            <div className="aspect-[1/1.4] w-full bg-slate-200 relative">
              {/* Replace the src with actual PDF link when uploaded */}
              <iframe 
                src="https://drive.google.com/file/d/1EZtUivvBdJDjme7UtjFDofoxnqxM8NjV/view?usp=sharing" 
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
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-white transition-all placeholder:text-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email</label>
                    <input type="email" placeholder="Your Email" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-white transition-all placeholder:text-blue-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Message</label>
                  <textarea rows={4} placeholder="Your Message" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 focus:border-white transition-all placeholder:text-blue-200 resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  Send Message
                </button>
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
