import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X } from 'lucide-react';

const navItems = ['about', 'experience', 'projects', 'skills', 'contact'];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find the current section
      const sections = navItems.map(item => {
        const element = document.getElementById(item);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item,
            offset: Math.abs(rect.top)
          };
        }
        return { id: item, offset: Infinity };
      });

      const currentSection = sections.reduce((acc, curr) => 
        curr.offset < acc.offset ? curr : acc
      );

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-lg shadow-white/5 dark:bg-white-900/95 dark:shadow-white800/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a
          href='/'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            MR
          </motion.a>
          

          {/* Desktop Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="hidden md:flex gap-8"
          >
            
            {navItems.map((item) => (
              <motion.button
                key={item}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-primary transition-colors relative ${
                  activeSection === item ? 'text-primary' : ''
                }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ${
                  activeSection === item ? 'text-primary' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}