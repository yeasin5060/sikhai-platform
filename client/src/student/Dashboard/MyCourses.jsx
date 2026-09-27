import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Badge from '../../components/common/Badge';

const MyCourses = ({ enrolledList, courses }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-5 shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-900">My Registered Courses</h2>
          <p className="text-xs text-slate-400">Keep track of your active enrolled programs</p>
        </div>
        <button
          onClick={() => navigate('/student/my-courses')}
          className="text-xs font-bold text-[#00A7F3] flex items-center gap-1 hover:underline cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {enrolledList.map((item) => {
          const course = courses.find((c) => c.id === item.courseId);
          if (!course) return null;

          return (
            <div
              key={item.courseId}
              onClick={() => navigate(`/learning/${course.id}`)}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#00A7F3] hover:shadow-sm transition cursor-pointer space-y-3 group"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-32 rounded-xl object-cover"
              />
              <Badge variant={item.progress === 100 ? 'success' : 'primary'}>
                {item.progress === 100 ? 'Completed' : 'In Progress'}
              </Badge>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#00A7F3] transition-colors">
                {course.title}
              </h3>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>Progress</span>
                  <span className="text-[#00A7F3]">{item.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00A7F3] rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;
