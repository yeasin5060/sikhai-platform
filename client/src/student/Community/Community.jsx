import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';
import AskQuestion from './AskQuestion';

const mockQuestions = [
  {
    id: 'q-1',
    title: 'How do closures work in JavaScript?',
    body: 'I keep hearing about closures but I cannot fully grasp the concept. Can someone explain with a real-world example?',
    author: { name: 'Raihan Ahmed', avatar: '' },
    tags: ['javascript', 'closures'],
    answers: 5,
    votes: 12,
    createdAt: '2 hours ago',
  },
  {
    id: 'q-2',
    title: 'Difference between useEffect and useLayoutEffect?',
    body: 'When should I use useLayoutEffect over useEffect in React?',
    author: { name: 'Sadia Islam', avatar: '' },
    tags: ['react', 'hooks'],
    answers: 3,
    votes: 8,
    createdAt: '1 day ago',
  },
  {
    id: 'q-3',
    title: 'Best way to manage global state in large React apps?',
    body: 'My app is getting big and prop drilling is becoming a nightmare. Redux vs Context API?',
    author: { name: 'Tanvir Khan', avatar: '' },
    tags: ['react', 'redux', 'state-management'],
    answers: 9,
    votes: 21,
    createdAt: '3 days ago',
  },
];

const Community = () => {
  const [questions, setQuestions] = useState(mockQuestions);
  const [showAsk, setShowAsk] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      q.tags.some((t) => t.includes(search.toLowerCase()))
  );

  const handleNewQuestion = (question) => {
    setQuestions([question, ...questions]);
    setShowAsk(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Community Q&amp;A</h1>
          <p className="text-slate-500 text-sm mt-1">Ask questions, share knowledge, learn together</p>
        </div>
        <button
          id="community-ask-btn"
          onClick={() => setShowAsk(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition"
        >
          + Ask Question
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          id="community-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions or tags…"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition bg-white shadow-sm"
        />
      </div>

      {/* Question list */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((q) => <QuestionCard key={q.id} question={q} />)
        ) : (
          <div className="text-center py-16 text-slate-400 text-sm">No questions found. Be the first to ask!</div>
        )}
      </div>

      {/* Ask modal */}
      {showAsk && (
        <AskQuestion onClose={() => setShowAsk(false)} onSubmit={handleNewQuestion} />
      )}
    </div>
  );
};

export default Community;
