import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollPosition } from '@/hooks';
import { scrollToSection } from '@/utils';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const navigation = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Doctors', href: 'doctors' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-medical-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>24/7 Emergency Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>123 Healthcare Ave, Medical City</span>
              </div>
            </div>
            <div className="text-medical-100">
              Excellence in Healthcare Since 1995
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-medical-600 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">St. Mary's</h1>
                <p className="text-sm text-slate-600">Medical Center</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-700 hover:text-medical-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex">
                Book Appointment
              </Button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-medical-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-effect border-t border-white/20"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-slate-700 hover:text-medical-600 font-medium py-2 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button className="mt-4 justify-center">
                    Book Appointment
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};