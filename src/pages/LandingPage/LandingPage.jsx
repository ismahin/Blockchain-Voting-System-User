// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../../assets/images/hero-bg.jpg'; // example background

const LandingPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen flex flex-col bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* HERO */}
        <section className="relative h-[80vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative z-10 text-center max-w-5xl px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Experience the Future of Voting
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Secure, transparent, and amazingly simple for voters and candidates alike.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link
                to="/login"
                className="bg-primary hover:bg-indigo-700 text-white px-8 py-3 rounded font-bold"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="bg-white text-primary hover:bg-gray-100 border border-primary px-8 py-3 rounded font-bold"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </section>

        {/* WAVY DIVIDER */}
        <div className="bg-white">
          <svg
            className="block -mt-1"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="#f3f4f6"
              d="M0,24 C360,72 1080,0 1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

        {/* FEATURES */}
        <section
          id="features"
          className="bg-gray-100 py-12 px-4 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <motion.div
                className="bg-white rounded shadow p-6 flex flex-col items-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-3 text-4xl text-primary">🔒</div>
                <h3 className="font-semibold text-xl mb-2 text-primary">
                  Impeccable Security
                </h3>
                <p className="text-gray-700">
                  End-to-end encryption and immutable ledgers ensure total integrity.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                className="bg-white rounded shadow p-6 flex flex-col items-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-3 text-4xl text-primary">⚡</div>
                <h3 className="font-semibold text-xl mb-2 text-primary">
                  Lightning-Fast
                </h3>
                <p className="text-gray-700">
                  Real-time tallying so you never have to wait for results again.
                </p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                className="bg-white rounded shadow p-6 flex flex-col items-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-3 text-4xl text-primary">🎨</div>
                <h3 className="font-semibold text-xl mb-2 text-primary">
                  Effortless UI
                </h3>
                <p className="text-gray-700">
                  Voters and candidates navigate with ease, no tutorials needed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              User Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.blockquote
                className="bg-gray-100 p-6 rounded shadow text-left"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-gray-700 mb-2">
                  “This voting system was incredibly easy to use. I felt confident my vote was secure.”
                </p>
                <span className="block text-sm text-gray-500 font-semibold">
                  — Alex T., University Student
                </span>
              </motion.blockquote>
              <motion.blockquote
                className="bg-gray-100 p-6 rounded shadow text-left"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-gray-700 mb-2">
                  “I used to dread election day, but now I can vote from my phone in seconds.”
                </p>
                <span className="block text-sm text-gray-500 font-semibold">
                  — Jordan R., Club Secretary
                </span>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-12">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Vote Count?
            </h2>
            <p className="text-lg mb-8">
              Register or log in today and experience a new era of online elections.
            </p>
            <Link
              to="/login"
              className="bg-white text-primary px-6 py-3 font-semibold rounded shadow hover:bg-gray-100 transition inline-block"
            >
              Get Started
            </Link>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;
