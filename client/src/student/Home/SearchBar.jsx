import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, onSubmit, placeholder = 'Search courses, skills, technologies...' }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex items-center w-full max-w-2xl mx-auto shadow-xl shadow-sky-500/10 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
    >
      <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-28 py-3.5 sm:py-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 bg-transparent focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-2 px-5 py-2 sm:py-2.5 bg-[#00A7F3] hover:bg-[#0092d6] text-white text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer"
      >
        Explore
      </button>
    </form>
  );
};

export default SearchBar;
