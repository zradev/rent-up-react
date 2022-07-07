import React, { useState } from "react"
import "./Header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png';
import { FaSignInAlt, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const [navList, setNavList] = useState(false)

    return (
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <img src={logo} alt='wtf' />
                    </div>
                    <div className='nav'>
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='button flex'>
                        <h4>
                            <span>2</span> My List
                        </h4>
                        <button className='btn1'>
                            Sign In <FaSignInAlt />
                        </button>
                    </div>

                    <div className='toggle'>
                        <button onClick={() => setNavList(!navList)}>{navList ? <FaTimes /> : <FaBars />}</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header