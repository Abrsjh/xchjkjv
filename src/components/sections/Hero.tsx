import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  Award,
  ChevronDown,
  Heart,
  Stethoscope,
  Activity
} from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToSection } from '@/utils';

export const Hero: React.FC = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Patients Served' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Stethoscope, value: '100+', label: 'Expert Doctors' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' }
  ];

  const floatingIcons = [
    { icon: Heart, delay: 0, x: 20, y: 30 },
    { icon: Stethoscope, delay: 1, x: -30, y: 50 },
    { icon: Activity, delay: 2, x: 40, y: -20 },
    { icon: Shield, delay: 1.5, x: -50, y: -30 }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-50 via-white to-primary-50"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-medical-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-soft"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-success-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating medical icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            x: [0, item.x, 0],
            y: [0, item.y, 0]
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="absolute hidden lg:block"
          style={{
            left: `${10 + (index * 20)}%`,
            top: `${20 + (index * 15)}%`
          }}
        >
          <item.icon size={48} className="text-medical-200" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-medical-100 to-primary-100 rounded-full text-medical-700 font-medium mb-6"
            >
              <Shield size={16} className="mr-2" />
              Excellence in Healthcare Since 1995
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Your Health,{' '}
              <span className="text-gradient">Our Priority</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
            >
              Experience world-class medical care with our state-of-the-art facilities, 
              expert physicians, and compassionate staff dedicated to your well-being.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button size="lg" className="group">
                Book Appointment
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-600 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative glass-effect rounded-2xl p-8 shadow-2xl">
              {/* Doctor consultation illustration */}
              <div className="aspect-square bg-gradient-to-br from-medical-100 to-primary-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="text-medical-400"
                >
                  <Stethoscope size={120} />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Heart size={24} className="text-red-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-6 left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Activity size={24} className="text-green-500" />
                </motion.div>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {['24/7 Care', 'Certified', 'Trusted'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                    className="text-center p-3 bg-white/50 rounded-lg"
                  >
                    <div className="text-sm font-semibold text-medical-700">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-success-400 to-success-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary-400 to-medical-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-600 hover:text-medical-600 transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};