import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-900 selection:bg-stone-300 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Process />
        <Services />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
