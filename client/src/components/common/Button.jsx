import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-5 py-3 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#00A7F3] hover:bg-[#0092d6] text-white shadow-sm shadow-[#00A7F3]/25 focus:ring-[#00A7F3]',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-700 focus:ring-slate-300',
    outline:
      'border border-slate-200 hover:bg-slate-50 text-slate-700 focus:ring-slate-300',
    danger:
      'bg-rose-500 hover:bg-rose-600 text-white shadow-sm shadow-rose-500/25 focus:ring-rose-400',
    ghost:
      'hover:bg-slate-100 text-slate-600 hover:text-slate-900 focus:ring-slate-200',
    success:
      'bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm shadow-emerald-500/25 focus:ring-emerald-400',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.primary
      } ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
};

export default Button;
