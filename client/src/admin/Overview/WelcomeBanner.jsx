import React from 'react';
import { Sparkles, ArrowUpRight, PlusCircle, Radio } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WelcomeBanner = () => {
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-[#00A7F3] p-6 sm:p-8 text-white shadow-xl shadow-sky-900/10">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -mb-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Welcome back to Sikhai Admin Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Hello, {user?.name || 'Administrator'}! 👋
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            You have <span className="font-semibold text-sky-300">184 active students</span> in live classes today and <span className="font-semibold text-emerald-300">18.4% increase</span> in course enrollments this week.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/admin/courses"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-bold shadow-md transition"
          >
            <PlusCircle className="w-4 h-4 text-[#00A7F3]" />
            <span>New Course</span>
          </Link>
          <Link
            to="/admin/active-classes"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md transition"
          >
            <Radio className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>Go Live</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
