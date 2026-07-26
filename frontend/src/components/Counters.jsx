// Counters.jsx - Beginner-friendly metric counters with React state
import { useState, useEffect } from 'react';

// Counter items list
const counterList = [
  { icon: 'fas fa-cubes', target: 2, label: 'Projects Completed' },
  { icon: 'fas fa-award', target: 5, label: 'Certifications Earned' },
  { icon: 'fas fa-globe', target: 2, label: 'Languages Spoken' },
];

function SingleCounter({ icon, target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment count up to target number smoothly
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      if (current <= target) {
        setCount(current);
      } else {
        clearInterval(timer);
      }
    }, 250);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="col-6 col-md-4">
      <div className="counter-box h-100">
        <div className="counter-icon"><i className={icon}></i></div>
        <h2 className="counter">{count}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="counter-section" data-aos="fade-up">
      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {counterList.map((item, index) => (
            <SingleCounter
              key={index}
              icon={item.icon}
              target={item.target}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
