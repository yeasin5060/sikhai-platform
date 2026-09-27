import React from 'react';

const CourseProgress = ({ progress = 0 }) => {
  return (
    <div className="space-y-1.5 w-full">
      <div className="flex justify-between text-xs font-bold text-slate-600">
        <span>Completion Progress</span>
        <span className="text-[#00A7F3]">{progress}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            progress === 100 ? 'bg-emerald-500' : 'bg-[#00A7F3]'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CourseProgress;
