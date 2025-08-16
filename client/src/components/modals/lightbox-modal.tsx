import { X } from 'lucide-react';

interface LightboxModalProps {
  image: {
    title: string;
    description: string;
    image: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LightboxModal({ image, isOpen, onClose }: LightboxModalProps) {
  if (!isOpen || !image) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative max-w-4xl max-h-full p-4">
        <img 
          src={image.image} 
          alt={image.title} 
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
          <h3 className="font-semibold">{image.title}</h3>
          <p className="text-sm text-gray-300">{image.description}</p>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
