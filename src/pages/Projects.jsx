import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Globe, Code, ShoppingCart } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "HTML/CSS"];

  const projects = [
    {
      id: 1,
      title: "SQI",
      category: "HTML/CSS",
      image: "/images/sqi.png",
      desc: "Portfolio website showcasing products and services.",
      link: "https://sqi-sage.vercel.app",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Safia Al Dhabi Trading",
      category: "HTML/CSS",
      image: "/images/safiaaldhabitrading.png",
      desc: "Business website for trading establishment with service showcase.",
      link: "https://safiaaldhabitrading.vercel.app",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Asia Glory Co",
      category: "HTML/CSS",
      image: "/images/asiagloryco.png",
      desc: "Cold Storage & Warehouse Service website with service showcase and contact forms.",
      link: "https://asiagloryco.vercel.app",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Safia Sattar Sons",
      category: "HTML/CSS",
      image: "/images/safiasattarsons.png",
      desc: "Business website for trading company with product catalog and company information.",
      link: "https://safiasattarsons.vercel.app",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter"
          >
            PROJECTS<span className="text-brand-blue">.</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 0.1, rotate: 5 }}
            className="absolute -top-10 right-0 text-8xl md:text-[15vw] font-brush text-brand-black pointer-events-none"
          >
            Works
          </motion.span>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-display text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat ? "bg-brand-blue text-white shadow-lg" : "bg-gray-50 text-brand-black hover:bg-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-display font-black text-brand-black uppercase tracking-tighter">{project.title}</h3>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-50 p-3 rounded-2xl text-brand-black group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
