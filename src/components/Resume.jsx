import { Container, Row, Col, Button } from 'react-bootstrap';


export default function Resume() {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
  ];

  return (
    <Container className="resume-container text-center">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2>Resume</h2>
          <a href="{resume1}{resume2}" download className="btn btn-primary mb-4 resume-btn">
            Download Resume
          </a>
          <h3>Proficiencies</h3>
          <ul className="list-unstyled">
            {proficiencies.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
