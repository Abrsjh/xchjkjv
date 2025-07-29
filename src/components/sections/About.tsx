import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Target,
  Eye,
  Zap
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';

export const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Happy Patients', color: 'from-blue-500 to-blue-600' },
    { icon: Award, value: '50+', label: 'Awards Won', color: 'from-yellow-500 to-yellow-600' },
    { icon: Heart, value: '15,000+', label: 'Surgeries', color: 'from-red-500 to-red-600' },
    { icon: Clock, value: '24/7', label: 'Emergency Care', color: 'from-green-500 to-green-600' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey.'
    },
    {
      icon: Target,
      title: 'Clinical Excellence',
      description: 'Our commitment to the highest medical standards ensures the best possible outcomes for our patients.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication, providing clear information about treatments, costs, and outcomes.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative treatments to provide the most advanced care available.'
    }
  ];

  const milestones = [
    { year: '1995', event: 'St. Mary\'s Medical Center established', description: 'Founded with a mission to provide exceptional healthcare to our community.' },
    { year: '2005', event: 'First cardiac surgery program', description: 'Launched our comprehensive cardiac care department with state-of-the-art facilities.' },
    { year: '2010', event: 'Achieved Magnet designation', description: 'Recognized for nursing excellence and quality patient care.' },
    { year: '2015', event: 'Robotic surgery program launched', description: 'Introduced minimally invasive robotic surgical procedures.' },
    { year: '2020', event: 'COVID-19 response excellence', description: 'Recognized for outstanding pandemic response and patient safety protocols.' },
    { year: '2023', event: 'AI-powered diagnostics', description: 'Implemented artificial intelligence to enhance diagnostic accuracy and speed.' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section id="about" background="gradient">
      <SectionHeader
        subtitle="About Us"
        title="Excellence in Healthcare Since 1995"
        description="For nearly three decades, St. Mary's Medical Center has been at the forefront of healthcare innovation, providing compassionate care and exceptional medical services to our community."
      />

      {/* Hospital Image & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Hospital Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-medical-100 to-primary-100 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-medical-300">
                <Shield size={120} className="mx-auto mb-4" />
                <p className="text-2xl font-semibold">St. Mary's Medical Center</p>
                <p className="text-lg">Excellence in Healthcare</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-medical-400 to-primary-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-success-400 to-medical-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Leading Healthcare Provider
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              St. Mary's Medical Center has been a cornerstone of healthcare excellence in our community for over 25 years. 
              We combine advanced medical technology with compassionate care to deliver the best possible outcomes for our patients.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of board-certified physicians, skilled nurses, and dedicated healthcare professionals work together 
              to provide comprehensive medical services across multiple specialties, ensuring that you receive the highest quality care close to home.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            {[
              'State-of-the-art medical equipment and facilities',
              'Board-certified physicians across all specialties',
              '24/7 emergency care and trauma services',
              'Comprehensive diagnostic and imaging services',
              'Patient-centered approach to healthcare delivery'
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center"
              >
                <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Values */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape the exceptional care we provide to our patients and community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants}>
              <Card className="h-full p-8 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-medical-600 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Timeline */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the key milestones that have shaped St. Mary's Medical Center into the leading healthcare institution it is today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-medical-200 via-primary-300 to-medical-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-6 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-medical-600 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{milestone.event}</h4>
                      <p className="text-slate-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline marker */}
                <div className="relative flex items-center justify-center w-4 h-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-medical-600 to-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};