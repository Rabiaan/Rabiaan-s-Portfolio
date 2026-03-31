import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Play, Globe, Target, Rocket } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Branding", "Website Development", "Digital Marketing", "Animation"];

  const projects = [
    {
      id: 1,
      title: "Corneffey",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1559056199-d9572f93064e?q=80&w=800&auto=format&fit=crop",
      desc: "A playful fusion of coffee and ice cream cone branding.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Desi Paavji",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
      desc: "Maharashtrian street food meets Punjabi flair.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Suzi Cosmetics",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800&auto=format&fit=crop",
      desc: "Modern beauty brand with elegant visual identity.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Shake Planet",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
      desc: "Interstellar milkshake brand with vibrant visuals.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 5,
      title: "EcoSphere Web",
      category: "Website Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      desc: "A sustainable living platform with interactive UI.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Growth Hackers",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      desc: "Data-driven marketing campaign for a tech startup.",
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 7,
      title: "Cosmic Motion",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      desc: "A mesmerizing motion graphics piece for a sci-fi brand.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      id: 8,
      title: "Luxe Estate",
      category: "Website Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      desc: "Premium real estate portal with sleek design.",
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
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-display font-black text-brand-black uppercase tracking-tighter">{project.title}</h3>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-2xl text-brand-black group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                      {project.category === "Animation" ? <Play className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                    </div>
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
