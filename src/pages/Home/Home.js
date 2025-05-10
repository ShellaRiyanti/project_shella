import React from 'react';
import { Card, Row, Col, Badge, Button, Container } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const HomePage = () => {
  const airQualityData = [
    { city: "Kubu Raya", time: "14.00 WIB", value: "13,6", status: "Baik" },
    { city: "Samarinda", time: "14.00 WIB", value: "13,2", status: "Baik" },
    { city: "Pesawaran", time: "14.00 WIB", value: "12,5", status: "Baik" },
    { city: "Pangkalanbun", time: "14.00 WIB", value: "11,9", status: "Baik" },
    { city: "Malang", time: "14.00 WIB", value: "11,3", status: "Baik" },
    { city: "Jakarta", time: "14.00 WIB", value: "14,2", status: "Baik" },
    { city: "Bandung", time: "14.00 WIB", value: "12,8", status: "Baik" },
  ]

  // Function to scroll the cards container
  const scrollCards = (direction) => {
    const container = document.getElementById("air-quality-cards")
    if (container) {
      const scrollAmount = direction === "left" ? -280 : 280
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const pressReleases = [
    {
      id: 1,
      image: "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/Screenshot-2025-05-07-144647.png?fit=1280%2C720&ssl=1",
      date: "08 Mei 2025",
      title:
        "Krisis Air dan Ketahanan Pangan di Indonesia: ACX Weather Sebut Restorasi Sungai dan Pemanenan Air Hujan sebagai Solusi Strategis",
      link: "#",
    },
    {
      id: 2,
      image: "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/WhatsApp-Image-2025-05-06-at-13.50.33_c722c8ee.jpg?fit=1280%2C853&ssl=1",
      date: "06 Mei 2025",
      title: "ACX Weather: 2024 Jadi Tahun Terpanas Sepanjang Sejarah, Perubahan Iklim Kian Membahayakan Kesehatan Publik",
      link: "#",
    },
    {
      id: 3,
      image: "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/WhatsApp-Image-2025-05-06-at-12.56.17_5b366742.jpg?fit=1280%2C960&ssl=1",
      date: "06 Mei 2025",
      title: "Cegah Karhutla, ACX Weather dan BNPB Kolaborasi Gelar Operasi Modifikasi Cuaca Selama 7 Hari di Riau",
      link: "#",
    },
  ]

  return (
    <>
      <div className="py-5 hero-section">
      <Card className="shadow-sm border-0 container">
        <Card.Body className="p-4">
          <Row>
            <Col md={5}>
              <img
                src="https://dataweb.bmkg.go.id/maritim/gelombang-maritim.png" // Ganti dengan gambar tentang cuaca, iklim, atau logo ACX
                alt="ACX Weather"
                className="img-fluid rounded"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </Col>
            <Col md={7}>
              <h2 className="fw-bold mb-1">Selamat Datang di ACX WEATHER</h2>
              <p className="text-muted mb-3">Platform Digital Cuaca & Geofisika Indonesia</p>

              <h5 className="fw-bold mt-3 mb-4">
                Menyediakan informasi cuaca, iklim, gempa bumi, dan peringatan dini secara cepat dan akurat.
              </h5>

              <p className="text-muted mb-4">
                <small>
                  <strong>Tentang Kami:</strong> ACX WEATHER bertujuan menjadi sumber terpercaya untuk kebutuhan data lingkungan dan mitigasi bencana di Indonesia.
                </small>
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </div>

      <div className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
      <Card className="shadow-sm border-0 container">
        <Card.Body className="p-4">
          <Row>
            <Col md={5}>
              <img
                src="https://static.bmkg.go.id/20250510112026.mmi.jpg"
                alt="Earthquake Map"
                className="img-fluid rounded"
                style={{ maxHeight: "400px" }}
              />
            </Col>
            <Col md={7}>
              <h2 className="fw-bold mb-1">Gempa Bumi Terkini</h2>
              <p className="text-muted mb-3">10 Mei 2025, 11:20:26 WIB</p>

              <Badge bg="success" className="mb-3 py-2 px-3" style={{ fontWeight: "normal" }}>
                Gempa Dirasakan
              </Badge>

              <h5 className="fw-bold mt-3 mb-4">Pusat gempa berada di darat 7 km Barat Laut Pariaman</h5>

              <Row className="mb-4">
                <Col sm={4}>
                  <Card className="border-light">
                    <Card.Body className="py-2 px-3">
                      <small className="text-muted d-block">Magnitudo:</small>
                      <div className="d-flex align-items-center">
                        <span className="text-danger me-1">⚡</span>
                        <span className="fw-bold">2,7</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card className="border-light">
                    <Card.Body className="py-2 px-3">
                      <small className="text-muted d-block">Kedalaman:</small>
                      <div className="d-flex align-items-center">
                        <span className="text-success me-1">⊙</span>
                        <span className="fw-bold">10 Km</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card className="border-light">
                    <Card.Body className="py-2 px-3">
                      <small className="text-muted d-block">Koordinat Lokasi:</small>
                      <div className="d-flex align-items-center">
                        <span className="text-primary me-1">📍</span>
                        <span className="fw-bold">0,57 LS - 100,10 BT</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <p className="text-muted mb-4">
                <small>
                  <strong>Saran ACX Weather:</strong> Hati-hati terhadap gempa bumi susulan yang mungkin terjadi
                </small>
              </p>

              <Button variant="link" className="text-primary p-0 d-flex align-items-center">
                Lihat Semuanya <FaArrowRight className='ms-1'/>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </div>

      <div>
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Kualitas Udara</h2>
        <a href="/kualitas" className="text-primary text-decoration-none d-flex align-items-center">
          Lihat Semuanya <FaArrowRight className='ms-1'/>
        </a>
      </div>

      <div className="position-relative">
        <button
          className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y z-1 shadow-sm"
          style={{ marginLeft: "-15px" }}
          onClick={() => scrollCards("left")}
        >
          <FaChevronLeft />
        </button>

        <div
          id="air-quality-cards"
          className="d-flex overflow-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
              #air-quality-cards::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {airQualityData.map((item, index) => (
            <Card
              key={index}
              className="border-0 me-3 flex-shrink-0"
              style={{
                width: "250px",
                backgroundColor: "#f0f9f0",
                borderRadius: "12px",
              }}
            >
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mb-1">{item.city}</h5>
                <p className="text-muted small mb-4">{item.time}</p>

                <div className="d-flex justify-content-center mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "2px solid #4CAF50",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-success fw-bold mb-1">{item.value}</h2>
                <p className="mb-0">{item.status}</p>
              </Card.Body>
            </Card>
          ))}
        </div>

        <button
          className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y z-1 shadow-sm"
          style={{ marginRight: "-15px" }}
          onClick={() => scrollCards("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </Container>
      </div>
      <div>
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Iklim</h2>
        <a href="/iklim" className="text-primary text-decoration-none d-flex align-items-center">
          Lihat Semuanya <FaArrowRight className="ms-1" />
        </a>
      </div>

      <Row>
        {pressReleases.map((press) => (
          <Col key={press.id} md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img
                variant="top"
                src={press.image}
                alt={press.title}
                style={{ height: "250px", objectFit: "cover" }}
                className='p-2'
              />
              <Card.Body className="d-flex flex-column">
                <small className="text-muted mb-2">{press.date}</small>
                <Card.Title className="fw-bold" style={{ fontSize: "1.1rem" }}>
                  {press.title}
                </Card.Title>
                <div className="mt-auto pt-3">
                  <a
                    href={press.link}
                    className="text-primary d-flex align-items-center text-decoration-none"
                    style={{ fontSize: "0.9rem", fontWeight: "500" }}
                  >
                    Baca selengkapnya <FaArrowRight size={14} className="ms-1" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      </div>
    </>
  );
};

export default HomePage;

