// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VoterDashboard from '../pages/Voter/VoterDashboard';
import CandidateDashboard from '../pages/Candidate/CandidateDashboard';
import Events from '../pages/Events/Events';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/Error/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/voter" element={<VoterDashboard />} />
      <Route path="/candidate" element={<CandidateDashboard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
