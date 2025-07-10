import React from 'react';
import { Alert, Card, Container, Button } from 'react-bootstrap';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const AirCondition = () => {
  const airQualityData = [
    { city: "Kubu Raya", time: "14.00 WIB", value: "13,6", status: "Baik" },
    { city: "Samarinda", time: "14.00 WIB", value: "13,2", status: "Baik" },
    { city: "Pesawaran", time: "14.00 WIB", value: "12,5", status: "Baik" },
    { city: "Pangkalanbun", time: "14.00 WIB", value: "11,9", status: "Baik" },
    { city: "Malang", time: "14.00 WIB", value: "11,3", status: "Baik" },
    { city: "Jakarta", time: "14.00 WIB", value: "14,2", status: "Baik" },
    { city: "Bandung", time: "14.00 WIB", value: "12,8", status: "Baik" },
  ];

  const scrollCards = (direction) => {
    const container = document.getElementById("air-quality-cards");
    if (container) {
      const scrollAmount = direction === "left" ? -280 : 280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero-section text-center mb-5 py-4">
        <nav className="breadcrumb-nav small mb-2 mt-5">
          <span className="text-muted">Beranda</span> &nbsp;&gt;&nbsp;
          <span className="text-muted">Kualitas Udara</span> &nbsp;&gt;&nbsp;
          <span className="text-dark fw-semibold">Konsentrasi Partikulat (PM2.5)</span>
        </nav>

        <h1 className="fw-bold hero-title mb-2">Konsentrasi Partikulat (PM2.5)</h1>
        <p className="text-muted">Informasi seputar kualitas udara berdasarkan konsentrasi partikel halus (PM2.5) di berbagai wilayah Indonesia</p>

        <div className='container'>
          <Alert variant="warning">
            <Alert.Heading>Peringatan Kualitas Udara</Alert.Heading>
            <p>
              Beberapa wilayah mungkin memiliki kualitas udara yang berbeda dari data yang ditampilkan.{" "}
              <Button variant="link" size="sm" onClick={() => alert("Menuju detail peringatan")}>Selengkapnya &gt;&gt;</Button>
            </p>
          </Alert>
        </div>
      </div>

      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Data Kualitas Udara</h2>
        </div>

        <div className="position-relative">
          <button
            aria-label="Scroll ke kiri"
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
            aria-label="Scroll ke kanan"
            className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y z-1 shadow-sm"
            style={{ marginRight: "-15px" }}
            onClick={() => scrollCards("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </Container>

      <div className="container py-4" style={{ maxWidth: 1200, minHeight: '600px' }}>
        <h1 className="mb-4">Kondisi Udara - Penjelasan Lengkap</h1>

        <section className="mb-4">
          <h2>Apa itu Kondisi Udara?</h2>
          <p>
            Kondisi udara mencakup keadaan atmosfer saat ini, termasuk suhu, kelembapan, kecepatan angin, tekanan udara, dan tingkat polusi.
            Informasi ini penting untuk menilai tingkat kenyamanan dan keamanan lingkungan bagi manusia dan makhluk hidup lainnya.
          </p>
        </section>

        <section className="mb-4">
          <h2>Komponen Penting Kondisi Udara</h2>
          <ul>
            <li><strong>Suhu:</strong> Menentukan tingkat panas atau dingin udara, memengaruhi kenyamanan dan perubahan cuaca.</li>
            <li><strong>Kelembapan:</strong> Jumlah uap air di udara. Kelembapan tinggi dapat membuat udara terasa lebih panas.</li>
            <li><strong>Angin:</strong> Pergerakan udara akibat perbedaan tekanan, memengaruhi pola cuaca dan penyebaran polutan.</li>
            <li><strong>Tekanan Udara:</strong> Gaya yang diberikan oleh atmosfer, berpengaruh terhadap pembentukan awan dan sistem cuaca.</li>
            <li><strong>Kualitas Udara:</strong> Tingkat partikel dan polutan di udara seperti PM2.5, PM10, CO, NO₂, SO₂, dan O₃ yang berdampak pada kesehatan.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>Dampak Kondisi Udara Terhadap Kehidupan Sehari-hari</h2>
          <p>
            Kondisi udara yang buruk dapat menyebabkan gangguan pernapasan, iritasi mata, dan penyakit kronis. Memahami kondisi udara membantu
            masyarakat untuk mengambil tindakan preventif seperti memakai masker atau membatasi aktivitas luar ruangan.
          </p>
        </section>

        <section className="mb-4">
          <h2>Pengawasan & Pelaporan</h2>
          <p>
            Stasiun meteorologi dan satelit terus memantau kondisi udara secara real-time. Data ini digunakan untuk prakiraan cuaca, indeks kualitas udara (AQI),
            serta sistem peringatan dini bagi masyarakat.
          </p>
        </section>

        <section className="mb-4">
          <h2>Upaya Meningkatkan Kualitas Udara</h2>
          <p>
            Langkah seperti mengurangi emisi kendaraan, penghijauan kota, penggunaan energi bersih, dan pengelolaan sampah dapat secara signifikan
            meningkatkan kualitas udara dan mendukung kesehatan masyarakat.
          </p>
        </section>
      </div>
    </>
  );
};

export default AirCondition;
