import { useEffect } from 'react';
import Loader from './components/Loader';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Counters from './components/Counters';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1200 });
    }
  }, []);

  return (
    <>
      <Loader />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Counters />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
