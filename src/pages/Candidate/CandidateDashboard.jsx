// src/pages/Candidate/CandidateDashboard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllEvents, getMyApplications } from '../../services/mockUserApi';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function CandidateDashboard() {
  const { user } = useUser();
  const [events, setEvents] = useState([]);
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [evts, apps] = await Promise.all([
      getAllEvents(),
      getMyApplications(user.varsityId),
    ]);
    setEvents(evts);
    setMyApps(apps);
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-2">Hello, Candidate {user?.varsityId}!</h1>
      <p className="text-gray-600 mb-6">
        Clubs: <strong>{user.clubIds.join(', ')}</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">My Applications</h2>
        {myApps.length === 0 ? (
          <p>You have not applied for any positions yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {myApps.map(app => (
              <div key={app.id} className="bg-white shadow p-4 rounded">
                <h3 className="font-bold text-primary text-lg">
                  Position: {app.position}
                </h3>
                <p className="text-sm text-gray-600">Club: {app.clubId}</p>
                <p className="text-sm text-gray-500">Status: {app.status}</p>
              </div>
            ))}
          </div>
        )}
        <Link to="/apply" className="inline-block mt-4 bg-secondary text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition">
          Apply for a New Position
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Events</h2>
        <p>
          Check out the <Link to="/events" className="text-primary">Events page</Link> for the latest elections. 
          If you’re nominated or approved, your name will appear among the candidates.
        </p>
      </section>
    </motion.div>
  );
}
