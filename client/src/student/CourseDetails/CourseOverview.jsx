import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CourseOverview = ({ course }) => {
  const highlights = [
    'Build production-grade full stack projects with zero boilerplate.',
    'Master state architectures, concurrency and cache invalidation.',
    'Interactive assessments, quizzes and code review feedback.',
    'Access private Discord study groups and live mentor help sessions.',
    'Lifetime access to future curriculum upgrades and lecture recordings.',
    'Earn a verifiable completion certificate with an authentic credentials URL.',
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs">
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-2">What you will learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <h2 className="text-lg font-bold text-slate-900 mb-2">Requirements</h2>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-500 space-y-1.5">
          <li>Basic computer literacy and a laptop or desktop computer.</li>
          <li>Familiarity with basic programming logic is helpful but not strictly required.</li>
          <li>High curiosity and commitment to complete the daily homework tasks.</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
