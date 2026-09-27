import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rahim Ahmed',
    date: '3 weeks ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    comment:
      'The explanation of React 19 useActionState and Optimistic UI is by far the cleanest I have seen anywhere on the internet.',
  },
  {
    name: 'Nusrat Jahan',
    date: '1 month ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    comment:
      'The assignments are truly real-world level. You actually finish with a deployment on Vercel and AWS that you can show recruiters.',
  },
];

const CourseReviews = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Student Reviews & Feedback</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-black text-slate-800">4.9 out of 5</span>
            <span className="text-xs text-slate-400">(180 student ratings)</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((rev, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
              </div>
              <div className="flex items-center text-amber-400">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseReviews;
