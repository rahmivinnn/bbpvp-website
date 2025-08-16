import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, AlertTriangle, Shield } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Soekarno-Hatta No.456\nBandung, Jawa Barat 40285',
      bgColor: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '(022) 7566056\n+62 856-5928-0995',
      bgColor: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@bbpvpbandung.kemnaker.go.id',
      bgColor: 'bg-orange-500'
    }
  ];

  const serviceLinks = [
    {
      icon: MessageSquare,
      title: 'Survey Kepuasan',
      url: 'http://bit.ly/surveykepuasanbbpvpbandung',
      color: 'text-primary-500 group-hover:text-primary-600'
    },
    {
      icon: Phone,
      title: 'WhatsApp Laporan',
      url: 'https://api.whatsapp.com/send?phone=6285659280995',
      color: 'text-green-500 group-hover:text-green-600'
    },
    {
      icon: AlertTriangle,
      title: 'LAPOR!',
      url: 'https://www.lapor.go.id/instansi/kementerian-ketenagakerjaan',
      color: 'text-red-500 group-hover:text-red-600'
    },
    {
      icon: Shield,
      title: 'WBS Kemnaker',
      url: 'https://wbs.kemnaker.go.id/',
      color: 'text-purple-500 group-hover:text-purple-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Semua field harus diisi",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual form submission
    toast({
      title: "Terima kasih!",
      description: "Pesan Anda telah diterima. Kami akan segera menghubungi Anda."
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium mb-6 border border-orange-200 dark:border-orange-800" style={{transform: 'rotate(0.8deg)'}}>
            Hubungi Kami 📞
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span style={{transform: 'rotate(-0.3deg)', display: 'inline-block'}}>Mari</span>
            <span className="text-gradient" style={{transform: 'rotate(1.2deg)', display: 'inline-block', marginLeft: '1rem'}}> Berkolaborasi</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed" style={{marginLeft: '0.5rem'}}>
            Dapatkan informasi lebih lanjut tentang <br/>program pelatihan dan layanan kami
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item natural-card p-6 group" style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index + 1) * 0.6}deg)`}}>
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 ${info.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} style={{transform: 'rotate(-5deg)'}}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="heading-font font-bold text-gray-900 dark:text-white mb-2">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm leading-relaxed">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Service Links */}
            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">Layanan Pengaduan</h4>
              <div className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <a 
                    key={index}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link flex items-center space-x-3 p-4 natural-card group"
                    style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.4}deg)`}}
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{transform: 'rotate(-3deg)'}}>
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">{service.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:rotate-12 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="natural-card p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center" style={{transform: 'rotate(-8deg)'}}>
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-font text-3xl font-bold text-gray-900 dark:text-white">Kirim Pesan</h3>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" 
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" 
                      placeholder="Masukkan email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subjek
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" 
                    placeholder="Masukkan subjek"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea 
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" 
                    placeholder="Tulis pesan Anda..."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
