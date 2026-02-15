import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Gamepad2, BarChart3, MessageSquare, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: 'AI Chatbot with LLM',
      description: 'Advanced conversational AI system leveraging Large Language Models for intelligent, context-aware interactions.',
      tech: ['Python', 'LLM', 'NLP', 'AI'],
      icon: MessageSquare,
      github: 'https://github.com/FaresFehri10/chatbot--LLM',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'GameAndBrain',
      description: 'Innovative project exploring the intersection of gaming mechanics and cognitive science.',
      tech: ['Game Development', 'Cognitive Science', 'Interactive Design'],
      icon: Brain,
      github: 'https://github.com/FaresFehri10/GameAndBrain',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Dream Ball',
      description: 'Creative project combining physics simulation with interactive gameplay mechanics.',
      tech: ['Physics Engine', 'Interactive', 'Simulation'],
      icon: Gamepad2,
      github: 'https://github.com/FaresFehri10/dream_ball',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Benchmarking',
      description: 'Performance analysis and optimization toolkit for measuring system capabilities.',
      tech: ['Performance Testing', 'Analysis', 'Optimization'],
      icon: BarChart3,
      github: 'https://github.com/FaresFehri10/Benchmarking',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const skills = {
    'Programming': ['Python', 'JavaScript', 'Java', 'C++'],
    'AI/ML': ['Large Language Models', 'NLP', 'Deep Learning', 'TensorFlow'],
    'Development': ['React', 'Node.js', 'Git', 'REST APIs'],
    'Tools': ['Docker', 'Linux', 'VSCode', 'Jupyter']
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Fares Fehri
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-cyan-400' 
                      : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/FaresFehri10" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="text-center space-y-8 animate-fadeIn">
            <div className="inline-block">
              <div className="text-sm font-mono text-cyan-400 mb-4 animate-slideDown">
                &lt;Developer /&gt;
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-slideUp" 
              style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Fares Fehri
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto animate-slideUp" 
              style={{ animationDelay: '0.2s' }}>
              Software Developer & AI Enthusiast
              <br />
              Building intelligent systems and interactive experiences
            </p>

            <div className="flex items-center justify-center gap-6 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium 
                         hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-slate-700 rounded-lg font-medium 
                         hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate software developer with a strong focus on artificial intelligence 
                and machine learning. My journey in tech has led me to explore the fascinating 
                intersection of AI, gaming, and cognitive science.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise in building intelligent systems using Large Language Models and 
                creating interactive experiences, I bring ideas to life through code. I'm constantly 
                learning and experimenting with cutting-edge technologies.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-cyan-400">
                  AI Development
                </span>
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-blue-400">
                  Full Stack
                </span>
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-purple-400">
                  Game Dev
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 
                            border border-slate-800 flex items-center justify-center backdrop-blur-sm
                            hover:scale-105 transition-transform duration-500">
                <Code2 className="w-32 h-32 text-cyan-400 opacity-50" strokeWidth={1} />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 
                         hover:border-slate-700 transition-all duration-500 hover:shadow-xl 
                         hover:shadow-cyan-500/10 overflow-hidden"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 
                              group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 
                         transition-all duration-300"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto w-full text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:fares.fehri@example.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 
                       rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all 
                       duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            
            <a
              href="https://github.com/FaresFehri10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-slate-700 rounded-lg font-medium 
                       hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 w-full sm:w-auto 
                       justify-center"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-600 text-sm">
              © 2026 Fares Fehri. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
