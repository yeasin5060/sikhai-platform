import React from 'react';
import { ThumbsUp, MessageSquare, CheckCircle, Tag } from 'lucide-react';
import Badge from '../../components/common/Badge';

const QuestionCard = ({ question, onClick, onUpvote, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`p-5 rounded-2xl bg-white border transition cursor-pointer hover:border-[#00A7F3]/60 hover:shadow-xs ${
        isSelected
          ? 'border-[#00A7F3] ring-2 ring-[#00A7F3]/10 bg-sky-50/20'
          : 'border-slate-200/80'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex items-center gap-2.5">
          <img
            src={question.authorAvatar}
            alt={question.author}
            className="w-7 h-7 rounded-lg object-cover"
          />
          <div>
            <span className="text-xs font-bold text-slate-800">
              {question.author}
            </span>
            <span className="text-[10px] text-slate-400 block">
              {question.createdAt} • {question.course}
            </span>
          </div>
        </div>

        {question.isResolved && (
          <Badge variant="success" className="text-[10px]">
            <CheckCircle className="w-3 h-3" />
            Resolved
          </Badge>
        )}
      </div>

      <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mt-2 mb-1.5">
        {question.title}
      </h3>
      <p className="text-xs text-slate-500 line-clamp-2 mb-3">
        {question.content}
      </p>

      {/* Tags and stats */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
        <div className="flex items-center gap-1.5 flex-wrap">
          {question.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUpvote && onUpvote(question.id);
            }}
            className="flex items-center gap-1 text-slate-500 hover:text-[#00A7F3] font-semibold transition"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{question.votes}</span>
          </button>

          <span className="flex items-center gap-1 font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
            <span>{question.answersCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
