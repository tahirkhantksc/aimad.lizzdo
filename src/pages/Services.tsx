import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Monitor, Shield, Box, Palette, Zap, Layers, Globe, ArrowRight, Cpu, Code } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      title: "Web Development", 
      icon: Monitor, 
      desc: "Full Stack Website Development and Custom Web Applications. Key features: Business Websites, Portfolio Websites, and converting Landing Pages.",
      cta: "Start Your Project"
    },
    { 
      title: "Website Optimization", 
      icon: Zap, 
      desc: "Comprehensive Website Optimization and Website Maintenance. Key features: Performance tuning, SEO enhancements, and continuous updates.",
      cta: "Optimize Now"
    },
    { 
      title: "AI & API Integration", 
      icon: Cpu, 
      desc: "Advanced AI Integration & Automation alongside seamless API Integration. Key features: Intelligent workflows and third-party data synchronization.",
      cta: "Automate Your Work"
    },
    { 
      title: "Cybersecurity", 
      icon: Shield, 
      desc: "Expert Cybersecurity Consulting and Network Security. Key features: In-depth Website Security Audits and robust vulnerability mitigation.",
      cta: "Secure Your Assets"
    },
    { 
      title: "3D Modeling", 
      icon: Box, 
      desc: "High-quality 3D Character Modeling and 3D Product Modeling. Key features: Production-ready topology and stunning photorealistic renders.",
      cta: "Bring Ideas to Life"
    },
    { 
      title: "Game Development Assets", 
      icon: Layers, 
      desc: "Immersive Game Assets, Roblox Assets, and Roblox UGC Creation. Key features: Optimized Unity Asset Creation and Unreal Engine Assets.",
      cta: "Build Your World"
    },
    { 
      title: "Character Animation", 
      icon: Globe, 
      desc: "Professional Character Rigging, Character Animation, and Texturing & Materials. Key features: Expressive movements and lifelike PBR textures.",
      cta: "Animate Your Vision"
    },
    { 
      title: "Design & Branding", 
      icon: Palette, 
      desc: "Creative Graphic Design and intuitive UI/UX Design. Key features: Strategic Branding & Visual Identity that elevates your market presence.",
      cta: "Elevate Your Brand"
    },
  ];

  return (
    <div className="pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Services | Aimad"
        description="Professional services offered by Aimad including Web Development, Cybersecurity, 3D Art & Animation, Game Development, and AI Integration."
      />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Features</span>
          <h1 className="text-4xl md:text-6xl font-bold">What I Do</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 pb-12 rounded-2xl shadow-card bg-bg-base hover:bg-white/40 group cursor-default transition-all"
            >
              <s.icon size={40} className="text-brand mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">{s.desc}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-brand font-bold uppercase text-sm tracking-widest">
                {s.cta} <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
