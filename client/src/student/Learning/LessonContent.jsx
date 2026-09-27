import React from 'react';
import Badge from '../../components/common/Badge';

const LessonContent = ({ lessonTitle, courseTitle }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[11px] font-bold text-[#00A7F3] uppercase tracking-wider block">
            {courseTitle || 'MERN Bootcamp'}
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            {lessonTitle || '1. Course Orientation & Roadmap'}
          </h2>
        </div>
        <Badge variant="success">HD Video • Verified Audio</Badge>
      </div>

      <div className="prose prose-slate text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
        <p>
          In this module, we cover the core prerequisites, directory setup, recommended extensions, and how to organize your weekly project submissions.
        </p>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-xs text-slate-800">
          git clone https://github.com/sikhai-platform/starter-kit.git<br />
          cd starter-kit && npm install
        </div>
        <p>
          Please make sure to run through the practice quiz after finishing the lecture. If you encounter any bugs, drop your questions in the <strong>Q&A tab</strong> below.
        </p>
      </div>
    </div>
  );
};

export default LessonContent;
