import React from 'react';
import { useSelector } from 'react-redux';

const stats = [
  { label: 'Courses Enrolled', key: 'enrolledCourses', icon: '📚', color: 'bg-indigo-50 text-indigo-600' },
  { label: 'Courses Completed', key: 'completedCourses', icon: '🏆', color: 'bg-green-50 text-green-600' },
  { label: 'Hours Learned', key: 'hoursLearned', icon: '⏱️', color: 'bg-amber-50 text-amber-600' },
  { label: 'Certificates', key: 'certificates', icon: '🎓', color: 'bg-purple-50 text-purple-600' },
];

const mockData = {
  enrolledCourses: 8,
  completedCourses: 3,
  hoursLearned: 42,
  certificates: 3,
};

const LearningStatistics = () => {
  // Replace mockData with real data from redux selectors when available
  const data = mockData;

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-800 mb-6">Learning Statistics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(({ label, key, icon, color }) => (
          <div key={key} className={`rounded-xl p-5 flex flex-col items-center text-center ${color} bg-opacity-60`}>
            <span className="text-3xl mb-2">{icon}</span>
            <span className="text-2xl font-bold">{data[key]}</span>
            <span className="text-xs font-medium mt-1 opacity-80">{label}</span>
          </div>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-slate-600 mb-4">Overall Progress</h3>
        <div className="space-y-3">
          {[
            { label: 'Web Development', progress: 75 },
            { label: 'JavaScript Mastery', progress: 55 },
            { label: 'React & Redux', progress: 40 },
          ].map(({ label, progress }) => (
            <div key={label}>
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>{label}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningStatistics;
