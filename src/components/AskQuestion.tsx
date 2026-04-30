"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import { Send, CircleCheck } from "lucide-react";
import { useLegalData } from "@/hooks/useLegalData";

const AskQuestion = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addQuery } = useLegalData();

  const [formData, setFormData] = useState({
    name: "",
    category: "General Inquiry",
    message: "",
    isAnonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      addQuery({
        name: formData.isAnonymous ? "Anonymous" : formData.name,
        category: formData.category,
        message: formData.message,
        isAnonymous: formData.isAnonymous,
      });
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="questions" className="py-24 bg-legal-blue text-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-legal-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <CircleCheck className="w-12 h-12 text-legal-blue" />
          </motion.div>
          <h2 className="text-4xl font-serif font-bold mb-4">Question Received</h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            Thank you for reaching out. Audhara Afrin Oishi will review your case and get back to you within 24-48 hours.
          </p>
          <Button variant="gold" onClick={() => setSubmitted(false)}>
            Ask Another Question
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="questions" className="py-24 bg-legal-blue text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-legal-gold/5 skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-legal-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Digital Legal Aid</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ask for <span className="text-legal-gold">Legal Help</span></h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Facing a legal challenge? Describe your issue below. You can choose to remain anonymous. 
              Our goal is to make legal guidance accessible to everyone.
            </p>
            
            <div className="space-y-6">
              {[
                "100% Confidential Guidance",
                "Fast Response Times",
                "Expert Student Perspective",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-legal-gold/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-legal-gold" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl text-legal-blue"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-legal-gold focus:outline-none transition-colors"
                    disabled={formData.isAnonymous}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-legal-gold focus:outline-none transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Criminal Law</option>
                    <option>Civil Law</option>
                    <option>Cyber Law</option>
                    <option>Family Law</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your legal issue in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-legal-gold focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="anonymous" 
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="w-4 h-4 accent-legal-gold" 
                />
                <label htmlFor="anonymous" className="text-sm text-gray-500">I want to remain anonymous</label>
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Question <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
