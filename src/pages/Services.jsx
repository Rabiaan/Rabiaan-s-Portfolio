import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Palette, Share2, Video, Layout, Rocket, Target, Code, Globe, Smartphone } from "lucide-react";

function ServiceCard({ service, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      {/* Interactive Border Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Border Beam Effect */}
      <div className="absolute inset-0 rounded-[3rem] border border-brand-blue/0 group-hover:border-brand-blue/20 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="bg-brand-blue/10 p-6 rounded-3xl text-brand-blue w-fit mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
          {service.icon}
        </div>
        <h3 className="text-2xl font-display font-black text-brand-black mb-4 uppercase tracking-tighter">{service.title}</h3>
        <p className="text-gray-500 mb-8 leading-relaxed text-sm">
          {service.desc}
        </p>
        <ul className="space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-black">
              <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Helper for motion template
function useMotionTemplate(strings, ...values) {
  const [template, setTemplate] = useState("");

  useEffect(() => {
    const updateTemplate = () => {
      const result = strings.reduce((acc, str, i) => {
        const val = values[i];
        const valStr = val?.get ? val.get() : val;
        return acc + str + (valStr !== undefined ? valStr : "");
      }, "");
      setTemplate(result);
    };

    const unsubscribers = values.map((v) => (v?.onChange ? v.onChange(updateTemplate) : null));
    updateTemplate();

    return () => unsubscribers.forEach((unsub) => unsub?.());
  }, [strings, values]);

  return template;
}

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      desc: "Creating responsive and高性能 websites using modern technologies.",
      features: ["HTML5/CSS3", "JavaScript/React", "Custom CSS Styling", "Responsive Design"]
    },
    {
      title: "WordPress Development",
      icon: <Layout className="w-8 h-8" />,
      desc: "Building custom WordPress solutions with Elementor for peak performance.",
      features: ["Custom Themes", "Elementor Pro", "WooCommerce", "Plugin Development"]
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      desc: "Developing scalable mobile applications using Flutter and Firebase.",
      features: ["Flutter/Dart", "GetX State Management", "Firebase Integration", "App Store Deployment"]
    },
    {
      title: "Full Stack Development",
      icon: <Code className="w-8 h-8" />,
      desc: "End-to-end web application development with database management and APIs.",
      features: ["Frontend & Backend", "Database Management", "API Development", "Deployment"]
    },
    {
      title: "E-Commerce Solutions",
      icon: <Target className="w-8 h-8" />,
      desc: "Building high-performance WooCommerce stores with custom styling.",
      features: ["WooCommerce Stores", "Custom Checkout Flows", "Payment Integration", "Store Optimization"]
    },
    {
      title: "UI/UX Design",
      icon: <Rocket className="w-8 h-8" />,
      desc: "Creating pixel-perfect, modern web experiences with performance focus.",
      features: ["Responsive Layouts", "Interactive Elements", "Performance Optimization", "Cross-browser Compat"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-display font-black text-brand-black leading-none uppercase tracking-tighter"
          >
            SERVICES<span className="text-brand-blue">.</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-[18vw] font-brush text-brand-black pointer-events-none whitespace-nowrap"
          >
            Expertise
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Process Section */}
        <div className="py-20 border-t border-gray-100">
          <h3 className="text-4xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter text-center">
            MY WORKING <span className="text-brand-blue">PROCESS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements." },
              { step: "02", title: "Strategy", desc: "Developing a technical plan and roadmap." },
              { step: "03", title: "Development", desc: "Executing the solution with precision." },
              { step: "04", title: "Delivery", desc: "Finalizing and deploying the project." }
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <span className="text-8xl font-display font-black text-gray-100 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{item.step}</span>
                <div className="pt-12">
                  <h4 className="text-xl font-display font-black text-brand-black mb-2 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
