// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Auth/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import AppRoutes from './routes/AppRoutes';
import NotFound from './pages/Error/NotFound';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* PROTECTED */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/*" element={<AppRoutes />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
