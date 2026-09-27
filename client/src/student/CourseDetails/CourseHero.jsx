import React from 'react';
import Badge from '../../components/common/Badge';
import { Star, Users, Clock, Globe, ShieldCheck } from 'lucide-react';

const CourseHero = ({ course }) => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 relative overflow-hidden shadow-xl shadow-slate-900/10">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="primary" className="bg-[#00A7F3]/20 text-sky-300 border-[#00A7F3]/30">
          {course.category}
        </Badge>
        <span className="text-xs text-slate-400">Last updated: September 2026</span>
      </div>

      <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight max-w-3xl">
        {course.title}
      </h1>

      <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
        {course.description}
      </p>

      <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
        <div className="flex items-center gap-1.5 text-amber-400 font-bold">
          <Star className="w-4 h-4 fill-amber-400" />
          <span>{course.rating}</span>
          <span className="text-slate-400">({course.reviewsCount || 120} reviews)</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4 text-[#00A7F3]" />
          <span>{course.enrolledCount} enrolled students</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#00A7F3]" />
          <span>{course.duration} on-demand video</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>Bangla & English Subtitles</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
