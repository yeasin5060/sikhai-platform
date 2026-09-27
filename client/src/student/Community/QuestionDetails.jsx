import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AnswerCard from './AnswerCard';

// Mock detail data — replace with API call using `id`
const mockDetail = {
  id: 'q-1',
  title: 'How do closures work in JavaScript?',
  body: 'I keep hearing about closures but I cannot fully grasp the concept. Can someone explain with a real-world example?',
  author: { name: 'Raihan Ahmed', avatar: '' },
  tags: ['javascript', 'closures'],
  votes: 12,
  createdAt: '2 hours ago',
  answers: [
    {
      id: 'a-1',
      body: 'A closure is a function that remembers its outer variables and can access them. In JavaScript, closures are created every time a function is created. Example: `function outer() { let count = 0; return function() { count++; return count; } }`',
      author: { name: 'Nabil Hasan', avatar: '' },
      votes: 7,
      isAccepted: true,
      createdAt: '1 hour ago',
    },
    {
      id: 'a-2',
      body: 'Think of a closure like a backpack. The inner function carries its surrounding scope wherever it goes.',
      author: { name: 'Mehedi Alam', avatar: '' },
      votes: 3,
      isAccepted: false,
      createdAt: '45 minutes ago',
    },
  ],
};

const QuestionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const question = mockDetail; // In real app: fetch by id
  const [answer, setAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleAnswer = async (e) => {
    e.preventDefault();
    if (!answer.trim()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setAnswer('');
    setSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-indigo-600 hover:text-indigo-500 mb-5 flex items-center gap-1"
      >
        ← Back to Community
      </button>

      {/* Question */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-6">
        <h1 className="text-xl font-bold text-slate-800 mb-3">{question.title}</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{question.body}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {question.tags.map((tag) => (
            <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <img
            src={question.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(question.author.name)}&size=24&background=6366f1&color=fff`}
            alt={question.author.name}
            className="w-5 h-5 rounded-full"
          />
          <span className="text-slate-600 font-medium">{question.author.name}</span>
          <span>·</span>
          <span>{question.createdAt}</span>
          <span>·</span>
          <span>{question.votes} votes</span>
        </div>
      </div>

      {/* Answers */}
      <h2 className="text-base font-semibold text-slate-700 mb-4">
        {question.answers.length} Answer{question.answers.length !== 1 ? 's' : ''}
      </h2>
      <div className="space-y-4 mb-8">
        {question.answers.map((ans) => (
          <AnswerCard key={ans.id} answer={ans} />
        ))}
      </div>

      {/* Post answer */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-800 mb-3">Your Answer</h3>
        <form onSubmit={handleAnswer}>
          <textarea
            id="qd-answer-input"
            rows={5}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here…"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition resize-none mb-3"
          />
          <button
            id="qd-answer-submit"
            type="submit"
            disabled={submitting || !answer.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition"
          >
            {submitting ? 'Posting…' : 'Post Answer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionDetails;
