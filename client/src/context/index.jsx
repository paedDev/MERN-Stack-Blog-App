import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    desciption: "",
  });
  return (
    <GlobalContext.Provider value={{ formData, setFormData }}>
      {children}
    </GlobalContext.Provider>
  );
}
