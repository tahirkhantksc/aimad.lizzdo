import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Send, Mail, MapPin, Clock, Monitor, Hash, Globe, Link2, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Contact | Aimad"
        description="Get in touch with Aimad for freelance work in Full Stack Development, Cybersecurity, 3D Art, and Game Development."
      />
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center mb-16">
          <span className="text-brand text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Contact</span>
          <h1 className="text-4xl md:text-6xl font-bold">Hire Me</h1>
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
                <p className="text-text-muted mb-6 uppercase tracking-widest text-sm">Multidisciplinary Creator</p>
                <p className="text-text-muted mb-8 leading-relaxed">
                  I am available for freelance work. Connect with me through any of the channels below.
                </p>
                <div className="space-y-4 text-sm font-medium mb-8">
                  <p className="flex items-center gap-3"><Mail size={16} className="text-brand" /> aimad@lizzdo.com</p>
                  <p className="flex items-center gap-3"><MapPin size={16} className="text-brand" /> Dir Lower, Pakistan</p>
                  <p className="flex items-center gap-3"><Clock size={16} className="text-brand" /> Available for Hire</p>
                </div>

                <div className="pt-8 border-t border-black/5">
                  <p className="text-xs uppercase tracking-widest font-bold text-text-muted mb-4">Connect with me</p>
                  <div className="flex flex-col gap-3 text-sm font-medium text-text-muted">
                    <a href="https://github.com/aimadulislam" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand transition-colors"><ExternalLink size={16} /> GitHub</a>
                    <a href="https://linkedin.com/in/aimadulislam" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand transition-colors"><Link2 size={16} /> LinkedIn</a>
                    <a href="https://www.behance.net/aimadulislam" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand transition-colors"><Monitor size={16} /> Behance</a>
                    <a href="https://instagram.com/aimadulislam" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand transition-colors"><Globe size={16} /> Instagram</a>
                    <p className="flex items-center gap-3"><Hash size={16} /> Discord: @aimadulislam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form action="https://formsubmit.co/aimad@lizzdo.com" method="POST" className="lg:col-span-2 p-8 md:p-12 rounded-2xl shadow-card bg-bg-base space-y-8">
            <input type="hidden" name="_next" value="https://aimad.lizzdo.com/" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Your Name</label>
                <input type="text" name="name" required className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Phone Number</label>
                <input type="text" name="phone" className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Email</label>
              <input type="email" name="email" required className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-bold text-text-muted">Message</label>
              <textarea name="message" required rows={6} className="w-full bg-bg-base inner-shadow rounded-lg p-4 outline-none border-2 border-transparent focus:border-brand transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-5 rounded-xl shadow-btn shadow-btn-hover text-brand font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
