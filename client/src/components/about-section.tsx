import { Check } from 'lucide-react';

export function AboutSection() {
  const features = [
    'Pelatihan berkualitas tinggi dengan standar internasional',
    'Instruktur berpengalaman dan bersertifikat',
    'Fasilitas modern dan lengkap',
    'Kurikulum yang selalu update sesuai industri'
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Visi Kami',
      content: 'Menjadi pusat pelatihan vokasi terkemuka yang menghasilkan tenaga kerja kompeten dan produktif untuk mendukung pembangunan nasional.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Misi Kami',
      content: 'Menyelenggarakan pelatihan vokasi berkualitas, mengembangkan kompetensi SDM, dan membangun kemitraan strategis dengan industri.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: '💎',
      title: 'Nilai Kami',
      content: 'Profesionalisme, inovasi, integritas, dan komitmen dalam memberikan layanan pelatihan terbaik untuk kemajuan bangsa.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-800" style={{transform: 'rotate(-1deg)'}}>
            Tentang Kami 🏢
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span style={{transform: 'rotate(-0.5deg)', display: 'inline-block'}}>Membangun Masa Depan</span><br/>
            <span className="text-gradient" style={{transform: 'rotate(1deg)', display: 'inline-block', marginLeft: '2rem'}}> Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed" style={{marginLeft: '1rem'}}>
            Direktorat Jenderal Pembinaan Pelatihan dan Produktivitas <br/>Kementrian Ketenagakerjaan Republik Indonesia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="about-content space-y-8">
            <div>
              <h3 className="heading-font text-3xl font-bold text-gray-900 dark:text-white mb-6" style={{transform: 'rotate(-0.5deg)', transformOrigin: 'left'}}>
                Sejarah & Komitmen Kami
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                BBPVP Bandung adalah institusi pelatihan vokasi terkemuka yang telah berdedikasi dalam mengembangkan 
                sumber daya manusia Indonesia sejak didirikan. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Kami berkomitmen untuk memberikan pelatihan berkualitas tinggi yang sesuai dengan kebutuhan industri modern.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="natural-card p-4" style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index % 3 + 1) * 0.5}deg)`}}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center mt-1" style={{transform: 'rotate(-5deg)'}}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image relative" style={{transform: 'rotate(2deg)'}}>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-60"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-300 dark:bg-amber-600 rounded-full opacity-80" style={{transform: 'rotate(45deg)'}}></div>
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
              style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index + 1) * 0.8}deg)`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`} style={{transform: 'rotate(-8deg)'}}>
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
