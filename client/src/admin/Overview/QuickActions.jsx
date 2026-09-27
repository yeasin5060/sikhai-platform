import React from 'react';
import {
  PlusCircle,
  Radio,
  FileText,
  UserPlus,
  Send,
  Download,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    title: 'Create Course',
    desc: 'Launch a new syllabus or track',
    to: '/admin/courses',
    icon: PlusCircle,
    color: 'bg-sky-50 text-[#00A7F3] border-sky-100',
  },
  {
    title: 'Start Live Class',
    desc: 'Broadcast to registered learners',
    to: '/admin/active-classes',
    icon: Radio,
    color: 'bg-rose-50 text-rose-500 border-rose-100',
  },
  {
    title: 'Publish Post',
    desc: 'Announce updates to community',
    to: '/admin/create-post',
    icon: Send,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    title: 'Add Instructor',
    desc: 'Onboard teaching faculty',
    to: '/admin/instructors',
    icon: UserPlus,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

const QuickActions = () => {
  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Quick Actions</h3>
          <p className="text-xs text-slate-500">Shortcut controls for platform</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.to}
              className={`p-4 rounded-2xl border ${item.color} hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer`}
            >
              <div className="p-3 rounded-xl bg-white shadow-xs mb-2 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                {item.title}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                {item.desc}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
