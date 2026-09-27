import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Send } from 'lucide-react';
import Button from '../../components/common/Button';

const initialDiscussions = [
  {
    id: 1,
    author: 'Farzana Haque',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
    time: '2 hours ago',
    comment:
      'Pro tip for this module: Make sure to check node version with `node -v` to ensure you are on v22+ so the native test runner works.',
    likes: 8,
  },
  {
    id: 2,
    author: 'Sharif Al Mamun',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100',
    time: '1 day ago',
    comment:
      'Great explanation on the memory lifecycle of event listeners! Bookmarked.',
    likes: 4,
  },
];

const Discussion = () => {
  const [discussions, setDiscussions] = useState(initialDiscussions);
  const [commentText, setCommentText] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setDiscussions([
      {
        id: Date.now(),
        author: 'You (Learner)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        time: 'Just now',
        comment: commentText,
        likes: 0,
      },
      ...discussions,
    ]);
    setCommentText('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handlePost} className="space-y-2">
        <textarea
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Share an insight, tip, or feedback with peer learners..."
          className="w-full text-xs sm:text-sm p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:border-[#00A7F3]"
        />
        <div className="flex justify-end">
          <Button variant="primary" size="sm" type="submit" icon={Send}>
            Post to Discussion
          </Button>
        </div>
      </form>

      <div className="space-y-3">
        {discussions.map((d) => (
          <div
            key={d.id}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs"
          >
            <img
              src={d.avatar}
              alt={d.author}
              className="w-8 h-8 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">{d.author}</span>
                <span className="text-[10px] text-slate-400">{d.time}</span>
              </div>
              <p className="text-slate-600 mt-1 leading-relaxed">{d.comment}</p>
              <div className="pt-2 flex items-center gap-1.5 text-slate-400 hover:text-[#00A7F3] cursor-pointer">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">{d.likes} helpful</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
