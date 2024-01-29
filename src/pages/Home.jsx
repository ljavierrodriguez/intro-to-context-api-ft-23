import React, { useContext, useState } from 'react'
import { Contexto } from '../context/InfoContext'

const Home = () => {

    const { name, setName } = useContext(Contexto) // Contexto.Consumer

    //const [name, setName] = useState("")

    return (
        <>
            <div>Home</div>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        </>
    )
}

export default Home