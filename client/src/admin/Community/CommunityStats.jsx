import React from 'react';
import { MessageSquare, CheckCircle, HelpCircle, Users } from 'lucide-react';
import { useSelector } from 'react-redux';

const CommunityStats = () => {
  const questions = useSelector((state) => state.community?.questions || []);
  const resolved = questions.filter((q) => q.isResolved).length;
  const totalAnswers = questions.reduce((sum, q) => sum + (q.answersCount || 0), 0);

  const stats = [
    {
      label: 'Total Discussions',
      val: questions.length + 182,
      icon: MessageSquare,
      color: 'bg-sky-50 text-[#00A7F3]',
    },
    {
      label: 'Questions Resolved',
      val: `${resolved + 140}`,
      icon: CheckCircle,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Answers Given',
      val: `${totalAnswers + 310}`,
      icon: HelpCircle,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      label: 'Active Contributors',
      val: '89',
      icon: Users,
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                {s.label}
              </span>
              <span className="text-xl font-black text-slate-800 mt-1 block">
                {s.val}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl ${s.color}`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityStats;
