/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Calendar, 
  Users, 
  Menu, 
  X,
  Hotel,
  Car,
  Map as MapIcon,
  Package,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ATTRACTIONS, SERVICES } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Attractions', id: 'attractions' },
    { name: 'Services', id: 'services' },
    { name: 'Trust', id: 'trust' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-ocean-blue selection:text-white">
      {/* WhatsApp Widget */}
      <a 
        href="https://wa.me/919876543210?text=Hi, I'm interested in Vizag tourism services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-100">
          Chat with us
        </span>
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-slate-100">
              <img 
                src="https://picsum.photos/seed/vizag-logo/200/200" 
                alt="VizagYatra Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                vizagyatra<span className="text-warm-orange">.com</span>
              </span>
              <span className={`text-[10px] font-medium uppercase tracking-tighter ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                Best Stays & Rides
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold transition-colors hover:text-warm-orange ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="btn-primary py-2 px-5 text-sm" onClick={() => scrollToSection('contact')}>Book Now</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-lg font-medium text-slate-700 hover:text-ocean-blue"
                  >
                    {link.name}
                  </button>
                ))}
                <button className="w-full btn-primary" onClick={() => scrollToSection('contact')}>Book Now</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590050752117-23a9d8646d91?auto=format&fit=crop&q=80&w=1920" 
            alt="Vizag Coastline" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-warm-orange/20 text-warm-orange rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-warm-orange/30">
              Premier Tourism Services in Vizag
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Discover <span className="text-sunshine-yellow">Visakhapatnam</span> The City of Destiny
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Explore pristine beaches, ancient temples, and lush valleys with our expert-guided tours and premium travel services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Explore Attractions <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-xl font-semibold transition-all">
                View Packages
              </button>
            </div>
          </motion.div>

          {/* Quick Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/20 outline-none transition-all" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                  <input type="tel" placeholder="+91 98765..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/20 outline-none transition-all" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/20 outline-none transition-all" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="date" className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/20 outline-none transition-all">
                    <option>Full Package</option>
                    <option>Rooms Only</option>
                    <option>Cab Service</option>
                    <option>Tour Guide</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full btn-secondary py-4 text-lg mt-4">
                Get Free Quote
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-4">
                By submitting, you agree to our Privacy Policy. We'll contact you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-ocean-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Happy Tourists', value: '50k+' },
            { label: 'Guided Tours', value: '1,200+' },
            { label: 'Destinations', value: '45+' },
            { label: 'Expert Guides', value: '25+' },
          ].map((stat, i) => (
            <div key={i} className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-white/60 font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Top Tourist Places in Visakhapatnam</h2>
              <p className="text-slate-600">From the golden sands of RK Beach to the mist-covered Araku Valley, explore the diverse beauty of Andhra Pradesh's coastal gem.</p>
            </div>
            <button className="text-ocean-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Locations <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATTRACTIONS.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-ocean-blue shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-1 bg-sunshine-yellow text-slate-900 px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                      <Star className="w-3 h-3 fill-current" /> {item.rating}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ocean-blue transition-colors">{item.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:bg-ocean-blue hover:text-white hover:border-ocean-blue transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ocean-blue/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Tourism Services</h2>
            <p className="text-slate-600">We provide end-to-end travel solutions to make your Vizag trip memorable, comfortable, and hassle-free.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-ocean-blue/10 text-ocean-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ocean-blue group-hover:text-white transition-all duration-500">
                  {service.id === '1' && <Hotel className="w-7 h-7" />}
                  {service.id === '2' && <Car className="w-7 h-7" />}
                  {service.id === '3' && <MapIcon className="w-7 h-7" />}
                  {service.id === '4' && <Package className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-ocean-blue font-bold text-sm mb-4">
                  {service.priceRange}
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-warm-orange hover:gap-3 transition-all">
                  Check Availability <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Why Thousands of Travelers Choose Us</h2>
              <p className="text-white/60 mb-10 text-lg">With over a decade of experience in Andhra Pradesh tourism, we offer unmatched local expertise and personalized service.</p>
              
              <div className="space-y-6">
                {[
                  'Certified Local Guides with deep historical knowledge',
                  '24/7 On-trip support via WhatsApp and Phone',
                  'Transparent pricing with no hidden costs',
                  'Customizable itineraries for every budget'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
              <div className="flex items-center gap-1 text-sunshine-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl italic text-white/80 mb-8 leading-relaxed">
                "Our family trip to Araku Valley was perfectly organized. The driver was professional and the guide knew so many hidden spots for photography. Highly recommended for anyone visiting Vizag!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=1" alt="User" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold">Ananya Sharma</div>
                  <div className="text-sm text-white/40">Travelled from Mumbai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden border border-slate-100">
                  <img 
                    src="https://picsum.photos/seed/vizag-logo/200/200" 
                    alt="VizagYatra Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                    vizagyatra<span className="text-warm-orange">.com</span>
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">
                    Best Stays & Rides
                  </span>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your premier gateway to exploring the City of Destiny. We specialize in creating unforgettable experiences across Visakhapatnam and Araku Valley.
              </p>
              <div className="flex items-center gap-4">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-ocean-blue hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-ocean-blue transition-colors">About Visakhapatnam</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Tour Packages</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Hotel Bookings</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Travel Blog</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Contact Info</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ocean-blue flex-shrink-0" />
                  <span>123 Beach Road, Pandurangapuram,<br />Visakhapatnam, AP 530003</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-ocean-blue flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-ocean-blue">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-ocean-blue flex-shrink-0" />
                  <a href="mailto:info@vizagtourism.com" className="hover:text-ocean-blue">info@vizagtourism.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
              <p className="text-slate-500 text-sm mb-4">Subscribe to get travel tips and exclusive offers.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="flex-1 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-ocean-blue" />
                <button className="bg-ocean-blue text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs font-medium">
              © 2026 VizagYatra.com. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
              <a href="#" className="hover:text-slate-600">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
