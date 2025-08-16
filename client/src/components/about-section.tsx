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
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            ✨ Tentang Kami
          </div>
          <h2 className="section-title text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Membangun Masa Depan 
            <span className="text-gradient"> Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Direktorat Jenderal Pembinaan Pelatihan dan Produktivitas Kementrian Ketenagakerjaan Republik Indonesia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="about-content space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sejarah & Komitmen Kami</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                BBPVP Bandung adalah institusi pelatihan vokasi terkemuka yang telah berdedikasi dalam mengembangkan 
                sumber daya manusia Indonesia sejak didirikan. Kami berkomitmen untuk memberikan pelatihan berkualitas 
                tinggi yang sesuai dengan kebutuhan industri modern.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full filter blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Team meeting" 
              className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-full filter blur-xl"></div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="modern-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
