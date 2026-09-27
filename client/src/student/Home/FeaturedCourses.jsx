import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import Badge from '../../components/common/Badge';

const FeaturedCourses = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses?.list || []);
  const featured = courses.slice(0, 3);

  return (
    <div className="py-8 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold text-[#00A7F3] uppercase tracking-wider">
            Editor's Choice
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Masterclasses
          </h2>
        </div>
        <button
          onClick={() => navigate('/student/courses')}
          className="text-xs sm:text-sm font-bold text-[#00A7F3] flex items-center gap-1 hover:underline cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/student/courses/${course.id}`)}
            className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-600 transition duration-300 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="neutral" className="bg-white/90 backdrop-blur-md">
                    {course.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{course.instructor}</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {course.rating}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-[#00A7F3] transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.enrolledCount} Students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-700/40 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <span className="text-lg font-black text-slate-900 dark:text-white">
                ৳{course.price}
              </span>
              <span className="text-xs font-bold text-[#00A7F3] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Enroll Now <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
