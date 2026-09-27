import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle, Award, CheckCircle2 } from 'lucide-react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import CourseProgress from './CourseProgress';

const CourseProgressCard = ({ enrollment, course }) => {
  const navigate = useNavigate();

  if (!course) return null;
  const isCompleted = enrollment.progress >= 100;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition flex flex-col md:flex-row items-center gap-6">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full md:w-56 h-36 rounded-2xl object-cover shrink-0 shadow-xs"
      />

      <div className="flex-1 w-full space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant={isCompleted ? 'success' : 'primary'}>
            {isCompleted ? 'Graduated & Certified' : 'In Progress'}
          </Badge>
          <span className="text-xs text-slate-400">
            Enrolled on {enrollment.enrolledAt}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
          {course.title}
        </h3>

        <p className="text-xs text-slate-500 line-clamp-2">
          {course.description}
        </p>

        <CourseProgress progress={enrollment.progress} />
      </div>

      <div className="shrink-0 w-full md:w-auto flex md:flex-col gap-2">
        <Button
          variant="primary"
          size="md"
          icon={PlayCircle}
          onClick={() => navigate(`/learning/${course.id}`)}
          className="flex-1 md:flex-none"
        >
          {isCompleted ? 'Review Lectures' : 'Continue Learning'}
        </Button>

        {isCompleted && (
          <Button
            variant="outline"
            size="md"
            icon={Award}
            onClick={() => alert(`Certificate verified for ${course.title}!`)}
            className="flex-1 md:flex-none text-emerald-600 border-emerald-200 hover:bg-emerald-50"
          >
            View Certificate
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseProgressCard;
