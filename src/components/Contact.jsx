import { Card, Button, Form } from 'react-bootstrap';

export default function Contact() {
  return (
    <Card className="contact-card">
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Form
          name="contact"
          method="POST"
          netlify
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
      </Card.Body>
    </Card>
  );
}
