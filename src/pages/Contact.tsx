import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeUp, stagger } from '../lib/animations';
import LazyImage from '../components/LazyImage';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function Contact() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Project Type:* ${formData.projectType}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/917411334243?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      description: 'Speak directly with our design experts',
      action: 'tel:+917411334243',
      label: '+91 74113 34243',
      detail: 'Monday - Friday, 9:00 AM - 6:00 PM'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      title: 'WhatsApp',
      description: 'Quick chat for instant responses',
      action: 'https://wa.me/917411334243?text=Hi!%20I%27m%20interested%20in%20interior%20design%20services',
      label: 'Start Conversation',
      detail: 'Instant replies during business hours'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      description: 'Send us your project details',
      action: 'mailto:vatsalyahomeinteriors@gmail.com',
      label: 'vatsalyahomeinteriors@gmail.com',
      detail: 'Response within 24 hours'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Studio',
      description: 'See our work in person',
      action: 'https://maps.google.com/?q=D-no-5-119B12+Bhagavathi+Layout+Puttur+Udupi+576105',
      label: 'Get Directions',
      detail: 'By appointment only'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Vatsalya Interior Design</title>
        <meta
          name="description"
          content="Get in touch with us for your interior design needs. Schedule a consultation or visit our studio."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1633360821222-7e8df83639fb"
              alt="Contact Vatsalya Interior Design"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          <div className="relative container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.span 
                className="text-brand-primary text-sm tracking-[0.2em] mb-6 block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                GET IN TOUCH
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl text-white font-light mb-6 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Let's Create Something Extraordinary
              </motion.h1>
              <motion.p 
                className="text-xl text-white/80 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Begin your journey to a beautifully designed space. Our team is ready to bring your vision to life.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Desktop View - Contact Methods */}
        <section className="hidden md:block py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <span className="text-brand-primary text-sm tracking-[0.2em] mb-6 block">CONNECT WITH US</span>
              <h2 className="text-4xl md:text-5xl font-light mb-6 font-heading">Choose Your Preferred Method</h2>
              <p className="text-brand-stone-600 max-w-2xl mx-auto leading-relaxed">
                We're here to answer your questions and discuss how we can transform your space into something extraordinary.
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={fadeUp}
                  className="group relative bg-white border border-brand-stone-200 hover:border-brand-primary transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative border frame */}
                  <div className="absolute -inset-4 border border-brand-primary/0 group-hover:border-brand-primary/20 transition-all duration-500 transform rotate-0 group-hover:-rotate-1" />
                  
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-stone-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-10">
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-10 left-10 w-1 h-1 bg-brand-primary/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="absolute top-20 right-16 w-1 h-1 bg-brand-primary/20 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
                      <div className="absolute bottom-16 left-20 w-1 h-1 bg-brand-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />
                    </div>

                    <div className="flex items-start justify-between mb-8">
                      <motion.div 
                        className="w-14 h-14 border border-brand-primary/30 group-hover:border-brand-primary group-hover:bg-brand-primary flex items-center justify-center transition-all duration-500 relative overflow-hidden rounded-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-brand-primary group-hover:text-white transition-colors duration-500 relative z-10">
                          {method.icon}
                        </div>
                      </motion.div>
                      <motion.svg 
                        className="w-5 h-5 text-brand-stone-400 group-hover:text-brand-primary transition-all duration-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: 4, y: -4 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                    
                    <h3 className="text-2xl font-light mb-3 font-heading group-hover:text-brand-primary transition-colors duration-300 relative inline-block">
                      {method.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-500" />
                    </h3>
                    <p className="text-brand-stone-600 mb-6 leading-relaxed text-sm">{method.description}</p>
                    
                    <div className="pt-6 border-t border-brand-stone-200 group-hover:border-brand-primary/30 transition-colors duration-300">
                      <p className="text-sm font-medium text-brand-stone-800 mb-1 tracking-wide">{method.label}</p>
                      <p className="text-xs text-brand-stone-500 tracking-wide">{method.detail}</p>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-brand-primary/0 group-hover:border-brand-primary/20 transition-all duration-500 transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Studio Information */}
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
            >
              {[
                {
                  title: 'Studio Location',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  content: (
                    <address className="not-italic text-brand-stone-600 leading-relaxed text-sm">
                      D-no-5-119B12<br />
                      Bhagavathi Layout<br />
                      Puttur-Udupi-576105<br />
                      India
                    </address>
                  )
                },
                {
                  title: 'Business Hours',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  content: (
                    <p className="text-brand-stone-600 leading-relaxed text-sm">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM<br />
                      <span className="text-brand-stone-500">Saturday: By appointment</span><br />
                      <span className="text-brand-stone-500">Sunday: Closed</span>
                    </p>
                  )
                },
                {
                  title: 'Response Time',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  content: (
                    <p className="text-brand-stone-600 leading-relaxed text-sm">
                      Email inquiries:<br />
                      Within 24 hours<br />
                      <span className="text-brand-stone-500">WhatsApp messages:</span><br />
                      <span className="text-brand-stone-500">Instant during business hours</span>
                    </p>
                  )
                }
              ].map((info, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="text-center group cursor-default"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 border border-brand-primary/30 mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg transition-all duration-300 relative overflow-hidden rounded-sm"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">{info.icon}</div>
                  </motion.div>
                  <h3 className="text-lg font-heading mb-4 text-brand-stone-800 group-hover:text-brand-primary transition-colors duration-300">{info.title}</h3>
                  <div className="transform group-hover:scale-105 transition-transform duration-300">
                    {info.content}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mobile View - Form with WhatsApp Integration */}
        <section className="md:hidden py-20 bg-brand-stone-50">
          <div className="container mx-auto px-6 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white border border-brand-stone-200 p-8 shadow-lg rounded-lg"
            >
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-primary" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-primary" />

              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  {/* Pulse rings */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full">
                    <div className="absolute inset-0 border-2 border-brand-primary/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-0 border-2 border-brand-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  </div>
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 border-2 border-brand-primary bg-white relative z-10 rounded-full"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <svg className="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </motion.div>
                </div>
                <motion.h2 
                  className="text-2xl font-heading font-light mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Start a Conversation
                </motion.h2>
                <motion.p 
                  className="text-brand-stone-600 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Share your details and continue on WhatsApp
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-brand-stone-700 mb-2 tracking-wide">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-stone-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all rounded-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-brand-stone-700 mb-2 tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-stone-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all rounded-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-brand-stone-700 mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-stone-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all rounded-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm text-brand-stone-700 mb-2 tracking-wide">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-stone-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all bg-white rounded-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Commercial Interior">Commercial Interior</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Furniture Design">Furniture Design</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-brand-stone-700 mb-2 tracking-wide">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-brand-stone-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none rounded-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-brand-primary text-white py-4 hover:bg-brand-primary/90 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 tracking-wider text-sm relative overflow-hidden group rounded-sm"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Multiple shimmer effects */}
                  <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-150" />
                  <span className="relative font-medium">CONTINUE ON WHATSAPP</span>
                  <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </motion.button>

                <p className="text-xs text-brand-stone-500 text-center leading-relaxed">
                  Your message will be shared via WhatsApp for a seamless conversation
                </p>
              </form>
            </motion.div>

            {/* Quick Contact Options for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <motion.a
                href="tel:+917411334243"
                className="relative flex flex-col items-center justify-center py-6 bg-white border border-brand-stone-300 hover:border-brand-primary hover:shadow-lg transition-all overflow-hidden group rounded-sm"
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-stone-50 to-transparent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                <motion.svg 
                  className="w-6 h-6 text-brand-primary mb-2 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </motion.svg>
                <span className="text-sm font-medium text-brand-stone-800 tracking-wide relative z-10">Call Now</span>
              </motion.a>

              <motion.a
                href="mailto:vatsalyahomeinteriors@gmail.com"
                className="relative flex flex-col items-center justify-center py-6 bg-white border border-brand-stone-300 hover:border-brand-primary hover:shadow-lg transition-all overflow-hidden group rounded-sm"
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-stone-50 to-transparent transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                <motion.svg 
                  className="w-6 h-6 text-brand-primary mb-2 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                <span className="text-sm font-medium text-brand-stone-800 tracking-wide relative z-10">Email Us</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
