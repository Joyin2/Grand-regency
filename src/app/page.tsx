'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Wifi, 
  Car, 
  Coffee, 
  Users, 
  Utensils, 
  Clock, 
  Shield
} from 'lucide-react';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      
      {/* Rooms Section */}
      <section id="rooms" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2">
              Our Rooms
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
              Choose from our carefully designed accommodations for the perfect stay. From comfortable standard rooms to luxurious presidential suites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                id: 1,
                title: "Standard Room",
                price: "₹1,800",
                originalPrice: "₹2,400",
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
                features: ["Queen Bed", "City View", "Free WiFi", "AC"],
                description: "Comfortable accommodation with essential amenities."
              },
              {
                id: 2,
                title: "Executive Room",
                price: "₹2,500",
                originalPrice: "₹3,200",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
                features: ["King Bed", "City View", "Free WiFi", "Room Service"],
                description: "Spacious room with modern amenities and work desk."
              },
              {
                id: 3,
                title: "Premium Room",
                price: "₹3,200",
                originalPrice: "₹4,000",
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
                features: ["King Bed", "Seating Area", "Mini Bar", "Garden View"],
                description: "Enhanced comfort with premium furnishings and balcony."
              },
              {
                id: 4,
                title: "Deluxe Suite",
                price: "₹4,500",
                originalPrice: "₹5,500",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
                features: ["King Bed", "Living Room", "Jacuzzi", "City View"],
                description: "Luxurious suite with separate living area and premium amenities."
              },
              {
                id: 5,
                title: "Family Suite",
                price: "₹5,200",
                originalPrice: "₹6,500",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
                features: ["Multiple Beds", "Living Area", "Kid-Friendly", "Play Area"],
                description: "Perfect for families with children and extra space."
              },
              {
                id: 6,
                title: "Presidential Suite",
                price: "₹8,500",
                originalPrice: "₹10,000",
                image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop",
                features: ["Master Bedroom", "Private Terrace", "Butler Service", "Premium View"],
                description: "Ultimate luxury with personalized service and exclusive amenities."
              },
              {
                id: 7,
                title: "Business Suite",
                price: "₹4,800",
                originalPrice: "₹6,200",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
                features: ["Work Station", "Meeting Area", "High-Speed WiFi", "Printer Access"],
                description: "Designed for business travelers with office facilities."
              },
              {
                id: 8,
                title: "Honeymoon Suite",
                price: "₹6,500",
                originalPrice: "₹8,000",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
                features: ["Romantic Decor", "Private Balcony", "Champagne", "Rose Petals"],
                description: "Romantic suite with special amenities for couples."
              }
            ].map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute top-1 sm:top-2 md:top-3 right-1 sm:right-2 md:right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    Save {Math.round(((parseInt(room.originalPrice.replace('₹', '').replace(',', '')) - parseInt(room.price.replace('₹', '').replace(',', ''))) / parseInt(room.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-900 truncate pr-2">{room.title}</h3>
                    <div className="text-right flex-shrink-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-2">
                      <div className="text-xs sm:text-sm text-red-500 line-through font-medium">{room.originalPrice}</div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 drop-shadow-sm">{room.price}</div>
                      <div className="text-xs text-purple-600 font-medium">per night</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{room.description}</p>
                  
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 sm:py-2.5 md:py-3 rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Room
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-900 mb-3 sm:mb-4 md:mb-6 px-2">
              Grand Regency Hotel
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
              Experience luxury hospitality in the heart of Silchar, Assam. Our 3-star hotel offers modern amenities,
              exceptional service, and comfortable accommodations for both business and leisure travelers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2">
              Hotel Amenities
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
              Enjoy world-class facilities and services designed for your comfort and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: <Wifi className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Free Wi-Fi",
                description: "High-speed internet access throughout the hotel"
              },
              {
                icon: <Utensils className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Restaurant",
                description: "Multi-cuisine restaurant serving delicious meals"
              },
              {
                icon: <Car className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Free Parking",
                description: "Complimentary parking for all guests"
              },
              {
                icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "24/7 Service",
                description: "Round-the-clock front desk and room service"
              },
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Conference Hall",
                description: "Fully equipped meeting and event spaces"
              },
              {
                icon: <Coffee className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Coffee Shop",
                description: "Fresh coffee and light snacks available"
              },
              {
                icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Security",
                description: "24/7 security and CCTV surveillance"
              },
              {
                icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
                title: "Concierge",
                description: "Personal assistance for all your needs"
              }
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group text-center"
              >
                <motion.div 
                  className="text-purple-600 mb-2 sm:mb-3 md:mb-4 flex justify-center group-hover:text-gold-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {amenity.icon}
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-purple-900 mb-1 sm:mb-2">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2">
              Photo Gallery
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
              Take a virtual tour of our beautiful hotel and facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
                title: "Hotel Exterior",
                category: "Architecture"
              },
              {
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
                title: "Luxury Lobby",
                category: "Interior"
              },
              {
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
                title: "Executive Room",
                category: "Accommodation"
              },
              {
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
                title: "Restaurant",
                category: "Dining"
              },
              {
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
                title: "Premium Suite",
                category: "Accommodation"
              },
              {
                image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
                title: "Conference Hall",
                category: "Business"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-gold-500 text-purple-900 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold mb-1 sm:mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-6 sm:mt-8 md:mt-12"
          >
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Photos
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2">
              Contact Us
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
              Ready to experience luxury? Get in touch with us or make your reservation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <motion.div 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-purple-600 text-white p-2 sm:p-3 rounded-lg group-hover:bg-gold-600 transition-colors duration-300">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-1">Address</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        NS Avenue H No.159, Ward No. 17,<br />
                        Grand Bazar, Silchar 788005,<br />
                        Assam, India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-purple-600 text-white p-2 sm:p-3 rounded-lg group-hover:bg-gold-600 transition-colors duration-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-1">Phone</h4>
                      <p className="text-xs sm:text-sm text-gray-600">+91 3842 123456</p>
                      <p className="text-xs text-gray-500">Available 24/7</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-purple-600 text-white p-2 sm:p-3 rounded-lg group-hover:bg-gold-600 transition-colors duration-300">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-1">Email</h4>
                      <p className="text-xs sm:text-sm text-gray-600">info@grandregencysilchar.com</p>
                      <p className="text-xs text-gray-500">We&apos;ll respond within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-purple-600 text-white p-2 sm:p-3 rounded-lg group-hover:bg-gold-600 transition-colors duration-300">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-1">Check-in / Check-out</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Check-in: 2:00 PM</p>
                      <p className="text-xs sm:text-sm text-gray-600">Check-out: 12:00 PM</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-purple-200"
                >
                  <h4 className="font-semibold text-purple-900 text-sm sm:text-base mb-3 sm:mb-4">
                    Quick Actions
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <motion.button 
                      onClick={() => scrollToSection('rooms')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-xs sm:text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Our Rooms
                    </motion.button>
                    <motion.button 
                      className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-purple-900 py-2 sm:py-3 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 text-xs sm:text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Call Now: +91 3842 123456
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gold-400">
                  Send us a Message
                </h3>
                <p className="text-xs sm:text-sm text-purple-200 mb-4 sm:mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                      Room Type Preference
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm">
                      <option value="" className="text-gray-900">Select a room type</option>
                      <option value="standard" className="text-gray-900">Standard Room - ₹1,800/night</option>
                      <option value="executive" className="text-gray-900">Executive Room - ₹2,500/night</option>
                      <option value="premium" className="text-gray-900">Premium Room - ₹3,200/night</option>
                      <option value="deluxe" className="text-gray-900">Deluxe Suite - ₹4,500/night</option>
                      <option value="family" className="text-gray-900">Family Suite - ₹5,200/night</option>
                      <option value="business" className="text-gray-900">Business Suite - ₹4,800/night</option>
                      <option value="honeymoon" className="text-gray-900">Honeymoon Suite - ₹6,500/night</option>
                      <option value="presidential" className="text-gray-900">Presidential Suite - ₹8,500/night</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-sm resize-none"
                      placeholder="Tell us about your requirements, special requests, or any questions you have..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-3 sm:py-4 md:py-5 rounded-lg font-bold hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl border border-purple-600"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📧 Send Message & Book Now 🏨
                  </motion.button>
                  
                  <p className="text-xs text-purple-300 text-center">
                    * Required fields. We&apos;ll contact you within 24 hours to confirm your booking.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
