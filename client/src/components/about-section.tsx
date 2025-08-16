import { Check } from 'lucide-react';

export function AboutSection() {
  const features = [
    'Pelatihan berbasis kompetensi (PBK) berstandar industri',
    'PBL (Project Based Learning) dengan proyek riil',
    'Instruktur berpengalaman dan bersertifikat',
    'Fasilitas workshop berstandar industri',
    'Sertifikasi profesi BNSP yang diakui',
    'Job matching dan career service'
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Visi Kami',
      content: 'Menjadi pusat unggulan vokasi dan produktivitas yang adaptif, inklusif, dan berjejaring—melahirkan talenta kompeten yang terserap industri atau mandiri berwirausaha.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Misi Kami',
      content: '1. Menyelenggarakan PBK berstandar industri dengan porsi praktik dominan\n2. Memperkuat ekosistem sertifikasi & TUK agar pengakuan kompetensi merata\n3. Mendorong kemitraan strategis DUDI–kampus–komunitas untuk desain kurikulum agile\n4. Meningkatkan produktivitas melalui budaya K3, 5R/5S, lean, dan digitalisasi proses\n5. Menggerakkan job matching yang efektif melalui career service & job fair kurasi',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: '💎',
      title: 'Core Values INDUSTRY',
      content: 'INTEGRITY - Jujur, akuntabel, anti "asal lulus"\nNIMBLE - Responsif terhadap tren (EV, CNC, IoT, kreatif digital)\nDELIVERY - Outcome-based: portofolio, sertifikat, pekerjaan\nUNITY - Kolaborasi DUDI–pemerintah–komunitas–alumni\nSAFETY - K3 jadi mindset, bukan formalitas\nTOP-NOTCH TOOLS - Peralatan & SOP selevel industri\nRESPECT - Inklusif, ramah pemula & penyandang disabilitas ringan\nIMPACT - Dampak sosial-ekonomi nyata bagi keluarga & daerah',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-800">
            Tentang Kami 🏢
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span>Membangun Masa Depan</span><br/>
            <span className="text-gradient"> Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Direktorat Jenderal Pembinaan Pelatihan dan Produktivitas <br/>Kementrian Ketenagakerjaan Republik Indonesia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="about-content space-y-8">
            <div>
              <h3 className="heading-font text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Sejarah & Komitmen Kami
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                BBPVP Bandung adalah UPT pusat Kementerian Ketenagakerjaan RI yang fokus mengubah potensi jadi kompetensi lewat pelatihan vokasi berbasis kompetensi (PBK), sertifikasi profesi, dan link-and-match dengan industri.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Berlokasi strategis di Jl. Jenderal Gatot Subroto No. 170, Bandung, BBPVP Bandung melayani talenta muda, pencari kerja, hingga pekerja industri yang ingin upskill/reskill—dari otomotif, manufaktur, refrigerasi & tata udara, sampai teknologi informasi dan komunikasi.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl mb-6">
                <h4 className="heading-font text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> PBL (Project Based Learning)
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Metodologi pembelajaran berbasis proyek dengan <strong>real project dari industri</strong>, 
                  problem-based learning approach, dan collaborative team work untuk menghasilkan 
                  <strong>portofolio nyata</strong> dan kompetensi problem solving yang teruji.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="natural-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-60"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-300 dark:bg-amber-600 rounded-full opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Team meeting" 
              className="relative rounded-2xl shadow-lg w-full h-auto transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-4 border-white dark:border-gray-700"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="natural-card p-8 text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300`}>
                {value.icon}
              </div>
              <h4 className="heading-font text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {value.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
