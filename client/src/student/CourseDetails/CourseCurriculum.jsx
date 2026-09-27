import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, FileText, Lock } from 'lucide-react';

const curriculumModules = [
  {
    title: 'Module 1: Foundations & Architecture Setup',
    duration: '4 Lessons • 2h 15m',
    lessons: [
      { id: 'les-1', title: '1. Welcome & How to Maximize This Bootcamp', duration: '12:45', freePreview: true },
      { id: 'les-2', title: '2. Setting Up Professional VSCode & CLI Environment', duration: '28:10', freePreview: true },
      { id: 'les-3', title: '3. Modern ECMAScript 2026 Features Deep Dive', duration: '45:30', freePreview: false },
      { id: 'les-4', title: '4. Module 1 Practice Assignment & Quiz', duration: '20:00', freePreview: false },
    ],
  },
  {
    title: 'Module 2: Advanced State & Component Engineering',
    duration: '5 Lessons • 3h 40m',
    lessons: [
      { id: 'les-5', title: '5. Understanding React 19 Compiler & Optimizations', duration: '35:20', freePreview: false },
      { id: 'les-6', title: '6. Server Actions & useActionState in Depth', duration: '50:15', freePreview: false },
      { id: 'les-7', title: '7. Optimistic UI Updates with useOptimistic', duration: '40:00', freePreview: false },
    ],
  },
  {
    title: 'Module 3: Full Stack REST API & Database Integration',
    duration: '6 Lessons • 4h 50m',
    lessons: [
      { id: 'les-8', title: '8. Node.js & Express Architecture', duration: '45:00', freePreview: false },
      { id: 'les-9', title: '9. MongoDB Aggregation Pipelines', duration: '60:00', freePreview: false },
      { id: 'les-10', title: '10. Secure Authentication with JWT & Cookies', duration: '55:00', freePreview: false },
    ],
  },
];

const CourseCurriculum = ({ onPreviewLesson }) => {
  const [openModule, setOpenModule] = useState(0);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
        <h2 className="text-lg font-bold text-slate-900">Course Curriculum</h2>
        <span className="text-xs text-slate-500 font-medium">
          3 Modules • 15 Lectures • 10h 45m Total Length
        </span>
      </div>

      <div className="space-y-3">
        {curriculumModules.map((mod, idx) => {
          const isOpen = openModule === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200/80 rounded-2xl overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => setOpenModule(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-4 bg-slate-50/70 hover:bg-slate-100/70 text-left transition cursor-pointer"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                    {mod.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {mod.duration}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </button>

              {isOpen && (
                <div className="divide-y divide-slate-100 bg-white">
                  {mod.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="p-3.5 px-4 flex items-center justify-between text-xs hover:bg-sky-50/40 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-[#00A7F3] transition-colors" />
                        <span className="font-medium text-slate-700">
                          {lesson.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {lesson.freePreview ? (
                          <button
                            type="button"
                            onClick={() => onPreviewLesson && onPreviewLesson(lesson.id)}
                            className="text-[11px] font-bold text-[#00A7F3] hover:underline cursor-pointer"
                          >
                            Preview
                          </button>
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                        )}
                        <span className="text-slate-400 font-mono text-[11px]">
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCurriculum;
