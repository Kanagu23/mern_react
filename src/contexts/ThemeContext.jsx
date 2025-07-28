import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(); // default value optional

export const ThemeProvider = ({ children }) => {
  // const theme = 'dark'; // this could also be dynamic state
  const [theme,setTheme]=useState("dark")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};