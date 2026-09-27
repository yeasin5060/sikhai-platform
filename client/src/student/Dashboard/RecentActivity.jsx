import React from 'react';
import { CheckCircle2, PlayCircle, Award, MessageSquare } from 'lucide-react';

const activities = [
  {
    title: 'Completed Lesson 3: ECMAScript Patterns',
    course: 'Full Stack MERN Bootcamp',
    time: '2 hours ago',
    icon: CheckCircle2,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Took a timestamped note at 08:34',
    course: 'React 19 Form Actions',
    time: 'Yesterday',
    icon: PlayCircle,
    color: 'bg-sky-50 text-[#00A7F3]',
  },
  {
    title: 'Answered a question in Community',
    course: 'Python for Data Science',
    time: '2 days ago',
    icon: MessageSquare,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Received Certificate of Completion',
    course: 'Flutter Mobile App Development',
    time: 'Jan 10, 2026',
    icon: Award,
    color: 'bg-amber-50 text-amber-600',
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 p-6 shadow-xs space-y-4">
      <h2 className="text-base font-bold text-slate-900 dark:text-white">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((act, idx) => {
          const Icon = act.icon;
          return (
            <div key={idx} className="flex items-start gap-3 text-xs">
              <div className={`p-2 rounded-xl shrink-0 ${act.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-800 dark:text-slate-200">{act.title}</p>
                <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-[11px] mt-0.5">
                  <span className="truncate">{act.course}</span>
                  <span>{act.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
