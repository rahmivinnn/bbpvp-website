import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react';
import duranPhoto from '@assets/WhatsApp Image 2025-08-16 at 4.24.45 PM_1755336457076.jpeg';
import duranChristianPhoto from '@assets/WhatsApp Image 2025-08-16 at 4.26.30 PM_1755336694383.jpeg';

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki Pratama',
      age: 24,
      program: 'Pelatihan Otomotif - Engine Management',
      company: 'PT. Astra Honda Motor',
      position: 'Teknisi Senior',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Setelah mengikuti pelatihan di BBPVP Bandung, hidup saya benar-benar berubah. Dari yang tadinya pengangguran, sekarang saya bekerja sebagai teknisi senior di Honda dengan gaji yang sangat memuaskan. Materinya sangat aplikatif dan instrukturnya berpengalaman langsung dari industri. Terima kasih BBPVP Bandung!',
      year: '2023'
    },
    {
      id: 2,
      name: 'Duran Assegaf',
      age: 26,
      program: 'TIK & Kreatif Digital',
      company: 'PT. Media Teknologi Indonesia',
      position: 'Web Developer',
      photo: duranPhoto,
      rating: 5,
      testimonial: 'Setelah saya mengikuti pelatihan di BBPVP Bandung, bukan hanya ilmu yang saya dapat, tetapi nuansa islamnya kerasa banget. Lingkungan yang kondusif untuk beribadah, fasilitas masjid yang nyaman, dan teman-teman yang saling mengingatkan dalam kebaikan. Instruktur tidak hanya mengajar skill teknis, tapi juga menanamkan nilai-nilai islami dalam bekerja seperti kejujuran, amanah, dan etos kerja yang baik. Alhamdulillah, sekarang saya bekerja dengan skill yang mumpuni dan akhlak yang lebih baik. BBPVP bukan hanya tempat belajar, tapi juga tempat tumbuh sebagai muslim yang lebih baik.',
      year: '2024'
    },
    {
      id: 3,
      name: 'Duran Christian',
      age: 27,
      program: 'Refrigerasi & Tata Udara',
      company: 'PT. Cooling Solution Indonesia',
      position: 'Teknisi AC Senior',
      photo: duranChristianPhoto,
      rating: 5,
      testimonial: 'Pelatihan di BBPVP bukan hanya mengubah karir saya, tapi juga mengubah hidup saya secara spiritual. Saya yang dulu beragama Kristen, merasakan hawa nuansa islami yang begitu kental di sini. Mulai dari adzan yang berkumandang, sholat berjamaah yang khidmat, hingga akhlak mulia para instruktur dan teman-teman. Lingkungan yang penuh berkah ini membuat hati saya tergerak untuk mempelajari Islam lebih dalam. Alhamdulillah, saya akhirnya memutuskan untuk masuk Islam. BBPVP tidak hanya memberikan saya skill AC dan refrigerasi, tapi juga membimbing saya menemukan jalan yang benar. Sekarang saya bekerja dengan skill yang mumpuni dan hati yang tenang karena telah menemukan hidayah.',
      year: '2024'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium mb-6 border border-blue-200">
            <Star className="w-4 h-4" />
            Testimoni Alumni
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span>Cerita Sukses</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> Alumni Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dengarkan pengalaman nyata dari alumni BBPVP Bandung <br/>yang telah berhasil mengembangkan karir mereka
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="natural-card p-8 md:p-12 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile Section */}
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg group-hover:border-blue-300 transition-colors duration-300">
                    {current.photo ? (
                      <img 
                        src={current.photo} 
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                
                <h4 className="heading-font text-xl font-bold text-gray-900 mb-1">
                  {current.name}
                </h4>
                <p className="text-sm text-gray-500 mb-2">
                  {current.age} tahun • Alumni {current.year}
                </p>
                
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <p className="text-xs font-medium text-blue-800 mb-1">Program:</p>
                  <p className="text-sm text-blue-700">{current.program}</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-green-800 mb-1">Sekarang bekerja di:</p>
                  <p className="text-sm font-semibold text-green-700">{current.company}</p>
                  <p className="text-xs text-green-600">{current.position}</p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 text-center md:text-left italic">
                  "{current.testimonial}"
                </blockquote>

                {/* Additional Info */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    📚 Alumni BBPVP
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    ✅ Terverifikasi
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    🚀 Sukses Berkarir
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-blue-600 text-gray-600 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group/btn border border-gray-200 hover:border-blue-600"
            aria-label="Testimoni sebelumnya"
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-200" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-blue-600 text-gray-600 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group/btn border border-gray-200 hover:border-blue-600"
            aria-label="Testimoni selanjutnya"
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-blue-400'
              }`}
              aria-label={`Testimoni ${index + 1}`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: '2000+', label: 'Alumni Sukses', icon: '🎓' },
            { number: '85%', label: 'Tingkat Penempatan Kerja', icon: '💼' },
            { number: '4.8/5', label: 'Rating Kepuasan Alumni', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} className="natural-card p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="heading-font text-2xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}