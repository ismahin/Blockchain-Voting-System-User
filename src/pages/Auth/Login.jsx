// src/pages/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [varsityId, setVarsityId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('voter');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(varsityId.trim(), password.trim(), role);
    if (success) {
      navigate(role === 'voter' ? '/voter' : '/candidate');
    } else {
      setError('Invalid credentials or missing fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex items-center justify-center px-4">
      <motion.div
        className="bg-white w-full max-w-md rounded-lg shadow-lg p-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Varsity ID</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={varsityId}
              onChange={(e) => setVarsityId(e.target.value)}
              placeholder="e.g., 2022001"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Role</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="voter">Voter</option>
              <option value="candidate">Candidate</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">
            Forgot password?
          </a>
        </div>
      </motion.div>
    </div>
  );
}
