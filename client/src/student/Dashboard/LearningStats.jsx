import React from 'react';
import { BookOpen, Award, Flame, Clock } from 'lucide-react';

const LearningStats = () => {
  const stats = [
    {
      label: 'Enrolled Courses',
      val: '3',
      sub: '2 in active progress',
      icon: BookOpen,
      color: 'bg-sky-50 dark:bg-sky-900/40 text-[#00A7F3]',
    },
    {
      label: 'Certificates Earned',
      val: '1',
      sub: 'Verified credential',
      icon: Award,
      color: 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600',
    },
    {
      label: 'Current Streak',
      val: '5 Days',
      sub: 'Personal record',
      icon: Flame,
      color: 'bg-rose-50 dark:bg-rose-900/40 text-rose-600',
    },
    {
      label: 'Total Study Time',
      val: '24.5 hrs',
      sub: 'This month',
      icon: Clock,
      color: 'bg-amber-50 dark:bg-amber-900/40 text-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div
            key={idx}
            className="p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                {s.label}
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 block">
                {s.val}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 block">
                {s.sub}
              </span>
            </div>
            <div className={`p-3 rounded-2xl ${s.color}`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LearningStats;
