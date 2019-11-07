import React from 'react'
import NavLinks from '../../molecules/navLinks'
import "./index.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="row mt-1 react-hn-navbar">
            <div className="col flex-grow-0 m-1">
                <img src="https://red-oak-consulting.com/assets/redoak.png" width="24" alt="Logo" />
            </div>
            <div className="col pl-0 my-auto">
                <Link to="/news" className="mr-3 react-hn-title">Hacker News Workshop Client</Link>
                <NavLinks />
            </div>
        </div>
    )
}

export default Navbar
