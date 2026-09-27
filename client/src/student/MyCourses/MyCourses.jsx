import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CourseProgressCard from './CourseProgressCard';
import EmptyState from '../../components/common/EmptyState';
import { BookOpen } from 'lucide-react';

const MyCourses = () => {
  const navigate = useNavigate();
  const enrollments = useSelector(
    (state) => state.enrollment?.enrolledCourses || []
  );
  const courses = useSelector((state) => state.courses?.list || []);

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'in-progress' | 'completed'

  const filtered = enrollments.filter((item) => {
    if (activeTab === 'in-progress') return item.progress < 100;
    if (activeTab === 'completed') return item.progress >= 100;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            My Enrolled Courses ({enrollments.length})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track your ongoing progress, access video lessons, and download earned certificates.
          </p>
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'in-progress', label: 'In Progress' },
            { id: 'completed', label: 'Completed' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#00A7F3] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No courses found in this tab"
          description="Explore our industry-aligned learning tracks and start learning today!"
          actionLabel="Browse All Courses"
          onAction={() => navigate('/student/courses')}
        />
      ) : (
        <div className="space-y-4">
          {filtered.map((enrollment) => {
            const course = courses.find((c) => c.id === enrollment.courseId);
            return (
              <CourseProgressCard
                key={enrollment.courseId}
                enrollment={enrollment}
                course={course}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
