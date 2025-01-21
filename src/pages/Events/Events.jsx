// src/pages/Events/Events.jsx
import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../../services/mockUserApi';
import { useUser } from '../../context/UserContext';

export default function Events() {
  const [events, setEvents] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const evts = await getAllEvents();
    setEvents(evts);
  };

  const isActive = (evt) => {
    const now = new Date();
    const start = new Date(evt.startDate);
    const end = new Date(evt.endDate);
    return now >= start && now <= end;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Voting Events</h1>
      {events.map((evt) => {
        const active = isActive(evt);
        return (
          <div key={evt.id} className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-semibold text-primary mb-1">{evt.name}</h2>
            <p className="text-gray-600 text-sm">{evt.description}</p>
            <p className="text-xs text-gray-500 mb-2">
              {evt.startDate} ~ {evt.endDate}{' '}
              {active ? <span className="text-green-600">(Active)</span> : <span className="text-gray-400">(Inactive)</span>}
            </p>
            <div className="mt-2 space-y-2">
              {evt.lineItems?.map((li, idx) => {
                const canVote = user?.role === 'voter' && user.clubIds.includes(li.clubId) && active;
                return (
                  <div key={idx} className="p-2 border rounded flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="font-bold">Club: {li.clubId}</span>, Position: <span className="font-bold">{li.position}</span>
                    </div>
                    {canVote && (
                      <button className="bg-primary text-white px-4 py-1 rounded hover:bg-indigo-700 transition mt-2 md:mt-0">
                        Vote Now
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
