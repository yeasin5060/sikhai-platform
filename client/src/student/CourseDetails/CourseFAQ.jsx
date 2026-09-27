import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Do I get lifetime access to all recorded course videos?',
    a: 'Yes! Once you enroll, you enjoy lifetime unlimited access to all lessons, slide decks, source codes, and future curriculum additions.',
  },
  {
    q: 'How does the daily live doubt clearing support work?',
    a: 'Every day we hold dedicated Google Meet / Live Classroom sessions where teaching assistants debug your code screen-by-screen until your problem is resolved.',
  },
  {
    q: 'Will I get an accredited completion certificate?',
    a: 'Yes, after completing 100% of lectures and passing the final milestone assignment, an official certificate is generated with a verifiable unique ID.',
  },
];

const CourseFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
      <h2 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-4 bg-slate-50/70 text-left text-xs sm:text-sm font-bold text-slate-800 transition cursor-pointer"
              >
                <span>{item.q}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {isOpen && (
                <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFAQ;
