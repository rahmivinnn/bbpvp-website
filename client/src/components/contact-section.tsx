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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dapatkan informasi lebih lanjut tentang program pelatihan dan layanan kami
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Service Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Layanan Pengaduan</h4>
              <div className="space-y-2">
                {serviceLinks.map((service, index) => (
                  <a 
                    key={index}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link flex items-center space-x-3 p-3 bg-white dark:bg-slate-900 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <service.icon className={`w-5 h-5 ${service.color}`} />
                    <span className="text-gray-700 dark:text-gray-300">{service.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h3>
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
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
