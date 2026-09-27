import React from 'react';
import { CheckCircle2, PlayCircle, Lock } from 'lucide-react';

const lessons = [
  { id: 'les-1', title: '1. Course Orientation & Roadmap', duration: '12:45' },
  { id: 'les-2', title: '2. Setting Up VSCode & Terminal Tools', duration: '28:10' },
  { id: 'les-3', title: '3. Modern ECMAScript 2026 Core Patterns', duration: '45:30' },
  { id: 'les-4', title: '4. React 19 useActionState Form Submissions', duration: '35:20' },
  { id: 'les-5', title: '5. Optimistic UI with useOptimistic hook', duration: '40:00' },
  { id: 'les-6', title: '6. Server Functions & Boundary Streaming', duration: '50:15' },
];

const LessonSidebar = ({
  currentLessonId,
  onSelectLesson,
  completedLessons = [],
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs space-y-4">
      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Course Syllabus</h3>
          <span className="text-[11px] text-slate-400">
            {completedLessons.length} of {lessons.length} Completed
          </span>
        </div>
        <span className="text-xs font-bold text-[#00A7F3]">
          {Math.round((completedLessons.length / lessons.length) * 100)}%
        </span>
      </div>

      <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
        {lessons.map((lesson) => {
          const isActive = currentLessonId === lesson.id;
          const isDone = completedLessons.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-left text-xs font-medium transition cursor-pointer ${
                isActive
                  ? 'bg-sky-50 text-[#00A7F3] border border-sky-200/60 font-bold'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <PlayCircle className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#00A7F3]' : 'text-slate-400'}`} />
                )}
                <span className="truncate">{lesson.title}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono shrink-0 ml-2">
                {lesson.duration}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LessonSidebar;
