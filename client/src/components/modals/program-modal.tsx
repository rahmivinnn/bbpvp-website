import { X, Info } from 'lucide-react';
import { ProgramData } from '../../lib/program-data';

interface ProgramModalProps {
  program: ProgramData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProgramModal({ program, isOpen, onClose }: ProgramModalProps) {
  if (!isOpen || !program) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-full overflow-y-auto transform transition-all duration-300">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
            <button 
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="mb-4">
            <img 
              src={program.image} 
              alt={program.title} 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div 
            className="text-gray-600 dark:text-gray-400 prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: program.content }}
          />
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Info className="w-4 h-4" />
              Informasi Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
