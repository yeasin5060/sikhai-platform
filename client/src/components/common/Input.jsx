import React from 'react';

const Input = ({
  label,
  error,
  icon: Icon,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  required = false,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full py-2.5 text-sm bg-white border rounded-xl text-slate-800 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-[#00A7F3]/20 focus:border-[#00A7F3] ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          } ${
            error ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};

export default Input;
