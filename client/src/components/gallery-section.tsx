import { useState } from 'react';
import { galleryData } from '../lib/program-data';
import { LightboxModal } from './modals/lightbox-modal';

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
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Galeri Kegiatan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dokumentasi kegiatan dan pencapaian BBPVP Bandung dalam mengembangkan SDM Indonesia
          </p>
        </div>

        {/* Gallery Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`gallery-filter px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="galleryGrid">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              className="gallery-item group cursor-pointer overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-800 hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LightboxModal 
        image={selectedImage}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
