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
        {/* Modern icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="hero-title">
            <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              🏆 Kementerian Ketenagakerjaan RI
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Balai Besar</span>
              <span className="block text-gradient">Pelatihan Vokasi</span>
              <span className="block">& Produktivitas</span>
            </h1>
          </div>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Membangun SDM Indonesia yang kompeten dan produktif melalui 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> pelatihan vokasi berkualitas tinggi</span>
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#programs')}
              className="modern-button-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              Jelajahi Program
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="modern-button-outline px-8 py-4 text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">60+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Kelas Tersedia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">900+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Alumni Sukses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Program Unggulan</div>
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
