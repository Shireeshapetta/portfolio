// src/App.jsx
import './index.css'
import profilePic from './assets/siripic.jpg'
import { useState } from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

// ---------------- DATA ----------------
const skills = {
  'Programming Languages': [
    { name: 'C', icon: '💻' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' }
  ],
  'Web & Backend': [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Java Servlet/JSP', icon: '☕' },
    { name: 'Flask', icon: '⚗️' },
    { name: 'Django', icon: '🐍' }
  ],
  Databases: [
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Firebase', icon: '🔥' }
  ],
  'Mobile & Tools': [
    { name: 'Flutter', icon: '📱' },
    { name: 'Android Studio', icon: '🤖' },
    { name: 'Git', icon: '📓' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' }
  ],
  'Soft Skills': [
    'Problem-solving',
    'Debugging',
    'Communication',
    'Teamwork',
    'Time management',
    'Fast learning',
  ],
}

const projects = [
  {
    title: 'Flutter Music Streaming App',
    period: 'Present',
    tech: ['Flutter', 'Dart', 'YouTube API', 'Android Studio'],
    description: [
      'Full mobile app with real-time audio streaming using YouTube API.',
      'Handled emulator testing, error handling, and UI/UX optimizations.',
    ],
    github: 'https://github.com/Shireeshapetta/flutter-music',
    live: '',
    icon: '🎵',
    category: 'Mobile Development'
  },
  {
    title: 'Python Flask Tourism Portal',
    period: '2024',
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    description: [
      'Built a Flask-based tourism portal with user authentication and booking features.',
      'Designed MySQL database schema and REST APIs.',
      'Improved performance for multi-user access and secure data handling.',
    ],
    github: 'https://github.com/Shireeshapetta/TourismPortal',
    live: '',
    icon: '🏝️',
    category: 'Web Development'
  },
  {
    title: 'Student Project Collaboration Platform',
    period: '2024',
    tech: ['Django', 'Python', 'JavaScript', 'MySQL'],
    description: [
      'Platform for student projects with file sharing and task management.',
      'Includes user authentication, real-time chat, and progress tracking.',
    ],
    github: 'https://github.com/Shireeshapetta/django-project-siri',
    live: '',
    icon: '👥',
    category: 'Web Development'
  },
  {
    title: 'Java Recipe Management System',
    period: '2023',
    tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
    description: [
      'Web app for recipe storage, search, and user management.',
      'Designed relational database schema and CRUD operations.',
    ],
    github: '',
    live: '',
    icon: '🍳',
    category: 'Web Development'
  },
]

// ✅ FIXED: Changed `image` to `file` with correct PDF paths
const certifications = [
  {
    name: 'Infosys Springboard',
    details: 'Salesforce AI, HTML, CSS, JavaScript, Flutter, Design Thinking',
    year: '2024',
    file: '/certificates/css-infosys-springboard.pdf',  // 👈 Fixed
    issuer: 'Infosys'
  },
  {
    name: 'CS Codenz',
    details: 'Data Structures, Python',
    year: '2023',
    file: '/certificates/python-cscodenz.jpg',   // 👈 Fixed (if JPG, will still work)
    issuer: 'CS Codenz Academy'
  },
  {
    name: 'Skill India Tech Mahindra',
    details: 'Cyber Security',
    year: '2023',
    file: '/certificates/cyber-security-digital-india.pdf',  // 👈 Fixed filename (hyphen instead of space)
    issuer: 'Tech Mahindra & Skill India'
  },
   {
    name: 'UpToSkills',
    details: 'Internship / Training Certification',
    year: '2026',
    file: '/certificates/uptoskills.pdf',
    issuer: 'UpToSkills'
  },

  // ⭐ NEW: UpToSkills Experience Letter
  {
    name: 'UpToSkills Experience Letter',
    details: 'Internship Experience Letter',
    year: '2026',
    file: '/certificates/experience_letter_shireesha_petta.pdf',
    issuer: 'UpToSkills'
  }
]

const education = [
  {
    institution: 'JNTU-GV, Vizianagaram',
    degree: 'B.Tech in Information Technology',
    period: '2023 – 2027',
    location: 'Vizianagaram, Andhra Pradesh',
    gpa: 'Pursuing (Current CGPA: 8.5/10)'
  },
  {
    institution: 'AP Model School & Junior College',
    degree: 'Intermediate (MPC)',
    period: '2021 – 2023',
    location: 'Andhra Pradesh',
    gpa: '95%'
  },
  {
    institution: 'AP Model School',
    degree: 'SSC (10th Grade)',
    period: '2020 – 2021',
    location: 'Andhra Pradesh',
    gpa: '98%'
  }
]

const contact = [
  {
    platform: 'Email',
    value: 'shireeshapetta@gmail.com',
    link: 'mailto:shireeshapetta@gmail.com',
    icon: <FaEnvelope />
  },
  {
    platform: 'GitHub',
    value: 'Shireeshapetta',
    link: 'https://github.com/Shireeshapetta',
    icon: <FaGithub />
  },
  {
    platform: 'Location',
    value: 'Vizianagaram, Andhra Pradesh',
    link: null,
    icon: <FaMapMarkerAlt />
  },
  {
    platform: 'Phone',
    value: '+91 9876543210',
    link: 'tel:+919876543210',
    icon: <FaPhone />
  }
]

// ---------------- COMPONENTS ----------------
function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-0.5 w-8 bg-emerald-500"></div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
        {children}
      </h2>
      <div className="flex-1 h-0.5 bg-slate-800"></div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{project.icon}</span>
            <h3 className="font-semibold text-slate-100">{project.title}</h3>
          </div>
          <p className="text-xs text-emerald-300 mt-1">{project.tech.join(' · ')}</p>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
          {project.period}
        </span>
      </div>

      <ul className="space-y-2 text-sm text-slate-300">
        {project.description.map((line, index) => (
          <li key={index} className="flex items-start">
            <span className="text-emerald-400 mr-2">•</span>
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
          {project.category}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function EducationCard({ edu }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-slate-100">{edu.institution}</h3>
          <p className="text-sm text-slate-300 mt-1">{edu.degree}</p>
        </div>
        <span className="text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-full">
          {edu.period}
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
        <FaMapMarkerAlt className="text-xs" />
        <span>{edu.location}</span>
      </div>
      
      {edu.gpa && (
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs font-medium text-emerald-400">
            {edu.gpa.includes('CGPA') ? edu.gpa : `Score: ${edu.gpa}`}
          </div>
          {!edu.gpa.includes('Pursuing') && (
            <div className="text-xs text-slate-500">
              {parseFloat(edu.gpa) >= 90 ? 'Excellent' : 
               parseFloat(edu.gpa) >= 80 ? 'Very Good' : 
               parseFloat(edu.gpa) >= 70 ? 'Good' : ''}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ✅ NEW: PDF-ready CertificationCard (replaces old image modal version)
function CertificationCard({ cert }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-slate-100">{cert.name}</h3>
          <p className="text-xs text-emerald-400 mt-1">{cert.issuer}</p>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
          {cert.year}
        </span>
      </div>
      
      <p className="text-sm text-slate-300 mb-4">{cert.details}</p>
      
      {cert.file && (
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-xs text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-2 py-2 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/10 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Certificate (PDF)
        </a>
      )}
    </div>
  );
}

function MobileMenu({ isOpen, onClose, navItems, scrollToSection }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 sm:hidden">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-4 top-20 w-48 rounded-xl border border-slate-800 bg-slate-900/95 p-4">
        <div className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id)
                onClose()
              }}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 transition-colors hover:text-emerald-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ---------------- MAIN APP ----------------
function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            P. Laxmi Shireesha
          </span>
          
          <nav className="hidden gap-6 text-sm sm:flex">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 hover:text-emerald-400 ${
                  activeSection === item.id 
                    ? 'text-emerald-400 font-semibold' 
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button 
            className="sm:hidden text-slate-300 hover:text-emerald-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8 space-y-20">
        {/* HERO SECTION */}
        <section id="about" className="scroll-mt-20">
          <div className="grid gap-12 items-center md:grid-cols-[2fr,1fr]">
            <div>
              <p className="text-sm font-medium text-emerald-400 tracking-wider">
                <span className="animate-pulse">⚡</span> B.Tech IT · Full-stack & Mobile Developer
              </p>
              
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">
                Building Digital Experiences with{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                  Code & Creativity
                </span>
              </h1>
              
              <p className="mt-6 text-base text-slate-300 leading-relaxed">
                B.Tech IT student at JNTUGV passionate about creating efficient, scalable, and user-friendly applications. 
                Experienced in full-stack web development with Django/Flask and mobile app development with Flutter. 
                Currently seeking internship opportunities to contribute to innovative projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/siri-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-3 text-sm font-medium text-slate-950 hover:from-emerald-400 hover:to-sky-400 transition-all duration-300"
                >
                  <FaDownload /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-6 py-3 text-sm font-medium text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <FaEnvelope /> Contact Me
                </a>
              </div>
            </div>

            <div className="relative mx-auto">
              <div className="relative h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-500 via-sky-500 to-purple-500 p-1 animate-gradient">
                <div className="h-full w-full rounded-full bg-slate-900 p-1">
                  <img
                    src={profilePic}
                    alt="P. Laxmi Shireesha"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-slate-900 p-3 border border-emerald-500/20">
                <div className="text-xs font-medium text-emerald-400">Open to Work</div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-20">
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="text-sm font-semibold text-slate-100 mb-4 pb-2 border-b border-slate-800">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    typeof item === 'string' ? (
                      <span key={index} className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                        {item}
                      </span>
                    ) : (
                      <span key={item.name} className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs flex items-center gap-2">
                        <span>{item.icon}</span>
                        {item.name}
                      </span>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-8">
            {projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-20">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-6 mt-8">
            {education.map(edu => (
              <EducationCard key={edu.institution} edu={edu} />
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-20">
          <SectionTitle>Certifications</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2 mt-8">
            {certifications.map(cert => (
              <CertificationCard key={cert.name} cert={cert} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-100">Let's Connect!</h3>
              <p className="text-sm text-slate-300">
                I'm currently looking for internship opportunities and open to discussing 
                potential projects. Feel free to reach out!
              </p>
              <div className="space-y-3">
                {contact.map(item => (
                  <div key={item.platform} className="flex items-center gap-3 text-sm">
                    <div className="text-emerald-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-400">{item.platform}</div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-slate-100 hover:text-emerald-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-slate-100">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/Shireeshapetta" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href="mailto:shireeshapetta@gmail.com" 
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
                >
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/90 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} P. Laxmi Shireesha. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Shireeshapetta" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="mailto:shireeshapetta@gmail.com" 
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
