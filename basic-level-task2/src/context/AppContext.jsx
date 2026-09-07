import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [userSession, setUserSession] = useState({
    username: "Intern Scholar",
    role: "Web Development Intern",
  });
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <AppContext.Provider
      value={{ userSession, setUserSession, notes, addNote }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
