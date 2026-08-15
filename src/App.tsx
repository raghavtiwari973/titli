import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Sustainability from './components/Sustainability';
import Craft from './components/Craft';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-titli-warm-white text-titli-charcoal transition-colors duration-500 overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Sustainability />
        <Craft />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
