"use client";

import { useState, useEffect } from "react";

export interface LegalQuery {
  id: string;
  name: string;
  category: string;
  message: string;
  isAnonymous: boolean;
  status: "pending" | "resolved";
  createdAt: string;
}

export interface Booking {
  id: string;
  tier: string;
  price: string;
  date: string;
  time: string;
  status: "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

export const useLegalData = () => {
  const [queries, setQueries] = useState<LegalQuery[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load initial data
  useEffect(() => {
    const savedQueries = localStorage.getItem("legal_queries");
    const savedBookings = localStorage.getItem("legal_bookings");

    if (savedQueries) setQueries(JSON.parse(savedQueries));
    if (savedBookings) setBookings(JSON.parse(savedBookings));
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem("legal_queries", JSON.stringify(queries));
  }, [queries]);

  useEffect(() => {
    localStorage.setItem("legal_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addQuery = (query: Omit<LegalQuery, "id" | "status" | "createdAt">) => {
    const newQuery: LegalQuery = {
      ...query,
      id: Math.random().toString(36).substr(2, 9),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setQueries((prev) => [newQuery, ...prev]);
  };

  const addBooking = (booking: Omit<Booking, "id" | "status" | "createdAt">) => {
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    setBookings((prev) => [newBooking, ...prev]);
  };

  const updateQueryStatus = (id: string, status: LegalQuery["status"]) => {
    setQueries((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status } : q))
    );
  };

  return {
    queries,
    bookings,
    addQuery,
    addBooking,
    updateQueryStatus,
  };
};
