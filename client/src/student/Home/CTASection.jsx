import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="my-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-[#00A7F3] p-8 sm:p-12 text-white shadow-2xl shadow-sky-900/20">
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-200 text-xs font-bold border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-sky-300" />
          <span>Start Your Software Journey Today</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          Ready to Build Real-World Projects & Launch Your Career?
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Join over 50,000+ ambitious learners leveling up in Web Development, Machine Learning, and Mobile Engineering. Get instant access to classes, assignments and mentorship.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={() => navigate('/student/courses')}
            className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg font-bold"
          >
            Start Learning Now
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigate('/student/community')}
            className="text-white hover:bg-white/10 border border-white/20"
          >
            Join Discord & Forum
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
