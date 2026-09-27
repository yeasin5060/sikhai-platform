import React from 'react';
import { Award } from 'lucide-react';

const CourseProgress = ({ progress = 65 }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs space-y-3">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-slate-700 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-[#00A7F3]" />
          Overall Course Mastery
        </span>
        <span className="text-[#00A7F3] font-mono">{progress}%</span>
      </div>

      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-[#00A7F3] rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-[11px] text-slate-400">
        Complete all lessons to generate your verifiable certificate.
      </p>
    </div>
  );
};

export default CourseProgress;
