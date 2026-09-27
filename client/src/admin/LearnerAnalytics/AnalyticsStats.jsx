import React from 'react';
import { Users, GraduationCap, Flame, Clock } from 'lucide-react';
import { useSelector } from 'react-redux';

const AnalyticsStats = () => {
  const learners = useSelector((state) => state.learners?.list || []);
  const activeCount = learners.filter((l) => l.status === 'Active').length;

  const stats = [
    {
      label: 'Active Study Cohort',
      val: '8,420',
      change: '+14.2%',
      desc: 'Active past 7 days',
      icon: Flame,
      color: 'bg-rose-500/10 text-rose-600',
    },
    {
      label: 'Course Completion Rate',
      val: '82.4%',
      change: '+5.1%',
      desc: 'Higher than benchmark',
      icon: GraduationCap,
      color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      label: 'Average Watch Time',
      val: '4.8 hrs/wk',
      change: '+18.0%',
      desc: 'Per active learner',
      icon: Clock,
      color: 'bg-amber-500/10 text-amber-600',
    },
    {
      label: 'Certificates Awarded',
      val: '1,290',
      change: '+22.5%',
      desc: 'This semester',
      icon: Users,
      color: 'bg-sky-500/10 text-[#00A7F3]',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div
            key={idx}
            className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {s.label}
              </span>
              <div className={`p-2 rounded-xl ${s.color}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-slate-800 tracking-tight">
                {s.val}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {s.change}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">{s.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsStats;
