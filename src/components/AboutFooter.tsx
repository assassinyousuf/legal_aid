"use client";

import { motion } from "framer-motion";
import { Scale, Mail, MapPin, Globe, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97dee2dcb70c?q=80&w=2070&auto=format&fit=crop" 
                alt="Law Student Audhara Afrin Oishi"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-legal-gold rounded-xl z-0" />
            <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-legal-blue/10 rounded-full z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-legal-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">The Practitioner</p>
            <h2 className="text-4xl font-serif font-bold text-legal-blue mb-8">Meet Audhara Afrin Oishi</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Audhara Afrin Oishi is a dedicated law student at Dhaka International University, driven by a mission to bridge the gap between complex legal systems and everyday people. 
              </p>
              <p>
                With a focus on Cyber Law and Civil disputes, Audhara brings a fresh, digital-first perspective to legal consultation. The goal is simple: provide affordable, clear, and high-quality legal guidance to those who need it most.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="font-serif font-bold text-legal-blue text-xl mb-2">150+</h4>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Queries Resolved</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-legal-blue text-xl mb-2">98%</h4>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-legal-bg-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-legal-gold" />
              <span className="text-2xl font-serif font-bold tracking-tight">
                OISHI <span className="text-legal-gold">LEGAL</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Accessible legal aid hub providing digital guidance and professional consultation for individuals and businesses.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-legal-gold hover:border-legal-gold transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="#services" className="hover:text-legal-gold transition-colors">Legal Services</Link></li>
              <li><Link href="#questions" className="hover:text-legal-gold transition-colors">Ask a Question</Link></li>
              <li><Link href="#consultation" className="hover:text-legal-gold transition-colors">Book Consultation</Link></li>
              <li><Link href="#about" className="hover:text-legal-gold transition-colors">About Oishi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Legal Categories</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>Criminal Law</li>
              <li>Civil Law</li>
              <li>Family Law</li>
              <li>Cyber Law</li>
              <li>Property Law</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-legal-gold" />
                info@xlegal.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-legal-gold" />
                Dhaka International University, BD
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-sm text-white/30">
          <p>© 2024 Audhara Afrin Oishi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
