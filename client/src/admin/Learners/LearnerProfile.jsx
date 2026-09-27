import React from 'react';
import Badge from '../../components/common/Badge';
import { Mail, Phone, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const LearnerProfile = ({ learner }) => {
  if (!learner) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-6">
      <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
        <img
          src={learner.avatar}
          alt={learner.name}
          className="w-24 h-24 rounded-3xl object-cover ring-4 ring-sky-50 shadow-md mb-3"
        />
        <h3 className="text-lg font-bold text-slate-900">{learner.name}</h3>
        <p className="text-xs text-slate-400">{learner.email}</p>
        <div className="mt-3">
          <Badge variant={learner.status === 'Active' ? 'success' : 'neutral'}>
            {learner.status} Account
          </Badge>
        </div>
      </div>

      <div className="space-y-3 text-xs text-slate-600">
        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-slate-400" />
          <span>{learner.phone || '+880 1711 000000'}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span>{learner.location || 'Dhaka, Bangladesh'}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span>Joined: {learner.joinedDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
        <div className="p-3 bg-sky-50/60 rounded-xl text-center">
          <span className="text-[10px] text-slate-500 font-bold uppercase block">
            Enrolled
          </span>
          <span className="text-lg font-black text-[#00A7F3]">
            {learner.enrolledCourses}
          </span>
        </div>
        <div className="p-3 bg-emerald-50/60 rounded-xl text-center">
          <span className="text-[10px] text-slate-500 font-bold uppercase block">
            Completed
          </span>
          <span className="text-lg font-black text-emerald-600">
            {learner.completedCourses}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearnerProfile;
