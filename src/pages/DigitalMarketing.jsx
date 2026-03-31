import './Projects.css';

function DigitalMarketing() {
  const projects = [
    {
      title: 'Social Media Campaign',
      description: 'Comprehensive social media strategy that increased engagement by 200% and followers by 150%.',
      technologies: ['Facebook', 'Instagram', 'LinkedIn', 'Analytics']
    },
    {
      title: 'SEO Optimization',
      description: 'SEO campaign that improved organic search rankings and increased traffic by 300%.',
      technologies: ['Google Analytics', 'SEMrush', 'Moz', 'WordPress']
    },
    {
      title: 'Brand Animation Video',
      description: 'Animated explainer video that helped explain complex services and increased conversions.',
      technologies: ['After Effects', 'Motion Graphics', '2D Animation']
    },
    {
      title: 'Email Marketing Campaign',
      description: 'Targeted email campaigns with personalized content that achieved 45% open rate.',
      technologies: ['Mailchimp', 'HubSpot', 'Analytics', 'A/B Testing']
    }
  ];

  return (
    <div className="projects">
      <h1>Digital Marketing & Animation Projects</h1>
      <p className="projects-intro">
        Explore our digital marketing campaigns and animations that have helped clients achieve their goals.
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

export default DigitalMarketing;