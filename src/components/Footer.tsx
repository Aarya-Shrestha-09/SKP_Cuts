import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-10 border-t border-slate-100 text-center">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} SKP Cuts. All rights reserved.
      </p>
      <p className="text-slate-400 text-xs mt-1 italic">
        Keep it sharp, keep it professional.
      </p>
    </footer>
  );
};
