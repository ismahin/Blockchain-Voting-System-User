import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

// --- IMAGES ---
// Put these images in src/assets/images/ or update the paths if you have them elsewhere.
import uniLogo from '../../assets/images/uni-logo.png';    // University logo
import heroImg from '../../assets/images/hero-bg.jpg';     // Hero background image

// Example club logos. Replace these placeholders with your actual images.
import businessLogo from '../../assets/images/business.png';
import culturalLogo from '../../assets/images/cultural.jpg';
import debatingLogo from '../../assets/images/debating.png';
import itLogo from '../../assets/images/it.png';
import languageLogo from '../../assets/images/language.png';
import roverLogo from '../../assets/images/rover.jpg';
import sportsLogo from '../../assets/images/sports.jpg';
import welfareLogo from '../../assets/images/welfare.png';
import economicsLogo from '../../assets/images/economics.jpg';
import bloodLogo from '../../assets/images/blood.jpg';
import eeeLogo from '../../assets/images/eee.jpg';
import ieeeLogo from '../../assets/images/ieee.jpg';
// Activity images placeholders
import act1 from '../../assets/images/activity1.jpg';
import act2 from '../../assets/images/activity2.jpg';
import act3 from '../../assets/images/activity3.jpg';

// NAV LINKS for the top navbar (smooth scroll)
const navLinks = [
  { label: 'Our Clubs', href: '#our-clubs' },
  { label: 'Latest Activities', href: '#latest-activities' },
  { label: 'Features', href: '#features' },
];

// CLUB DATA
const clubs = [
  { name: 'IEEE Club', logo: ieeeLogo },
  { name: 'EEE Club', logo: eeeLogo },
  { name: 'Business Club', logo: businessLogo },
  { name: 'Cultural Club', logo: culturalLogo },
  { name: 'Debating Club', logo: debatingLogo },
  { name: 'IT Club', logo: itLogo },
  { name: 'Language Club', logo: languageLogo },
  { name: 'Rover Scout', logo: roverLogo },
  { name: 'Sports Club', logo: sportsLogo },
  { name: 'Social Welfare Club', logo: welfareLogo },
  { name: 'Economics Club', logo: economicsLogo },
  { name: 'Blood Donation Club', logo: bloodLogo },
  
];

// LATEST ACTIVITIES
const latestActivities = [
  {
    id: 1,
    image: act1,
    title: 'National Robotics Championship 2025',
    desc: 'Thrilling Robotics showdown among universities!',
  },
  {
    id: 2,
    image: act2,
    title: 'Call for Members for IEEE Club',
    desc: 'Join the IEEE Club to explore the world of Electrical Engineering.',
  },
  {
    id: 3,
    image: act3,
    title: 'AD Maker',
    desc: 'Showcase your creativity in the AD Maker competition.',
  },
];

export default function LandingPage() {
  return (
    <div className="relative w-full h-full flex flex-col">

      {/* NAVBAR at top - fixed */}
      <header className="fixed w-full bg-white shadow z-50 flex justify-between items-center px-6 py-3">
        {/* Left - University Logo + Name */}
        <div className="flex items-center">
          <img
            src={uniLogo}
            alt="University Logo"
            className="h-10 w-auto mr-2"
          />
        </div>
        {/* Right - Nav links + 'Get Started' button */}
        <div className="space-x-6 items-center hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-indigo-600 transition"
            >
              {link.label}
            </a>
          ))}
          {/* "Get Started" => route to /login */}
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* HERO SECTION (Full-screen) */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          {/* TYPING EFFECT */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow">
            <Typed
              strings={[
                'Welcome to Our University',
                'Empowering Minds, Shaping Futures',
                'Join Our Vibrant Campus Community',
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </h1>
          <p className="text-lg md:text-2xl text-gray-100">
            Explore the best clubs, latest activities, and endless opportunities.
          </p>
          {/* Scroll down / Learn More button */}
          <div className="mt-8">
            <a
              href="#our-clubs"
              className="bg-white text-indigo-600 font-bold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* OUR CLUBS SECTION */}
      <section
        id="our-clubs"
        className="bg-white py-12 px-4 text-center mt-[-1px]" 
        // ^ small tweak so we don't see a gap
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Our Clubs
          </h2>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of clubs that cater to every interest, from business to culture, debating to sports, and more.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-4 rounded shadow flex flex-col items-center transition transform hover:scale-105"
              >
                {/* Club Logo */}
                <img
                  src={club.logo}
                  alt={club.name}
                  className="h-16 w-auto mb-2 object-contain"
                />
                <h3 className="text-lg font-semibold text-indigo-600">
                  {club.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ACTIVITIES SECTION */}
      <section
        id="latest-activities"
        className="bg-gray-50 py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Latest Clubs Activity
          </h2>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto text-center">
            Stay updated with recent club events, workshops, and meetups happening on campus.
          </p>
          {/* Horizontal slider container */}
          <div className="overflow-x-auto flex space-x-4 scrollbar-thin scrollbar-thumb-gray-300 pb-2">
            {latestActivities.map((act) => (
              <div
                key={act.id}
                className="inline-block w-64 flex-shrink-0 bg-white p-4 rounded shadow"
              >
                <div className="h-32 bg-gray-200 mb-3 overflow-hidden flex items-center justify-center">
                  {/* If you have actual images, do <img src={act.image} ... /> */}
                  <img
                    src={act.image}
                    alt={act.title}
                    className="h-full w-auto object-cover"
                  />
                </div>
                <h3 className="font-bold text-indigo-600 mb-1">{act.title}</h3>
                <p className="text-sm text-gray-600">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (example) */}
      <section
        id="features"
        className="bg-white py-12 px-4 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Key Features
          </h2>
          <p className="text-gray-600 text-lg mb-8 mx-auto max-w-2xl">
            Experience a new era of student life, connectivity, and growth.
          </p>
          {/* Feature cards as needed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-100 p-6 rounded shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-indigo-600 mb-2 text-xl">
                Collaborative Environment
              </h3>
              <p className="text-gray-700">
                Meet new friends, work on joint projects, and become part of a vibrant community.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-indigo-600 mb-2 text-xl">
                Skill Development
              </h3>
              <p className="text-gray-700">
                Hone your leadership, communication, and technical skills through hands-on club activities.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded shadow"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-indigo-600 mb-2 text-xl">
                Endless Opportunities
              </h3>
              <p className="text-gray-700">
                From campus events to national competitions, your journey here is full of possibilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER OR CTA (You can add a real footer if you'd like) */}
      <footer className="bg-gray-800 text-white text-center py-4" id="footer-section">
        <p>&copy; 2025 MyUniversity. All rights reserved.</p>
      </footer>
    </div>
  );
}
