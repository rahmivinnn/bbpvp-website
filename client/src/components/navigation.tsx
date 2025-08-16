import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useDarkMode } from '../hooks/use-dark-mode';

export function Navigation() {
  const { isDark, toggleDark } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang' },
    { href: '#programs', label: 'Program' },
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
    <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/60 dark:border-gray-700/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md" style={{transform: 'rotate(-3deg)'}}>
              <img 
                src="https://bbpvpbandung.kemnaker.go.id/uploads/d9810d73cd90a7c974c2e79856d80cc3.png" 
                alt="BBPVP Bandung Logo" 
                className="h-8 w-8 object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h1 className="heading-font font-bold text-xl text-gray-900 dark:text-white">BBPVP Bandung</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Kemenaker RI 🇮🇩</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 transform hover:scale-105"
                style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`}}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDark}
              className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/40 transition-all duration-200 flex items-center justify-center transform hover:rotate-12 hover:scale-110"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-600" /> : <Moon className="w-5 h-5 text-amber-700" />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-800/20">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
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
