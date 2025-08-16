import { ExternalLink } from 'lucide-react';
import logoImage from '@assets/bbp-removebg-preview_1755309171525.png';

export function Footer() {
  const quickLinks = [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Program', href: '#programs' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'PPID', href: 'https://bbpvpbandung.kemnaker.go.id/ppid' }
  ];

  const services = [
    { label: 'Survey Kepuasan', href: 'http://bit.ly/surveykepuasanbbpvpbandung' },
    { label: 'Form Pengaduan', href: 'https://bbpvpbandung.kemnaker.go.id/pengaduans/new' },
    { label: 'LAPOR!', href: 'https://www.lapor.go.id/instansi/kementerian-ketenagakerjaan' },
    { label: 'WBS', href: 'https://wbs.kemnaker.go.id/' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-youtube', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                <img 
                  src={logoImage} 
                  alt="BBPVP Bandung" 
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div>
                <h3 className="heading-font font-bold text-2xl">BBPVP Bandung</h3>
                <p className="text-gray-300 text-sm">Kementerian Ketenagakerjaan RI 🇮🇩</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Balai Besar Pelatihan Vokasi dan Produktivitas Bandung berkomitmen mengembangkan sumber daya manusia 
              Indonesia melalui pelatihan vokasi berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {service.label}
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              &copy; 2024 BBPVP Bandung - Kementerian Ketenagakerjaan Republik Indonesia. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Dibuat dengan ❤️ untuk Indonesia 🇮🇩</span>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
