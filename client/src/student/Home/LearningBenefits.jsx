import React from 'react';
import {
  Code2,
  Tv,
  HelpCircle,
  Award,
  FolderGit2,
  Users2,
} from 'lucide-react';

const benefits = [
  {
    title: 'Project-Based Syllabus',
    desc: 'Never get stuck in tutorial hell. Build full-stack production-ready software from week one.',
    icon: FolderGit2,
    color: 'text-[#00A7F3] bg-sky-50 dark:bg-sky-900/40',
  },
  {
    title: 'Daily Live Doubt Clearing',
    desc: 'Join audio/video support rooms twice every day with senior teaching assistants.',
    icon: Tv,
    color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/40',
  },
  {
    title: 'Active Tech Community',
    desc: 'Collaborate with thousands of passionate peers, find hackathon teammates and study partners.',
    icon: Users2,
    color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/40',
  },
  {
    title: 'Job Placement Network',
    desc: 'Direct resume forwarding to 150+ top tech startups and software enterprises across Bangladesh.',
    icon: Award,
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/40',
  },
];

const LearningBenefits = () => {
  return (
    <div className="py-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-[#00A7F3] uppercase tracking-wider">
          Why Sikhai?
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Engineered for Career Transformation
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          We combine cutting-edge modern engineering curriculums with obsessive student support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:shadow-lg transition space-y-3 group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${b.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{b.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningBenefits;
