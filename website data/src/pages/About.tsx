import { motion } from "motion/react";
import { Award, Heart, Coffee, Zap } from "lucide-react";

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
            Story
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
              alt="Workspace" 
              className="w-full rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-blue text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center rotate-12">
              <span className="text-4xl font-display font-black">4+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest leading-tight">Years of Experience</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black uppercase tracking-tighter">
              A Creative Soul with a <span className="text-brand-blue">Vision.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              I am Aayushi Kumari Chaurasia, a dedicated graphic designer based in Hyderabad. My journey in the world of visual storytelling began with a simple curiosity about how colors and shapes can influence emotions and decisions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the past 4 years, I've had the privilege of working with diverse clients, from local startups to established brands. My approach is always the same: listen deeply, think critically, and design with purpose. I believe that good design isn't just about looking pretty; it's about solving problems and creating meaningful connections.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm">Fast Learner</h4>
                  <p className="text-xs text-gray-500">Adapting to new trends</p>
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

        {/* My Values */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            MY CORE <span className="text-brand-blue">VALUES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Authenticity", desc: "I believe in creating designs that truly reflect the brand's soul and values, avoiding generic solutions." },
              { title: "Precision", desc: "Every pixel matters. I pay meticulous attention to detail to ensure the highest quality of work." },
              { title: "Innovation", desc: "I'm always exploring new techniques and styles to keep my work fresh and impactful." }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
              >
                <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter">{value.title}</h4>
                <p className="text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
