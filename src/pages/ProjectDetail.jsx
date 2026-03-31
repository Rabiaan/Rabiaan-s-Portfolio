 import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      window.scrollTo(0, 0);
      document.title = `${foundProject.title} — Rabiaan`;
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-blue transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium uppercase tracking-widest">Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Color Palette */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-wider">Color Palette</h3>
              <div className="flex flex-wrap gap-3">
                {project.colors && project.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>

              {/* Project Info */}
              <div className="mt-8">
                <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-wider">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Category</span>
                    <span className="text-brand-blue font-bold">{project.category}</span>
                  </div>
                  {project.subtitle && (
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Subtitle</span>
                      <span className="text-white font-medium">{project.subtitle}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link && project.link !== '#' && (
                    <div className="pt-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-blue text-white font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-full hover:bg-brand-blue/80 transition-colors"
                      >
                        Launch Website →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Project Content */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Project Title */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                  {project.title}
                </h1>
              </div>

              {/* Overview */}
              <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 mb-8">
                <span className="text-brand-blue font-bold text-sm uppercase tracking-widest block mb-4">Overview</span>
                <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Main Image */}
              <div className="rounded-[3rem] overflow-hidden mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
              </div>

              {/* Additional Images Grid */}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.additionalImages.map((img, index) => (
                    <div key={index} className="rounded-[2rem] overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${project.title} - ${index + 1}`} 
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Typography Section */}
              {project.fonts && (
                <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-[2rem] p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tighter">Typography</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.fonts.heading && (
                      <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Heading Font</span>
                        <div className="text-4xl text-white mb-2" style={{ fontFamily: project.fonts.heading }}>
                          Aa
                        </div>
                        <span className="text-gray-400 text-sm">{project.fonts.heading}</span>
                      </div>
                    )}
                    {project.fonts.body && (
                      <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Body Font</span>
                        <p className="text-gray-300 text-sm" style={{ fontFamily: project.fonts.body }}>
                          The quick brown fox jumps over the lazy dog.
                        </p>
                        <span className="text-gray-400 text-sm">{project.fonts.body}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-gray-300 backdrop-blur transition hover:text-brand-blue hover:border-brand-blue/50"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
