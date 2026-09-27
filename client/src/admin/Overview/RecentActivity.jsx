import React from 'react';
import {
  UserCheck,
  Award,
  CreditCard,
  MessageCircle,
  Video,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'New Enrollment',
    desc: 'Farzana Haque enrolled in Full Stack MERN Bootcamp',
    time: '12 mins ago',
    icon: CreditCard,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 2,
    title: 'Live Class Started',
    desc: 'Jhankar Mahbub initiated "React 19 State & Async Actions"',
    time: '35 mins ago',
    icon: Video,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    id: 3,
    title: 'Certificate Issued',
    desc: 'Nusrat Jahan completed Python for Data Science',
    time: '2 hours ago',
    icon: Award,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 4,
    title: 'Community Question',
    desc: 'Rahim Ahmed asked about useActionState vs useTransition',
    time: '3 hours ago',
    icon: MessageCircle,
    color: 'bg-sky-50 text-[#00A7F3]',
  },
];

const RecentActivity = () => {
  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-900">
          Recent Activities
        </h3>
        <span className="text-xs font-semibold text-[#00A7F3] hover:underline cursor-pointer">
          View All
        </span>
      </div>

      <div className="space-y-4">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <div key={act.id} className="flex items-start gap-3.5 group">
              <div className={`p-2.5 rounded-xl shrink-0 ${act.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-800">{act.title}</p>
                  <span className="text-[11px] text-slate-400">{act.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {act.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
