"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { Gavel, Shield, Scale } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-legal-bg-dark pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-legal-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-legal-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-legal-blue/50 border border-legal-blue/30 text-legal-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <Scale className="w-4 h-4" />
            Justice for All
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Accessible Legal <br />
            <span className="text-legal-gold">Help, Simplified.</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
            Expert legal guidance and professional consultation for your complex legal needs. 
            Empowering you with knowledge and representation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gold" size="lg">
              Ask for Legal Help
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { icon: Gavel, label: "Criminal Law" },
              { icon: Shield, label: "Cyber Law" },
              { icon: Scale, label: "Civil Law" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-white/40">
                <item.icon className="w-6 h-6 text-legal-gold/50" />
                <span className="text-[10px] uppercase tracking-widest text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-gradient-to-br from-legal-blue to-black group">
            <div className="absolute inset-0 bg-[url('/legal_aid/images/audhara.png')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-legal-bg-dark via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8">
              <p className="text-legal-gold font-serif text-3xl font-bold mb-1">Audhara Afrin Oishi</p>
              <p className="text-white/60 text-sm tracking-[0.2em] uppercase">Law Practitioner & Student</p>
            </div>
          </div>
          
          {/* Decorative Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-legal-gold/20 backdrop-blur-3xl rounded-full z-0 border border-legal-gold/30" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
