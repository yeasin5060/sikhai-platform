import React from 'react';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const WelcomeBanner = () => {
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-[#00A7F3] p-6 sm:p-8 text-white shadow-xl shadow-sky-900/10">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Student Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome back, {user?.name || 'Learner'}! 🚀
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            You are on a <strong>5-day study streak</strong>. Keep going to earn your Full Stack MERN verification badge.
          </p>
        </div>

        <Link to="/student/my-courses">
          <Button
            variant="primary"
            size="md"
            icon={PlayCircle}
            className="bg-white text-slate-900 hover:bg-slate-100 shadow-md font-bold"
          >
            Resume Learning
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
