import { ExternalLink } from 'lucide-react';

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
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://bbpvpbandung.kemnaker.go.id/uploads/d9810d73cd90a7c974c2e79856d80cc3.png" 
                alt="BBPVP Bandung" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-bold text-xl">BBPVP Bandung</h3>
                <p className="text-gray-400 text-sm">Kementerian Ketenagakerjaan RI</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Balai Besar Pelatihan Vokasi dan Produktivitas Bandung berkomitmen mengembangkan sumber daya manusia 
              Indonesia melalui pelatihan vokasi berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <i className={`${social.icon} text-sm`}></i>
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
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 BBPVP Bandung - Kementerian Ketenagakerjaan Republik Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
