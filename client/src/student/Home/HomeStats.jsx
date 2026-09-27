import React from 'react';
import { Users, BookOpen, Award, Star } from 'lucide-react';

const stats = [
  { label: 'Active Learners', value: '52,000+', icon: Users, color: 'text-[#00A7F3] bg-sky-50 dark:bg-sky-900/40' },
  { label: 'Industry Courses', value: '45+', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/40' },
  { label: 'Certificates Awarded', value: '18,500+', icon: Award, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/40' },
  { label: '5-Star Reviews', value: '4.9 / 5.0', icon: Star, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/40' },
];

const HomeStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-6">
      {stats.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex items-center gap-4 group hover:shadow-md transition"
          >
            <div className={`p-3.5 rounded-2xl shrink-0 ${item.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white block leading-tight">
                {item.value}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {item.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeStats;
