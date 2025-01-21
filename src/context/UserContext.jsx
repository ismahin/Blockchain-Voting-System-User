import React, { createContext, useState, useContext, useEffect } from 'react';

// Our user context
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // { varsityId, role, clubIds, etc. }

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (varsityId, password, role) => {
    // For demonstration, any non-empty fields will "succeed"
    if (!varsityId || !password || !role) {
      return false;
    }
    const newUser = {
      varsityId,
      password,
      role,
      // example: if voter, they might belong to clubs [1, 2], if candidate maybe [1]
      clubIds: role === 'voter' ? [1, 2] : [1],
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
