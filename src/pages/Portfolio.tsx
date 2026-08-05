import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ExternalLink, Box, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from CMS
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    { 
      title: "Full Stack E-Commerce Web Application", 
      description: "A comprehensive e-commerce platform built with modern web technologies, featuring seamless payment integration and real-time inventory management.",
      category: "Web Development", 
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      software: ["VS Code", "Figma"],
      client: "Business Client",
      status: "Completed",
      date: "2024-06-15",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      gallery: ["https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"],
      video: "",
      liveDemo: "https://example.com",
      github: "https://github.com/aimadulislam/project",
      tags: ["E-Commerce", "Full Stack", "React"],
      seoMetadata: { title: "Full Stack E-Commerce Web Application", description: "E-Commerce platform built with React and Node.js." }
    },
    { 
      title: "Enterprise Cybersecurity Dashboard & Audit", 
      description: "A centralized dashboard for monitoring network traffic, executing vulnerability assessments, and generating automated security audit reports.",
      category: "Cybersecurity", 
      technologies: ["Python", "React", "Linux", "OWASP", "Nmap"],
      software: ["Kali Linux", "Burp Suite"],
      client: "Enterprise Client",
      status: "Completed",
      date: "2024-05-28",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      gallery: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"],
      video: "",
      liveDemo: "",
      github: "",
      tags: ["Security", "Dashboard", "Audit"],
      seoMetadata: { title: "Enterprise Cybersecurity Dashboard", description: "Security monitoring and auditing dashboard." }
    },
    { 
      title: "AI-Powered Workflow Automation", 
      description: "Custom AI tool integration designed to automate repetitive business workflows, utilizing advanced prompt engineering and LLM APIs.",
      category: "AI & Automation", 
      technologies: ["Python", "OpenAI API", "Node.js"],
      software: ["VS Code"],
      client: "Tech Startup",
      status: "Completed",
      date: "2024-05-10",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      gallery: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"],
      video: "",
      liveDemo: "https://example.com",
      github: "https://github.com/aimadulislam/ai-automation",
      tags: ["AI", "Automation", "Workflow"],
      seoMetadata: { title: "AI Workflow Automation", description: "AI-powered tool for business automation." }
    },
    { 
      title: "Stylized 3D Character & Rigging", 
      description: "A highly stylized 3D character modeled, rigged, and animated for a real-time game engine, featuring optimized PBR materials.",
      category: "3D Art", 
      technologies: ["3D Modeling", "Rigging", "PBR Materials"],
      software: ["Blender", "Substance Painter"],
      client: "Indie Game Studio",
      status: "Completed",
      date: "2024-04-22",
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80",
      gallery: ["https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80"],
      video: "",
      liveDemo: "",
      github: "",
      tags: ["3D Art", "Character Design", "Rigging"],
      seoMetadata: { title: "Stylized 3D Character", description: "Game-ready 3D character modeling and rigging." }
    },
    { 
      title: "Immersive Roblox Game Environment", 
      description: "A detailed and optimized Roblox game environment featuring custom UGC assets, interactive elements, and atmospheric lighting.",
      category: "Game Dev", 
      technologies: ["Luau", "Game Optimization"],
      software: ["Roblox Studio", "Blender"],
      client: "Personal Project",
      status: "Completed",
      date: "2024-04-15",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      gallery: ["https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"],
      video: "",
      liveDemo: "https://roblox.com",
      github: "",
      tags: ["Roblox", "Environment", "UGC"],
      seoMetadata: { title: "Roblox Game Environment", description: "Custom environment for Roblox game." }
    },
    { 
      title: "Fintech Platform UI/UX Branding", 
      description: "A complete redesign of a fintech application, focusing on modern UI/UX principles, brand identity, and intuitive user navigation.",
      category: "Design", 
      technologies: ["Responsive Design", "Prototyping"],
      software: ["Figma", "Adobe Illustrator", "Photoshop"],
      client: "Financial Services",
      status: "Completed",
      date: "2024-03-20",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
      video: "",
      liveDemo: "https://behance.net/aimadulislam",
      github: "",
      tags: ["UI/UX", "Branding", "Fintech"],
      seoMetadata: { title: "Fintech Platform Design", description: "UI/UX redesign for a financial application." }
    },
  ];

  return (
    <div className="pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Portfolio | Aimad"
        description="Explore Aimad's creative work including Full Stack Web Applications, Cybersecurity Dashboards, 3D Art, Game Environments, and UI/UX Design."
      />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold">My Creative Work</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            [...Array(6)].map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="rounded-3xl shadow-card bg-bg-base overflow-hidden flex flex-col p-6 animate-pulse"
              >
                <div className="relative aspect-video rounded-2xl bg-black/10 dark:bg-white/10 mb-6"></div>
                <div className="flex-1">
                  <div className="h-6 bg-black/10 dark:bg-white/10 rounded-md w-3/4 mb-4"></div>
                  <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-1/2 mb-6"></div>
                </div>
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-1/3 mt-auto"></div>
              </div>
            ))
          ) : (
            projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-3xl shadow-card bg-bg-base overflow-hidden flex flex-col group p-6"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                  Published on {new Date(project.date).toLocaleDateString()}
                </p>
              </div>
              <a 
                href="#"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-main group-hover:text-brand"
              >
                View Project <ExternalLink size={14} />
              </a>
            </motion.div>
          )))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.behance.net/aimadulislam"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 shadow-btn shadow-btn-hover px-10 py-5 rounded-xl font-bold text-brand uppercase tracking-widest"
          >
            See More on Behance <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
