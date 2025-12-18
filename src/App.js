import React, { useState, useEffect } from 'react';
import { Code, Palette, GitBranch, Menu, X, Download, ArrowDownCircle, Mail, Phone, MapPin } from 'lucide-react';

const PortfolioWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const skills = [
    {
      icon: <GitBranch className="w-16 h-16 text-purple-400" />,
      title: "Data Analyst",
      description: "Experienced in data cleaning, validation, and building interactive dashboards. Skilled in extracting insights from large datasets and improving data accuracy.",
      languages: "Python, SQL, R, PostgreSQL, MySQL",
      tools: ["Pandas", "Power BI", "Tableau", "Google Looker", "Excel"]
    },
    {
      icon: <Code className="w-16 h-16 text-purple-400" />,
      title: "Full-Stack Developer",
      description: "Built production-ready web applications with responsive design. Experienced in API integration, authentication, and database management.",
      technologies: "Laravel, JavaScript, HTML, CSS, Git",
      tools: ["Laravel", "PostgreSQL", "MySQL", "Git", "Jupyter Notebook"]
    },
    {
      icon: <Palette className="w-16 h-16 text-purple-400" />,
      title: "Data Engineer & ML",
      description: "Proficient in predictive modeling, statistical analysis, and clustering algorithms. Experienced with machine learning frameworks and optimization techniques.",
      focus: "Predictive Modeling, Statistical Analysis, Clustering",
      tools: ["TensorFlow", "ETL Pipeline", "Scikit-learn", "Matplotlib", "Pyhton"]
    }
  ];

  const projects = [
    {
      title: "Automated ETL Pipeline - Weather & Disaster Data",
      description: "Built automated ETL pipeline using Apache Airflow to extract weather and disaster data from BMKG API. Improved data accuracy by 35% and reduced manual processing time by 80%.",
      tech: ["Python", "Apache Airflow", "PostgreSQL", "API"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Stock Market ETL Pipeline",
      description: "Developed end-to-end ETL pipeline extracting 5+ years of stock data from Yahoo Finance. Processed 50,000+ records with 40% improvement in consistency and 60% faster query performance.",
      tech: ["Python", "PostgreSQL", "Pandas", "yfinance"],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Stock Market Data Visualization Dashboard",
      description: "Created interactive Power BI dashboard with automatic data refresh from PostgreSQL. Featured real-time stock analysis with line charts, slicers, and KPI cards.",
      tech: ["Python", "Power BI", "PostgreSQL", "DAX"],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Unemployment Rate Clustering Analysis",
      description: "Performed K-Medoids clustering with PSO optimization on socio-economic datasets. Reduced DBI value from 0.82 to 0.76, improving clustering quality significantly.",
      tech: ["Python", "Scikit-learn", "PSO", "Machine Learning"],
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const experiences = [
    { 
      year: "2024", 
      company: "Dinas Sosial Kota Medan", 
      role: "Data Analyst Intern - MSIB Program | Cleaned and validated 25,000+ beneficiary records, improving data accuracy by 30%. Built interactive dashboards that enabled 50% faster decision-making."
    },
    { 
      year: "2023", 
      company: "Dicoding Indonesia", 
      role: "Full-Stack Developer - MSIB Program | Completed full-stack capstone project with API integration and authentication. Improved workflow efficiency by 30% and UX by 40%."
    },
    { 
      year: "2023", 
      company: "GSDC UPN Veteran Jawa Timur", 
      role: "Member | Participated in weekly learning sessions and workshops on computer networks and cloud computing."
    },
    { 
      year: "2023", 
      company: "Landasan Kepemimpinan", 
      role: "Disciplinary Committee | Promoted character development and ensured discipline compliance among 400+ student participants."
    },
    { 
      year: "2021", 
      company: "UPN Veteran Jawa Timur", 
      role: "Bachelor of Informatics | GPA: 3.85/4.00 | Coursework: Data Analysis, Web Development, Database Systems, Statistics, Cloud Computing, Business Intelligence."
    }
  ].sort((a, b) => b.year - a.year);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      alert(`Thank you ${formData.name}! I'll contact you soon at ${formData.email}`);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      alert('Please fill in at least Name and Email');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('about')}>
            VB
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-all hover:scale-110">Home</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-all hover:scale-110">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-all hover:scale-110">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-purple-400 transition-all hover:scale-110">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-all hover:scale-105">
              Contact Me
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-6 py-8 space-y-6 text-center">
              <button onClick={() => scrollToSection('about')} className="block text-xl hover:text-purple-400 transition">Home</button>
              <button onClick={() => scrollToSection('skills')} className="block text-xl hover:text-purple-400 transition">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block text-xl hover:text-purple-400 transition">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="block text-xl hover:text-purple-400 transition">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="block text-xl hover:text-purple-400 transition">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 pt-24 relative overflow-hidden transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-pink-600/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Text */}
          <div className="space-y-8 animate-fade-in">
            <p className="text-2xl text-gray-400 flex items-center gap-2">
              Hello Buds <span className="animate-wave inline-block">👋</span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I am <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Verdian Loloate Berutu</span>
            </h1>
            <p className="text-xl text-purple-300 font-semibold">Data Analyst & Full-Stack Developer</p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <p className="text-gray-300 max-w-lg leading-relaxed text-lg">
              Fresh graduate Informatics student with GPA 3.85/4.00. Experienced in data analysis, ETL pipelines, 
              interactive dashboards, and full-stack development. Skilled in Python, SQL, Power BI, Tableau, and Laravel. 
              Proven track record of improving data accuracy and delivering actionable insights.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="/Verdian Loloate Berutu_CV.pdf" 
                download="Verdian-Loloate-Berutu-CV.pdf"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50"
              >
                <Download size={22} /> Download CV
              </a>
              <button onClick={() => scrollToSection('projects')} className="flex items-center gap-3 border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-all hover:scale-105">
                More <ArrowDownCircle size={22} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />
                <span>verdianloloateberutu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                <span>+62 813 6141 2357</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-400" />
                <span>Bekasi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Photo */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-72 h-72 bg-pink-600/20 rounded-full blur-2xl -top-10 -right-10 animate-pulse delay-500"></div>
              <div className="absolute w-40 h-40 border-4 border-purple-400/40 rounded-full top-20 right-20 animate-spin-slow"></div>
              <div className="absolute text-7xl text-purple-400/60 top-5 right-40">+</div>
            </div>
            <div className="relative z-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl shadow-2xl border-4 border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-9xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-32 px-6 bg-black/50 backdrop-blur-sm transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${visibleSections.has('skills') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>Skills</h2>
          <p className={`text-center text-gray-400 mb-20 text-lg transition-all duration-1000 delay-300 ${visibleSections.has('skills') ? 'opacity-100' : 'opacity-0'}`}>What I bring to the table</p>
          <div className="grid md:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className={`group bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur border border-gray-800 rounded-2xl p-10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-3xl font-bold text-center mb-4 group-hover:text-purple-300 transition">{skill.title}</h3>
                <p className="text-gray-400 text-center mb-8 leading-relaxed">{skill.description}</p>
                <div className="space-y-6 text-center">
                  <div>
                    <p className="text-purple-400 font-semibold mb-3 text-lg">{skill.languages || skill.technologies || skill.focus}</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-semibold mb-3">My Tools:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skill.tools.map((tool, i) => (
                        <span key={i} className="bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-purple-500/20 transition">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 px-6 bg-gradient-to-b from-black/50 to-transparent transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${visibleSections.has('projects') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>Projects</h2>
          <p className={`text-center text-gray-400 mb-20 text-lg transition-all duration-1000 delay-300 ${visibleSections.has('projects') ? 'opacity-100' : 'opacity-0'}`}>Some things I've built</p>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className={`group bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur border border-gray-800 rounded-2xl p-12 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 ${visibleSections.has('projects') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                <div className={`inline-block bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-lg text-sm font-bold mb-4`}>Featured</div>
                <h3 className="text-3xl font-bold text-purple-400 mb-6 group-hover:text-purple-300 transition">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full text-sm text-purple-300">{tech}</span>
                  ))}
                </div>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition group-hover:translate-x-2 inline-flex items-center gap-2">
                  View Project <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-32 px-6 bg-black/50 backdrop-blur-sm transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${visibleSections.has('experience') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>Experience</h2>
          <p className={`text-center text-gray-400 mb-20 text-lg transition-all duration-1000 delay-300 ${visibleSections.has('experience') ? 'opacity-100' : 'opacity-0'}`}>My professional journey</p>
          <div className="grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className={`group bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <div className="flex items-start gap-6">
                  <div className="text-3xl font-bold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-lg">{exp.year}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition">{exp.company}</h3>
                    <p className="text-gray-300 leading-relaxed">{exp.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 px-6 bg-gradient-to-b from-transparent to-black/50 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${visibleSections.has('contact') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>Get In Touch</h2>
          <p className={`text-xl text-gray-300 mb-12 transition-all duration-1000 delay-300 ${visibleSections.has('contact') ? 'opacity-100' : 'opacity-0'}`}>Interested in working together? Let's start a conversation!</p>
          <div className={`bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur border border-gray-800 rounded-2xl p-10 max-w-2xl mx-auto shadow-2xl transition-all duration-1000 delay-400 ${visibleSections.has('contact') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-lg shadow-purple-500/50"
              >
                Start Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-purple-500/20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Verdian Loloate Berutu</h3>
          <p className="text-gray-400 mb-8">Data Analyst & Full-Stack Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/VerdianBerutu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/verdianloloateberutu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">LinkedIn</a>
            <a href="mailto:verdianloloateberutu@gmail.com" className="text-gray-400 hover:text-purple-400 transition">Email</a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Verdian Loloate Berutu | All Rights Reserved</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;