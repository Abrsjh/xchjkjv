import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Patient Portal', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News & Events', href: '#' }
  ];

  const services = [
    { name: 'Emergency Care', href: '#' },
    { name: 'Cardiology', href: '#' },
    { name: 'Pediatrics', href: '#' },
    { name: 'Orthopedics', href: '#' },
    { name: 'Radiology', href: '#' },
    { name: 'Laboratory', href: '#' }
  ];

  const contactInfo = [
    { icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@stmarysmedical.com', href: 'mailto:info@stmarysmedical.com' },
    { icon: MapPin, text: '123 Healthcare Ave, Medical City, MC 12345', href: '#' },
    { icon: Clock, text: '24/7 Emergency Services', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-medical-600 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">St. Mary's</h3>
                <p className="text-slate-400">Medical Center</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Providing exceptional healthcare services with compassion, innovation, and excellence since 1995. Your health and well-being are our top priorities.
            </p>
            <div className="flex items-center space-x-2 text-medical-400">
              <Heart size={16} />
              <span className="text-sm">Caring for our community</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-medical-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-medical-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-300 hover:text-medical-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-medical-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-start space-x-3 text-slate-300 hover:text-medical-400 transition-colors duration-200 group"
                  >
                    <info.icon size={18} className="mt-0.5 group-hover:text-medical-400" />
                    <span className="text-sm leading-relaxed">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-slate-400">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-medical-600 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-slate-800 py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} St. Mary's Medical Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-medical-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-medical-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-medical-400 transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};