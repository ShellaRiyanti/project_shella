
import React, { useState } from 'react';
import { SiAccuweather } from "react-icons/si";

function Navbar() {
    const [setActiveTab] = useState('home');
    const navigationItems = [
    { name: 'Profil', active: false },
    { name: 'Cuaca', active: true },
    { name: 'Iklim', active: false },
    { name: 'Kualitas Udara', active: false },
  ];
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <div className="me-2">
                            <SiAccuweather style={{height: '45px', width: '45px'}}/>
                        </div>
                        <div>
                            <div className="fs-8 fw-bold text-uppercase">Acx Weather</div>
                        </div>
                    </a>
                
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        {navigationItems.map((item, idx) => (
                            <li className="nav-item" key={idx}>
                            <a 
                                className={`nav-link px-3 ${item.active ? 'active fw-bold' : ''}`} 
                                href="#"
                                onClick={() => setActiveTab(item.name.toLowerCase())}
                            >
                                {item.name}
                            </a>
                            </li>
                        ))}
                        </ul>
                        <div className="ms-3">
                        <button className="btn btn-outline-secondary">
                            Call Center
                        </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;