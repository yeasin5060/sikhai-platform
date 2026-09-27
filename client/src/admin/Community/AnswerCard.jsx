import React from 'react';
import { CheckCircle2, ThumbsUp } from 'lucide-react';
import Badge from '../../components/common/Badge';

const AnswerCard = ({ answer, onUpvote }) => {
  return (
    <div
      className={`p-4 rounded-2xl border transition-all ${
        answer.isAccepted
          ? 'bg-emerald-50/40 border-emerald-200'
          : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <img
            src={answer.authorAvatar}
            alt={answer.author}
            className="w-7 h-7 rounded-lg object-cover"
          />
          <div>
            <span className="text-xs font-bold text-slate-800">
              {answer.author}
            </span>
            <span className="text-[10px] text-slate-400 block">
              {answer.createdAt}
            </span>
          </div>
        </div>

        {answer.isAccepted && (
          <Badge variant="success" className="text-[10px]">
            <CheckCircle2 className="w-3 h-3" />
            Accepted Answer
          </Badge>
        )}
      </div>

      <p className="text-xs text-slate-700 leading-relaxed my-2 pl-9 font-normal">
        {answer.content}
      </p>

      <div className="flex items-center justify-end pl-9 pt-1">
        <button
          onClick={onUpvote}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#00A7F3] font-semibold transition"
        >
          <ThumbsUp className="w-3 h-3" />
          <span>{answer.votes} Helpful</span>
        </button>
      </div>
    </div>
  );
};

export default AnswerCard;
