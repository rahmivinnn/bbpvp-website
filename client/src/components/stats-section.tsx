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
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-cream to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" ref={statsRef}>
          {stats.map((stat, index) => {
            const colors = ['text-emerald-700', 'text-amber-700', 'text-red-600', 'text-blue-700'];
            const bgColors = ['bg-emerald-100/60', 'bg-amber-100/60', 'bg-red-100/60', 'bg-blue-100/60'];
            return (
              <div key={index} className="stat-item text-center group">
                <div className={`natural-card p-6 ${bgColors[index]} dark:bg-gray-800`}>
                  <div 
                    className={`text-4xl md:text-5xl font-bold ${colors[index]} mb-2 counter heading-font`} 
                    data-target={stat.value}
                  >
                    0
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            )}
          )}
        </div>
      </div>
    </section>
  );
}
