import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export default function Skills() {
  const categories = [
    {
      title: "Programming & Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "Python", "PHP", "SQL", "MongoDB", "REST APIs", "Git", "GitHub", "GitHub Pages", "Cloudflare", "Responsive Web Design", "Performance Optimization", "SEO"]
    },
    {
      title: "Cybersecurity",
      skills: ["Linux", "Kali Linux", "Network Security", "Web Security", "Penetration Testing", "OWASP", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "OpenVAS", "OSINT", "Digital Forensics", "Vulnerability Assessment"]
    },
    {
      title: "3D & Game Development",
      skills: ["Blender", "Roblox Studio", "Unity", "Unreal Engine", "3D Modeling", "Character Modeling", "Environment Modeling", "Rigging", "Skinning", "Weight Painting", "Animation", "UV Mapping", "Retopology", "Texturing", "PBR Materials", "FBX Pipeline", "Game Asset Optimization"]
    },
    {
      title: "Design",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "UI Design", "UX Design", "Brand Identity", "Graphic Design"]
    },
    {
      title: "AI & Automation",
      skills: ["AI Workflow Automation", "AI Tools Integration", "Prompt Engineering", "AI-Assisted Development"]
    }
  ];

  return (
    <div className="pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Skills | Aimad"
        description="Explore Aimad's arsenal of skills in Programming, Web Development, Cybersecurity, 3D & Game Development, Design, and AI Automation."
      />
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">My Arsenal</span>
          <h1 className="text-4xl md:text-6xl font-bold">Skills</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="shadow-card p-8 rounded-2xl bg-bg-base">
              <h3 className="text-2xl font-bold mb-6 text-brand">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-lg shadow-btn text-sm font-medium hover:text-brand transition-colors cursor-default text-text-main">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
