import React, { useState } from 'react';

const AnswerCard = ({ answer }) => {
  const { id, body, author, votes: initialVotes, isAccepted, createdAt } = answer;
  const [votes, setVotes] = useState(initialVotes);
  const [voted, setVoted] = useState(null); // 'up' | 'down' | null

  const handleVote = (type) => {
    if (voted === type) {
      setVotes(type === 'up' ? votes - 1 : votes + 1);
      setVoted(null);
    } else {
      const delta = type === 'up' ? 1 : -1;
      const reversal = voted !== null ? (voted === 'up' ? -1 : 1) : 0;
      setVotes(votes + delta + reversal);
      setVoted(type);
    }
  };

  return (
    <div
      id={`answer-card-${id}`}
      className={`bg-white border rounded-2xl p-5 shadow-sm transition ${
        isAccepted ? 'border-green-300 bg-green-50/30' : 'border-slate-100'
      }`}
    >
      {isAccepted && (
        <div className="flex items-center gap-1.5 text-green-600 text-xs font-semibold mb-3">
          <span>✓</span> Accepted Answer
        </div>
      )}

      <p className="text-sm text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap">{body}</p>

      <div className="flex items-center justify-between">
        {/* Author */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <img
            src={author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&size=24&background=6366f1&color=fff`}
            alt={author.name}
            className="w-5 h-5 rounded-full"
          />
          <span className="text-slate-600 font-medium">{author.name}</span>
          <span>·</span>
          <span>{createdAt}</span>
        </div>

        {/* Vote buttons */}
        <div className="flex items-center gap-2">
          <button
            id={`answer-vote-up-${id}`}
            onClick={() => handleVote('up')}
            className={`p-1.5 rounded-lg transition text-sm ${
              voted === 'up' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-indigo-500 hover:bg-indigo-50'
            }`}
            aria-label="Upvote"
          >
            ▲
          </button>
          <span className="text-sm font-semibold text-slate-700">{votes}</span>
          <button
            id={`answer-vote-down-${id}`}
            onClick={() => handleVote('down')}
            className={`p-1.5 rounded-lg transition text-sm ${
              voted === 'down' ? 'bg-red-100 text-red-500' : 'text-slate-400 hover:text-red-400 hover:bg-red-50'
            }`}
            aria-label="Downvote"
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
