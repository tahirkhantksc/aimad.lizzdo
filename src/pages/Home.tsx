import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Code, Cpu, Monitor, Zap, Box, Layers, Palette, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <SEO 
        title="Aimad | Full Stack Developer & Digital Creator"
        description="Aimad is a Full Stack Developer, Cybersecurity Professional, AI Automation Developer, and 3D Artist based in Pakistan."
      />
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-4 md:px-8 overflow-hidden bg-bg-base">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
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
              <span className="text-3xl md:text-4xl text-text-muted mt-4 block">Co-Founder of Lizzdo & Digital Creator.</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-12 max-w-xl">
              I am a Full Stack Developer, Cybersecurity Professional, AI Automation Developer, 3D Artist, and Game Developer. 
              From secure custom web applications to immersive Unity & Unreal Engine environments, I blend technical expertise with creative vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-12 sm:items-center">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-text-muted font-bold block">Find me on</span>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/aimadulislam/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-main hover:text-brand text-xs font-bold"
                  >
                    IN
                  </a>
                  <a 
                    href="https://www.x.com/aimadulislam/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-main hover:text-brand text-xs font-bold"
                  >
                    X
                  </a>
                  <a 
                    href="https://wa.me/923125779507"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-main hover:text-brand"
                  >
                    <MessageCircle size={20} />
                  </a>
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
            className="relative hidden lg:block"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-bg-base shadow-card p-4 rounded-xl">
              <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2 text-center">Top Software</p>
              <div className="flex gap-2">
                {['React', 'Node.js', 'Python', 'Blender'].map(s => (
                  <span key={s} className="text-[10px] px-2 py-1 shadow-btn rounded-md font-medium text-text-main">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 md:px-8 bg-bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Features</span>
            <h2 className="text-4xl md:text-6xl font-bold">What I Do</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Full Stack Dev", icon: Code, desc: "Custom web applications, business platforms, and API integrations tailored to your needs." },
              { title: "Cybersecurity", icon: Zap, desc: "Comprehensive security audits, network security, and robust vulnerability assessments." },
              { title: "3D & Game Art", icon: Palette, desc: "High-quality character modeling, environments, and assets for Unity, Unreal, and Roblox." },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 pb-12 rounded-2xl shadow-card bg-bg-base hover:bg-white/50 group cursor-default transition-all"
              >
                <s.icon size={40} className="text-brand mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block shadow-btn shadow-btn-hover px-8 py-4 rounded-xl text-brand font-bold uppercase tracking-widest">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 bg-bg-base border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechFlow Innovations",
                position: "CTO",
                rating: 5,
                review: "Aimad delivered an exceptional full stack web application for us. His attention to performance, security, and clean code made the entire process seamless. Highly recommended for complex web projects.",
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
              },
              {
                name: "Marcus Chen",
                company: "Global Secure Solutions",
                position: "Security Lead",
                rating: 5,
                review: "We hired Aimad for a comprehensive website security audit. His deep knowledge of penetration testing and vulnerability assessments helped us patch critical flaws before they could be exploited.",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80"
              },
              {
                name: "Elena Rodriguez",
                company: "Indie Game Studio X",
                position: "Art Director",
                rating: 5,
                review: "The 3D character models and Roblox assets Aimad created exceeded our expectations. His topology is incredibly clean, and the rigging was game-ready right out of the box. A true technical artist.",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 pb-10 rounded-2xl shadow-card bg-bg-base group cursor-default transition-all flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full shadow-icon border-2 border-brand/20 object-cover" />
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                    <p className="text-xs text-text-muted uppercase tracking-widest">{t.position} {t.company && `at ${t.company}`}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-brand text-sm">★</span>
                  ))}
                </div>
                <p className="text-text-muted leading-relaxed text-sm flex-grow">"{t.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
