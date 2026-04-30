"use client";

import { motion } from "framer-motion";
import { Gavel, Users, House, Shield, Briefcase, Heart } from "lucide-react";

const categories = [
  {
    title: "Criminal Law",
    description: "Expert defense and guidance for criminal cases and legal disputes.",
    icon: Gavel,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Civil Law",
    description: "Handling disputes between individuals and organizations effectively.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Family Law",
    description: "Compassionate legal support for marriage, divorce, and custody.",
    icon: Heart,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Property Law",
    description: "Guidance on real estate transactions and property rights.",
    icon: House,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Cyber Law",
    description: "Protecting your digital rights and handling cybercrime issues.",
    icon: Shield,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Corporate Law",
    description: "Legal support for businesses, contracts, and compliance.",
    icon: Briefcase,
    color: "bg-emerald-500/10 text-emerald-500",
  },
];

const Categories = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-legal-gold font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-legal-blue mb-6"
          >
            Legal Categories
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-legal-gold mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-legal-blue/5 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-blue mb-4 group-hover:text-legal-gold transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
              <div className="mt-6 flex items-center text-legal-gold font-bold text-sm uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
