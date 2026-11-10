import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Certifications, Certification } from '../components/Certifications';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const education = [
    { school: "University of Peshawar", degree: "BSc in Computer Science", period: "Pakistan", desc: "Completed comprehensive computer science degree." },
    { school: "DigiSkills.pk", degree: "3D Animation & Digital Art", period: "Certificate", desc: "Specialized training in CGI and character animation." },
    { school: "Intermediate", degree: "Pre-Engineering in TKSc", period: "Dir Lower", desc: "Foundational engineering studies." },
  ];

  const experience = [
    { company: "Lizzdo", role: "Co-Founder & Full Stack Developer", period: "2023 - Present", desc: "Leading brand strategy, developing secure web applications, and managing AI automation pipelines." },
    { company: "Freelance", role: "Cybersecurity & Web Consultant", period: "2021 - Present", desc: "Performing security audits, penetration testing, and delivering full-stack solutions for global clients." },
    { company: "Independent Studio", role: "3D & Technical Artist", period: "2022 - Present", desc: "Creating high-quality assets and environments for Unity, Unreal Engine, and Roblox." },
  ];

  const certifications = [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "2024", id: "EC-12345678", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&q=80", desc: "Comprehensive training in network security and penetration testing.", link: "#" },
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2023", id: "AWS-98765432", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80", desc: "Expertise in designing scalable cloud architectures and deployment strategies.", link: "#" },
    { name: "Advanced 3D Modeling & Animation", issuer: "DigiSkills", date: "2022", id: "DS-11223344", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop&q=80", desc: "Specialized certification covering industry-standard 3D pipelines and texturing.", link: "#" }
  ];

  return (
    <div className="pb-24 px-4 md:px-8 max-w-7xl mx-auto bg-bg-base min-h-screen">
      <SEO 
        title="About & Resume | Aimad"
        description="Learn about Aimad's professional profile, education, certifications, and experience in Full Stack Development, Cybersecurity, 3D Art, and Game Development."
        ogType="profile"
      />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">About Me</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Professional Profile</h1>
          <div className="text-lg text-text-muted leading-relaxed max-w-4xl mx-auto text-left space-y-6">
            <p>
              I am Aimad, a multidisciplinary technology professional, Digital Creator, and the Co-Founder of Lizzdo. My expertise spans across Full Stack Development, Cybersecurity, AI Automation, 3D Art, and Game Development.
            </p>
            <p>
              As a Full Stack Developer and Cybersecurity Professional, I architect secure, high-performance web applications and conduct comprehensive vulnerability assessments. My proficiency in AI Automation Development enables me to integrate cutting-edge AI tools and optimize modern workflows for maximum efficiency.
            </p>
            <p>
              In the creative realm, I am a 3D Artist, 3D Animator, and Technical Artist, crafting immersive environments and assets as a Roblox, Unity & Unreal Engine Developer. Complementing my technical skills, I am also a Graphic Designer and UI/UX Designer, dedicated to delivering visually stunning and intuitive digital experiences.
            </p>
          </div>
        </div>

        <div className="text-center mb-16 mt-24">
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
            <div className="space-y-12 border-l-4 border-black/5 pl-8 ml-6">
              {education.map((item, i) => (
                <div key={i} className="relative group p-8 rounded-2xl shadow-card bg-bg-base hover:bg-white/40 transition-all">
                  <div className="absolute -left-12 top-10 w-8 h-1 bg-black/10" />
                  <div className="absolute -left-[54px] top-8 w-4 h-4 rounded-full border-4 border-brand/20 bg-bg-base group-hover:border-brand group-hover:bg-brand transition-all" />
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-brand transition-colors">{item.school}</h4>
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
            <div className="space-y-12 border-l-4 border-black/5 pl-8 ml-6">
              {experience.map((item, i) => (
                <div key={i} className="relative group p-8 rounded-2xl shadow-card bg-bg-base hover:bg-white/40 transition-all">
                  <div className="absolute -left-12 top-10 w-8 h-1 bg-black/10" />
                  <div className="absolute -left-[54px] top-8 w-4 h-4 rounded-full border-4 border-brand/20 bg-bg-base group-hover:border-brand group-hover:bg-brand transition-all" />
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-brand transition-colors">{item.company}</h4>
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

        {/* Certifications */}
        <Certifications certifications={certifications} />
      </motion.div>
    </div>
  );
}
