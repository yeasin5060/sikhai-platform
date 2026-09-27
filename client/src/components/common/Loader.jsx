import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = ({ message = 'Loading...', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-3">
      <Loader2
        className={`${
          sizeMap[size] || sizeMap.md
        } text-[#00A7F3] animate-spin`}
      />
      {message && <p className="text-xs font-medium text-slate-500">{message}</p>}
    </div>
  );
};

export default Loader;
