import './Landing.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import WhyStores from './sections/WhyStores';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import LeadForm from './sections/LeadForm';
import Footer from './sections/Footer';

export default function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyStores />
        <Features />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
