import {Alert } from 'react-bootstrap';

const Hero = () => {
    return (
      <div className="hero-section text-center mb-5 py-4">
        <nav className="breadcrumb-nav small mb-2 mt-5">
          <span className="text-muted">Beranda</span> &nbsp;&gt;&nbsp;
          <span className="text-muted">Cuaca Jawa Barat</span> &nbsp;&gt;&nbsp;
          <span className="text-dark fw-semibold">Kota Cirebon</span>
        </nav>
  
        <h1 className="fw-bold hero-title mb-2">Prakiraan Cuaca Kota Cirebon</h1>
        <p className="text-muted">Prakiraan cuaca kecamatan di Kota Cirebon, Jawa Barat</p>
      </div>
    );
  };
  
  export default Hero;