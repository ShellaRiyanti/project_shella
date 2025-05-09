
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
                </div>
            </nav>
        </div>
    )
}

export default Navbar;