import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import AskQuestion from "@/components/AskQuestion";
import ConsultationBooking from "@/components/ConsultationBooking";
import { About, Footer } from "@/components/AboutFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Categories />
      <AskQuestion />
      <ConsultationBooking />
      <About />
      <Footer />
    </main>
  );
}
