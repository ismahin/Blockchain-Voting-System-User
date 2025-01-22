import React from 'react';
import { motion } from 'framer-motion';

// Suppose you have a logo image:
import uniLogo from '../../assets/images/uni-logo.png';

export default function LandingNavbar() {
  return (
    <motion.nav
      className="fixed w-full bg-white shadow z-50 flex justify-between items-center px-6 py-3"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left - University Logo */}
      <div className="flex items-center">
        {/* If you have an actual image: */}
        <img
          src={uniLogo}
          alt="University Logo"
          className="h-10 w-auto mr-2"
        />
        {/* Or just text if no image */}
        <span className="font-bold text-xl text-primary">MyUniversity</span>
      </div>

      {/* Right - Nav links to sections */}
      <div className="space-x-6">
        <a href="#our-clubs" className="hover:text-primary">
          Our Clubs
        </a>
        <a href="#latest-activities" className="hover:text-primary">
          Latest Activities
        </a>
        <a href="#features" className="hover:text-primary">
          Features
        </a>
        <a href="#footer-section" className="hover:text-primary">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

