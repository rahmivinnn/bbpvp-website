import { Check } from 'lucide-react';

export function AboutSection() {
  const features = [
    'Pelatihan berkualitas tinggi dengan standar internasional',
    'Instruktur berpengalaman dan bersertifikat',
    'Fasilitas modern dan lengkap'
  ];

  const values = [
    {
      icon: '👁️',
      title: 'Visi',
      content: 'Menjadi pusat pelatihan vokasi terkemuka yang menghasilkan tenaga kerja kompeten dan produktif untuk mendukung pembangunan nasional.',
      bgColor: 'from-primary/10 to-blue-50 dark:from-slate-800 dark:to-slate-700',
      borderColor: 'border-primary/20 dark:border-slate-600'
    },
    {
      icon: '🎯',
      title: 'Misi',
      content: 'Menyelenggarakan pelatihan vokasi berkualitas, mengembangkan kompetensi SDM, dan membangun kemitraan strategis dengan industri.',
      bgColor: 'from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700',
      borderColor: 'border-orange-100 dark:border-slate-600'
    },
    {
      icon: '💎',
      title: 'Nilai',
      content: 'Profesionalisme, inovasi, integritas, dan komitmen dalam memberikan layanan pelatihan terbaik untuk kemajuan bangsa.',
      bgColor: 'from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700',
      borderColor: 'border-green-100 dark:border-slate-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tentang Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Direktorat Jenderal Pembinaan Pelatihan dan Produktivitas Kementrian Ketenagakerjaan Republik Indonesia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="about-content">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sejarah & Visi Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              BBPVP Bandung adalah institusi pelatihan vokasi terkemuka yang telah berdedikasi dalam mengembangkan 
              sumber daya manusia Indonesia sejak didirikan. Kami berkomitmen untuk memberikan pelatihan berkualitas 
              tinggi yang sesuai dengan kebutuhan industri modern.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Team meeting" 
              className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`card-hover bg-gradient-to-br ${value.bgColor} p-8 rounded-xl border ${value.borderColor} transition-all duration-300`}
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
              </div>
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
