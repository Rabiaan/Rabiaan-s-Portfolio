import { motion } from "motion/react";
import { Briefcase, GraduationCap, User, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        {/* Background Text Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[15vw] font-display font-black text-outline opacity-20 leading-none uppercase tracking-tighter"
          >
            PORTFOLIO
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-[12vw] font-display font-black text-brand-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase tracking-widest"
          >
            AAYUSHI
          </motion.h2>
        </div>

        {/* Portrait Image */}
        <div className="relative z-10 w-full max-w-4xl px-4 flex justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative z-10"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Aayushi Kumari Chaurasia" 
                  className="w-full max-w-md grayscale hover:grayscale-0 transition-all duration-700 rounded-b-[5rem] md:rounded-b-[10rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 rounded-b-[5rem] md:rounded-b-[10rem]"></div>
              </div>
            </motion.div>
            
            {/* Handwritten "My" */}
            <motion.span 
              initial={{ rotate: -15, opacity: 0, x: -20 }}
              animate={{ rotate: -15, opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-20 -left-20 text-7xl md:text-[12rem] font-brush text-brand-black z-20 opacity-90"
            >
              My
            </motion.span>

            {/* Name Label */}
            <div className="absolute top-1/2 -right-20 md:-right-32 text-right z-20">
              <p className="text-sm md:text-base font-display font-medium text-brand-black">
                Aayushi <span className="text-brand-blue">Kumari</span>
              </p>
              <p className="text-xs md:text-sm font-display text-gray-500">Chaurasia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-light mb-8"
            >
              My Name is <span className="text-brand-blue font-medium">Aayushi</span> and I am a Freelance
            </motion.p>
            
            <div className="relative mt-8">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-[14rem] font-display font-black text-brand-black leading-[0.8] uppercase tracking-tighter"
              >
                Graphic
              </motion.h2>
              <motion.span 
                initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 right-0 md:right-10 text-6xl md:text-[10rem] font-brush text-brand-blue whitespace-nowrap z-20"
              >
                designer.
              </motion.span>
            </div>
          </div>

          <div className="max-w-md mt-20 md:mt-0">
            <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
              About <span className="text-brand-blue">Me</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              I am a graphic designer with confidence in my abilities and the capacity to work effectively under tight deadlines. My passion lies in creating social media visuals and video editing projects. Each day, I strive to push the boundaries of my creativity and deliver outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Work Experiences */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-brand-blue" />
                Work Experiences
              </h4>
              <div className="space-y-8">
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">VFX Summit 2023 (Intern)</h5>
                  <p className="font-bold text-sm mb-2">Indiajoy 2023 <span className="text-gray-400 font-normal">(Graphic Designer)</span></p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Collaborated with the organizing team to manage and execute all graphic design tasks.</li>
                    <li>Designed engaging visuals for the event, contributing to its successful branding and promotion.</li>
                  </ul>
                </div>
                <div className="group">
                  <h5 className="text-brand-blue font-bold text-lg mb-1">IACG (Full-Time Position)</h5>
                  <p className="font-bold text-sm mb-2">Graphic Designer | 1.5 Years</p>
                  <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                    <li>Collaborated with the organizing team to manage and execute all graphic design tasks.</li>
                    <li>Designed engaging visuals for the event, contributing to its successful branding and promotion.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Freelance & Education */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider text-brand-blue">
                Freelance Graphic Designer
              </h4>
              <p className="text-sm font-bold mb-4">Self-Employed | 2+ Years</p>
              <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                <li>Delivered end-to-end design solutions for clients, including branding, poster design, packaging, and marketing collaterals.</li>
                <li>Built strong client relationships by providing creative direction and timely execution of deliverables.</li>
                <li>Projects spanned across various industries such as fashion, F&B, and startups.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                Education
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-sm">B.A. (Hons.) in Multimedia</p>
                  <p className="text-xs text-gray-500">IACG Multimedia College - Hyderabad</p>
                  <p className="text-xs text-brand-blue">Multimedia Institute | Session 2020-2024</p>
                </div>
                <div>
                  <p className="font-bold text-sm">Intermediate</p>
                  <p className="text-xs text-gray-500">Avinash College of Commerce - Hyderabad</p>
                  <p className="text-xs text-brand-blue">Institute | Session 2018-2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info & Skills */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <User className="w-5 h-5 text-brand-blue" />
                Personal <span className="text-brand-blue">Info</span>
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Name :</span>
                  <span className="text-gray-500">Aayushi Kumari</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="font-bold">Date Of Birth :</span>
                  <span className="text-gray-500">07/01/2002</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-50 pb-2">
                  <span className="font-bold">Email :</span>
                  <span className="text-gray-500 break-all">aayushichaurasia77@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold mb-8 uppercase tracking-wider flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-blue" />
                Skills
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "Photoshop", icon: "Ps", color: "bg-blue-900" },
                  { name: "Indesign", icon: "Id", color: "bg-pink-900" },
                  { name: "Figma", icon: "Fi", color: "bg-purple-600" },
                  { name: "Illustrator", icon: "Ai", color: "bg-orange-800" },
                  { name: "After Effects", icon: "Ae", color: "bg-indigo-900" },
                  { name: "Premiere Pro", icon: "Pr", color: "bg-violet-900" },
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

        </div>
      </section>

      {/* Logofolio Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="relative flex flex-col items-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[15vw] font-brush text-brand-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
          >
            Logofolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-brand-black relative z-10 uppercase tracking-tighter"
          >
            LOGOFOLIO.
          </motion.h3>
        </div>

        {/* Logo Sketches Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626785774625-ddc7c82a1e5c?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop"
          ].map((url, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-opacity"
            >
              <img 
                src={url} 
                alt="Logo Sketch" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            As a designer, I've developed a wide range of logos for clients including individuals, companies, local startups, and academic projects.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Corneffey", sub: "LOVE AT FIRST SIP", icon: "☕" },
            { name: "Morigano", sub: "", icon: "🌿" },
            { name: "Sundari", sub: "", icon: "☸️" },
            { name: "Fleke", sub: "", icon: "🐈" },
            { name: "SUZI", sub: "Cosmetics", icon: "💄" },
            { name: "Raup", sub: "", icon: "🌯" },
            { name: "Inti Vinohu", sub: "", icon: "👵" },
            { name: "Paw sitive", sub: "", icon: "🐾" },
          ].map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square bg-white border border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0">
                {logo.icon}
              </div>
              <div className="text-center">
                <h4 className="font-display font-black text-xl leading-none uppercase tracking-tighter">{logo.name}</h4>
                {logo.sub && <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">{logo.sub}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brandings Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="relative flex flex-col items-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[15vw] font-brush text-brand-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
          >
            Brandings
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-brand-black relative z-10 uppercase tracking-tighter"
          >
            BRANDINGS.
          </motion.h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          {/* Color Palette Sidebar */}
          <div className="flex flex-row md:flex-col gap-4 py-4 md:py-8">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4a2c1d] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f39c12] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f5d6b5] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-sm" />
          </div>

          {/* Branding Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#4a2c1d] rounded-[2.5rem] aspect-square flex items-center justify-center p-8 overflow-hidden group"
              >
                <div className="text-center text-white">
                  <h4 className="font-display font-black text-3xl leading-none uppercase tracking-tighter mb-2">Corneffey</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">LOVE AT FIRST SIP</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-[2.5rem] aspect-[4/3] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop" 
                  alt="Menu Design" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1589561253898-768105ca9118?q=80&w=800&auto=format&fit=crop" 
                  alt="Business Cards" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
                  alt="Coffee Cups" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column (Tall) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[2.5rem] overflow-hidden shadow-lg h-full min-h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1559056199-d9572f93064e?q=80&w=800&auto=format&fit=crop" 
                alt="Product Packaging" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Branding Description */}
        <div className="max-w-4xl relative">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-display font-bold text-brand-blue mb-4"
          >
            Cone + Coffee = Corneffey
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed md:pr-20"
          >
            The Corneffey logo creatively blends the essence of its name — <span className="font-bold text-brand-black">cone (ice cream cone)</span> and <span className="font-bold text-brand-black">effey (café/coffee)</span> — into a playful yet elegant design. The bold, arched typography reflects the shape of a cone, while the warm brown background and orange steam swirl evoke the feeling of freshly brewed coffee. The tagline "Love at First Sip" curves beneath, echoing the cone's base and capturing <span className="font-bold text-brand-black">the emotional delight of sipping coffee</span> from a crunchy waffle cone. Altogether, the logo visually tells the story of a cozy, sweet, and innovative café experience.
          </motion.p>
          
          {/* Floating Cone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -right-10 -bottom-20 w-40 md:w-64 z-30 pointer-events-none hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1559056199-d9572f93064e?q=80&w=800&auto=format&fit=crop" 
              alt="Coffee Cone" 
              className="w-full drop-shadow-2xl rotate-12"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Desi Paavji Branding Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12 md:mb-16">
          {/* Branding Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 order-2 md:order-1">
            {/* Left Column */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-[2.5rem] aspect-square flex items-center justify-center p-8 overflow-hidden group shadow-sm"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 grayscale group-hover:grayscale-0 transition-all">👳‍♂️</div>
                  <h4 className="font-display font-black text-3xl leading-none uppercase tracking-tighter text-[#c0392b]">DesiPavji</h4>
                </div>
              </motion.div>
              
              {/* Middle Top (Business Cards) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#f5d6b5] rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg p-6 flex items-center justify-center"
              >
                <div className="w-full h-full border-2 border-white/30 rounded-2xl border-dashed flex items-center justify-center text-[#c0392b] font-bold">
                  BUSINESS CARDS
                </div>
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#c0392b] rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg flex items-center justify-center p-8"
              >
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📦</div>
                  <p className="text-xs font-bold uppercase tracking-widest">Its a Burger, but Different.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" 
                  alt="Food Packaging" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column (Tall) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#f39c12] rounded-[2.5rem] overflow-hidden shadow-lg h-full min-h-[400px] flex flex-col items-center justify-center p-12"
            >
              <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-[200px] text-center">
                <div className="text-4xl mb-4">👳‍♂️</div>
                <p className="text-[10px] font-bold text-[#c0392b] uppercase tracking-tighter">Vadda Desi Paav hei Paaji.</p>
              </div>
            </motion.div>
          </div>

          {/* Color Palette Sidebar (Right) */}
          <div className="flex flex-row md:flex-col gap-4 py-4 md:py-8 order-1 md:order-2 w-full md:w-auto justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f39c12] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#c0392b] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#7f2b1e] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f5d6b5] shadow-sm" />
          </div>
        </div>

        {/* Floating Bag (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute left-0 bottom-20 w-48 md:w-80 z-30 pointer-events-none hidden lg:block"
        >
          <div className="bg-[#f5f5f0] p-8 rounded-lg shadow-2xl border-t-8 border-[#c0392b] transform -rotate-6">
            <div className="text-center">
              <div className="text-5xl mb-6">👳‍♂️</div>
              <p className="text-xs font-black text-[#c0392b] uppercase leading-tight">Vadda Desi Paav hei Paaji.</p>
              <div className="mt-8 pt-4 border-t border-gray-200 text-[8px] text-gray-400">www.desipaavjihere.com</div>
            </div>
          </div>
        </motion.div>

        {/* Branding Description (Right Aligned) */}
        <div className="flex justify-end mt-12">
          <div className="max-w-3xl text-right">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-display font-bold text-brand-blue mb-4"
            >
              Desi Paavji
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed"
            >
              The DesiPavji logo is a playful fusion of <span className="font-bold text-brand-black">Maharashtrian street food</span> and <span className="font-bold text-brand-black">Punjabi flair</span>. The name combines "Pav" (soft Indian bread, central to vada pav and other Maharashtrian snacks) with "Paji" (a friendly term for a Punjabi man), blending the two cultures into a single flavorful identity. Visually, the logo features a mustachioed face with a Punjabi turban and a vada pav bun, symbolizing this unique crossover. DesiPavji brings you classic Maharashtrian pav dishes with a bold, spicy Punjabi twist — street-style food with a desi punch!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Suzi Cosmetics Branding Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12 md:mb-16">
          {/* Color Palette Sidebar (Left) */}
          <div className="flex flex-row md:flex-col gap-4 py-4 md:py-8 w-full md:w-auto justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#6d2177] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4a154b] shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#d9a7c7] shadow-sm" />
          </div>

          {/* Branding Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-[2.5rem] aspect-square flex items-center justify-center p-8 shadow-sm group"
              >
                <div className="text-center">
                  <h4 className="font-display font-black text-4xl leading-none uppercase tracking-tighter text-brand-black">SUZI</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cosmetics</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-[2.5rem] aspect-square overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800&auto=format&fit=crop" 
                  alt="Suzi Stationery" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop" 
                  alt="Suzi Product" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" 
                  alt="Suzi Face Oil" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[2.5rem] overflow-hidden shadow-lg h-full min-h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop" 
                alt="Suzi Spray" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-[2.5rem] aspect-square overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop" 
                  alt="Suzi Model" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-[#6d2177] rounded-[2.5rem] aspect-square flex items-center justify-center p-8 overflow-hidden"
              >
                <div className="w-full h-full bg-[#d9a7c7]/20 rounded-full blur-2xl animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Suzi Description */}
        <div className="max-w-4xl">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-display font-bold text-brand-blue mb-4"
          >
            Suzi Cosmetics
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed"
          >
            Suzi Cosmetics is a modern beauty brand that blends simplicity, elegance, and confidence. The sleek logo with its stylized "Z" in soft purple reflects femininity, creativity, and individuality — the essence of what Suzi stands for. From everyday glow to bold statements, Suzi empowers self-expression through clean, refined, and versatile cosmetic products.
          </motion.p>
        </div>
      </section>

      {/* Shake Planet Branding Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12 md:mb-16">
          {/* Branding Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 order-2 md:order-1">
            {/* Left Column */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-[2.5rem] aspect-square flex items-center justify-center p-8 shadow-sm group"
              >
                <div className="text-center relative">
                  <div className="absolute -inset-4 border-2 border-yellow-400 rounded-full rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                  <h4 className="font-brush text-3xl text-blue-900 leading-none">Shake</h4>
                  <h4 className="font-brush text-3xl text-blue-900 leading-none">Planet</h4>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-[2.5rem] aspect-[16/6] overflow-hidden shadow-lg p-8 flex flex-col justify-center"
              >
                <h5 className="font-brush text-4xl text-white uppercase leading-none">Mango</h5>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">Organic Raw Shakesss</p>
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=800&auto=format&fit=crop" 
                  alt="Milkshake" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-[2.5rem] aspect-[16/10] overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" 
                  alt="Smoothie" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column (Tall) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-blue-900 rounded-[2.5rem] overflow-hidden shadow-lg h-full min-h-[400px] flex flex-col items-center justify-center p-12"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl animate-bounce">🥤</div>
                <h5 className="font-brush text-4xl text-white leading-none mb-2">Shake Planet</h5>
                <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">The Best Shakes in Town</p>
              </div>
            </motion.div>
          </div>

          {/* Color Palette Sidebar (Right) */}
          <div className="flex flex-row md:flex-col gap-4 py-4 md:py-8 order-1 md:order-2 w-full md:w-auto justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900 shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400 shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400 shadow-sm" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 shadow-sm" />
          </div>
        </div>

        {/* Branding Description (Right Aligned) */}
        <div className="flex justify-end mt-12">
          <div className="max-w-3xl text-right">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-display font-bold text-brand-blue mb-4"
            >
              Shake Planet
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed"
            >
              Shake Planet is your go-to destination for fresh, organic, and raw milkshakes. The vibrant logo, featuring a playful font and a sunny yellow-and-blue palette, captures the energy and freshness of our ingredients. Whether it's a classic mango shake or a custom blend, Shake Planet is dedicated to serving the most delicious and healthy shakes in town.
            </motion.p>
          </div>
        </div>
      </section>

    </div>
  );
}
