import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingNavbar from '../components/layout/LandingNavbar';

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Landing navbar at the top */}
      <LandingNavbar />
      <Outlet />
    </div>
  );
}
