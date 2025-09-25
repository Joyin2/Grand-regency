'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Clock,
  Star,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Rooms', id: 'rooms' },
    { name: 'About', id: 'about' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Room Service',
    'Laundry Service',
    'Airport Transfer',
    'Car Rental',
    'Tour Packages',
    'Event Planning'
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-purple-400/10"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-4 sm:pb-6 md:pb-8">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            
            {/* Hotel Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src='/logo.jpg'
                  alt='Grand Regency Logo'
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gold-400">
                    Grand Regency
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200">Luxury Hotel</p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Experience unparalleled luxury and comfort in the heart of Silchar. 
                Where style meets comfort with world-class amenities and exceptional service.
              </p>
              
              <div className="flex items-center space-x-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs sm:text-sm text-gray-300 ml-2">5 Star Hotel</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gold-400 border-b-2 border-gold-400/30 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-xs sm:text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gold-400 border-b-2 border-gold-400/30 pb-2">
                Our Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <motion.li key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm text-gray-300 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2 flex-shrink-0"></div>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gold-400 border-b-2 border-gold-400/30 pb-2">
                Contact Info
              </h4>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3 group">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    NS Avenue H No.159, Ward No. 17,<br />
                    Grand Bazar, Silchar 788005,<br />
                    Assam, India
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 group">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs sm:text-sm text-gray-300">+91 3842 123456</p>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 group">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs sm:text-sm text-gray-300">info@grandregencysilchar.com</p>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 group">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs sm:text-sm text-gray-300">24/7 Available</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-2 sm:pt-4">
                <h5 className="text-sm sm:text-base font-semibold text-gold-400 mb-2 sm:mb-3">Follow Us</h5>
                <div className="flex space-x-3 sm:space-x-4">
                  {[
                    { icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-blue-600' },
                    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-pink-600' },
                    { icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-blue-400' },
                    { icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-red-600' }
                  ].map((social, index) => (
                    <motion.button
                      key={index}
                      className={`p-2 sm:p-3 bg-white/10 rounded-full ${social.color} transition-all duration-300 backdrop-blur-sm`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-purple-700/30 mt-8 sm:mt-12 pt-4 sm:pt-6 md:pt-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                © 2024 Grand Regency Hotel. All rights reserved. | Designed with ❤️ for luxury hospitality.
              </p>
              
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-purple-900 p-2 sm:p-3 rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;