import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { Briefcase, GraduationCap, User, Award, Code, Globe, Smartphone, Database } from "lucide-react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const textX = useTransform(x, (val) => val * 0.02);
  const textY = useTransform(y, (val) => val * 0.02);
  const imageX = useTransform(x, (val) => -val * 0.03);
  const imageY = useTransform(y, (val) => -val * 0.03);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* PORTFOLIO Text - behind image, solid black */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
          style={{ x: textX, y: textY }}
        >
          <h1 className="text-[15vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter">
            PORTFOLIO
          </h1>
        </motion.div>

        {/* Main Portrait - above text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ x: imageX, y: imageY }}
        >
          <img 
            src="/images/rabiaan.jpeg" 
            alt="Syed Rabiaan Zafar" 
            className="w-full max-w-md rounded-[10rem]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* PORTFOLIO Text outline - above image */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-20"
          style={{ x: textX, y: textY }}
        >
          <h1 
            className="text-[15vw] font-display font-black leading-none uppercase tracking-tighter"
            style={{ 
              WebkitTextStroke: '2px black',
              color: 'transparent'
            }}
          >
            PORTFOLIO
          </h1>
          {/* Handwritten "My" */}
          <span className="absolute top-8 left-1/2 -translate-x-1/2 text-6xl md:text-[8rem] font-brush text-brand-black">
            My
          </span>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-light mb-8"
            >
              My Name is <span className="text-brand-blue font-medium">Syed Rabiaan</span> and I am a
            </motion.p>
            
            <div className="relative">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-[14rem] font-display font-black text-brand-black leading-[0.8] uppercase tracking-tighter"
              >
                Full Stack<br className="md:hidden" />
              </motion.h2>
              
              {/* About Me Section */}
              <div className="mt-6 md:mt-8 max-w-md">
                <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                  About <span className="text-brand-blue">Me</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  I'm a passionate Software Engineer specializing in modern web technologies. As a Front-End Developer with Full Stack capabilities, I build responsive, user-friendly web applications and custom solutions. My expertise spans React, WordPress, Flutter, and various backend technologies to deliver complete digital experiences.
                </p>
              </div>
              
              <motion.span 
                initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 right-24 md:right-48 text-6xl md:text-[10rem] font-brush text-brand-blue whitespace-nowrap z-20"
              >
                Developer.
              </motion.span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Work Experiences - Left Aligned */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-brand-blue" />
                Work Experiences
              </h4>
              <div className="space-y-8">
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">Frontend Developer</h5>
                  <p className="font-bold text-sm mb-2">IDTECH PAKISTAN <span className="text-gray-400 font-normal">(Feb 2026 – Continue)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Develop and maintain responsive user interfaces</li>
                    <li>Optimize website performance, accessibility, and cross-browser compatibility</li>
                  </ul>
                </div>
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">Full Stack Developer</h5>
                  <p className="font-bold text-sm mb-2">DevelopersHub.co <span className="text-gray-400 font-normal">(Dec 2025 – Jan 2026)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Completed virtual internship in Full Stack Development</li>
                    <li>Hands-on experience with frontend and backend technologies</li>
                  </ul>
                </div>
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">WordPress Developer</h5>
                  <p className="font-bold text-sm mb-2">DevSphere <span className="text-gray-400 font-normal">(Feb 2025 – Nov 2025)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Develop and maintain responsive user interfaces</li>
                    <li>Engineered site architecture for peak performance</li>
                  </ul>
                </div>
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">Flutter Developer (Intern)</h5>
                  <p className="font-bold text-sm mb-2">Aniqa Tech Solutions <span className="text-gray-400 font-normal">(Feb 2025 – Apr 2025)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Developed scalable mobile apps using Firebase</li>
                    <li>Reduced crash rates through rigorous debugging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills - Left Aligned */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-blue" />
                Skills
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "WordPress", icon: <Globe className="w-4 h-4" />, color: "bg-blue-600" },
                  { name: "React", icon: <Code className="w-4 h-4" />, color: "bg-cyan-500" },
                  { name: "HTML5, CSS3", icon: <Code className="w-4 h-4" />, color: "bg-orange-500" },
                  { name: "JavaScript (ES6+)", icon: <Code className="w-4 h-4" />, color: "bg-yellow-500" },
                  { name: "Node.js, Express", icon: <Database className="w-4 h-4" />, color: "bg-green-600" },
                  { name: "Python (Django/Flask)", icon: <Code className="w-4 h-4" />, color: "bg-blue-500" },
                  { name: "MongoDB", icon: <Database className="w-4 h-4" />, color: "bg-green-500" },
                  { name: "PostgreSQL, MySQL", icon: <Database className="w-4 h-4" />, color: "bg-purple-600" },
                  { name: "Firebase, Supabase", icon: <Database className="w-4 h-4" />, color: "bg-amber-500" },
                  { name: "AWS", icon: <Globe className="w-4 h-4" />, color: "bg-orange-600" },
                  { name: "CI/CD Pipelines", icon: <Code className="w-4 h-4" />, color: "bg-red-500" },
                  { name: "Git", icon: <Code className="w-4 h-4" />, color: "bg-gray-600" },
                  { name: "REST/GraphQL APIs", icon: <Globe className="w-4 h-4" />, color: "bg-pink-500" },
                  { name: "Tailwind", icon: <Code className="w-4 h-4" />, color: "bg-teal-500" },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group">
                    <div className={`${skill.color} text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded shadow-sm group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Info & Education - Left Aligned */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <User className="w-5 h-5 text-brand-blue" />
                Personal <span className="text-brand-blue">Info</span>
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Name :</span>
                  <span className="text-gray-500">Syed Rabiaan Zafar</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Location :</span>
                  <span className="text-gray-500">Karachi, Pakistan</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-50 pb-2">
                  <span className="font-bold">Email :</span>
                  <span className="text-gray-500 break-all">syedrabiaan@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Phone :</span>
                  <span className="text-gray-500">03353219498</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                Education
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-sm">B.S. Software Engineering</p>
                  <p className="text-xs text-gray-500">University of Karachi</p>
                  <p className="text-xs text-brand-blue">Feb 2022 - Dec 2025</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="relative flex flex-col items-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[15vw] font-brush text-brand-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
          >
            Certifications
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-brand-black relative z-10 uppercase tracking-tighter"
          >
            CERTIFICATIONS.
          </motion.h3>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Microsoft Azure Fundamentals", desc: "Cloud Concepts, Web Development, and HTML/CSS" },
            { title: "Full Stack Development", desc: "Virtual Internship Program" },
            { title: "Cisco Python Essentials", desc: "Core Python programming concepts" },
            { title: "Frontend Web Development", desc: "CodeAlpha Web Development Program" },
            { title: "Cisco Modern AI", desc: "AI learning program" },
            { title: "AI & Data Engineering", desc: "Using Python (Ongoing)" },
          ].map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gray-50 border border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <Award className="w-12 h-12 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <h4 className="font-display font-black text-lg leading-none uppercase tracking-tighter">{cert.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-widest">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="relative flex flex-col items-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[15vw] font-brush text-brand-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
          >
            Projects
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-brand-black relative z-10 uppercase tracking-tighter"
          >
            FEATURED WORK.
          </motion.h3>
        </div>

        {/* Bento Grid Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 - Fitness Pro (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-brand-black rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              {/* Main Image */}
              <div className="lg:col-span-2 relative">
                <img 
                  src="/images/fitness-pro.png" 
                  alt="Fitness Pro" 
                  className="w-full h-64 lg:h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter">Fitness Pro</h4>
                  <p className="text-brand-blue font-bold text-sm">Full Stack Web App</p>
                </div>
                <p className="text-gray-400 text-sm">Full Stack Fitness Management App with workout tracking, user authentication, and progress monitoring.</p>
                {/* Color Palette */}
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Color Palette</p>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600" title="#2563eb"></div>
                    <div className="w-8 h-8 rounded-lg bg-green-600" title="#16a34a"></div>
                    <div className="w-8 h-8 rounded-lg bg-yellow-500" title="#eab308"></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-900" title="#1a1a1a"></div>
                  </div>
                </div>
                {/* Typography */}
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Typography</p>
                  <div className="bg-gray-800 p-3 rounded-xl">
                    <p className="text-white font-bold text-lg">Poppins</p>
                    <p className="text-gray-400 text-xs">Primary Font</p>
                  </div>
                </div>
                <a href="https://fitness-pro-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors text-sm font-bold">
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - FrameGen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="space-y-6">
              <img 
                src="/images/frame-gen.png" 
                alt="FrameGen" 
                className="w-full h-48 object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
              />
              <div>
                <h4 className="text-xl font-display font-black text-brand-black uppercase tracking-tighter">FrameGen</h4>
                <p className="text-brand-blue font-bold text-sm">React Portfolio</p>
              </div>
              <p className="text-gray-500 text-sm">React Business Portfolio for marketing agency providing web development, marketing, animation, and graphics services.</p>
              {/* Color Palette */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-600" title="#9333ea"></div>
                  <div className="w-6 h-6 rounded-lg bg-pink-500" title="#ec4899"></div>
                  <div className="w-6 h-6 rounded-lg bg-gray-900" title="#1f2937"></div>
                </div>
              </div>
              {/* Typography */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Typography</p>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <p className="text-brand-black font-bold">Inter</p>
                  <p className="text-gray-400 text-xs">Primary Font</p>
                </div>
              </div>
              <a href="https://frame-gen.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-black transition-colors text-sm font-bold">
                View Project <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Project 3 - SamarTex */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="space-y-6">
              <img 
                src="/images/samartex.png" 
                alt="SamarTex" 
                className="w-full h-48 object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
              />
              <div>
                <h4 className="text-xl font-display font-black text-brand-black uppercase tracking-tighter">SamarTex</h4>
                <p className="text-brand-blue font-bold text-sm">WooCommerce Store</p>
              </div>
              <p className="text-gray-500 text-sm">WooCommerce store with custom theme and seamless checkout flows.</p>
              {/* Color Palette */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-600" title="#2563eb"></div>
                  <div className="w-6 h-6 rounded-lg bg-green-600" title="#16a34a"></div>
                  <div className="w-6 h-6 rounded-lg bg-gray-900" title="#1a1a1a"></div>
                </div>
              </div>
              {/* Typography */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Typography</p>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <p className="text-brand-black font-bold">Poppins</p>
                  <p className="text-gray-400 text-xs">Primary Font</p>
                </div>
              </div>
              <a href="https://samartex.store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-black transition-colors text-sm font-bold">
                View Project <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Project 4 - Asia Glory Co */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 overflow-hidden group"
          >
            <div className="space-y-6">
              <img 
                src="/images/asiaglory.png" 
                alt="Asia Glory Co" 
                className="w-full h-48 object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
              />
              <div>
                <h4 className="text-xl font-display font-black text-brand-black uppercase tracking-tighter">Asia Glory Co</h4>
                <p className="text-brand-blue font-bold text-sm">Corporate Website</p>
              </div>
              <p className="text-gray-500 text-sm">Cold Storage & Warehouse Service website with service showcase and contact forms.</p>
              {/* Color Palette */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-800" title="#1e3a8a"></div>
                  <div className="w-6 h-6 rounded-lg bg-cyan-600" title="#0891b2"></div>
                  <div className="w-6 h-6 rounded-lg bg-gray-100" title="#f3f4f6"></div>
                </div>
              </div>
              {/* Typography */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Typography</p>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <p className="text-brand-black font-bold">Montserrat</p>
                  <p className="text-gray-400 text-xs">Primary Font</p>
                </div>
              </div>
              <a href="https://asiagloryco.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-black transition-colors text-sm font-bold">
                View Project <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a 
            href="/projects" 
            className="inline-block bg-brand-black text-white px-8 py-4 rounded-full font-display font-bold text-sm uppercase tracking-widest hover:bg-brand-blue transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </section>
    </div>
  );
}
