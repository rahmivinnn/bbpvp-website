import { Calendar, Clock, Eye, TrendingUp } from 'lucide-react';

export function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: 'Job Fair Nasional Berakhir, Lowongan Kerja Tetap Dibuka',
      excerpt: 'Gelaran Festival Pelatihan Vokasi (FPV) dan Job Fair Nasional Tahun 2023 menyediakan total 56.566 lowongan kerja pada 135 perusahaan. Meskipun gelaran Job Fair sudah berakhir, lowongan kerja tersebut tetap bisa diakses oleh masyarakat melalui layanan SIAPKerja.',
      date: '29 Okt 2023',
      category: 'BBPVP Bandung',
      popular: true,
      featured: true
    },
    {
      id: 2,
      title: 'Menaker resmikan Workshop Digital Creative di BBPVP Bandung',
      excerpt: 'Menteri Ketenagakerjaan (Menaker) Ida Fauziyah meresmikan Workshop Digital Creative (WDC) di area Balai Besar Pelatihan Vokasi dan Produktivitas (BBPVP) Bandung untuk mempercepat pertumbuhan sektor kreatif dan teknologi di wilayah setempat.',
      date: '20 Mei 2024',
      category: 'BBPVP Bandung',
      popular: true,
      featured: true
    },
    {
      id: 3,
      title: 'PENUNDAAN PENGUMUMAN HASIL PENILAIAN KOMPETENSI TEKNIS DALAM RANGKA SELEKSI TERBUKA PENGISIAN JABATAN PIMPINAN TINGGI MADYA KEMENTERIAN KETENAGAKERJAAN TAHUN 2024',
      excerpt: 'Panitia Seleksi mengumumkan bahwa hasil penilaian kompetensi teknis sebagaimana tertuang dalam pengumuman Panitia Seleksi Terbuka Pengisian JPT Madya Kementerian Ketenagakerjaan.',
      date: '21 Mei 2024',
      category: 'BBPVP Bandung',
      popular: true
    },
    {
      id: 4,
      title: 'Maklumat Pelayanan',
      excerpt: 'Maklumat Pelayanan BBPVP Bandung untuk memberikan pelayanan terbaik kepada masyarakat dalam bidang pelatihan vokasi dan produktivitas.',
      date: '11 Jun 2024',
      category: 'BBPVP Bandung',
      popular: false
    }
  ];

  const popularArticles = articles.filter(article => article.popular);
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium mb-6 border border-slate-200">
            <TrendingUp className="w-4 h-4" />
            Artikel Terkini
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span>Artikel &</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> Informasi Terbaru</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru dan informasi penting <br/>seputar program pelatihan vokasi BBPVP Bandung
          </p>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h3 className="heading-font text-2xl font-bold text-gray-900 mb-8">
              Artikel Unggulan
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="natural-card p-6 group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="heading-font text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-slate-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 text-sm font-medium group">
                    Baca Selengkapnya
                    <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regularArticles.map((article) => (
            <div key={article.id} className="natural-card p-6 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>
              
              <h3 className="heading-font text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-slate-600 transition-colors duration-200">
                {article.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <button className="text-slate-600 hover:text-slate-800 transition-colors duration-200 text-xs font-medium">
                  Baca →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Articles Section */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <h3 className="heading-font text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-slate-600" />
            Artikel Populer
          </h3>
          
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={article.id} className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-sm transition-all duration-200">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-slate-600">
                    {index + 1}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <span className="px-2 py-1 bg-slate-100 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="heading-font text-3xl font-bold text-white mb-4">
              Jangan Lewatkan Update Terbaru
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Dapatkan informasi terbaru seputar program pelatihan, event, dan lowongan kerja langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-6 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
              />
              <button className="px-8 py-3 bg-white text-slate-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}