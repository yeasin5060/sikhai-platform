import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const RecommendedCourses = ({ courses }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 p-6 shadow-xs space-y-4">
      <h2 className="text-base font-bold text-slate-900 dark:text-white">Recommended Next Steps</h2>
      <div className="space-y-3">
        {courses.slice(1, 4).map((c) => (
          <div
            key={c.id}
            onClick={() => navigate(`/courses/${c.id}`)}
            className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 dark:bg-slate-700/50 hover:bg-sky-50/50 dark:hover:bg-sky-900/30 hover:border-sky-200 dark:hover:border-sky-700 border border-slate-100 dark:border-slate-700 transition cursor-pointer group"
          >
            <img
              src={c.thumbnail}
              alt={c.title}
              className="w-14 h-14 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-[#00A7F3] uppercase tracking-wider block">
                {c.category}
              </span>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-[#00A7F3] transition-colors">
                {c.title}
              </h4>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                <span className="font-bold text-slate-900 dark:text-white">৳{c.price}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {c.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
