import React from 'react';
import Table from '../../components/common/Table';
import Badge from '../../components/common/Badge';
import { Eye, Mail, MoreHorizontal } from 'lucide-react';

const LearnerTable = ({ learners, onSelectLearner }) => {
  const headers = [
    'Learner Info',
    'Enrolled',
    'Completed',
    'Avg Progress',
    'Status',
    'Joined Date',
    'Action',
  ];

  return (
    <Table headers={headers}>
      {learners.map((learner) => (
        <tr
          key={learner.id}
          className="hover:bg-slate-50/70 transition-colors group cursor-pointer"
          onClick={() => onSelectLearner && onSelectLearner(learner)}
        >
          <td className="px-5 py-4">
            <div className="flex items-center gap-3">
              <img
                src={learner.avatar}
                alt={learner.name}
                className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200"
              />
              <div>
                <p className="font-bold text-slate-800 text-xs sm:text-sm">
                  {learner.name}
                </p>
                <p className="text-[11px] text-slate-400">{learner.email}</p>
              </div>
            </div>
          </td>

          <td className="px-5 py-4 font-semibold text-slate-700">
            {learner.enrolledCourses} courses
          </td>

          <td className="px-5 py-4 font-semibold text-slate-700">
            {learner.completedCourses} courses
          </td>

          <td className="px-5 py-4">
            <div className="w-28 space-y-1">
              <div className="flex justify-between text-[11px] font-bold text-slate-600">
                <span>{learner.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    learner.progress > 75
                      ? 'bg-emerald-500'
                      : learner.progress > 40
                      ? 'bg-[#00A7F3]'
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${learner.progress}%` }}
                />
              </div>
            </div>
          </td>

          <td className="px-5 py-4">
            <Badge
              variant={learner.status === 'Active' ? 'success' : 'neutral'}
            >
              {learner.status}
            </Badge>
          </td>

          <td className="px-5 py-4 text-xs text-slate-500 font-medium">
            {learner.joinedDate}
          </td>

          <td className="px-5 py-4 text-right">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectLearner) onSelectLearner(learner);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#00A7F3] hover:bg-sky-50 transition"
            >
              <Eye className="w-4 h-4" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default LearnerTable;
