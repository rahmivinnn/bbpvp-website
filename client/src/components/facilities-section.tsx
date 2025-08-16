import { Building, Users, Laptop, Utensils, Calendar, Award, Eye, Home } from 'lucide-react';

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Building,
      title: 'Workshop Berstandar Industri',
      description: 'Fasilitas workshop dengan peralatan dan SOP selevel industri',
color: 'text-slate-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Laptop,
      title: 'Lab Komputer & TIK',
      description: 'Laboratorium komputer dengan teknologi terkini untuk pembelajaran digital',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Kelas Teori',
      description: 'Ruang kelas modern untuk pembelajaran teori dengan fasilitas audio visual',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Home,
      title: 'Boarding & Non-Boarding',
      description: 'Fasilitas asrama dan akomodasi untuk peserta dari luar kota',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Utensils,
      title: 'Kafetaria',
      description: 'Fasilitas makan dan area istirahat yang nyaman untuk peserta',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Calendar,
      title: 'Aula Event & Job Fair',
      description: 'Ruang besar untuk event, seminar, dan job fair dengan kapasitas besar',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: Award,
      title: 'Area LSP/TUK',
      description: 'Tempat Uji Kompetensi berstandar BNSP untuk sertifikasi profesi',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Eye,
      title: 'Area Showcase Karya',
      description: 'Area publik untuk pameran dan showcase hasil karya peserta',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium mb-6 border border-slate-200">
            <Building className="w-4 h-4" />
            Fasilitas Kami
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span>Bidang Keahlian</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> & Fasilitas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fasilitas modern dan lengkap untuk mendukung <br/>pembelajaran vokasi berkualitas tinggi
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 ${facility.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {(() => {
                  const Icon = facility.icon;
                  return <Icon className={`w-8 h-8 ${facility.color}`} />;
                })()}
              </div>
              <h4 className="heading-font text-lg font-bold text-gray-900 mb-3">
                {facility.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bidang Keahlian Details */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
          <h3 className="heading-font text-3xl font-bold text-gray-900 mb-8 text-center">
            Bidang Keahlian
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-100 rounded-md flex items-center justify-center text-xs">AUTO</span> Otomotif
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Engine management & injeksi, chasis/suspensi, electrical, sepeda motor, tren EV (fundamental).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center text-xs">MFG</span> Manufaktur
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Bubut-frais dasar, CNC milling & turning, CAD/CAM, metrologi, welding dasar.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-slate-600 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center text-xs">AC</span> Refrigerasi
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  AC split, chiller dasar, refrigerasi komersial, safe handling refrigerant.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center text-xs">TIK</span> TIK & Kreatif
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  IT support, desain grafis cetak & media sosial, videografi drone, konten digital.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-indigo-600 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-indigo-100 rounded-md flex items-center justify-center text-xs">SIM</span> Area Simulasi Kerja
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Simulasi kondisi kerja nyata untuk mempersiapkan peserta dengan lingkungan industri sebenarnya.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-pink-600 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-pink-100 rounded-md flex items-center justify-center text-xs">EXPO</span> Booth Pameran
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Area khusus untuk pameran karya peserta dan showcase hasil pembelajaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}