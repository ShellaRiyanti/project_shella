import React from 'react';
import { SiAccuweather } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navigationItems = [
    { name: 'Profil', path: '/profile' },
    { name: 'Cuaca', path: '/cuaca' },
    { name: 'Iklim', path: '/iklim' },
    { name: 'Kualitas Udara', path: '/kualitas' },
  ];
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 border-bottom">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <div className="me-2">
                            <SiAccuweather style={{height: '40px', width: '40px'}}/>
                        </div>
                        <div>
                            <div className="fs-8 fw-bold text-uppercase">Acx Weather</div>
                        </div>
                    </Link>
                
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        {navigationItems.map((item, idx) => (
                            <li className="nav-item" key={idx}>
                            <Link 
                                className={`nav-link px-3 ${location.pathname === item.path ? 'active fw-bold' : ''}`} 
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                        <div className="ms-3">
                        <Link to="/callcenter" className="btn btn-outline-secondary">
                            Call Center
                        </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;