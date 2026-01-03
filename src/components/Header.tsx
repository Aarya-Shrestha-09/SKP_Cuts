import React from 'react';
import { Scissors } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="pt-12 pb-8 px-6 text-center border-b border-slate-100">
      <div className="flex justify-center mb-4">
        <div className="bg-slate-900 p-4 rounded-2xl shadow-lg transform -rotate-12">
          <Scissors className="w-10 h-10 text-white" />
        </div>
      </div>
      <h1 className="text-5xl font-serif font-bold text-slate-900 tracking-tight mb-2">
        SKP CUTS
      </h1>
      <div className="flex items-center justify-center gap-2 text-slate-500 font-medium tracking-[0.2em] text-xs uppercase">
        <span className="w-8 h-px bg-slate-300"></span>
        Master Barber Service
        <span className="w-8 h-px bg-slate-300"></span>
      </div>
    </header>
  );
};
