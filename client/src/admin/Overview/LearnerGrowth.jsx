import React from 'react';
import { useSelector } from 'react-redux';
import { Users, UserPlus } from 'lucide-react';

const LearnerGrowth = () => {
  const monthlyData = useSelector(
    (state) => state.analytics?.revenueMonthly || []
  );

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Learner Registrations
          </h3>
          <p className="text-xs text-slate-500">Student enrollment speed</p>
        </div>
        <div className="p-2 bg-sky-50 text-[#00A7F3] rounded-xl">
          <UserPlus className="w-4 h-4" />
        </div>
      </div>

      <div className="space-y-4 my-2">
        {monthlyData.slice(-4).map((item, idx) => {
          const percentage = Math.min(Math.round((item.learners / 2000) * 100), 100);
          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-700">{item.month} Cohort</span>
                <span className="font-bold text-[#00A7F3]">{item.learners} students ({percentage}%)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-[#00A7F3] rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500">Target: 2,000 / month</span>
        <span className="font-bold text-emerald-600">84% Goal Reached</span>
      </div>
    </div>
  );
};

export default LearnerGrowth;
