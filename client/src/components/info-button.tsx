import { useState } from 'react';
import { Info, X, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

interface InfoButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  section?: string;
}

export function InfoButton({ variant = 'primary', size = 'md', section = 'general' }: InfoButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const getModalContent = () => {
    switch (section) {
      case 'programs':
        return {
          title: 'Informasi Program Pelatihan',
          content: (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">📋 Persyaratan Umum:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Usia 18-35 tahun</li>
                  <li>• Minimal lulusan SMP/sederajat</li>
                  <li>• Sehat jasmani dan rohani</li>
                  <li>• Tidak sedang mengikuti pelatihan lain</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">🎯 Jenis Pelatihan:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>PBK (Pelatihan Berbasis Kompetensi)</strong> - GRATIS</li>
                  <li>• <strong>Sertifikasi BNSP</strong> - Biaya sesuai skema</li>
                  <li>• <strong>Pelatihan Khusus Industri</strong> - Kolaborasi DUDI</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-2">⏰ Durasi & Jadwal:</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Pelatihan intensif 4-8 minggu</li>
                  <li>• Senin - Jumat, 08:00 - 16:00 WIB</li>
                  <li>• Praktik dominan (70% praktik, 30% teori)</li>
                </ul>
              </div>
            </div>
          )
        };
      
      case 'facilities':
        return {
          title: 'Informasi Fasilitas BBPVP Bandung',
          content: (
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">🏭 Workshop & Lab:</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Workshop Otomotif (Engine Management, EV)</li>
                  <li>• Workshop Manufaktur (CNC, Welding, CAD/CAM)</li>
                  <li>• Lab Refrigerasi & Tata Udara</li>
                  <li>• Lab TIK & Kreatif Digital</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                <h4 className="font-bold text-teal-900 mb-2">🏠 Akomodasi:</h4>
                <ul className="text-sm text-teal-800 space-y-1">
                  <li>• Asrama putra dan putri (boarding)</li>
                  <li>• Kamar ber-AC dengan fasilitas lengkap</li>
                  <li>• Kafetaria dengan menu bergizi</li>
                  <li>• Area olahraga dan rekreasi</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-900 mb-2">📚 Penunjang:</h4>
                <ul className="text-sm text-indigo-800 space-y-1">
                  <li>• Perpustakaan dengan koleksi lengkap</li>
                  <li>• Ruang multimedia dan presentasi</li>
                  <li>• Area showcase dan pameran</li>
                  <li>• TUK (Tempat Uji Kompetensi) terakreditasi</li>
                </ul>
              </div>
            </div>
          )
        };
      
      case 'contact':
        return {
          title: 'Informasi Kontak & Lokasi',
          content: (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Alamat Lengkap:
                </h4>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Balai Besar Pelatihan Vokasi dan Produktivitas (BBPVP) Bandung</strong>
                </p>
                <p className="text-sm text-slate-700">
                  Jl. Jenderal Gatot Subroto No. 170<br/>
                  Kelurahan Gumuruh, Kecamatan Batununggal<br/>
                  Kota Bandung, Jawa Barat 40275
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telepon:
                  </h4>
                  <p className="text-sm text-blue-800">022-7312564</p>
                  <p className="text-sm text-blue-800">Call Center: <strong>1500630</strong></p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email:
                  </h4>
                  <p className="text-sm text-green-800">info.bbpvpbandung@kemnaker.go.id</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-2">🕒 Jam Operasional:</h4>
                <p className="text-sm text-yellow-800">
                  Senin - Jumat: 08:00 - 16:00 WIB<br/>
                  Sabtu - Minggu: Libur
                </p>
              </div>
            </div>
          )
        };
      
      default:
        return {
          title: 'Informasi BBPVP Bandung',
          content: (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">🎯 Tentang BBPVP Bandung</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Balai Besar Pelatihan Vokasi dan Produktivitas (BBPVP) Bandung adalah Unit Pelaksana Teknis (UPT) 
                  pusat Kementerian Ketenagakerjaan RI yang berfokus pada pengembangan sumber daya manusia Indonesia 
                  melalui pelatihan vokasi berbasis kompetensi.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 mb-1">15+</h4>
                  <p className="text-sm text-emerald-700">Program Pelatihan</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-1">5000+</h4>
                  <p className="text-sm text-orange-700">Alumni Sukses</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-1">85%</h4>
                  <p className="text-sm text-purple-700">Tingkat Penempatan</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://bbpvpbandung.kemnaker.go.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium text-center transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Website Resmi
                </a>
                <button 
                  onClick={() => {
                    window.open('tel:1500630', '_self');
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-sm font-medium text-center transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Center
                </button>
              </div>
            </div>
          )
        };
    }
  };

  const modalContent = getModalContent();

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
          ${variant === 'primary' 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600'
          }
          ${sizeClasses[size]}
          rounded-lg font-medium transition-all duration-200 
          flex items-center gap-2 shadow-sm hover:shadow-md
          transform hover:scale-105 active:scale-95
        `}
      >
        <Info className="w-4 h-4" />
        Informasi Lebih Lanjut
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-xl font-bold text-gray-900">
                {modalContent.title}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/50 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {modalContent.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}