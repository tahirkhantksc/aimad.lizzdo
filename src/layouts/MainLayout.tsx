import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative z-0 bg-bg-base text-text-main">
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4",
        scrolled ? "bg-bg-base/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-icon border-2 border-brand/10">
              <img src="https://postimg.cc/hXgLLVMP" alt="Aimad" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-text-main group-hover:text-brand transition-colors">AIMAD</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand",
                  location.pathname === link.path ? "text-brand" : "text-text-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="shadow-btn shadow-btn-hover px-6 py-2.5 rounded-lg text-sm font-bold text-brand uppercase tracking-widest"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden shadow-btn p-2 rounded-lg text-brand z-50"
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
              className="fixed inset-0 top-20 bg-bg-base shadow-xl md:hidden py-8 px-4 flex flex-col gap-4 items-center z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "text-lg font-medium hover:text-brand",
                    location.pathname === link.path ? "text-brand" : "text-text-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="w-full text-center shadow-btn inner-shadow py-4 mt-4 rounded-xl text-brand font-bold uppercase"
              >
                Contact Me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 w-full relative z-10 pt-32">
        {children}
      </main>

      <footer className="py-20 px-4 md:px-8 text-center border-t border-black/5 bg-bg-base mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-icon border-2 border-brand/20 p-1">
            <img src="https://postimg.cc/hXgLLVMP" alt="Aimad" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-text-main">AIMAD</h2>
          
          <div className="flex gap-6 mb-8">
            <a href="https://github.com/aimadulislam" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-muted hover:text-brand transition-all text-xs font-bold">
              GH
            </a>
            <a href="https://linkedin.com/in/aimadulislam" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-muted hover:text-brand transition-all text-xs font-bold">
              IN
            </a>
            <a href="https://x.com/aimadulislam" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-muted hover:text-brand transition-all text-xs font-bold">
              X
            </a>
            <a href="mailto:aimad@lizzdo.com" className="w-12 h-12 flex items-center justify-center rounded-lg shadow-btn shadow-btn-hover text-text-muted hover:text-brand transition-all">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-sm text-text-muted font-medium">
            © 2024. All rights reserved by Aimad | Creative Platform: <a href="https://lizzdo.com" className="text-brand hover:underline">Lizzdo.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
