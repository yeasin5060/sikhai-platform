import React from 'react';
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Award,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { useSelector } from 'react-redux';

const StatsCards = () => {
  const learners = useSelector((state) => state.learners?.list || []);
  const courses = useSelector((state) => state.courses?.list || []);
  const analytics = useSelector((state) => state.analytics?.stats || {});

  const cards = [
    {
      label: 'Total Revenue',
      value: analytics.totalRevenue || '৳ 1,485,200',
      change: '+18.4%',
      isPositive: true,
      subtext: 'vs last month',
      icon: DollarSign,
      color: 'bg-emerald-500/10 text-emerald-600',
      border: 'border-emerald-100',
    },
    {
      label: 'Total Learners',
      value: `${learners.length * 2480}`,
      change: '+12.6%',
      isPositive: true,
      subtext: 'active accounts',
      icon: Users,
      color: 'bg-sky-500/10 text-[#00A7F3]',
      border: 'border-sky-100',
    },
    {
      label: 'Published Courses',
      value: `${courses.length}`,
      change: '+4 new',
      isPositive: true,
      subtext: 'across 4 tracks',
      icon: BookOpen,
      color: 'bg-indigo-500/10 text-indigo-600',
      border: 'border-indigo-100',
    },
    {
      label: 'Course Completion',
      value: analytics.completionRate || '78.2%',
      change: '+3.1%',
      isPositive: true,
      subtext: 'avg completion',
      icon: Award,
      color: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            className={`p-5 rounded-2xl bg-white border ${card.border} shadow-sm hover:shadow-md transition-all group`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {card.label}
              </span>
              <div className={`p-2.5 rounded-xl ${card.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-slate-800 tracking-tight">
                {card.value}
              </span>
              <span
                className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full ${
                  card.isPositive
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-rose-700 bg-rose-50'
                }`}
              >
                {card.isPositive ? (
                  <ArrowUpRight className="w-3 h-3 mr-0.5" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-0.5" />
                )}
                {card.change}
              </span>
            </div>

            <p className="mt-2 text-[11px] text-slate-400 font-medium">
              {card.subtext}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
