import { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send email.');
    }
  };

  return (
    <Card className="contact-card">
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Form
          name="contact"
          method="POST"
          netlify
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Your message"
              required
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary custom-submit-btn">
            Submit
          </Button>
        </Form>
        {status && <p>{status}</p>}
      </Card.Body>
    </Card>
  );
}
