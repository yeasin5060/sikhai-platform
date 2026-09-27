import React from 'react';
import { useSelector } from 'react-redux';
import { Star, Users, ArrowUpRight } from 'lucide-react';

const CoursePerformance = () => {
  const performance = useSelector(
    (state) => state.analytics?.coursePerformance || []
  );

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Course Performance Breakdown
          </h3>
          <p className="text-xs text-slate-500">Student satisfaction & sales</p>
        </div>
      </div>

      <div className="space-y-4">
        {performance.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
              <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  {item.enrolled} Enrolled
                </span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {item.rating}
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-sm font-black text-slate-900">
                ৳{(item.revenue / 100000).toFixed(2)} Lakh
              </span>
              <p className="text-[10px] text-emerald-600 font-semibold">
                Gross Volume
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePerformance;
