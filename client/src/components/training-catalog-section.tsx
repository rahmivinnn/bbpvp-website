import { useState } from 'react';
import { Search, Clock, BookOpen, Users, Star, ExternalLink, Cpu, Wrench, MapPin, Code, Truck, Filter } from 'lucide-react';

export function TrainingCatalogSection() {
  const [searchFilter, setSearchFilter] = useState('');
  const [kejuruanFilter, setKejuruanFilter] = useState('All');

  const trainingPrograms = [
    {
      id: 1,
      title: 'Pengoperasian Tools Generative AI untuk Konten Digital dan Bisnis',
      duration: '11 topik',
      version: 'Versi 1',
      kejuruan: 'Teknologi Informasi dan Komunikasi',
      subKejuruan: 'Information System and Technology Development',
price: '',
      rating: 4.5,
icon: Cpu,
      description: 'Pelajari penggunaan tools AI generative untuk mengoptimalkan konten digital dan strategi bisnis modern'
    },
    {
      id: 2,
      title: 'Pembuatan Perangkat Predictive Maintenance Untuk Mesin Produksi',
      duration: '200 jam',
      version: 'Versi 1',
      totalTopik: '9 topik',
      kejuruan: 'Manufaktur',
      subKejuruan: 'Mesin Produksi',
price: '',
      rating: 4.8,
icon: Wrench,
      description: 'Kuasai teknologi predictive maintenance untuk meningkatkan efisiensi mesin produksi industri'
    },
    {
      id: 3,
      title: 'Pembuatan Sistem Informasi Pariwisata Berbasis Website',
      duration: '164 jam',
      version: 'Versi 1',
      totalTopik: '6 topik',
      kejuruan: 'Pariwisata',
      subKejuruan: 'Layanan Perjalanan (Travel Services)',
price: '',
      rating: 4.3,
icon: MapPin,
      description: 'Bangun sistem informasi pariwisata komprehensif untuk meningkatkan layanan travel'
    },
    {
      id: 4,
      title: 'Pengembangan Web dengan Node.js dan React',
      duration: '200 jam',
      version: 'Versi 1',
      totalTopik: '12 topik',
      kejuruan: 'Teknologi Informasi dan Komunikasi',
      subKejuruan: 'IT Services Management System',
price: '',
      rating: 4.9,
icon: Code,
      description: 'Master full-stack web development dengan teknologi Node.js dan React terkini'
    },
    {
      id: 5,
      title: 'Pengoperasian Forklift Kelas 2 BBPVP Bandung',
      duration: '80 jam',
      version: 'Versi 1',
      kejuruan: 'Otomotif',
      subKejuruan: 'Mekanik Alat Berat',
      price: 'Gratis',
      rating: 4.6,
icon: Truck,
      description: 'Pelatihan operasional forklift dengan sertifikasi resmi untuk industri logistik',
      highlight: true,
      note: 'Silakan isi terlebih dahulu GForm: https://forms.gle/EWFS4zHL26SVsV1w8'
    }
  ];

  const kejuruanOptions = ['All', ...Array.from(new Set(trainingPrograms.map(p => p.kejuruan)))];

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                         program.kejuruan.toLowerCase().includes(searchFilter.toLowerCase()) ||
                         program.subKejuruan.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesKejuruan = kejuruanFilter === 'All' || program.kejuruan === kejuruanFilter;
    return matchesSearch && matchesKejuruan;
  });

  return (
    <section id="training-catalog" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-medium mb-6 border border-orange-200 dark:border-orange-800">
            <BookOpen className="w-4 h-4" />
            Katalog Pelatihan
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span>Temukan Pelatihan</span><br/>
            <span className="text-gradient"> Sesuai Bakat & Minatmu</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Berbagai program pelatihan berkualitas tinggi <br/>untuk mengembangkan kompetensi profesional Anda
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cari Pelatihan
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Masukkan judul atau kejuruan..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="lg:w-64">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter Kejuruan
              </label>
              <select
                value={kejuruanFilter}
                onChange={(e) => setKejuruanFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {kejuruanOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id} 
              className={`natural-card p-6 group hover:shadow-xl transition-all duration-300 ${program.highlight ? 'ring-2 ring-green-200 dark:ring-green-700 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20' : ''}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                  {(() => {
                    const Icon = program.icon;
                    return <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />;
                  })()}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {program.rating}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="heading-font text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {program.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                  {program.totalTopik && (
                    <>
                      <span>•</span>
                      <span>{program.totalTopik}</span>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">{program.kejuruan}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{program.subKejuruan}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                {program.price === 'Gratis' && (
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      {program.price}
                    </span>
                  </div>
                )}
                {program.price !== 'Gratis' && <div></div>}
                <a 
                  href="https://bbpvpbandung.kemnaker.go.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-lg transition-all duration-200 text-sm font-medium group-hover:scale-105"
                >
                  Ikuti Pelatihan
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Special Note */}
              {program.note && (
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-xs text-yellow-800 dark:text-yellow-400">
                    📝 {program.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-full inline-block mb-4">
              <Search className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Tidak ada pelatihan yang ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coba ubah kata kunci pencarian atau filter kejuruan Anda
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="heading-font text-3xl font-bold text-white mb-4">
              Siap Mengembangkan Karir Anda?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Bergabunglah dengan ribuan alumni yang telah sukses berkarir di industri impian mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-slate-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                Konsultasi Gratis
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-all duration-200">
                Lihat Semua Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}