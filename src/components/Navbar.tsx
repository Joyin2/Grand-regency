'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Rooms', 'About', 'Amenities', 'Gallery', 'Contact'];

  return (
    <motion.nav 
      className={`${styles.navbar} ${
        scrollY > 100 ? styles.scrolled : styles.transparent
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo Section */}
          <motion.div 
            className={styles.logoSection}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src='/logo.jpg'
              alt='Grand Regency Logo'
              width={40}
              height={40}
              className={styles.logo}
            />
            <div className={styles.logoText}>
              <h1 className={`${styles.logoTitle} ${
                scrollY > 100 ? styles.logoTitleScrolled : styles.logoTitleDefault
              }`}>Grand Regency</h1>
              <p className={`${styles.logoSubtitle} ${
                scrollY > 100 ? styles.logoSubtitleScrolled : styles.logoSubtitleDefault
              }`}>Luxury Hotel</p>
            </div>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${styles.menuItem} ${
                  scrollY > 100 ? styles.menuItemScrolled : styles.menuItemDefault
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`${styles.mobileMenuButton} ${
              scrollY > 100 ? styles.mobileMenuButtonScrolled : styles.mobileMenuButtonDefault
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={styles.mobileMenuItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;