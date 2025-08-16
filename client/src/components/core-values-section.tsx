export function CoreValuesSection() {
  const coreValues = [
    {
      letter: 'I',
      title: 'INTEGRITY',
      description: 'JUJUR, AKUNTABEL, ANTI "ASAL LULUS".',
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      letter: 'N',
      title: 'NIMBLE',
      description: 'RESPONSIF TERHADAP TREN (EV, CNC, IOT, KREATIF DIGITAL).',
      position: { top: '20%', right: '20%' }
    },
    {
      letter: 'D',
      title: 'DELIVERY',
      description: 'OUTCOME-BASED: PORTOFOLIO, SERTIFIKAT, PEKERJAAN.',
      position: { top: '50%', right: '5%', transform: 'translateY(-50%)' }
    },
    {
      letter: 'U',
      title: 'UNITY',
      description: 'KOLABORASI DUDI-PEMERINTAH-KOMUNITAS-ALUMNI.',
      position: { bottom: '20%', right: '20%' }
    },
    {
      letter: 'S',
      title: 'SAFETY',
      description: 'K3 JADI MINDSET, BUKAN FORMALITAS.',
      position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      letter: 'T',
      title: 'TOP-NOTCH TOOLS',
      description: 'PERALATAN & SOP SELEVEL INDUSTRI.',
      position: { bottom: '20%', left: '20%' }
    },
    {
      letter: 'R',
      title: 'RESPECT',
      description: 'INKLUSIF, RAMAH PEMULA & PENYANDANG DISABILITAS RINGAN.',
      position: { top: '50%', left: '5%', transform: 'translateY(-50%)' }
    },
    {
      letter: 'Y',
      title: 'IMPACT',
      description: 'DAMPAK SOSIAL-EKONOMI NYATA BAGI KELUARGA & DAERAH',
      position: { top: '20%', left: '20%' }
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400 rounded-lg text-sm font-medium mb-6 border border-slate-200 dark:border-slate-800">
            <span className="text-lg">💎</span>
            Core Values
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span>Nilai Inti</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> INDUSTRY</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            8 nilai fundamental yang menjadi landasan <br/>setiap program dan layanan BBPVP Bandung
          </p>
        </div>

        {/* Circular Diagram - Clean Version */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-slate-700 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg">
              <div className="text-center">
                <div className="text-white font-bold text-lg leading-tight">
                  CORE<br/>VALUE
                </div>
              </div>
            </div>

            {/* Value Points - Clean without connection lines */}
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="absolute"
                style={value.position}
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl">
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-xl">{value.letter}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">{value.letter}</span>
              </div>
              
              <h4 className="heading-font text-lg font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-slate-100 dark:border-gray-700">
            <h3 className="heading-font text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nilai-Nilai yang Menginspirasi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Setiap program pelatihan di BBPVP Bandung dirancang dengan menerapkan 8 nilai inti INDUSTRY untuk menghasilkan lulusan yang tidak hanya kompeten secara teknis, tetapi juga berkarakter kuat dan siap menghadapi tantangan industri modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-200">
                Pelajari Program Kami
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}