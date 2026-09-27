import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahim Ahmed',
    role: 'Frontend Engineer @ Brain Station 23',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    content:
      'The Full Stack MERN bootcamp completely changed my career trajectory. The live support sessions helped me debug hard asynchronous bugs in hours instead of days.',
    rating: 5,
  },
  {
    name: 'Nusrat Jahan',
    role: 'Junior ML Engineer @ Chaldal',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    content:
      'Hands down the most hands-on Python & Data Science curriculum in Bangladesh. The portfolio assignments gave me huge confidence during my technical interviews.',
    rating: 5,
  },
  {
    name: 'Sharif Al Mamun',
    role: 'Flutter Developer @ Pathao',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100',
    content:
      'From zero mobile knowledge to publishing two production apps on Google Play Store. The instructor explanation quality is world-class.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-[#00A7F3] uppercase tracking-wider">
          Student Success Stories
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Loved by Thousands of Learners
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Hear how our alumni turned their curiosity into high-paying software careers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{t.content}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-sky-100 dark:ring-sky-900/40"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</h4>
                <p className="text-[11px] text-[#00A7F3] font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
