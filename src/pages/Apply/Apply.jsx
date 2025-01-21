// src/pages/Apply/Apply.jsx
import React, { useEffect, useState } from 'react';
import { getAllClubs, createApplication } from '../../services/mockUserApi';
import { useUser } from '../../context/UserContext';

function Apply() {
  const { user } = useUser();
  const [clubs, setClubs] = useState([]);
  const [clubId, setClubId] = useState('');
  const [position, setPosition] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    loadClubs();
  }, []);

  const loadClubs = async () => {
    const c = await getAllClubs();
    setClubs(c);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!clubId || !position.trim()) return;

    await createApplication({
      name: user.varsityId, // or user’s real name
      clubId: Number(clubId),
      position: position.trim(),
    });
    setSuccessMsg('Application submitted successfully!');
    setClubId('');
    setPosition('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Apply for Position</h1>
      {successMsg && (
        <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
          {successMsg}
        </div>
      )}
      <form onSubmit={handleApply} className="space-y-4 max-w-md bg-white p-4 rounded shadow">
        <div>
          <label className="block font-semibold mb-1">Select Club</label>
          <select
            className="border p-2 w-full"
            value={clubId}
            onChange={(e) => setClubId(e.target.value)}
          >
            <option value="">-- Select --</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Position</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="President, Secretary, etc."
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded font-bold"
        >
          Apply
        </button>
      </form>
    </div>
  );
}

export default Apply;
