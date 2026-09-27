import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLessonQuestion } from '../../redux/slices/progressSlice';
import Button from '../../components/common/Button';
import { Send, CheckCircle2 } from 'lucide-react';

const QandA = ({ currentLessonId }) => {
  const dispatch = useDispatch();
  const qaList = useSelector((state) => state.progress?.qaList || []);
  const [questionText, setQuestionText] = useState('');

  const handleAsk = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    dispatch(
      addLessonQuestion({
        lessonId: currentLessonId,
        user: 'You (Learner)',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        question: questionText,
        answer: 'Thank you! A teaching assistant will review and respond shortly.',
      })
    );
    setQuestionText('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleAsk} className="space-y-2">
        <textarea
          rows={3}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Ask a question about this specific lesson..."
          className="w-full text-xs sm:text-sm p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:border-[#00A7F3]"
        />
        <div className="flex justify-end">
          <Button variant="primary" size="sm" type="submit" icon={Send}>
            Post Question
          </Button>
        </div>
      </form>

      <div className="space-y-3">
        {qaList.map((qa) => (
          <div
            key={qa.id}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={qa.avatar}
                alt={qa.user}
                className="w-7 h-7 rounded-lg object-cover"
              />
              <div>
                <span className="font-bold text-slate-800">{qa.user}</span>
                <span className="text-slate-400 text-[10px] block">
                  {qa.timestamp}
                </span>
              </div>
            </div>

            <p className="font-semibold text-slate-800">{qa.question}</p>

            {qa.answer && (
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2 mt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[11px] text-emerald-700 block">
                    Instructor Response:
                  </span>
                  <p className="text-slate-600 text-xs mt-0.5">{qa.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QandA;
