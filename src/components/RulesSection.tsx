import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { RULES } from '../constants';

export const RulesSection: React.FC = () => {
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-left">
      <div className="flex items-center gap-2 mb-4 text-amber-800 font-bold uppercase text-sm tracking-wider">
        <AlertTriangle className="w-5 h-5" />
        Shop Rules & Etiquette
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {RULES.map((rule, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-amber-900/80">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0" />
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};
