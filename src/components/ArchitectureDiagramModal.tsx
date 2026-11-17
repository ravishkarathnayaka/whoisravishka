import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ArchitectureDiagramModal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-[#0A0E17] border border-cyan-500/30 rounded-2xl overflow-hidden p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <h3 className="text-lg font-semibold font-mono text-cyan-400">{title}</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white font-mono text-sm">ESC [X]</button>
        </div>
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg border border-white/5 object-contain max-h-[70vh]" />
      </div>
    </div>
  );
};
