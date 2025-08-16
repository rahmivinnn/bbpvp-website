import { ArrowRight, UserPlus, ClipboardCheck, BookOpen, Award, Briefcase, TrendingUp } from 'lucide-react';

export function ServiceFlowSection() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Daftar Online/On-site',
      description: 'Pendaftaran dapat dilakukan secara online melalui website atau langsung di lokasi BBPVP Bandung',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      number: '01'
    },
    {
      icon: ClipboardCheck,
      title: 'Seleksi Administrasi & Tes',
      description: 'Proses seleksi ketat meliputi verifikasi administrasi dan tes kompetensi dasar',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      number: '02'
    },
    {
      icon: BookOpen,
      title: 'Pelatihan Intensif (4–8 minggu)',
      description: 'Program pelatihan intensif dengan porsi praktik dominan dan instruktur berpengalaman',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      number: '03'
    },
    {
      icon: Award,
      title: 'Uji Kompetensi/Sertifikasi',
      description: 'Uji kompetensi berstandar BNSP untuk mendapatkan sertifikat profesi yang diakui industri',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      number: '04'
    },
    {
      icon: Briefcase,
      title: 'Job Matching/Penempatan',
      description: 'Layanan job matching dan penempatan kerja melalui career service dan jaringan mitra industri',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      number: '05'
    },
    {
      icon: TrendingUp,
      title: 'Inkubasi Wirausaha',
      description: 'Alternatif jalur kewirausahaan dengan program inkubasi dan showcase untuk yang ingin mandiri',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      number: '06'
    }
  ];

  const programs = [
    {
      title: 'Pelatihan Berbasis Kompetensi (PBK)',
      description: 'Gratis (dibiayai pemerintah) dengan seleksi',
icon: 'PBK',
      highlight: true
    },
    {
      title: 'Sertifikasi Profesi (BNSP)',
      description: 'Skema kejuruan inti; TUK mitra tersebar di Jawa Barat',
icon: 'BNSP',
      highlight: false
    },
    {
      title: 'Job Matching & Job Fair',
      description: 'Kurasi lowongan & sesi rekrutmen cepat',
icon: 'JOB',
      highlight: false
    },
    {
      title: 'Kelas Kolaborasi DUDI',
      description: 'Kurikulum adaptif sesuai demand; instruktur tamu dari industri',
icon: 'DUDI',
      highlight: false
    },
    {
      title: 'Inkubasi & Showcase',
      description: 'Pameran karya, demo produk, pitching UMKM/entry level creator',
icon: 'INC',
      highlight: false
    },
    {
      title: 'PBL (Project Based Learning)',
      description: 'Pembelajaran berbasis proyek dengan real case dari industri',
icon: 'PBL',
      highlight: true
    }
  ];

  return (
    <section id="service-flow" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Program Excellence */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <Award className="w-4 h-4" />
            Program Keunggulan
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span>Program</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> Keunggulan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-16">
            Berbagai program unggulan yang dirancang khusus <br/>untuk menghasilkan talenta kompeten dan siap industri
          </p>
          
          {/* Programs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`natural-card p-6 text-center group ${program.highlight ? 'ring-2 ring-blue-200 dark:ring-blue-700 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20' : ''}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400">{program.icon}</span>
                </div>
                <h4 className="heading-font text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {program.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Flow */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium mb-6 border border-green-200 dark:border-green-800">
            <ClipboardCheck className="w-4 h-4" />
            Skema Layanan
          </div>
          <h2 className="section-title heading-font text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span>Skema Layanan &</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> Alur Pendaftar</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Alur proses yang terstruktur untuk memastikan <br/>kualitas peserta dan hasil pembelajaran optimal
          </p>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8">
              {/* Row 1 */}
              <div className="space-y-8">
                {[0, 3].map((stepIndex) => {
                  const step = steps[stepIndex];
                  const Icon = step.icon;
                  return (
                    <div key={stepIndex} className="relative">
                      <div className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
                        <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className={`w-8 h-8 ${step.color} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto border-2`}>
                          {step.number}
                        </div>
                        <h4 className="heading-font text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {stepIndex === 0 && (
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Row 2 */}
              <div className="space-y-8 pt-20">
                {[1, 4].map((stepIndex) => {
                  const step = steps[stepIndex];
                  const Icon = step.icon;
                  return (
                    <div key={stepIndex} className="relative">
                      <div className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
                        <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className={`w-8 h-8 ${step.color} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto border-2`}>
                          {step.number}
                        </div>
                        <h4 className="heading-font text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {stepIndex === 1 && (
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Row 3 */}
              <div className="space-y-8">
                {[2, 5].map((stepIndex) => {
                  const step = steps[stepIndex];
                  const Icon = step.icon;
                  return (
                    <div key={stepIndex} className="relative">
                      <div className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
                        <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className={`w-8 h-8 ${step.color} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto border-2`}>
                          {step.number}
                        </div>
                        <h4 className="heading-font text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className={`w-8 h-8 ${step.color} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold mb-3 mx-auto border-2`}>
                      {step.number}
                    </div>
                    <h4 className="heading-font text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}