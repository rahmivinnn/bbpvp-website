import { useEffect, useRef } from 'react';

export function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 5, label: 'Angkatan' },
    { value: 60, label: 'Kelas' },
    { value: 900, label: 'Alumni' },
    { value: 15, label: 'Tahun Pengalaman' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((counter: any) => {
              const target = parseInt(counter.dataset.target);
              let current = 0;
              const increment = target / 100;
              
              const updateCounter = () => {
                if (current < target) {
                  current += increment;
                  counter.textContent = Math.floor(current);
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.textContent = target;
                }
              };
              
              updateCounter();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div 
                className="text-4xl font-bold text-primary dark:text-primary mb-2 counter" 
                data-target={stat.value}
              >
                0
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
