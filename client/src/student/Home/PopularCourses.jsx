import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, Users, ArrowRight } from 'lucide-react';

const PopularCourses = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses?.list || []);

  return (
    <div className="py-8 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold text-[#00A7F3] uppercase tracking-wider">
            Trending Now
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Most Enrolled Programs
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {courses.slice(0, 4).map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/student/courses/${course.id}`)}
            className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-md transition flex flex-col sm:flex-row items-center gap-4 cursor-pointer group"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full sm:w-36 h-36 rounded-2xl object-cover shrink-0 shadow-xs"
            />
            <div className="flex-1 min-w-0 space-y-2">
              <span className="text-[10px] font-bold text-[#00A7F3] uppercase tracking-wider">
                {course.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-[#00A7F3] transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700 text-xs">
                <span className="font-black text-slate-900 dark:text-white">৳{course.price}</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {course.rating}
                </span>
                <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {course.enrolledCount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
