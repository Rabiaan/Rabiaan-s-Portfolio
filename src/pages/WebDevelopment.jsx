import './Projects.css';

function WebDevelopment() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration, inventory management, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Corporate Website',
      description: 'Modern corporate website with company information, team profiles, and contact functionality.',
      technologies: ['React', 'CSS', 'Firebase']
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment booking, medical records, and doctor consultation.',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing website with advanced search, filters, and virtual tours.',
      technologies: ['React', 'Next.js', 'Tailwind CSS']
    }
  ];

  return (
    <div className="projects">
      <h1>Web Development Projects</h1>
      <p className="projects-intro">
        Explore our portfolio of custom websites and web applications built with modern technologies.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebDevelopment;