import { useState } from 'react';
import { galleryData } from '../lib/program-data';
import { LightboxModal } from './modals/lightbox-modal';
import { Camera, Filter } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'Semua' },
    { key: 'pelatihan', label: 'Pelatihan' },
    { key: 'workshop', label: 'Workshop' },
    { key: 'seminar', label: 'Seminar' },
    { key: 'fasilitas', label: 'Fasilitas' }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full text-sm font-medium mb-6 border border-teal-200 dark:border-teal-800">
            Galeri Kami 📸
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span>Galeri</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> Kegiatan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed" style={{marginRight: '1rem'}}>
            Dokumentasi kegiatan dan pencapaian BBPVP Bandung <br/>dalam mengembangkan SDM Indonesia
          </p>
        </div>

        {/* Gallery Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`gallery-filter px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? 'bg-emerald-600 text-white shadow-lg border-2 border-emerald-400'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md'
              }`}
              style={{transform: activeFilter === filter.key ? 'scale(1.05)' : ''}}
            >
              {filter.key === 'all' && <Filter className="w-4 h-4" />}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="galleryGrid">
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id}
              className="gallery-item group cursor-pointer overflow-hidden rounded-2xl natural-card transition-all duration-500"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-200">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                    <Camera className="w-4 h-4 text-gray-800" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-emerald-500/95 backdrop-blur-sm text-white text-xs rounded-lg font-medium">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">Tidak ada gambar untuk kategori ini.</p>
          </div>
        )}
      </div>

      <LightboxModal 
        image={selectedImage}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
