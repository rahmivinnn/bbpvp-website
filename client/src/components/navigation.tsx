import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import kemnakerLogo from '@assets/logo kemnaker-BBPVP_1755319196993.png';
import vokasiLogo from '@assets/logo vokasi-02_1755319200074.png';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang' },
    { href: '#programs', label: 'Program' },
    { href: '#articles', label: 'Artikel' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#contact', label: 'Kontak' }
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center space-x-6">
            {/* BBPVP Kemnaker Logo */}
            <div className="flex items-center">
              <img 
                src={kemnakerLogo} 
                alt="BBPVP Bandung Kemnaker Logo" 
                className="h-12 object-contain"
              />
            </div>
            
            {/* Pelatihan Vokasi Logo */}
            <div className="flex items-center">
              <img 
                src={vokasiLogo} 
                alt="Pelatihan Vokasi Logo" 
                className="h-8 object-contain"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
