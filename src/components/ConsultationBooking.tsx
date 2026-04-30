"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import { Calendar, Clock, CreditCard, ChevronRight } from "lucide-react";
import { useLegalData } from "@/hooks/useLegalData";

const tiers = [
  {
    name: "Basic",
    price: "৳500",
    description: "15 min quick consultation",
    features: ["One-on-one session", "Preliminary advice", "Next steps guidance"],
    popular: false,
  },
  {
    name: "Detailed",
    price: "৳1500",
    description: "45 min comprehensive review",
    features: ["Document analysis", "Strategy planning", "Case study review", "Q&A session"],
    popular: true,
  },
  {
    name: "Urgent",
    price: "৳3000",
    description: "Immediate priority support",
    features: ["Priority scheduling", "Full legal audit", "Emergency assistance", "Direct hotline access"],
    popular: false,
  },
];

const ConsultationBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState<typeof tiers[0] | null>(null);
  const { addBooking } = useLegalData();

  const handleCompleteBooking = () => {
    if (selectedTier) {
      addBooking({
        tier: selectedTier.name,
        price: selectedTier.price,
        date: "May 15, 2024", // Hardcoded for demo
        time: "10:00 AM - 10:45 AM", // Hardcoded for demo
      });
      setStep(3);
    }
  };

  return (
    <section id="consultation" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-legal-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Book a Session</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-legal-blue mb-6">Consultation Tiers</h2>
          <div className="h-1 bg-legal-gold w-20 mx-auto" />
        </div>

        {step === 1 && (
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl bg-white border ${
                  tier.popular ? "border-legal-gold ring-4 ring-legal-gold/5" : "border-gray-100"
                } shadow-xl flex flex-col`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-legal-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif font-bold text-legal-blue mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-legal-gold mb-4">{tier.price}</div>
                <p className="text-gray-500 mb-8">{tier.description}</p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-legal-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.popular ? "gold" : "outline"} 
                  className="w-full"
                  onClick={() => {
                    setSelectedTier(tier);
                    setStep(2);
                  }}
                >
                  Choose {tier.name}
                </Button>
              </motion.div>
            ))}
          </div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-legal-blue p-8 text-white">
                <div className="flex items-center gap-2 text-legal-gold mb-8 cursor-pointer hover:underline text-sm" onClick={() => setStep(1)}>
                  ← Back to pricing
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Summary</h3>
                <div className="space-y-4 mb-12">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Tier</span>
                    <span className="font-bold text-legal-gold">{selectedTier?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Price</span>
                    <span className="font-bold text-legal-gold">{selectedTier?.price}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-legal-gold shrink-0" />
                    <div>
                      <p className="font-bold">May 15, 2024</p>
                      <p className="text-sm text-white/50">Simulated availability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-legal-gold shrink-0" />
                    <div>
                      <p className="font-bold">10:00 AM - 10:45 AM</p>
                      <p className="text-sm text-white/50">Dhaka Local Time</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <h3 className="text-2xl font-serif font-bold text-legal-blue mb-8">Demo Payment UI</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Cardholder Name</label>
                    <input type="text" defaultValue="John Doe" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Card Number</label>
                    <div className="relative">
                      <input type="text" defaultValue="**** **** **** 1234" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none" />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Expiry</label>
                      <input type="text" defaultValue="12/26" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-400">CVC</label>
                      <input type="text" defaultValue="123" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none" />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg text-yellow-800 text-sm italic">
                    Note: This is a simulated payment gateway. No real transaction will occur.
                  </div>

                  <Button variant="gold" className="w-full py-4 group" onClick={handleCompleteBooking}>
                    Complete Booking <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-12 px-6 bg-white rounded-2xl shadow-2xl border border-legal-gold/20"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-legal-blue mb-4">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-8">
              Your consultation session for <strong>{selectedTier?.name}</strong> tier has been scheduled. 
              A confirmation email with the meeting link has been sent to your inbox.
            </p>
            <Button variant="gold" onClick={() => setStep(1)}>
              Done
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Re-using icon from AskQuestion
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default ConsultationBooking;
