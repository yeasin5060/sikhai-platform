import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users } from 'lucide-react';

const RelatedCourses = ({ courses, currentCourseId }) => {
  const navigate = useNavigate();
  const related = courses.filter((c) => c.id !== currentCourseId).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="space-y-4 pt-6">
      <h2 className="text-xl font-black text-slate-900">Learners also enrolled in</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {related.map((course) => (
          <div
            key={course.id}
            onClick={() => {
              navigate(`/courses/${course.id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition cursor-pointer space-y-3 group"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-36 rounded-2xl object-cover"
            />
            <span className="text-[10px] font-bold text-[#00A7F3] uppercase tracking-wider block">
              {course.category}
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#00A7F3] transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
              <span className="font-bold text-slate-900">৳{course.price}</span>
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-3 h-3 fill-amber-400" />
                {course.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
