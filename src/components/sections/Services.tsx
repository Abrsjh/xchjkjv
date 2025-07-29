import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye,
  Shield,
  Activity,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  LucideIcon
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';

interface ServiceData {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  stats: {
    label: string;
    value: string;
  };
  color: string;
}

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services: ServiceData[] = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      icon: Heart,
      features: [
        'Cardiac catheterization',
        'Echocardiography',
        'Stress testing',
        'Arrhythmia management',
        'Heart surgery'
      ],
      stats: { label: 'Success Rate', value: '98%' },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'neurology',
      name: 'Neurology',
      description: 'Expert care for brain, spine, and nervous system disorders.',
      icon: Brain,
      features: [
        'Brain imaging (MRI/CT)',
        'Stroke treatment',
        'Epilepsy management',
        'Neurosurgery',
        'Rehabilitation therapy'
      ],
      stats: { label: 'Specialists', value: '15+' },
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
      icon: Baby,
      features: [
        'Well-child visits',
        'Immunizations',
        'Growth monitoring',
        'Pediatric surgery',
        'Emergency care'
      ],
      stats: { label: 'Young Patients', value: '5000+' },
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      description: 'Advanced treatment for bones, joints, and musculoskeletal conditions.',
      icon: Bone,
      features: [
        'Joint replacement',
        'Sports medicine',
        'Trauma surgery',
        'Arthroscopy',
        'Physical therapy'
      ],
      stats: { label: 'Surgeries/Year', value: '2000+' },
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      description: 'Complete eye care from routine exams to complex surgeries.',
      icon: Eye,
      features: [
        'Cataract surgery',
        'Retinal treatment',
        'LASIK procedures',
        'Glaucoma management',
        'Corneal transplants'
      ],
      stats: { label: 'Vision Restored', value: '1500+' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'emergency',
      name: 'Emergency Care',
      description: '24/7 emergency services with rapid response and expert care.',
      icon: Activity,
      features: [
        'Trauma center',
        'Critical care',
        'Emergency surgery',
        'Ambulance services',
        'Rapid diagnostics'
      ],
      stats: { label: 'Response Time', value: '<5 min' },
      color: 'from-medical-500 to-primary-500'
    }
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
    <Section id="services" background="gradient">
      <SectionHeader
        subtitle="Our Services"
        title="Comprehensive Healthcare Solutions"
        description="From preventive care to complex procedures, we offer a full spectrum of medical services with state-of-the-art technology and expert physicians."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Card
              hover
              className="h-full group relative overflow-hidden"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900">{service.stats.value}</div>
                    <div className="text-sm text-slate-600">{service.stats.label}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        Key Services
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-medical-400 rounded-full mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button 
                  variant="ghost" 
                  className="w-full justify-center group-hover:bg-medical-50 group-hover:text-medical-700"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: Shield,
            title: 'Insurance Accepted',
            description: 'We accept most major insurance plans and offer flexible payment options.'
          },
          {
            icon: Clock,
            title: '24/7 Availability',
            description: 'Round-the-clock emergency services and urgent care when you need it most.'
          },
          {
            icon: Users,
            title: 'Expert Team',
            description: 'Board-certified physicians and skilled healthcare professionals.'
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            className="text-center p-6 rounded-2xl glass-effect"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-medical-600 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};