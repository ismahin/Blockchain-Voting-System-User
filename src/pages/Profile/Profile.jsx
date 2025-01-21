// src/pages/Profile/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { getMyApplications } from '../../services/mockUserApi';

export default function Profile() {
  const { user } = useUser();
  const [apps, setApps] = useState([]);

  useEffect(() => {
    if (user?.role === 'candidate') {
      getMyApplications(user.varsityId).then(setApps);
    }
  }, [user]);

  if (!user) {
    return <div className="p-6">Not logged in.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">My Profile</h1>
      <div className="bg-white p-4 rounded shadow max-w-md">
        <p><strong>Varsity ID:</strong> {user.varsityId}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Clubs:</strong> {user.clubIds.join(', ')}</p>
      </div>
      {user.role === 'candidate' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">My Applications</h2>
          {apps.length === 0 ? (
            <p>No applications found.</p>
          ) : (
            <ul className="list-disc ml-6">
              {apps.map(app => (
                <li key={app.id}>
                  Club: {app.clubId}, Position: {app.position}, Status: {app.status}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
