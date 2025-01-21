import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  // No navbar or footer here
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}
