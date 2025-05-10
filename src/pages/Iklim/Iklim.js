import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap"
import { FaUmbrella } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaWaveSquare } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";


const Iklim = () => {
  return (
    <>
    <div className='hero-section'>
    <Container className="py-5">
      <div className="text-center mb-4">
      <nav className="breadcrumb-nav small mb-2 mt-5">
          <span className="text-muted">Beranda</span> &nbsp;&gt;&nbsp;
          <span className="text-muted">Iklim</span> &nbsp;&gt;&nbsp;
          <span className="text-dark fw-semibold">Visualisasi Cuaca dan Iklim</span>
        </nav>
        <h2 className="fw-bold mb-2">Visualisasi Cuaca dan Iklim</h2>
        <p className="text-muted">Informasi Cuaca dan Iklim dalam Visualisasi Citra</p>
      </div>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Img
              variant="top"
              src="https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Indonesia.png"
              alt="Prediksi Hujan"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Footer className="bg-white border-0 text-center py-3">
              <h5 className="fw-bold m-0">Prediksi Hujan</h5>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Img
              variant="top"
              src="https://dataweb.bmkg.go.id/cuaca/angin/streamline-d10.jpg"
              alt="Hari Tanpa Hujan"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Footer className="bg-white border-0 text-center py-3">
              <h5 className="fw-bold m-0">Hari Tanpa Hujan</h5>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm p-3">
            <Card.Img
              variant="top"
              src="https://dataweb.bmkg.go.id/iklim/pch/pch.bulan.1.cond1.png"
              alt="Citra Satelit"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Footer className="bg-white border-0 text-center py-3">
              <h5 className="fw-bold m-0">Citra Satelit</h5>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-center gap-4 py-3">
        <div className="text-center">
          <div
            className="bg-light rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <FaUmbrella size={24} />
          </div>
        </div>

        <div className="text-center">
          <div
            className="bg-light rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <FaSun size={24} />
          </div>
        </div>

        <div className="text-center">
          <div
            className="bg-light rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <FaGlobe size={24} />
          </div>
        </div>

        <div className="text-center">
          <div
            className="bg-light rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <FaWaveSquare size={24} />
          </div>
        </div>

        <div className="text-center">
          <div
            className="bg-light rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <FaWind size={24} />
          </div>
        </div>

        <div className="text-center">
          <div
            className="bg-light rounded-circle p-3 mb-2 d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <FaFireFlameCurved size={24} />
          </div>
        </div>
      </div>
    </Container>
    </div>



    <div className="container py-4" style={{ maxWidth: 1200, minHeight: '600px' }}>
  <h1 className="mb-4">Iklim - Penjelasan Lengkap</h1>

  <section className="mb-4">
    <h2>Apa Itu Iklim?</h2>
    <p>
      Iklim adalah rata-rata kondisi cuaca dalam jangka panjang di suatu wilayah, biasanya diamati selama puluhan hingga ratusan tahun. 
      Iklim mencakup unsur-unsur seperti suhu, kelembapan, pola angin, curah hujan, dan variasi musiman. 
      Memahami iklim sangat penting untuk mengetahui bagaimana lingkungan alami terbentuk dan bagaimana iklim memengaruhi ekosistem, pertanian, serta aktivitas manusia.
    </p>
  </section>

  <section className="mb-4">
    <h2>Zona-Zona Iklim</h2>
    <p>
      Permukaan Bumi dibagi menjadi beberapa zona iklim berdasarkan pola suhu dan curah hujan, antara lain:
    </p>
    <ul>
      <li><strong>Tropis:</strong> Hangat dan lembap sepanjang tahun, berada di sekitar garis khatulistiwa.</li>
      <li><strong>Arid (Gurun):</strong> Sangat kering dengan curah hujan yang sangat sedikit.</li>
      <li><strong>Temperate (Sedang):</strong> Suhu sedang dengan empat musim yang jelas.</li>
      <li><strong>Kontinental:</strong> Perbedaan suhu antar musim sangat besar, musim panas panas dan musim dingin sangat dingin.</li>
      <li><strong>Polar:</strong> Sangat dingin dengan musim dingin yang panjang dan musim panas yang sangat singkat.</li>
    </ul>
  </section>

  <section className="mb-4">
    <h2>Faktor-Faktor yang Mempengaruhi Iklim</h2>
    <p>
      Beberapa faktor utama yang memengaruhi iklim suatu wilayah antara lain:
    </p>
    <ul>
      <li><strong>Lintang Geografis:</strong> Jarak dari garis khatulistiwa menentukan intensitas sinar matahari dan suhu.</li>
      <li><strong>Ketinggian:</strong> Semakin tinggi suatu tempat, biasanya suhunya semakin rendah.</li>
      <li><strong>Arus Laut:</strong> Arus laut hangat atau dingin dapat memengaruhi suhu wilayah pesisir.</li>
      <li><strong>Topografi:</strong> Pegunungan dapat menghalangi massa udara dan memengaruhi pola curah hujan.</li>
      <li><strong>Aktivitas Manusia:</strong> Urbanisasi dan emisi gas rumah kaca berdampak besar pada perubahan iklim global.</li>
    </ul>
  </section>

  <section className="mb-4">
    <h2>Perubahan Iklim</h2>
    <p>
      Perubahan iklim adalah perubahan signifikan dalam pola iklim global yang terjadi dalam jangka panjang. 
      Penyebab utamanya adalah aktivitas manusia seperti pembakaran bahan bakar fosil dan deforestasi. 
      Dampaknya meliputi kenaikan suhu global, mencairnya es di kutub, naiknya permukaan laut, dan perubahan ekstrem dalam pola cuaca, yang pada akhirnya memengaruhi keanekaragaman hayati dan kesejahteraan manusia.
    </p>
  </section>

  <section className="mb-4">
    <h2>Mengapa Penting Mempelajari Iklim?</h2>
    <p>
      Mempelajari iklim sangat penting untuk memprediksi tren cuaca, merencanakan pertanian, mengelola sumber daya alam, 
      serta merancang strategi mitigasi dan adaptasi terhadap perubahan iklim demi kehidupan yang berkelanjutan.
    </p>
  </section>
    </div>

    </>
    
  );
};

export default Iklim;