import React, { useContext } from 'react'
import { Contexto } from '../context/InfoContext'

const About = () => {
    const { name } = useContext(Contexto)

    return (
        <>
            <div>About</div>
            <p>Name: {name}</p>
        </>
    )
}

export default About