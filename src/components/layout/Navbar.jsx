// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <motion.nav
      className="bg-white shadow p-4 flex justify-between items-center"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-xl font-bold text-indigo-600">
        MyVotingSite
      </Link>
      <div className="space-x-4 flex items-center">
        {user ? (
          <>
            {user.role === 'voter' && <Link to="/voter">Voter</Link>}
            {user.role === 'candidate' && <Link to="/candidate">Candidate</Link>}
            <Link to="/events">Events</Link>
            <Link to="/profile">Profile</Link>
            <button
              onClick={handleLogout}
              className="bg-pink-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-indigo-500 text-white px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
