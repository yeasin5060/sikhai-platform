import React from 'react';
import { useSelector } from 'react-redux';
import { TrendingUp } from 'lucide-react';

const LearnerGrowthChart = () => {
  const monthly = useSelector(
    (state) => state.analytics?.revenueMonthly || []
  );

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Learner Retention & Growth Curve
          </h3>
          <p className="text-xs text-slate-500">
            6-month cumulative learner acquisition
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A7F3]" />
            New Enrollees
          </span>
        </div>
      </div>

      <div className="h-60 flex items-end justify-between gap-4 pt-4 px-4 border-b border-slate-100">
        {monthly.map((m, idx) => {
          const height = Math.min(Math.round((m.learners / 2000) * 100), 100);
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-[11px] font-bold text-[#00A7F3] opacity-0 group-hover:opacity-100 transition">
                {m.learners}
              </span>
              <div className="w-full max-w-[36px] bg-sky-50 rounded-t-xl h-full flex items-end overflow-hidden">
                <div
                  style={{ height: `${height}%` }}
                  className="w-full bg-[#00A7F3] group-hover:bg-sky-400 rounded-t-xl transition-all duration-300"
                />
              </div>
              <span className="text-xs font-semibold text-slate-500">{m.month}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>Average retention rate: 91.2%</span>
        <span className="text-emerald-600 font-semibold">+320 net new today</span>
      </div>
    </div>
  );
};

export default LearnerGrowthChart;
