import React from 'react';
import Badge from '../../components/common/Badge';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

const LearnerDetails = ({ learner }) => {
  if (!learner) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Enrolled Learning Pathways
          </h3>
          <p className="text-xs text-slate-500">Curriculum progression & certificates</p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            title: 'Full Stack MERN Development Bootcamp',
            progress: learner.progress,
            modulesCompleted: '19/24 Modules',
            status: 'In Progress',
          },
          {
            title: 'Python for Data Science & ML',
            progress: 100,
            modulesCompleted: '18/18 Modules',
            status: 'Certificate Earned',
          },
        ].map((c, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                {c.title}
              </h4>
              <Badge
                variant={c.progress === 100 ? 'success' : 'primary'}
                className="text-[10px]"
              >
                {c.status}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-500 font-semibold">
                <span>{c.modulesCompleted}</span>
                <span className="text-[#00A7F3] font-bold">{c.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    c.progress === 100 ? 'bg-emerald-500' : 'bg-[#00A7F3]'
                  }`}
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnerDetails;
