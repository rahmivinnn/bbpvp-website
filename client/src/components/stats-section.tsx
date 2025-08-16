import { useEffect, useRef } from 'react';
import { Building, BarChart3, GraduationCap } from 'lucide-react';

export function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 5, label: 'Angkatan', icon: Building, color: 'text-white', bgColor: 'bg-blue-700' },
    { value: 60, label: 'Kelas', icon: BarChart3, color: 'text-white', bgColor: 'bg-blue-700' },
    { value: 900, label: 'Alumni', icon: GraduationCap, color: 'text-white', bgColor: 'bg-blue-700' }
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
              const increment = target / 50;
              
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
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-slate-800 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            Lulusan dan Kelas
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            BBPVP Bandung menghasilkan banyak alumni dan pekerja sukses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" ref={statsRef}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div 
                    className="text-5xl md:text-6xl font-bold text-white mb-3 counter heading-font" 
                    data-target={stat.value}
                  >
                    0
                  </div>
                  
                  {/* Label */}
                  <div className="text-slate-300 font-semibold text-xl">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            Cari dan temukan kelas favoritmu disini!
          </p>
        </div>
      </div>
    </section>
  );
}