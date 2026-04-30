"use client";

import { motion } from "framer-motion";
import { useLegalData } from "@/hooks/useLegalData";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Search, 
  Filter, 
  MoreVertical,
  CheckCircle,
  Clock,
  LayoutDashboard,
  Shield,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const { queries, updateQueryStatus } = useLegalData();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredQueries = queries.filter(q => 
    q.message.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden bg-legal-blue p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-legal-gold" />
          <span className="font-serif font-bold tracking-tight">OISHI <span className="text-legal-gold">ADMIN</span></span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <LayoutDashboard className="w-6 h-6" />
        </button>
      </header>
      {/* Sidebar */}
      <aside className={cn(
        "bg-legal-blue text-white p-8 flex flex-col transition-all duration-300 lg:w-64 lg:relative lg:flex",
        isSidebarOpen ? "fixed inset-0 z-50 w-full" : "hidden"
      )}>
        <button 
          className="lg:hidden absolute top-4 right-4 text-white/50"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex items-center gap-3 mb-12">
          <Shield className="w-8 h-8 text-legal-gold" />
          <span className="text-xl font-serif font-bold tracking-tight">
            OISHI <span className="text-legal-gold">ADMIN</span>
          </span>
        </div>

        <nav className="space-y-2 flex-grow">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: MessageSquare, label: "Inquiries", badge: queries.filter(q => q.status === 'pending').length },
            { icon: Calendar, label: "Schedule" },
            { icon: Users, label: "Clients" },
          ].map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                item.active ? "bg-legal-gold text-legal-blue font-bold" : "text-white/60 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{item.badge}</span>
              )}
            </a>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10 text-white/40 text-xs">
          Logged in as <br />
          <span className="text-white font-bold">Audhara Afrin Oishi</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-legal-blue">Inquiry Management</h1>
            <p className="text-slate-500">Review and respond to client legal queries.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search queries..."
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-legal-gold/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Queries", value: queries.length, icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Pending", value: queries.filter(q => q.status === 'pending').length, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
            { label: "Resolved Today", value: queries.filter(q => q.status === 'resolved').length, icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Queries List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="font-bold text-slate-900">Recent Inquiries</h2>
            <Link href="/" className="text-xs font-bold text-legal-gold uppercase tracking-widest hover:underline">View Live Site</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="px-6 py-4">Client / Category</th>
                  <th className="px-6 py-4">Message Preview</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredQueries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      No matching queries found.
                    </td>
                  </tr>
                ) : (
                  filteredQueries.map((query) => (
                    <tr key={query.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900">{query.name}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-tighter">{query.category}</p>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-sm text-slate-600 truncate">{query.message}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {new Date(query.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                          query.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {query.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          {query.status === "pending" && (
                            <button 
                              onClick={() => updateQueryStatus(query.id, 'resolved')}
                              className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                              title="Mark as Resolved"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                          <button className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
