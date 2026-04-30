"use client";

import { motion } from "framer-motion";
import { useLegalData } from "@/hooks/useLegalData";
import { Calendar, MessageSquare, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/AboutFooter";

export default function DashboardPage() {
  const { queries, bookings } = useLegalData();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <Link href="/" className="inline-flex items-center text-sm text-legal-blue/50 hover:text-legal-gold transition-colors mb-4 gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <h1 className="text-4xl font-serif font-bold text-legal-blue">My Dashboard</h1>
              <p className="text-gray-500 mt-2">Manage your queries and consultation sessions.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Queries</p>
                  <p className="text-xl font-bold text-legal-blue">{queries.length}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-legal-gold/10 flex items-center justify-center text-legal-gold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Bookings</p>
                  <p className="text-xl font-bold text-legal-blue">{bookings.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Queries Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-legal-blue mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-legal-gold" /> Recent Queries
              </h2>
              <div className="space-y-4">
                {queries.length === 0 ? (
                  <div className="bg-white p-12 rounded-2xl border border-dashed border-gray-200 text-center text-gray-400">
                    <p>No queries submitted yet.</p>
                  </div>
                ) : (
                  queries.map((query) => (
                    <motion.div
                      key={query.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 rounded-full bg-legal-gold/10 text-legal-gold text-[10px] font-bold uppercase tracking-widest">
                          {query.category}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${
                          query.status === "pending" ? "text-yellow-600" : "text-green-600"
                        }`}>
                          ● {query.status}
                        </span>
                      </div>
                      <h3 className="font-bold text-legal-blue mb-2">{query.message.substring(0, 80)}...</h3>
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>{new Date(query.createdAt).toLocaleDateString()}</span>
                        {query.isAnonymous && <span className="italic">Anonymous Submission</span>}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </section>

            {/* Bookings Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-legal-blue mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-legal-gold" /> Upcoming Consultations
              </h2>
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="bg-white p-12 rounded-2xl border border-dashed border-gray-200 text-center text-gray-400">
                    <p>No consultations booked yet.</p>
                  </div>
                ) : (
                  bookings.map((booking) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-legal-blue text-white flex flex-col items-center justify-center">
                            <span className="text-[10px] font-bold uppercase">May</span>
                            <span className="text-xl font-bold">15</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-legal-blue">{booking.tier} Session</h3>
                            <p className="text-xs text-gray-400">{booking.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-legal-gold">{booking.price}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-green-600">Confirmed</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                        <button className="text-xs font-bold text-legal-blue hover:text-legal-gold transition-colors flex items-center gap-2">
                          <ExternalLink className="w-3 h-3" /> Join Meeting
                        </button>
                        <button className="text-xs font-bold text-red-500 hover:underline">Cancel</button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
