import { motion } from "motion/react";
import { Award, Heart, Coffee, Zap, Code, Globe, Database, Smartphone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter"
          >
            ABOUT ME<span className="text-brand-blue">.</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 0.1, rotate: -5 }}
            className="absolute -top-10 right-0 text-8xl md:text-[15vw] font-brush text-brand-black pointer-events-none"
          >
            Profile
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/services-image.png" 
              alt="Workspace" 
              className="w-full rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-blue text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center rotate-12">
              <span className="text-4xl font-display font-black">2+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest leading-tight">Years of Experience</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black uppercase tracking-tighter">
              Front-End & Full Stack <span className="text-brand-blue">Developer.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm <strong>Syed Rabiaan Zafar</strong>, a passionate Software Engineer and developer with expertise in building custom WordPress solutions and responsive mobile-responsive web apps. I specialize in transforming complex client visions into pixel-perfect, modern web experiences through custom CSS, React, and performance-focused UI development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in Karachi, Pakistan, I specialize in Front-End development with Full Stack capabilities. I have hands-on experience building full-stack web applications, including database management, APIs, and deployment workflows.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm">Fast Learner</h4>
                  <p className="text-xs text-gray-500">Adapting to new tech</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm">Passionate</h4>
                  <p className="text-xs text-gray-500">Dedicated to excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            TECHNICAL <span className="text-brand-blue">SKILLS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Globe className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">Web</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>WordPress (Elementor)</li>
                <li>HTML5, CSS3 (Custom)</li>
                <li>JavaScript, React</li>
                <li>Bootstrap, Tailwind</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Smartphone className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">Mobile</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Flutter, Dart</li>
                <li>GetX State Management</li>
                <li>Firebase Integration</li>
                <li>Mobile App Development</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Database className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">Backend & Data</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Firebase, MySQL</li>
                <li>Supabase, Python</li>
                <li>MongoDB, SQL</li>
                <li>API Development</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              <Code className="w-10 h-10 text-brand-blue mb-4 group-hover:text-white" />
              <h4 className="text-xl font-display font-black mb-4 uppercase tracking-tighter">Core Engineering</h4>
              <ul className="text-sm text-gray-500 group-hover:text-white/80 space-y-2">
                <li>Data Structures & Algorithms</li>
                <li>Software Testing</li>
                <li>Cloud Concepts (Azure)</li>
                <li>Problem Solving</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            WORK <span className="text-brand-blue">EXPERIENCE</span>
          </h3>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">Frontend Developer</h4>
                  <p className="text-brand-blue font-bold">IDTECH PAKISTAN</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Feb 2026 – Continue</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Develop and maintain responsive user interfaces</li>
                <li>Optimize website performance, accessibility, and cross-browser compatibility</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">Full Stack Developer</h4>
                  <p className="text-brand-blue font-bold">DevelopersHub.co</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Dec 2025 – Jan 2026</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Completed a virtual internship program in Full Stack Development</li>
                <li>Gained hands-on experience with frontend and backend technologies</li>
                <li>Worked on building and integrating full-stack web applications</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">WordPress Developer</h4>
                  <p className="text-brand-blue font-bold">DevSphere</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Feb 2025 – Nov 2025</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Develop and maintain responsive user interfaces using HTML, CSS, and JavaScript</li>
                <li>Engineered site architecture for peak performance</li>
                <li>Significantly increasing user engagement and system stability</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-black uppercase">Flutter Developer (Intern)</h4>
                  <p className="text-brand-blue font-bold">Aniqa Tech Solutions</p>
                </div>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Feb 2025 – Apr 2025</span>
              </div>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Developed scalable mobile apps using Firebase for real-time data management</li>
                <li>Reduced crash rates and improved application stability through rigorous debugging</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            EDUCATION & <span className="text-brand-blue">CERTIFICATIONS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-display font-black text-brand-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-blue" />
                Education
              </h4>
              <div className="bg-gray-50 p-8 rounded-[2.5rem]">
                <h5 className="text-xl font-bold text-brand-black mb-2">B.S. Software Engineering</h5>
                <p className="text-gray-600 mb-2">University of Karachi</p>
                <p className="text-brand-blue font-bold text-sm">Feb 2022 - Dec 2025</p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-display font-black text-brand-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-blue" />
                Certifications
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Microsoft Azure Fundamentals</h5>
                  <p className="text-xs text-gray-500">Cloud Concepts, Web Development, and HTML/CSS</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Full Stack Development Certification</h5>
                  <p className="text-xs text-gray-500">Virtual Internship Program</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Cisco Python Essentials</h5>
                  <p className="text-xs text-gray-500">Core Python programming concepts</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Frontend Web Development</h5>
                  <p className="text-xs text-gray-500">CodeAlpha Web Development Program</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-black">Cisco Modern AI</h5>
                  <p className="text-xs text-gray-500">AI learning program</p>
                </div>
                <div className="bg-brand-blue p-6 rounded-[2rem] hover:shadow-lg transition-all">
                  <h5 className="font-bold text-brand-white">AI & Data Engineering Using Python</h5>
                  <p className="text-xs text-white/80">Ongoing Certification Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
