import React from "react";
import './nav.css'
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavComponent = () => {
    const { pathname } = useLocation()

    return (
        <nav className="menu">
            <ul>
                <li className={pathname === '/' ? 'active' : null}><Link to="/">Home</Link></li>
                <li className={pathname === '/deformation' ? 'active' : null}><Link to="/deformation">Деформационная марка</Link></li>
                <li className={pathname === '/termistor' ? 'active' : null}><Link to="/termistor">Термокоса</Link></li>
            </ul>
        </nav>
    )
}

export default NavComponent
