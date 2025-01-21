// src/pages/Voter/VoterDashboard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllEvents } from '../../services/mockUserApi';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function VoterDashboard() {
  const { user } = useUser();
  const [activeEvents, setActiveEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const evts = await getAllEvents();
    const now = new Date();
    const active = evts.filter(evt => {
      const start = new Date(evt.startDate);
      const end = new Date(evt.endDate);
      return now >= start && now <= end;
    });
    const upcoming = evts.filter(evt => new Date(evt.startDate) > now);
    setActiveEvents(active);
    setUpcomingEvents(upcoming);
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-2">Hello, Voter {user?.varsityId}!</h1>
      <p className="text-gray-600 mb-6">
        You’re a member of clubs: <strong>{user.clubIds.join(', ')}</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Active Events</h2>
        {activeEvents.length === 0 ? (
          <p>No active events right now.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {activeEvents.map(evt => (
              <div key={evt.id} className="bg-white shadow p-4 rounded">
                <h3 className="font-bold text-primary text-lg">{evt.name}</h3>
                <p className="text-sm text-gray-600">{evt.description}</p>
                <p className="text-xs text-gray-500">
                  {evt.startDate} ~ {evt.endDate} (Active)
                </p>
                <Link to="/events" className="text-secondary mt-2 inline-block">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Upcoming Events</h2>
        {upcomingEvents.length === 0 ? (
          <p>No upcoming events at this time.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map(evt => (
              <div key={evt.id} className="bg-white shadow p-4 rounded">
                <h3 className="font-bold text-primary text-lg">{evt.name}</h3>
                <p className="text-sm text-gray-600">{evt.description}</p>
                <p className="text-xs text-gray-500">
                  {evt.startDate} ~ {evt.endDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
}
