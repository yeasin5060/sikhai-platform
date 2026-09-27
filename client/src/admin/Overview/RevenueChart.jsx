import React from 'react';
import { useSelector } from 'react-redux';
import { TrendingUp, DollarSign } from 'lucide-react';

const RevenueChart = () => {
  const monthlyData = useSelector(
    (state) => state.analytics?.revenueMonthly || []
  );

  const maxRevenue = Math.max(...monthlyData.map((d) => d.amount), 1);

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Revenue Analytics
          </h3>
          <p className="text-xs text-slate-500">Monthly earnings overview</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+24.5% YoY</span>
        </div>
      </div>

      {/* Visual Chart Bars */}
      <div className="h-48 flex items-end justify-between gap-3 sm:gap-6 pt-4 pb-2 px-2 border-b border-slate-100">
        {monthlyData.map((item, index) => {
          const heightPercent = Math.round((item.amount / maxRevenue) * 100);
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2 h-full justify-end group"
            >
              {/* Tooltip on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -translate-y-12 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg pointer-events-none shadow-lg z-10 whitespace-nowrap">
                ৳{(item.amount / 1000).toFixed(0)}k
              </div>

              {/* Bar */}
              <div className="w-full max-w-[40px] bg-slate-100 rounded-t-xl overflow-hidden h-full flex items-end">
                <div
                  style={{ height: `${heightPercent}%` }}
                  className="w-full bg-gradient-to-t from-[#00A7F3] to-sky-400 group-hover:from-sky-400 group-hover:to-sky-300 rounded-t-xl transition-all duration-300"
                />
              </div>

              <span className="text-[11px] font-semibold text-slate-500">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-[#00A7F3]" />
          Platform Course Sales
        </span>
        <span className="font-bold text-slate-800">
          Total: ৳1,485,200 this month
        </span>
      </div>
    </div>
  );
};

export default RevenueChart;
