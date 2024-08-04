import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Time Capsule Group Project',
    imageUrl: 'src/assets/images/timecapsulereadme.png',
    deployedUrl: 'https://beeceetee.github.io/TimeCapsule/',
    githubUrl: 'https://github.com/BeeCeeTee/TimeCapsule',
  },
  {
    title: 'Employee Payroll Tracker',
    imageUrl: 'src/assets/images/employeepayrollimage.png',
    deployedUrl: 'https://github.com/deepblueseas/employee-payroll-tracker',
    githubUrl: 'https://github.com/user/repo2',
  },
  {
    title: 'Project 3',
    imageUrl: '/path/to/image3.jpg',
    deployedUrl: 'https://deployed-app-3.com',
    githubUrl: 'https://github.com/user/repo3',
  },
  {
    title: 'Project 4',
    imageUrl: '/path/to/image4.jpg',
    deployedUrl: 'https://deployed-app-4.com',
    githubUrl: 'https://github.com/user/repo4',
  },
  {
    title: 'Project 5',
    imageUrl: '/path/to/image5.jpg',
    deployedUrl: 'https://deployed-app-5.com',
    githubUrl: 'https://github.com/user/repo5',
  },
  {
    title: 'Project 6',
    imageUrl: '/path/to/image6.jpg',
    deployedUrl: 'https://deployed-app-6.com',
    githubUrl: 'https://github.com/user/repo6',
  },
];

export default function Portfolio() {
  return (
    <Container className="portfolio-container">
      <div className='portfolio-name'>
      <h2 className='portfolio-title'>Portfolio</h2>
      <h3>Below are some examples of applications I worked on in the CWRU Bootcamp</h3>
      </div>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
              </a>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on GitHub
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
