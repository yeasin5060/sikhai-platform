import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variantClasses = {
    primary: 'bg-sky-50 text-[#00A7F3] border border-sky-200/60',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200/60',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200/60',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200/60',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
        variantClasses[variant] || variantClasses.primary
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
