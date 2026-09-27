import React from 'react';
import { PlayCircle, ShieldCheck, Download, Award, Tv, FileCode } from 'lucide-react';
import Button from '../../components/common/Button';

const CourseSidebar = ({ course, onEnroll, isEnrolled, onStartLearning }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-lg space-y-6 sticky top-24">
      {/* Thumbnail with overlay play */}
      <div className="relative rounded-2xl overflow-hidden group">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white text-[#00A7F3] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <PlayCircle className="w-7 h-7 fill-[#00A7F3] text-white" />
          </div>
        </div>
      </div>

      {/* Pricing Header */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-black text-slate-900">৳{course.price}</span>
          <span className="text-sm line-through text-slate-400 font-semibold">
            ৳{course.price + 2000}
          </span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            25% OFF
          </span>
        </div>
        <p className="text-[11px] text-rose-500 font-bold mt-1">
          🔥 Limited Seats Remaining in this Batch!
        </p>
      </div>

      {/* Primary Action Button */}
      {isEnrolled ? (
        <Button
          variant="primary"
          size="lg"
          className="w-full shadow-md shadow-[#00A7F3]/25"
          onClick={onStartLearning}
        >
          Continue Learning
        </Button>
      ) : (
        <Button
          variant="primary"
          size="lg"
          className="w-full shadow-md shadow-[#00A7F3]/25"
          onClick={onEnroll}
        >
          Enroll in Course Now
        </Button>
      )}

      {/* What includes checklist */}
      <div className="space-y-3 pt-2 text-xs text-slate-600">
        <span className="block font-bold text-slate-900 uppercase tracking-wider text-[11px]">
          This course includes:
        </span>
        <div className="flex items-center gap-2.5">
          <Tv className="w-4 h-4 text-[#00A7F3]" />
          <span>{course.duration} on-demand video lectures</span>
        </div>
        <div className="flex items-center gap-2.5">
          <FileCode className="w-4 h-4 text-[#00A7F3]" />
          <span>Full source code GitHub repositories</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Download className="w-4 h-4 text-[#00A7F3]" />
          <span>15 downloadable cheatsheets & templates</span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#00A7F3]" />
          <span>Lifetime access with all batch updates</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Award className="w-4 h-4 text-[#00A7F3]" />
          <span>Verified shareable Certificate of Completion</span>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
