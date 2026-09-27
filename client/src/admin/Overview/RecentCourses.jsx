import React from 'react';
import { useSelector } from 'react-redux';
import { Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentCourses = () => {
  const courses = useSelector((state) => state.courses?.list || []);

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Top Performing Courses
          </h3>
          <p className="text-xs text-slate-500">Most engaged learning paths</p>
        </div>
        <Link
          to="/admin/courses"
          className="text-xs font-semibold text-[#00A7F3] flex items-center gap-1 hover:underline"
        >
          <span>All Courses</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.slice(0, 4).map((course) => (
          <div
            key={course.id}
            className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-xs transition bg-slate-50/50"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-xs"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-[#00A7F3] uppercase tracking-wider">
                {course.category}
              </span>
              <h4 className="text-xs font-bold text-slate-800 truncate">
                {course.title}
              </h4>
              <p className="text-[11px] text-slate-400 truncate">
                By {course.instructor}
              </p>

              <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  {course.enrolledCount}
                </span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {course.rating}
                </span>
                <span className="font-bold text-slate-700">
                  ৳{course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCourses;
