import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";

const footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                    <SiAccuweather style={{height: '45px', width: '45px'}} className='mb-3'/>
                        <h5>ACX Weather</h5>
                        <p className="small">
                            ACX Weather adalah lembaga yang melaksanakan tugas di bidang meteorologi, klimatologi, kualitas udara dan geofisika.
                        </p>
                    </Col>
                    <Col md={2} sm={6} className="mb-4 mb-md-0">
                        <h6>DUKUNGAN</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#!" className="text-light text-decoration-none">Informasi Cuaca</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">Cuaca Maritim</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">Cuaca Penerbangan</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">CEWS</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">InaTEWS</a></li>
                        </ul>
                    </Col>
                    <Col md={2} sm={6} className="mb-4 mb-md-0">
                        <h6>TAUTAN</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#!" className="text-light text-decoration-none">Data Online ACX</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">Pusdiklat ACX</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">STMKG</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">Perpustakaan ACX</a></li>
                            <li><a href="#!" className="text-light text-decoration-none">Portal SSO ACX</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6>APLIKASI INFO ACX</h6>
                        <div className="mb-3 d-flex my-3 justify-content-center">
                            <div className='mx-1 me-3'>
                                <FaGooglePlay size={20}/>
                            </div>
                            <div className='mx-1 me-3'>
                                <FaAppStore size={20}/>
                            </div>
                        </div>
                        <h6>MEDIA SOSIAL</h6>
                        <div className="d-flex mx-5 my-3 justify-content-center">
                            <a href="#!" className="text-light me-3"><FaFacebookF size={20}/></a>
                            <a href="#!" className="text-light me-3"><FaTwitter size={20}/></a>
                            <a href="#!" className="text-light me-3"><FaInstagram size={20}/></a>
                            <a href="#!" className="text-light me-3"><FaYoutube size={20}/></a>
                            <a href="#!" className="text-light"><FaWhatsapp size={20}/></a>
                        </div>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start small">
                        © {new Date().getFullYear()} - ACX Weather
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <Button variant="outline-light" size="sm" onClick={scrollToTop}>
                            <FaArrowUp className="me-2"/> Kembali ke atas
                        </Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default footer;