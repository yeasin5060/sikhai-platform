import React from 'react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { Star, Users, BookOpen, Mail, Phone, Award } from 'lucide-react';

const InstructorDetails = ({ instructor, onBack, onEdit }) => {
  if (!instructor) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-bold text-[#00A7F3] hover:underline mb-2 block"
          >
            ← Back to faculty directory
          </button>
          <h1 className="text-2xl font-black text-slate-900">
            {instructor.name}
          </h1>
          <p className="text-xs text-slate-500">{instructor.designation}</p>
        </div>

        <Button variant="primary" size="md" onClick={() => onEdit(instructor)}>
          Edit Faculty Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-full h-72 object-cover rounded-2xl shadow-xs"
          />

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{instructor.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{instructor.phone}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Biography & Expertise
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
              {instructor.bio}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Total Students</span>
              <span className="text-xl font-black text-[#00A7F3]">{instructor.studentsCount}</span>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Rating</span>
              <span className="text-xl font-black text-amber-600">★ {instructor.rating}</span>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Courses</span>
              <span className="text-xl font-black text-emerald-600">{instructor.coursesCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
