import React from 'react';
import { Card, Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <div className="hero-section text-center py-2">
        <nav className="breadcrumb-nav small mb-2 mt-5">
          <span className="text-muted">Beranda</span> &nbsp;&gt;&nbsp;
          <span className="text-muted">Profil</span>
        </nav>

        <h1 className="fw-bold hero-title">Profil ACX WEATHER</h1>
      </div>

      <div className="pt-3 hero-section pb-5">
        <Card className="shadow-sm border-0 container">
          <Card.Body className="p-4">
            <Row>
              <Col md={5}>
                <img
                  src="https://dataweb.bmkg.go.id/maritim/gelombang-maritim.png"
                  alt="ACX Weather"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              </Col>
              <Col md={7}>
                <h2 className="fw-bold mb-1">Selamat Datang di ACX WEATHER</h2>
                <p className="text-muted mb-3">Platform Digital Cuaca & Geofisika Indonesia</p>

                <h5 className="fw-bold mt-3 mb-4">
                  Menyediakan informasi cuaca, iklim, gempa bumi, dan peringatan dini secara cepat, akurat, dan terpercaya.
                </h5>

                <p className="text-muted mb-4">
                  <small>
                    <strong>Tentang Kami:</strong> ACX WEATHER adalah platform independen yang berkomitmen untuk menyediakan data cuaca, iklim, dan geofisika secara real-time kepada masyarakat Indonesia. Kami membantu masyarakat dalam pengambilan keputusan, mitigasi bencana, dan perencanaan aktivitas harian melalui informasi yang berbasis data dan teknologi.
                  </small>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <div className="container py-4" style={{ maxWidth: 1200, minHeight: '600px' }}>
        <h1 className="mb-3">Tentang Cuaca & Unsur-unsurnya</h1>

        <section className="mb-4">
          <h3>Iklim</h3>
          <p>
            Iklim adalah pola rata-rata kondisi cuaca seperti suhu, kelembapan, curah hujan, dan angin dalam jangka waktu panjang (biasanya 30 tahun). Di Indonesia, iklim tropis menyebabkan dua musim utama: kemarau dan penghujan. Memahami iklim membantu perencanaan pertanian, infrastruktur, dan kebijakan lingkungan.
          </p>
        </section>

        <section className="mb-4">
          <h3>Kondisi Udara</h3>
          <p>
            Kondisi udara menggambarkan keadaan atmosfer saat ini di suatu tempat, seperti suhu udara, tekanan atmosfer, arah dan kecepatan angin, serta kelembapan. Informasi ini penting untuk masyarakat dalam menentukan aktivitas sehari-hari dan untuk keselamatan transportasi udara dan laut.
          </p>
        </section>

        <section className="mb-4">
          <h3>Kelembapan</h3>
          <p>
            Kelembapan adalah jumlah uap air di udara. Kelembapan tinggi membuat cuaca terasa lebih panas dan lembap, sedangkan kelembapan rendah dapat menyebabkan udara terasa kering. Data ini berpengaruh besar terhadap kesehatan manusia, pertumbuhan tanaman, dan kenyamanan lingkungan.
          </p>
        </section>

        <section className="mb-4">
          <h3>Curah Hujan</h3>
          <p>
            Curah hujan merupakan jumlah air hujan yang turun ke permukaan bumi dalam jangka waktu tertentu. Ini bisa berupa hujan, salju (di negara empat musim), gerimis, atau hujan es. Di Indonesia, curah hujan tinggi menjadi salah satu faktor utama bencana seperti banjir dan tanah longsor.
          </p>
        </section>

        <section className="mb-4">
          <h3>Angin</h3>
          <p>
            Angin adalah pergerakan massa udara dari tekanan tinggi ke tekanan rendah. Arah dan kecepatan angin dapat mempengaruhi gelombang laut, kondisi penerbangan, serta penyebaran polusi udara. Di ACX WEATHER, data angin kami tampilkan secara aktual untuk berbagai daerah di Indonesia.
          </p>
        </section>

        <section className="mb-4">
          <h3>Faktor Tambahan Cuaca</h3>
          <p>
            Faktor cuaca lainnya seperti tekanan atmosfer, indeks sinar ultraviolet (UV), dan tutupan awan juga turut memengaruhi kenyamanan dan keselamatan masyarakat. Kami memproses semua data ini dalam sistem prediksi cuaca yang terus diperbarui setiap saat.
          </p>
        </section>
      </div>
    </>
  );
};

export default Profile;
