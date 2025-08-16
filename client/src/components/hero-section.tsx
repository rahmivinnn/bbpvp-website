import { useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import backgroundImage from '@assets/bg-image.jpg';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="space-y-8 mt-32">
          <div className="hero-title">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800">
                Kementerian Ketenagakerjaan RI 🇮🇩
              </span>
            </div>
            <h1 className="heading-font text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.5)'}}>
              <span className="block">Balai Besar</span>
              <span className="block text-gradient" style={{marginLeft: '1rem'}}>Pelatihan Vokasi</span>
              <span className="block">& Produktivitas</span>
            </h1>
          </div>

          <p className="hero-subtitle text-xl md:text-2xl text-white font-semibold mb-12 max-w-4xl mx-auto leading-relaxed" style={{marginLeft: '2rem', textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.3)'}}>
            Membangun SDM Indonesia yang kompeten dan produktif melalui 
            <span className="font-semibold text-emerald-700 dark:text-emerald-400 underline decoration-wavy decoration-emerald-300"> pelatihan vokasi berkualitas tinggi</span>
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center" style={{marginLeft: '1rem'}}>
            <button 
              onClick={() => scrollToSection('#programs')}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Jelajahi Program Kami
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Stats preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm">
            <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Tahun Pengalaman</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">60+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Kelas Tersedia</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">900+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Alumni Sukses</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm">
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
