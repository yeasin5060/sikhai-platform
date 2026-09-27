import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Database, Smartphone, Palette, Cloud, BrainCircuit } from 'lucide-react';

const categories = [
  { name: 'Web Development', count: '14 Courses', icon: Code, color: 'text-[#00A7F3] bg-sky-50 dark:bg-sky-900/40' },
  { name: 'Data Science', count: '8 Courses', icon: Database, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/40' },
  { name: 'Mobile App', count: '6 Courses', icon: Smartphone, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/40' },
  { name: 'UI/UX Design', count: '5 Courses', icon: Palette, color: 'text-pink-600 bg-pink-50 dark:bg-pink-900/40' },
  { name: 'Cloud & DevOps', count: '7 Courses', icon: Cloud, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/40' },
  { name: 'Artificial Intelligence', count: '9 Courses', icon: BrainCircuit, color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/40' },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold text-[#00A7F3] uppercase tracking-wider">
            Explore Topics
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Top Learning Categories
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
          Hand-crafted career pathways targeted at high-demand digital skills.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              onClick={() => navigate(`/student/courses?category=${encodeURIComponent(cat.name)}`)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-[#00A7F3] dark:hover:border-[#00A7F3] hover:shadow-md transition text-center flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className={`p-3 rounded-2xl mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 line-clamp-1">
                {cat.name}
              </h3>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                {cat.count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
