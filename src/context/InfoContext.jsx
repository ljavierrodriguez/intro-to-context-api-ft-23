import React, { createContext, useState } from 'react'

export const Contexto = createContext(null)

const InfoContext = ({ children }) => {
    const [name, setName] = useState("John Doe")

    return (
        <Contexto.Provider value={{ name: name, setName: setName }}>
            {children}
        </Contexto.Provider>
    )
}

export default InfoContext