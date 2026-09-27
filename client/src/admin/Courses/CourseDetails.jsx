import React from 'react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { Star, Users, Clock, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

const CourseDetails = ({ course, onBack, onEdit }) => {
  if (!course) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-bold text-[#00A7F3] hover:underline mb-2 block"
          >
            ← Back to all courses
          </button>
          <div className="flex items-center gap-2">
            <Badge variant="primary">{course.category}</Badge>
            <Badge variant={course.status === 'Published' ? 'success' : 'neutral'}>
              {course.status}
            </Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-2">
            {course.title}
          </h1>
        </div>

        <Button variant="primary" size="md" onClick={() => onEdit(course)}>
          Edit Course Content
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-64 object-cover rounded-2xl shadow-xs"
          />

          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Course Overview & Syllabus
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
              {course.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
              Included Curriculum Modules ({course.modulesCount || 18} Lessons)
            </h3>
            <div className="space-y-2.5">
              {[
                'Module 1: Orientation & Modern Architecture Setup',
                'Module 2: Core Fundamentals, Best Practices & Clean Code',
                'Module 3: Advanced Patterns, State Engineering & Performance',
                'Module 4: Real-world Capstone Project Deployment',
              ].map((mod, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00A7F3]" />
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="text-center pb-4 border-b border-slate-200">
              <span className="text-xs text-slate-400 font-semibold block">
                Enrollment Price
              </span>
              <span className="text-3xl font-black text-slate-900">
                ৳{course.price}
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Instructor:</span>
                <span className="font-bold text-slate-800">{course.instructor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Learners:</span>
                <span className="font-bold text-slate-800">{course.enrolledCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Course Duration:</span>
                <span className="font-bold text-slate-800">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Rating:</span>
                <span className="font-bold text-amber-500">★ {course.rating} / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
