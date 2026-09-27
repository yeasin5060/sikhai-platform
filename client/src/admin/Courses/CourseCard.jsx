import React from 'react';
import { Star, Users, Clock, BookOpen, Edit2, Trash2, Eye } from 'lucide-react';
import Badge from '../../components/common/Badge';

const CourseCard = ({ course, onSelect, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Course Thumbnail Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="neutral" className="bg-white/90 backdrop-blur-sm text-slate-800">
              {course.category}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge
              variant={course.status === 'Published' ? 'success' : 'neutral'}
              className="shadow-xs"
            >
              {course.status}
            </Badge>
          </div>
        </div>

        {/* Content details */}
        <div className="p-5 space-y-3">
          <h3 className="text-base font-bold text-slate-900 line-clamp-1">
            {course.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2">
            {course.description}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span className="font-medium text-slate-600 truncate">
              {course.instructor}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {course.rating} ({course.reviewsCount})
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              {course.enrolledCount} Learners
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {course.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Price and Actions */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-base font-black text-slate-900">
          ৳{course.price}
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onSelect(course)}
            title="Inspect Course"
            className="p-1.5 text-slate-400 hover:text-[#00A7F3] hover:bg-white rounded-lg transition"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onEdit(course)}
            title="Edit Details"
            className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-white rounded-lg transition"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(course.id)}
            title="Delete Course"
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
