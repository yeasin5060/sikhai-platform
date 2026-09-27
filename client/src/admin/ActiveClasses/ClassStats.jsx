import React from 'react';
import { Radio, Users, CheckCircle2, Calendar } from 'lucide-react';
import { useSelector } from 'react-redux';

const ClassStats = () => {
  const classes = useSelector((state) => state.classes?.list || []);
  const liveCount = classes.filter((c) => c.status === 'Live Now').length;
  const upcomingCount = classes.filter((c) => c.status === 'Upcoming').length;
  const totalStudents = classes.reduce((sum, c) => sum + (c.activeAttendees || c.totalRegistered || 0), 0);

  const stats = [
    {
      label: 'Live Class Broadcasting',
      val: liveCount,
      icon: Radio,
      color: 'bg-rose-50 text-rose-600',
      badge: 'Active Now',
    },
    {
      label: 'Upcoming Scheduled',
      val: upcomingCount,
      icon: Calendar,
      color: 'bg-sky-50 text-[#00A7F3]',
      badge: 'Next 24h',
    },
    {
      label: 'Total Active Attendees',
      val: totalStudents,
      icon: Users,
      color: 'bg-emerald-50 text-emerald-600',
      badge: 'Engaged',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div
            key={idx}
            className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                {s.label}
              </span>
              <span className="text-2xl font-black text-slate-800">
                {s.val}
              </span>
              <span className="block text-[11px] text-slate-400 mt-1 font-medium">
                {s.badge}
              </span>
            </div>
            <div className={`p-3 rounded-2xl ${s.color}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClassStats;
