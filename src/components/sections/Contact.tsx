import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageCircle,
  Stethoscope,
  Car,
  Accessibility
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency',
      value: '911',
      description: 'For life-threatening emergencies',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      title: 'Main Line',
      value: '(555) 123-4567',
      description: 'General inquiries and appointments',
      color: 'from-medical-500 to-medical-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@stmarysmedical.com',
      description: 'Non-urgent inquiries',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Healthcare Ave',
      description: 'Medical City, MC 12345',
      color: 'from-green-500 to-green-600'
    }
  ];

  const departmentHours = [
    { department: 'Emergency Department', hours: '24/7 - Always Open', urgent: true },
    { department: 'General Medicine', hours: 'Mon-Fri: 8:00 AM - 6:00 PM', urgent: false },
    { department: 'Specialty Clinics', hours: 'Mon-Fri: 9:00 AM - 5:00 PM', urgent: false },
    { department: 'Laboratory Services', hours: 'Mon-Sun: 6:00 AM - 10:00 PM', urgent: false },
    { department: 'Imaging Center', hours: 'Mon-Fri: 7:00 AM - 7:00 PM', urgent: false },
    { department: 'Pharmacy', hours: 'Mon-Sun: 8:00 AM - 9:00 PM', urgent: false }
  ];

  const services = [
    'General Consultation',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Ophthalmology',
    'Emergency Care',
    'Laboratory Services',
    'Imaging/Radiology',
    'Physical Therapy'
  ];

  const facilities = [
    { icon: Car, title: 'Free Parking', description: 'Ample parking spaces available' },
    { icon: Accessibility, title: 'Wheelchair Accessible', description: 'Full accessibility compliance' },
    { icon: Stethoscope, title: 'On-site Pharmacy', description: 'Convenient prescription services' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" background="white">
      <SectionHeader
        subtitle="Contact Us"
        title="Get in Touch"
        description="We're here to help with your healthcare needs. Contact us to schedule an appointment, ask questions, or learn more about our services."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Schedule an Appointment</h3>
              <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            
            <CardContent>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                >
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-green-800">Thank you! Your appointment request has been submitted successfully.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                >
                  <AlertCircle size={20} className="text-red-600 mr-3" />
                  <span className="text-red-800">There was an error submitting your request. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock size={18} className="absolute left-3 top-3 text-slate-400" />
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle size={18} className="absolute left-3 top-3 text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors resize-none"
                      placeholder="Please describe your symptoms or concerns..."
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info & Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h4>
                    <p className="text-slate-900 font-medium mb-1">{info.value}</p>
                    <p className="text-sm text-slate-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Department Hours */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-slate-900 flex items-center">
                <Clock size={24} className="mr-3 text-medical-600" />
                Department Hours
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentHours.map((dept, index) => (
                  <motion.div
                    key={dept.department}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      dept.urgent ? 'bg-red-50 border border-red-100' : 'bg-slate-50'
                    }`}
                  >
                    <span className={`font-medium ${dept.urgent ? 'text-red-900' : 'text-slate-900'}`}>
                      {dept.department}
                    </span>
                    <span className={`text-sm ${dept.urgent ? 'text-red-700 font-semibold' : 'text-slate-600'}`}>
                      {dept.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Facilities */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-slate-900">Hospital Facilities</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={facility.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-medical-600 to-primary-600 rounded-lg flex items-center justify-center">
                      <facility.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{facility.title}</h4>
                      <p className="text-sm text-slate-600">{facility.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-900 mb-2">Medical Emergency?</h4>
                <p className="text-red-800 mb-3">
                  If you're experiencing a life-threatening emergency, don't wait for an appointment.
                </p>
                <div className="space-y-2">
                  <p className="text-red-900 font-semibold">Call 911 immediately</p>
                  <p className="text-red-800 text-sm">Or visit our Emergency Department - we're open 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};