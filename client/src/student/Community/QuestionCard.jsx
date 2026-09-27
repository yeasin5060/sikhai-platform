import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionCard = ({ question }) => {
  const navigate = useNavigate();
  const { id, title, body, author, tags, answers, votes, createdAt } = question;

  return (
    <div
      role="button"
      tabIndex={0}
      id={`question-card-${id}`}
      onClick={() => navigate(`/student/community/${id}`)}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/student/community/${id}`)}
      className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition cursor-pointer"
    >
      <div className="flex gap-4">
        {/* Votes & Answers */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3 pt-1 min-w-[60px]">
          <div className="text-center">
            <p className="text-lg font-bold text-slate-700">{votes}</p>
            <p className="text-xs text-slate-400">votes</p>
          </div>
          <div className="text-center">
            <p className={`text-lg font-bold ${answers > 0 ? 'text-green-600' : 'text-slate-400'}`}>{answers}</p>
            <p className="text-xs text-slate-400">answers</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-800 leading-snug mb-1 hover:text-indigo-600 transition">
            {title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2 mb-3">{body}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <img
              src={author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&size=24&background=6366f1&color=fff`}
              alt={author.name}
              className="w-5 h-5 rounded-full"
            />
            <span className="font-medium text-slate-600">{author.name}</span>
            <span>·</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
