import { useState } from 'react';
import { programData } from '../lib/program-data';
import { ProgramModal } from './modals/program-modal';

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  return (
    <section id="programs" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Program Unggulan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Berbagai program pelatihan vokasi yang dirancang untuk meningkatkan kompetensi dan produktivitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(programData).map((program) => (
            <div 
              key={program.id}
              className="program-card bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProgram(program.id)}
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${program.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {program.category}
                  </span>
                  <i className={`${program.icon} ${program.iconColor} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {program.description}
                </p>
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
