import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const instructors = [
  {
    name: 'Jhankar Mahbub',
    role: 'Senior Web Architect & Founder',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    students: '50,000+',
    rating: '4.9',
    courses: '4 Tracks',
  },
  {
    name: 'Dr. Munirul Haque',
    role: 'AI & Data Science Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    students: '15,000+',
    rating: '4.8',
    courses: '2 Tracks',
  },
  {
    name: 'Tariqul Islam',
    role: 'Mobile Engineering Lead',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    students: '12,000+',
    rating: '4.9',
    courses: '2 Tracks',
  },
];

const InstructorSection = () => {
  return (
    <div className="py-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-[#00A7F3] uppercase tracking-wider">
          Learn From Leaders
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Mentored by Industry Veterans
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Learn directly from architects and developers building large-scale systems every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instructors.map((inst, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-md transition text-center space-y-4"
          >
            <img
              src={inst.avatar}
              alt={inst.name}
              className="w-24 h-24 mx-auto rounded-3xl object-cover ring-4 ring-sky-50 dark:ring-sky-900/40 shadow-sm"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{inst.name}</h3>
              <p className="text-xs text-[#00A7F3] font-semibold mt-0.5">
                {inst.role}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
              <div>
                <span className="font-bold text-slate-800 dark:text-slate-200 block">{inst.students}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">Trained</span>
              </div>
              <div>
                <span className="font-bold text-amber-500 flex items-center justify-center gap-0.5">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {inst.rating}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">Rating</span>
              </div>
              <div>
                <span className="font-bold text-slate-800 dark:text-slate-200 block">{inst.courses}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">Programs</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorSection;
