import React from 'react';
import { Star, Users, Award, PlayCircle } from 'lucide-react';

const CourseInstructor = ({ instructorName }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
      <h2 className="text-lg font-bold text-slate-900">Your Lead Instructor</h2>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
          alt={instructorName}
          className="w-20 h-20 rounded-2xl object-cover ring-2 ring-sky-50 shadow-xs shrink-0"
        />

        <div className="space-y-2">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {instructorName || 'Jhankar Mahbub'}
            </h3>
            <p className="text-xs text-[#00A7F3] font-semibold">
              Senior Software Architect & Founder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-bold text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              4.9 Instructor Rating
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              50,000+ Students
            </span>
            <span className="flex items-center gap-1">
              <PlayCircle className="w-3.5 h-3.5" />
              12 Courses
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Passionate software engineer and tech educator who has helped over fifty thousand developers learn modern full-stack development, crack coding interviews, and get hired at top global software companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
