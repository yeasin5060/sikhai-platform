import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import Badge from '../../components/common/Badge';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${course.id}`)}
      className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition duration-300 flex flex-col justify-between cursor-pointer group"
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
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{course.instructor}</span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {course.rating} ({course.reviewsCount || 80})
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-[#00A7F3] transition-colors">
            {course.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-100">
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

      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
        <span className="text-lg font-black text-slate-900">
          ৳{course.price}
        </span>
        <span className="text-xs font-bold text-[#00A7F3] group-hover:translate-x-1 transition-transform flex items-center gap-1">
          View Syllabus <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
