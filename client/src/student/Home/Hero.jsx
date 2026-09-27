import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, PlayCircle, Users } from 'lucide-react';
import SearchBar from './SearchBar';
import Button from '../../components/common/Button';

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/student/courses?search=${encodeURIComponent(query)}`);
    } else {
      navigate('/student/courses');
    }
  };

  return (
    <div className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-400/15 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center space-y-6 max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-900/40 text-[#00A7F3] border border-sky-200/60 dark:border-sky-700/60 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Empowering 50,000+ Bangladeshi Developers</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Master Modern Tech Skills With <span className="text-[#00A7F3]">Sikhai Platform</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Structured roadmaps, real-world fullstack projects, live instructor mentorship, and interactive quizzes designed to get you industry-ready.
        </p>

        {/* Search Bar */}
        <div className="pt-2">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSubmit={handleSearch}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={() => navigate('/student/courses')}
            className="shadow-lg shadow-[#00A7F3]/25"
          >
            Explore All Courses
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={PlayCircle}
            onClick={() => navigate('/student/community')}
          >
            Join Community
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Verified Certificates
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#00A7F3]" />
            Live Q&A Support
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Job Ready Projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
