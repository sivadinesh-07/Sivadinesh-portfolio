import { useEffect } from 'react';

export default function ParticlesBackground() {
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80 },
            color: { value: '#00d4ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 10 }
          }
        });
      }
    };

    if (window.particlesJS) {
      initParticles();
    } else {
      const interval = setInterval(() => {
        if (window.particlesJS) {
          initParticles();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  return <div id="particles-js"></div>;
}
