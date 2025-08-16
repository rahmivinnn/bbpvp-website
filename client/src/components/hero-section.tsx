import { useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function HeroSection() {
  useEffect(() => {
    // Initialize hero text animations
    const heroTitle = document.querySelectorAll('.hero-title span');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');

    // Set initial states
    heroTitle.forEach(span => {
      (span as HTMLElement).style.opacity = '0';
      (span as HTMLElement).style.transform = 'translateY(30px)';
    });
    if (heroSubtitle) {
      (heroSubtitle as HTMLElement).style.opacity = '0';
      (heroSubtitle as HTMLElement).style.transform = 'translateY(30px)';
    }
    if (heroButtons) {
      (heroButtons as HTMLElement).style.opacity = '0';
      (heroButtons as HTMLElement).style.transform = 'translateY(30px)';
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Modern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Natural icon */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <div style={{transform: 'rotate(-3deg)'}} className="w-28 h-28 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center shadow-xl">
              <svg className="w-14 h-14 text-emerald-100" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 rounded-full" style={{transform: 'rotate(15deg)'}}></div>
            <div className="absolute -top-1 -left-2 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="hero-title">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800">
                Kementerian Ketenagakerjaan RI 🇮🇩
              </span>
            </div>
            <h1 className="heading-font text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-[0.9]">
              <span className="block" style={{transform: 'rotate(-1deg)', display: 'inline-block'}}>Balai Besar</span>
              <span className="block text-gradient" style={{transform: 'rotate(0.5deg)', display: 'inline-block', marginLeft: '1rem'}}>Pelatihan Vokasi</span>
              <span className="block" style={{transform: 'rotate(-0.5deg)', display: 'inline-block'}}>& Produktivitas</span>
            </h1>
          </div>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" style={{marginLeft: '2rem'}}>
            Membangun SDM Indonesia yang kompeten dan produktif melalui 
            <span className="font-semibold text-emerald-700 dark:text-emerald-400 underline decoration-wavy decoration-emerald-300"> pelatihan vokasi berkualitas tinggi</span>
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center" style={{marginLeft: '1rem'}}>
            <button 
              onClick={() => scrollToSection('#programs')}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Jelajahi Program Kami
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 flex items-center justify-center gap-3"
            >
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Stats preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm" style={{transform: 'rotate(-1deg)'}}>
            <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Tahun Pengalaman</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm" style={{transform: 'rotate(1deg)'}}>
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">60+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Kelas Tersedia</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm" style={{transform: 'rotate(-0.5deg)'}}>
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">900+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Alumni Sukses</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm" style={{transform: 'rotate(0.5deg)'}}>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Program Unggulan</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
