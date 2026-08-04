import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Github, Linkedin, Twitter, MessageCircle, 
  Instagram, Mail, ExternalLink, Download, ArrowRight,
  Monitor, Box, Zap, Palette, Globe, Layers,
  Briefcase, GraduationCap, Quote, Send
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Constants ---
const COLORS = {
  brand: "#ff014f",
  bg: "#ecf0f3",
  text: "#1e2125",
  muted: "#3c3e41"
};

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/aimadulislam/",
  twitter: "https://www.x.com/aimadulislam/",
  whatsapp: "https://wa.me/923125779507",
  instagram: "https://www.instagram.com/aimadulislamcg/",
  behance: "https://www.behance.net/aimadulislam",
  email: "mailto:aimad@lizzdo.com"
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4",
      scrolled ? "bg-bg-base/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-icon border-2 border-brand/10">
            <img src="https://postimg.cc/hXgLLVMP" alt="Aimad" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-main group-hover:text-brand transition-colors">AIMAD</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-text-muted hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-btn shadow-btn-hover px-6 py-2.5 rounded-lg text-sm font-bold text-brand uppercase tracking-widest"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden shadow-btn p-2 rounded-lg text-brand"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-bg-base shadow-xl md:hidden py-8 px-4 flex flex-col gap-4 items-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-text-muted hover:text-brand"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              className="w-full text-center shadow-btn inner-shadow py-4 mt-4 rounded-xl text-brand font-bold uppercase"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-text-muted font-medium mb-6 block">
            Welcome to my world
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Hi, I'm <span className="text-brand">Aimad</span><br />
            <span className="text-4xl md:text-5xl">a 3D Artist & Designer.</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed mb-12 max-w-xl">
            I build interactive environments, cinematic-quality VFX, and immersive game assets. 
            From character production to digital fashion, I bridge artistic excellence with technical innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-12 sm:items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-text-muted font-bold block">Find me on</span>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Twitter, href: SOCIAL_LINKS.twitter },
                  { icon: Instagram, href: SOCIAL_LINKS.instagram },
                  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-main hover:text-brand"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-text-muted font-bold block">Best Skills On</span>
              <div className="flex gap-4">
                {[Box, Layers, Zap, Palette].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn text-brand font-bold">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-card p-6 bg-bg-base">
            <div className="w-full h-full bg-white/40 rounded-2xl overflow-hidden relative group">
              <img 
                src="https://postimg.cc/hXgLLVMP" 
                alt="Aimad" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-bg-base shadow-card p-4 rounded-xl hidden md:block">
            <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2 text-center">Top Software</p>
            <div className="flex gap-2">
              {['Blender', 'Unreal', 'Unity', 'CLO3D'].map(s => (
                <span key={s} className="text-[10px] px-2 py-1 shadow-btn rounded-md font-medium">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "3D Animation", icon: Zap, desc: "Cinematic quality VFX, CGI renders, and project visualizations for brands." },
    { title: "Character Design", icon: Box, desc: "Design and rig game-ready 3D characters optimized for real-time performance." },
    { title: "Branding", icon: Palette, desc: "Visual identities, logos, and UI/UX design bridging artistic excellence." },
    { title: "Game Dev", icon: Layers, desc: "Environment building and gameplay assets in Unity, Unreal Engine, and Roblox." },
    { title: "Digital Fashion", icon: Monitor, desc: "Digital fashion simulations using CLO3D and Style3D for global fashion clients." },
    { title: "VFX & CGI", icon: Globe, desc: "AI-powered VFX tools for character integration and high-end film production." },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Features</span>
          <h2 className="text-4xl md:text-6xl font-bold">What I Do</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 pb-12 rounded-2xl shadow-card bg-bg-base/30 hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent group cursor-default transition-all"
            >
              <s.icon size={40} className="text-brand mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">{s.desc}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={24} className="text-brand" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/behance')
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold">My Creative Work</h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.slice(0, 6).map((project, i) => (
                <motion.div
                  key={project.guid || i}
                  whileHover={{ y: -10 }}
                  className="rounded-3xl shadow-card bg-bg-base overflow-hidden flex flex-col group p-6"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-brand/5 flex items-center justify-center">
                        <Box size={48} className="text-brand/20" />
                      </div>
                    )}
                    {i === 0 && (
                      <div className="absolute top-4 left-4 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        New Project
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-brand transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-muted font-medium mb-6">
                      Published on {new Date(project.pubDate).toLocaleDateString()}
                    </p>
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-main group-hover:text-brand"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href={SOCIAL_LINKS.behance}
                target="_blank"
                className="inline-flex items-center gap-2 shadow-btn shadow-btn-hover px-10 py-5 rounded-xl font-bold text-brand uppercase tracking-widest"
              >
                See More on Behance <ArrowRight size={18} />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const Resume = () => {
  const education = [
    { school: "University of Peshawar", degree: "BSc in Computer Science", period: "Pakistan", desc: "Completed comprehensive computer science degree." },
    { school: "DigiSkills.pk", degree: "3D Animation & Digital Art", period: "Certificate", desc: "Specialized training in CGI and character animation." },
    { school: "Intermediate", degree: "Pre-Engineering in TKSc", period: "Dir Lower", desc: "Foundational engineering studies." },
  ];

  const experience = [
    { company: "Lizzdo.com", role: "Co-Founder & Creative Director", period: "2023 - Present", desc: "Lead brand strategy, visual identity, and 3D production pipelines globally." },
    { company: "Freelance", role: "VFX & CGI Artist", period: "2021 - Present", desc: "Produce cinematic renders for international projects on Fiverr, Upwork, and directly." },
    { company: "Various Projects", role: "3D Artist & Game Dev", period: "2023 - Present", desc: "Build environments and assets in Unity, Unreal, and Roblox Studio." },
  ];

  return (
    <section id="resume" className="py-24 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">1+ Years of Experience</span>
          <h2 className="text-4xl md:text-6xl font-bold">My Resume</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn text-brand">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-3xl font-bold">Education Quality</h3>
            </div>
            <div className="space-y-12 border-l-4 border-white/20 pl-8 ml-6">
              {education.map((item, i) => (
                <div key={i} className="relative group p-8 rounded-2xl shadow-card bg-bg-base hover:bg-gradient-to-r hover:from-white/5 transition-all">
                  <div className="absolute -left-12 top-10 w-8 h-1 bg-white/20" />
                  <div className="absolute -left-[54px] top-8 w-4 h-4 rounded-full border-4 border-white/40 bg-bg-base group-hover:border-brand group-hover:bg-brand transition-all" />
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-white transition-colors">{item.school}</h4>
                      <p className="text-sm text-text-muted">{item.degree}</p>
                    </div>
                    <span className="shadow-btn px-4 py-1.5 rounded-full text-xs font-bold text-brand uppercase">{item.period}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn text-brand">
                <Briefcase size={24} />
              </div>
              <h3 className="text-3xl font-bold">Job Experience</h3>
            </div>
            <div className="space-y-12 border-l-4 border-white/20 pl-8 ml-6">
              {experience.map((item, i) => (
                <div key={i} className="relative group p-8 rounded-2xl shadow-card bg-bg-base hover:bg-gradient-to-r hover:from-white/5 transition-all">
                  <div className="absolute -left-12 top-10 w-8 h-1 bg-white/20" />
                  <div className="absolute -left-[54px] top-8 w-4 h-4 rounded-full border-4 border-white/40 bg-bg-base group-hover:border-brand group-hover:bg-brand transition-all" />
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-white transition-colors">{item.company}</h4>
                      <p className="text-sm text-text-muted">{item.role}</p>
                    </div>
                    <span className="shadow-btn px-4 py-1.5 rounded-full text-xs font-bold text-brand uppercase">{item.period}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", role: "CEO at TechCorp", text: "Aimad's 3D work is absolutely world-class. He brought our product to life in a way we never thought possible." },
    { name: "Jane Smith", role: "Creative Lead", text: "The attention to detail in the character designs and the lighting is just incredible. A true artist." },
  ];

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold">What Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-3xl shadow-card bg-bg-base relative">
              <Quote className="text-brand/10 absolute top-8 right-8 scale-[3]" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-btn p-1">
                  <div className="w-full h-full bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold">
                    {t.name[0]}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{t.name}</h4>
                  <p className="text-xs text-text-muted uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-text-muted text-lg leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold">Hire Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-2xl shadow-card bg-bg-base overflow-hidden relative group">
              <div className="relative z-10">
                <img 
                  src="https://postimg.cc/hXgLLVMP" 
                  alt="Aimad" 
                  referrerPolicy="no-referrer"
                  className="w-full aspect-video object-cover rounded-xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <h3 className="text-3xl font-bold mb-2">Aimad</h3>
                <p className="text-text-muted mb-6 uppercase tracking-widest text-sm">3D Artist & Designer</p>
                <p className="text-text-muted mb-8 leading-relaxed">
                  I am available for freelance work. Connect with me via WhatsApp or email.
                </p>
                <div className="space-y-4 text-sm font-medium">
                  <p className="flex items-center gap-3"><Mail size={16} className="text-brand" /> aimad@lizzdo.com</p>
                  <p className="flex items-center gap-3"><MessageCircle size={16} className="text-brand" /> +92 312 5779507</p>
                </div>
              </div>
            </div>
          </div>

          <form className="lg:col-span-2 p-8 md:p-12 rounded-2xl shadow-card bg-bg-base space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Your Name</label>
                <input type="text" className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Phone Number</label>
                <input type="text" className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Email</label>
              <input type="email" className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Message</label>
              <textarea rows={6} className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-5 rounded-xl shadow-btn shadow-btn-hover text-brand font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-4 md:px-8 text-center border-t border-white/10 bg-bg-base">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="w-20 h-20 rounded-full overflow-hidden shadow-icon border-2 border-brand/20 p-1">
          <img src="https://postimg.cc/hXgLLVMP" alt="Aimad" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter text-text-main">AIMAD</h2>
        <div className="flex gap-6 mb-8">
          {[
            { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
            { icon: Twitter, href: SOCIAL_LINKS.twitter },
            { icon: Instagram, href: SOCIAL_LINKS.instagram },
            { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-muted hover:text-brand"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-text-muted font-medium">
          © 2024. All rights reserved by Aimad | Creative Platform: <a href="https://lizzdo.com" className="text-brand hover:underline">Lizzdo.com</a>
        </p>
      </div>
    </footer>
  );
};

const Blog = () => {
  const posts = [
    { title: "The Future of 3D in Web Design", date: "May 10, 2024", category: "Trends", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" },
    { title: "Building Immersive Environments in Unreal", date: "Apr 28, 2024", category: "Tutorial", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop" },
    { title: "CGI & Branding: Why Depth Matters", date: "Apr 15, 2024", category: "Business", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="blog" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Visit my blog</span>
          <h2 className="text-4xl md:text-6xl font-bold">Latest News</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-3xl shadow-card bg-bg-base overflow-hidden group p-6"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-8">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-widest text-brand">
                <span>{post.category}</span>
                <span className="flex items-center gap-1 text-text-muted"><Zap size={12} /> 5 min read</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-text-muted text-sm mb-6">
                Insights into {post.category.toLowerCase()} and 3D artistic techniques.
              </p>
              <div className="pt-6 border-t border-white/20 flex justify-between items-center">
                <span className="text-xs font-medium text-text-muted">{post.date}</span>
                <ArrowRight size={20} className="text-brand opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Resume />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
