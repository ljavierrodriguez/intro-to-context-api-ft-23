import React, { createContext, useState } from 'react'

export const ContextTheme = createContext(null)

const ThemeContext = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    return (
        <ContextTheme.Provider value={{ theme, setTheme }}>
            {children}
        </ContextTheme.Provider>
    )
}

export default ThemeContext