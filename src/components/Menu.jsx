import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa6'
import { Contexto } from '../context/InfoContext'

const Menu = () => {

    const { theme, setTheme } = useContext(ContextTheme);
    const { name } = useContext(Contexto)
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <span className='nav-link'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={theme === 'light' ? false : true } onChange={() => setTheme(theme === 'light' ? "dark": "light")} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{theme === 'light' ? <FaSun /> : <FaMoon />}</label>
                    </div>
                </span>
            </li>
            <li className="nav-item">
                <span className="nav-link">
                    User: {name}
                </span>
            </li>
        </ul>
    )
}

export default Menu