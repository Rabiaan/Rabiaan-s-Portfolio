import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Globe, Code, ShoppingCart } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "WordPress", "HTML/CSS", "React", "Fullstack", "TypeScript"];

  const projects = [
    {
      id: 1,
      title: "Fitness Pro",
      category: "TypeScript",
      image: "/images/fitness-pro.png",
      desc: "Full Stack Fitness Management App with workout tracking, user authentication, and progress monitoring.",
      link: "https://fitness-pro-production.up.railway.app/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 5,
      title: "FrameGen",
      category: "React",
      image: "/images/frame-gen.png",
      desc: "React Business Portfolio for marketing agency providing web development, marketing, animation, and graphics services.",
      link: "https://frame-gen.vercel.app/",
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Habibi Bites",
      category: "Fullstack",
      image: "/images/habibi-bites.png",
      desc: "Full Stack Restaurant Management system with online ordering, table reservation, and menu management.",
      link: "https://habibi-bites.vercel.app/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 3,
      title: "React E-commerce Platform",
      category: "React",
      image: "/images/ecommerce-store.png",
      desc: "Fullstack E-commerce Store with cart, checkout, and payment integration (In Progress).",
      link: "#",
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Code Hills",
      category: "React",
      image: "/images/codehills.png",
      desc: "React Business Portfolio showcasing development services and projects.",
      link: "https://codehills.vercel.app/",
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 5,
      title: "SamarTex",
      category: "WordPress",
      image: "/images/samartex.png",
      desc: "WooCommerce store with custom theme and seamless checkout flows.",
      link: "https://samartex.store/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 6,
      title: "TheNutAffair",
      category: "WordPress",
      image: "/images/nutaffair.png",
      desc: "E-commerce site for food products with online ordering system.",
      link: "https://nutaffair.ethostechsol.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 7,
      title: "Delicacy Bakers",
      category: "WordPress",
      image: "/images/delicacy.png",
      desc: "E-commerce site for bakery products with custom styling.",
      link: "https://delicacy.ethostechsol.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 8,
      title: "Brand Architect",
      category: "WordPress",
      image: "/images/brandarc.png",
      desc: "Brand and Digital Marketing Agency website with service showcase.",
      link: "https://brandarchitectsconsulting.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 9,
      title: "JawShee Candles",
      category: "WordPress",
      image: "/images/jawshee.png",
      desc: "Ecommerce brand website for candles with product catalog.",
      link: "https://jaw.devsphere.digital/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 10,
      title: "Asia Glory Co",
      category: "HTML/CSS",
      image: "/images/asiaglory.png",
      desc: "Cold Storage & Warehouse Service website with service showcase and contact forms.",
      link: "https://asiagloryco.vercel.app/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 11,
      title: "Safia Sattar Sons",
      category: "HTML/CSS",
      image: "/images/safiasattarsons.png",
      desc: "Business website for trading company with product catalog and company information.",
      link: "https://safiasattarsons.vercel.app/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 12,
      title: "Raad Al Arabia",
      category: "HTML/CSS",
      image: "/images/raadalarabia.png",
      desc: "Product portfolio website with product catalog and company information.",
      link: "https://raadalarabia.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 13,
      title: "Safi Al Dhabi Trading EST",
      category: "HTML/CSS",
      image: "/images/safiaaldhabi.png",
      desc: "Business website for trading establishment with service showcase.",
      link: "https://safiaaldhabitrading.vercel.app/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 14,
      title: "SQI",
      category: "HTML/CSS",
      image: "/images/sqi.png",
      desc: "Portfolio website showcasing products and services.",
      link: "https://sqi-sage.vercel.app/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 15,
      title: "IRS",
      category: "HTML/CSS",
      image: "/images/irs.png",
      desc: "E-commerce webstore with product listings and shopping functionality.",
      link: "#",
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      id: 16,
      title: "IDTECH Pakistan",
      category: "Web Development",
      image: "/images/idtechpakistan.png",
      desc: "Marketing and Web Development Agency website with service showcase and portfolio.",
      link: "https://idtechpakistan.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 17,
      title: "Synthesis Engineering",
      category: "Web Development",
      image: "/images/synthesis.png",
      desc: "Waterproofing and Construction Company website with service showcase and project portfolio.",
      link: "https://synthesiseng.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 18,
      title: "Engineer's Office",
      category: "Web Development",
      image: "/images/engineer-office.png",
      desc: "Product Display Website showcasing engineering products and solutions.",
      link: "https://engineeroffice.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 19,
      title: "TBHosters",
      category: "Web Development",
      image: "/images/tbhosters.png",
      desc: "Hosting buying website with domain search and hosting plan selection.",
      link: "https://tbhosters.com/",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 20,
      title: "HeartStrings",
      category: "WordPress",
      image: "/images/heartstrings.png",
      desc: "Custom Ecommerce Website for custom products with personalized gift options.",
      link: "https://heartstrings.pk/",
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
