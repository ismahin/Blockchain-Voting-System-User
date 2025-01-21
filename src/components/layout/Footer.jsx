// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white text-center p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2025 MyVotingSite. All rights reserved.</p>
    </motion.footer>
  );
}
