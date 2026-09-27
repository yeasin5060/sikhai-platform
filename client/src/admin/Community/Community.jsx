import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommunityStats from './CommunityStats';
import CommunityFilters from './CommunityFilters';
import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import {
  selectQuestion,
  upvoteQuestion,
  addAnswer,
  addQuestion,
} from '../../redux/slices/communitySlice';
import { Send, MessageCircle } from 'lucide-react';

const Community = () => {
  const dispatch = useDispatch();
  const { questions, selectedQuestion, activeTag, searchQuery } = useSelector(
    (state) => state.community
  );

  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('All');
  const [replyText, setReplyText] = useState('');
  const [showAskModal, setShowAskModal] = useState(false);

  // New question form state
  const [qTitle, setQTitle] = useState('');
  const [qCourse, setQCourse] = useState('Full Stack MERN Bootcamp');
  const [qContent, setQContent] = useState('');
  const [qTags, setQTags] = useState('React, Frontend');

  const filtered = questions.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase());
    const matchTag =
      tag === 'All'
        ? true
        : item.tags?.some((t) => t.toLowerCase().includes(tag.toLowerCase()));
    return matchSearch && matchTag;
  });

  const handlePostAnswer = (e) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedQuestion) return;

    dispatch(
      addAnswer({
        questionId: selectedQuestion.id,
        answer: {
          id: `ans-${Date.now()}`,
          author: 'Admin Staff',
          authorAvatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
          content: replyText,
          votes: 1,
          isAccepted: false,
          createdAt: 'Just now',
        },
      })
    );
    setReplyText('');
  };

  const handleCreateQuestion = (e) => {
    e.preventDefault();
    if (!qTitle || !qContent) return;

    dispatch(
      addQuestion({
        id: `comm-${Date.now()}`,
        author: 'Admin Team',
        authorAvatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        title: qTitle,
        content: qContent,
        course: qCourse,
        tags: qTags.split(',').map((t) => t.trim()),
        votes: 1,
        answersCount: 0,
        isResolved: false,
        createdAt: 'Just now',
        answers: [],
      })
    );
    setShowAskModal(false);
    setQTitle('');
    setQContent('');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Learner & Faculty Community
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Collaborative Q&A hub, query resolution, and peer learning exchanges.
          </p>
        </div>
      </div>

      {/* KPI Stats */}
      <CommunityStats />

      {/* Filters */}
      <CommunityFilters
        search={search}
        onSearchChange={setSearch}
        activeTag={tag}
        onTagChange={setTag}
        onAskQuestion={() => setShowAskModal(true)}
      />

      {/* 2-Column Discussion Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Questions List */}
        <div className="lg:col-span-5 space-y-3.5">
          <h3 className="text-sm font-bold text-slate-800 flex items-center justify-between">
            <span>Discussions ({filtered.length})</span>
          </h3>

          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {filtered.map((item) => (
              <QuestionCard
                key={item.id}
                question={item}
                isSelected={selectedQuestion?.id === item.id}
                onClick={() => dispatch(selectQuestion(item.id))}
                onUpvote={(id) => dispatch(upvoteQuestion(id))}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Active Thread Detail & Answers */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[500px]">
          {selectedQuestion ? (
            <div className="space-y-6">
              {/* Question Header & Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={selectedQuestion.authorAvatar}
                    alt={selectedQuestion.author}
                    className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {selectedQuestion.author}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      Posted {selectedQuestion.createdAt} in {selectedQuestion.course}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mt-3 mb-2">
                  {selectedQuestion.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {selectedQuestion.content}
                </p>
              </div>

              {/* Answers List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#00A7F3]" />
                  <span>Responses ({selectedQuestion.answers?.length || 0})</span>
                </h4>

                <div className="space-y-3">
                  {selectedQuestion.answers?.map((ans) => (
                    <AnswerCard key={ans.id} answer={ans} />
                  ))}
                  {(!selectedQuestion.answers ||
                    selectedQuestion.answers.length === 0) && (
                    <div className="text-center py-6 text-slate-400 text-xs">
                      No responses yet. Be the first to assist this learner!
                    </div>
                  )}
                </div>
              </div>

              {/* Post Answer Form */}
              <form onSubmit={handlePostAnswer} className="pt-4 border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Provide an expert answer as Instructor / Admin..."
                  className="flex-1 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#00A7F3]"
                />
                <Button variant="primary" size="sm" type="submit" icon={Send}>
                  Reply
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-20 text-slate-400">
              <MessageCircle className="w-12 h-12 stroke-1 mb-2 text-slate-300" />
              <p className="text-sm font-semibold">Select a question to view discussion</p>
            </div>
          )}
        </div>
      </div>

      {/* Ask Question Modal */}
      <Modal
        isOpen={showAskModal}
        onClose={() => setShowAskModal(false)}
        title="Start Community Discussion"
      >
        <form onSubmit={handleCreateQuestion} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Discussion Title
            </label>
            <input
              type="text"
              required
              value={qTitle}
              onChange={(e) => setQTitle(e.target.value)}
              placeholder="e.g. Best practices for Zustand vs Redux Toolkit in 2026?"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Course / Topic
            </label>
            <input
              type="text"
              value={qCourse}
              onChange={(e) => setQCourse(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Detailed Description
            </label>
            <textarea
              rows={3}
              required
              value={qContent}
              onChange={(e) => setQContent(e.target.value)}
              placeholder="Describe your issue or topic with code snippets or thoughts"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={qTags}
              onChange={(e) => setQTags(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAskModal(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Publish Query
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Community;
