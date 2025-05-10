import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const ContactCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('Submitting...');
      setTimeout(() => {
        setSubmitStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    } else {
      setSubmitStatus(null);
    }
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "60px" }} className='hero-section'>
      <Container style={{ maxWidth: "720px" }}>
        <Card className="shadow-lg border-0">
          <Card.Body className="p-5">
            <h2 className="text-center mb-4 text-primary fw-bold">Hubungi ACX WEATHER</h2>
            <p className="text-center text-muted mb-4">
              Ada pertanyaan, kritik, atau saran? Kirimkan pesan Anda melalui formulir berikut.
            </p>

            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nameInput">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="contoh@acxweather.id"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="subjectInput">
                <Form.Label>Subjek</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subjek pesan Anda"
                  value={formData.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                />
                <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="messageInput">
                <Form.Label>Pesan</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 fw-bold"
                disabled={submitStatus === 'Submitting...'}
              >
                {submitStatus === 'Submitting...' ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>

              {submitStatus && submitStatus !== 'Submitting...' && (
                <Alert variant="success" className="mt-3" dismissible>
                  {submitStatus}
                </Alert>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ContactCenter;
