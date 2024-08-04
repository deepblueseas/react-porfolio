import { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="contact-card">
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Form
          name="contact"
          method="POST"
          action="/.netlify/functions/sendEmail"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary custom-submit-btn">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
