import { useState } from 'react';
import { programData } from '../lib/program-data';
import { ProgramModal } from './modals/program-modal';

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 border border-amber-200">
            Program Kami 📚
          </div>
          <h2 className="section-title heading-font text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span>Program</span>
            <span className="text-gradient" style={{marginLeft: '1rem'}}> Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{marginLeft: '1.5rem'}}>
            Berbagai program pelatihan vokasi yang dirancang <br/>untuk meningkatkan kompetensi dan produktivitas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(programData).map((program, index) => (
            <div 
              key={program.id}
              className="program-card natural-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProgram(program.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <div className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                    <i className={`${program.icon} ${program.iconColor} text-base`}></i>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs rounded-lg font-medium">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${program.categoryColor} px-3 py-1 rounded-xl text-xs font-medium tracking-wide`}>
                    {program.category}
                  </span>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="heading-font text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 mb-4">
                  {program.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-emerald-700 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Pelajari Lebih Lanjut
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
