"use client";

import Link from "next/link";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-legal-blue/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-[60]">
          <Scale className={cn("w-8 h-8", isScrolled ? "text-legal-gold" : "text-legal-blue")} />
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tight",
            isScrolled ? "text-white" : "text-legal-blue"
          )}>
            OISHI <span className="text-legal-gold">LEGAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Questions"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-legal-gold transition-colors",
                isScrolled ? "text-white/80" : "text-legal-blue/80"
              )}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className={cn(
              "text-sm font-bold uppercase tracking-widest hover:text-legal-gold transition-colors",
              isScrolled ? "text-white" : "text-legal-blue"
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/admin"
            className={cn(
              "text-[10px] px-2 py-1 border rounded font-bold uppercase tracking-widest hover:bg-legal-gold hover:text-legal-blue transition-all",
              isScrolled ? "text-white/40 border-white/20" : "text-legal-blue/40 border-legal-blue/20"
            )}
          >
            Admin
          </Link>
          <Button variant="gold" size="sm">
            Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-[60] p-2 text-legal-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-legal-blue z-50 flex flex-col items-center justify-center gap-8"
            >
              {["Services", "About", "Questions", "Dashboard", "Admin"].map((item) => (
                <Link
                  key={item}
                  href={item === "Dashboard" ? "/dashboard" : item === "Admin" ? "/admin" : `/#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-bold text-white hover:text-legal-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="mt-8">
                <Button variant="gold" size="lg" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
