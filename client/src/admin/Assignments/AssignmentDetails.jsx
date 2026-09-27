import React from 'react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { Calendar, Users, CheckCircle, Clock, FileText } from 'lucide-react';

const AssignmentDetails = ({ assignment, onBack }) => {
  if (!assignment) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-bold text-[#00A7F3] hover:underline mb-2 block"
          >
            ← Back to assignments
          </button>
          <div className="flex items-center gap-2">
            <Badge variant="primary">{assignment.course}</Badge>
            <Badge variant={assignment.status === 'Active' ? 'success' : 'neutral'}>
              {assignment.status}
            </Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-2">
            {assignment.title}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Assignment Prompt & Specifications
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
              {assignment.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Submission Guidelines
            </h3>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-2">
              <li>Submit public GitHub repository link containing clean commits.</li>
              <li>Include live deployed production link (Vercel, Netlify, or AWS).</li>
              <li>Provide detailed README with environment setup and API documentation.</li>
            </ul>
          </div>
        </div>

        {/* Status card */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
          <div className="text-center pb-4 border-b border-slate-200">
            <span className="text-xs text-slate-400 font-semibold block">Total Marks</span>
            <span className="text-3xl font-black text-slate-900">
              {assignment.totalMarks || 100}
            </span>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400">Due Date:</span>
              <span className="font-bold text-rose-600">{assignment.dueDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Submissions:</span>
              <span className="font-bold text-slate-800">{assignment.submissions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Evaluated:</span>
              <span className="font-bold text-emerald-600">{assignment.evaluated}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
