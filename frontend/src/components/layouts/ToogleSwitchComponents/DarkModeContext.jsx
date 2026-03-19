// src/context/DarkModeContext.jsx (Ispravljen)

// Uvežemo useEffect zajedno sa ostalim React kukama
import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add("darkMode");
                document.documentElement.classList.remove("lightMode");
            } else {
                document.documentElement.classList.add("lightMode");
                document.documentElement.classList.remove("darkMode");
            }
        },
        [isDarkMode]
    );

    function toggleDarkMode() {
        setIsDarkMode((isDark) => !isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined)
        throw new Error("DarkModeContext was used outside of DarkModeProvider");
    return context;
}

export { DarkModeProvider, useDarkMode };