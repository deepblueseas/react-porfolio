const projects = [
    {
      title: 'Time Capsule Group Project',
      imageUrl: 'src/assets/images/timecapsulereadme.png',
      deployedUrl: 'https://beeceetee.github.io/TimeCapsule/',
      githubUrl: 'https://github.com/BeeCeeTee/TimeCapsule',
    },
    {
      title: 'Project 2',
      imageUrl: '/path/to/image2.jpg',
      deployedUrl: 'https://deployed-app-2.com',
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
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              </a>
              <div className="project-info">
                <h3>{project.title}</h3>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }