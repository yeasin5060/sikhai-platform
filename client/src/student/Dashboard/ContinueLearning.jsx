import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle, Clock } from 'lucide-react';
import Button from '../../components/common/Button';

const ContinueLearning = ({ course, progress = 68 }) => {
  const navigate = useNavigate();

  if (!course) return null;

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-20 h-20 rounded-2xl object-cover ring-2 ring-sky-50 shadow-xs shrink-0"
        />
        <div className="space-y-1 min-w-0">
          <span className="text-[10px] font-bold text-[#00A7F3] uppercase tracking-wider block">
            Continue where you left off
          </span>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
            {course.title}
          </h3>
          <span className="text-xs text-slate-400 dark:text-slate-500 block">
            Next: Lesson 4 • React 19 Form Actions
          </span>
        </div>
      </div>

      <div className="w-full md:w-72 space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
          <span>Completion Progress</span>
          <span className="text-[#00A7F3]">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00A7F3] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Button
        variant="primary"
        size="md"
        icon={PlayCircle}
        onClick={() => navigate(`/learning/${course.id}`)}
        className="shrink-0 w-full md:w-auto"
      >
        Resume Lecture
      </Button>
    </div>
  );
};

export default ContinueLearning;
