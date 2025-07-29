import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, User, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  condition: string;
  content: string;
  rating: number;
  date: string;
  department: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      age: 45,
      condition: 'Cardiac Surgery',
      content: 'The cardiac team at St. Mary\'s saved my life. From the initial consultation to post-surgery care, every staff member was professional, caring, and highly skilled. I couldn\'t have asked for better treatment.',
      rating: 5,
      date: '2023-12-15',
      department: 'Cardiology'
    },
    {
      id: '2',
      name: 'Robert Chen',
      age: 38,
      condition: 'Orthopedic Surgery',
      content: 'After my sports injury, I thought my running days were over. Thanks to Dr. Kim and the orthopedic team, I\'m back to competing in marathons. The rehabilitation program was exceptional.',
      rating: 5,
      date: '2023-11-28',
      department: 'Orthopedics'
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      age: 32,
      condition: 'Pediatric Care',
      content: 'Dr. Rodriguez and her team made my daughter\'s hospital stay as comfortable as possible. They explained everything clearly and treated her with such kindness. We felt truly cared for.',
      rating: 5,
      date: '2023-12-02',
      department: 'Pediatrics'
    },
    {
      id: '4',
      name: 'James Wilson',
      age: 67,
      condition: 'Neurology Treatment',
      content: 'The neurology department provided outstanding care during my stroke recovery. The staff\'s expertise and dedication helped me regain my independence. I\'m forever grateful.',
      rating: 5,
      date: '2023-10-20',
      department: 'Neurology'
    },
    {
      id: '5',
      name: 'Emily Johnson',
      age: 29,
      condition: 'Emergency Care',
      content: 'The emergency department staff were incredible during a scary situation. They were fast, professional, and kept me informed every step of the way. True heroes.',
      rating: 5,
      date: '2023-12-08',
      department: 'Emergency'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section id="testimonials" background="gradient">
      <SectionHeader
        subtitle="Patient Stories"
        title="What Our Patients Say"
        description="Read real stories from patients whose lives have been touched by our compassionate care and medical expertise."
      />

      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-medical-100 to-primary-100 rounded-full flex items-center justify-center">
                  <Quote size={32} className="text-medical-600" />
                </div>

                <CardContent className="p-12 pt-20">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={24}
                        className={`${
                          index < currentTestimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-slate-300'
                        } mx-1`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed text-center mb-8 font-medium">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-medical-600 to-primary-600 rounded-full flex items-center justify-center mr-4">
                        <User size={24} className="text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-semibold text-slate-900">
                          {currentTestimonial.name}, {currentTestimonial.age}
                        </h4>
                        <p className="text-medical-600 font-medium">{currentTestimonial.condition}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-xs font-medium">
                        {currentTestimonial.department}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-medical-600 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-medical-600 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-medical-600 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate-600 hover:text-medical-600 transition-colors"
          >
            {isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          </button>
        </div>
      </div>

      {/* Patient Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { value: '98%', label: 'Patient Satisfaction', description: 'Based on 5,000+ reviews' },
          { value: '4.9/5', label: 'Average Rating', description: 'Across all departments' },
          { value: '24/7', label: 'Patient Support', description: 'Always here when you need us' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            className="text-center p-6 glass-effect rounded-2xl"
          >
            <div className="text-4xl font-bold text-medical-600 mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
            <div className="text-sm text-slate-600">{stat.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};