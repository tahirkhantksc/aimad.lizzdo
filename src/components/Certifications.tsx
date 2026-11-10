import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  id: string;
  img: string;
  desc: string;
  link: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="pt-24">
      <div className="flex items-center gap-4 mb-12 justify-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn text-brand">
          <Award size={24} />
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-center">Certifications</h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="rounded-3xl shadow-card bg-bg-base overflow-hidden flex flex-col group p-6 hover:bg-white/40 transition-all"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
              <img 
                src={cert.img} 
                alt={cert.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold group-hover:text-brand transition-colors">
                  {cert.name}
                </h4>
              </div>
              <p className="text-sm font-bold text-text-muted mb-2 uppercase tracking-widest">
                {cert.issuer}
              </p>
              <p className="text-xs text-text-muted mb-4">
                Issued: {cert.date} | ID: {cert.id}
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {cert.desc}
              </p>
            </div>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-main group-hover:text-brand transition-colors"
            >
              Verify Credential <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
