import { useState } from 'react';
import { programData } from '../lib/program-data';
import { ProgramModal } from './modals/program-modal';

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  return (
    <section id="programs" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
            📚 Program Kami
          </div>
          <h2 className="section-title text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Program 
            <span className="text-gradient">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Berbagai program pelatihan vokasi yang dirancang untuk meningkatkan kompetensi dan produktivitas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(programData).map((program, index) => (
            <div 
              key={program.id}
              className="program-card modern-card overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProgram(program.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center`}>
                    <i className={`${program.icon} ${program.iconColor} text-lg`}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${program.categoryColor} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}>
                    {program.category}
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">#{index + 1}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm line-clamp-3">
                  {program.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Pelajari Lebih Lanjut
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProgramModal 
        program={selectedProgram ? programData[selectedProgram] : null}
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
}
