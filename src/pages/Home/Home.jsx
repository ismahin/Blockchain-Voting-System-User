// src/pages/Home/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllEvents } from '../../services/mockUserApi';

function Home() {
  const [liveEvent, setLiveEvent] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const events = await getAllEvents();
    const now = new Date();
    // Live events
    const running = events.filter((evt) => {
      const start = new Date(evt.startDate);
      const end = new Date(evt.endDate);
      return start <= now && now <= end;
    });
    // Upcoming events
    const upcoming = events.filter((evt) => {
      const start = new Date(evt.startDate);
      return start > now;
    });

    setLiveEvent(running[0] || null);
    setUpcomingEvents(upcoming);
  };

  return (
    <div className="p-4">
      {/* Hero Section */}
      {liveEvent ? (
        <motion.div
          className="bg-gradient-to-r from-primary to-secondary text-white p-10 rounded-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-2">Live Event: {liveEvent.name}</h1>
          <p className="mb-4">{liveEvent.description}</p>
          <p className="font-semibold">
            {liveEvent.startDate} ~ {liveEvent.endDate}
          </p>
          <Link
            to="/events"
            className="inline-block bg-white text-primary font-bold mt-4 px-4 py-2 rounded"
          >
            View All Events
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="bg-gray-200 p-10 rounded-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold">No Live Event</h1>
          <p>Check upcoming events below.</p>
        </motion.div>
      )}

      {/* Upcoming Events */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        {upcomingEvents.length === 0 ? (
          <p>No upcoming events at the moment.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((evt) => (
              <motion.div
                key={evt.id}
                className="bg-white p-4 rounded shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-bold text-primary">{evt.name}</h3>
                <p className="text-sm text-gray-600">{evt.description}</p>
                <p className="text-sm">
                  {evt.startDate} ~ {evt.endDate}
                </p>
                <Link
                  to="/events"
                  className="text-secondary hover:text-secondary mt-2 inline-block"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
