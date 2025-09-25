'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id='home' className={styles.hero}>
      {/* Background Video */}
      <div className={styles.videoContainer}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source 
            src='https://ldcybeswsmwrgvbwshls.supabase.co/storage/v1/object/public/hotel%20demo%20website/Untitled%20design%20(9).mp4' 
            type='video/mp4' 
          />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Background Pattern (fallback) */}
      <div className={styles.patternOverlay}>
        <div className={styles.pattern}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          variants={staggerContainer}
          initial='initial'
          animate='animate'
          className={styles.content}
        >
          <motion.div 
            variants={fadeInUp} 
            className={styles.logoContainer}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src='/logo.jpg'
                alt='Grand Regency Logo'
                width={100}
                height={100}
                className={styles.heroLogo}
                priority
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className={styles.title}
          >
            <span className={styles.titleGradient}>Grand Regency</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className={styles.subtitle}
          >
            Where Style Meets Comfort in the Heart of Silchar
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className={styles.buttonContainer}
          >
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className={`${styles.button} ${styles.primaryButton}`}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(248, 200, 102, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.buttonText}>Book Your Stay</span>
              <div className={styles.buttonShine}></div>
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('rooms')}
              className={`${styles.button} ${styles.secondaryButton}`}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.buttonText}>View Rooms</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('rooms')}
      >
        <ChevronDown className={styles.scrollIcon} />
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;