import React from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Button from '../../components/common/Button';

const LessonNavigation = ({ onPrev, onNext, onComplete, isCompleted }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
      <Button
        variant="outline"
        size="sm"
        icon={ChevronLeft}
        onClick={onPrev}
      >
        Previous Lesson
      </Button>

      <div className="flex items-center gap-2">
        <Button
          variant={isCompleted ? 'success' : 'primary'}
          size="sm"
          icon={Check}
          onClick={onComplete}
        >
          {isCompleted ? 'Completed' : 'Mark as Complete'}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
        >
          <span>Next Lesson</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default LessonNavigation;
