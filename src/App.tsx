import Hero from "./components/Hero";
import ListingsCarousel from "./components/Listings";
import TestimonialSection from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#F8F4EF] text-[#1F1F1F] overflow-x-hidden">
      <Hero />
      <ListingsCarousel />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
