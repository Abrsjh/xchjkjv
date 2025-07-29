import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar,
  Star,
  Award,
  GraduationCap,
  Clock,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Heart,
  Brain,
  Baby,
  Bone,
  LucideIcon
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  title: string;
  image: string;
  experience: string;
  education: string[];
  specializations: string[];
  rating: number;
  patients: string;
  bio: string;
  awards: string[];
  schedule: {
    available: boolean;
    nextSlot: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  specialtyIcon: LucideIcon;
}

export const Doctors: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      title: 'Chief of Cardiology',
      image: '/api/placeholder/300/400',
      experience: '15 years',
      education: ['MD - Harvard Medical School', 'Residency - Johns Hopkins'],
      specializations: ['Interventional Cardiology', 'Heart Surgery', 'Cardiac Imaging'],
      rating: 4.9,
      patients: '2,500+',
      bio: 'Dr. Johnson is a renowned cardiologist with expertise in complex cardiac procedures and minimally invasive heart surgery.',
      awards: ['Best Doctor Award 2023', 'Excellence in Patient Care'],
      schedule: {
        available: true,
        nextSlot: 'Tomorrow 2:00 PM'
      },
      contact: {
        phone: '(555) 123-4567',
        email: 'sarah.johnson@stmarys.com'
      },
      specialtyIcon: Heart
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      title: 'Head of Neurosurgery',
      image: '/api/placeholder/300/400',
      experience: '12 years',
      education: ['MD - Stanford University', 'Fellowship - Mayo Clinic'],
      specializations: ['Brain Surgery', 'Spine Surgery', 'Stroke Treatment'],
      rating: 4.8,
      patients: '1,800+',
      bio: 'Dr. Chen specializes in complex neurosurgical procedures and has pioneered several minimally invasive techniques.',
      awards: ['Neurosurgeon of the Year', 'Innovation in Medicine Award'],
      schedule: {
        available: true,
        nextSlot: 'Friday 10:00 AM'
      },
      contact: {
        phone: '(555) 234-5678',
        email: 'michael.chen@stmarys.com'
      },
      specialtyIcon: Brain
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      title: 'Pediatric Specialist',
      image: '/api/placeholder/300/400',
      experience: '10 years',
      education: ['MD - UCLA', 'Pediatric Residency - Children\'s Hospital'],
      specializations: ['Child Development', 'Pediatric Emergency', 'Adolescent Medicine'],
      rating: 4.9,
      patients: '3,200+',
      bio: 'Dr. Rodriguez is passionate about providing comprehensive care for children and adolescents in a comfortable environment.',
      awards: ['Pediatrician of the Year', 'Community Service Award'],
      schedule: {
        available: false,
        nextSlot: 'Next week'
      },
      contact: {
        phone: '(555) 345-6789',
        email: 'emily.rodriguez@stmarys.com'
      },
      specialtyIcon: Baby
    },
    {
      id: '4',
      name: 'Dr. Robert Kim',
      specialty: 'Orthopedics',
      title: 'Orthopedic Surgeon',
      image: '/api/placeholder/300/400',
      experience: '18 years',
      education: ['MD - Johns Hopkins', 'Fellowship - Hospital for Special Surgery'],
      specializations: ['Joint Replacement', 'Sports Medicine', 'Trauma Surgery'],
      rating: 4.7,
      patients: '2,100+',
      bio: 'Dr. Kim is an expert in joint replacement surgery and sports medicine, helping patients return to active lifestyles.',
      awards: ['Excellence in Surgery', 'Patient Choice Award'],
      schedule: {
        available: true,
        nextSlot: 'Thursday 3:30 PM'
      },
      contact: {
        phone: '(555) 456-7890',
        email: 'robert.kim@stmarys.com'
      },
      specialtyIcon: Bone
    }
  ];

  const doctorsPerPage = 3;
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleDoctors = doctors.slice(
    currentIndex * doctorsPerPage,
    (currentIndex + 1) * doctorsPerPage
  );

  return (
    <Section id="doctors" background="white">
      <SectionHeader
        subtitle="Our Medical Team"
        title="Meet Our Expert Doctors"
        description="Our team of board-certified physicians brings decades of experience and cutting-edge expertise to provide you with exceptional healthcare."
      />

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mb-8 space-x-4">
        <Button
          variant="ghost"
          onClick={prevSlide}
          className="p-3 rounded-full"
          disabled={totalPages <= 1}
        >
          <ChevronLeft size={20} />
        </Button>
        
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-medical-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          onClick={nextSlide}
          className="p-3 rounded-full"
          disabled={totalPages <= 1}
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      {/* Doctors Grid */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {visibleDoctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card hover className="h-full group overflow-hidden">
              {/* Doctor Image */}
              <div className="relative h-64 bg-gradient-to-br from-medical-100 to-primary-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <doctor.specialtyIcon size={120} className="text-medical-300" />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    doctor.schedule.available 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {doctor.schedule.available ? 'Available' : 'Busy'}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
                  <Star size={14} className="text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-medical-600 font-medium">{doctor.title}</p>
                    <p className="text-slate-600 text-sm">{doctor.specialty}</p>
                  </div>
                  <div className="text-right text-sm text-slate-600">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {doctor.experience}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-slate-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{doctor.patients}</div>
                    <div className="text-xs text-slate-600">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{doctor.awards.length}</div>
                    <div className="text-xs text-slate-600">Awards Won</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {doctor.bio}
                </p>

                {/* Next Available */}
                {doctor.schedule.available && (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center text-green-700">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">Next available: {doctor.schedule.nextSlot}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Button
                    className="w-full"
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    View Profile
                  </Button>
                  {doctor.schedule.available && (
                    <Button variant="secondary" className="w-full">
                      Book Appointment
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Doctor Detail Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-medical-100 to-primary-100 rounded-2xl flex items-center justify-center">
                      <selectedDoctor.specialtyIcon size={40} className="text-medical-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{selectedDoctor.name}</h2>
                      <p className="text-medical-600 font-medium text-lg">{selectedDoctor.title}</p>
                      <div className="flex items-center mt-2">
                        <Star size={16} className="text-yellow-500 fill-current mr-1" />
                        <span className="font-medium mr-4">{selectedDoctor.rating}</span>
                        <span className="text-slate-600">{selectedDoctor.patients} patients treated</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="text-slate-400 hover:text-slate-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Bio */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">About</h3>
                      <p className="text-slate-600 leading-relaxed">{selectedDoctor.bio}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                        <GraduationCap size={20} className="mr-2" />
                        Education
                      </h3>
                      <ul className="space-y-2">
                        {selectedDoctor.education.map((edu, index) => (
                          <li key={index} className="flex items-center text-slate-600">
                            <div className="w-2 h-2 bg-medical-400 rounded-full mr-3" />
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Awards */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                        <Award size={20} className="mr-2" />
                        Awards & Recognition
                      </h3>
                      <ul className="space-y-2">
                        {selectedDoctor.awards.map((award, index) => (
                          <li key={index} className="flex items-center text-slate-600">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Specializations */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDoctor.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-sm font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="p-6 bg-gradient-to-r from-medical-50 to-primary-50 rounded-2xl">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Schedule Appointment</h3>
                      {selectedDoctor.schedule.available ? (
                        <div>
                          <div className="flex items-center text-green-700 mb-4">
                            <Calendar size={20} className="mr-2" />
                            <span>Next available: {selectedDoctor.schedule.nextSlot}</span>
                          </div>
                          <Button className="w-full mb-3">Book Appointment</Button>
                        </div>
                      ) : (
                        <div className="text-red-600 mb-4">Currently not accepting new appointments</div>
                      )}
                    </div>

                    {/* Contact */}
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone size={18} className="text-medical-600 mr-3" />
                          <span className="text-slate-700">{selectedDoctor.contact.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail size={18} className="text-medical-600 mr-3" />
                          <span className="text-slate-700">{selectedDoctor.contact.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};