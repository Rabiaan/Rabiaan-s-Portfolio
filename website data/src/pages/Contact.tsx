import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter"
          >
            CONTACT<span className="text-brand-blue">.</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-[18vw] font-brush text-brand-black pointer-events-none whitespace-nowrap"
          >
            Connect
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-display font-black text-brand-black mb-8 uppercase tracking-tighter">
                Let's Build Something <span className="text-brand-blue">Amazing.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm tracking-widest">Email Me</h4>
                  <p className="text-gray-500 text-sm">aayushichaurasia77@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm tracking-widest">Call Me</h4>
                  <p className="text-gray-500 text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black uppercase text-sm tracking-widest">Location</h4>
                  <p className="text-gray-500 text-sm">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="font-display font-bold text-brand-black uppercase text-sm tracking-widest mb-6">Follow Me</h4>
              <div className="flex gap-6">
                <a href="#" className="bg-gray-50 p-4 rounded-2xl text-brand-black hover:bg-brand-blue hover:text-white transition-all duration-500">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-50 p-4 rounded-2xl text-brand-black hover:bg-brand-blue hover:text-white transition-all duration-500">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-50 p-4 rounded-2xl text-brand-black hover:bg-brand-blue hover:text-white transition-all duration-500">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-12 rounded-[3rem] shadow-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-brand-blue text-white font-display font-bold uppercase tracking-widest py-5 rounded-2xl shadow-lg hover:bg-brand-black transition-all duration-500 flex items-center justify-center gap-3 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
