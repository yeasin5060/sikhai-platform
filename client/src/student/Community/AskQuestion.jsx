import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AskQuestion = ({ onClose, onSubmit }) => {
  const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState({ title: '', body: '', tags: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) {
      setError('Title and description are required.');
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      const newQuestion = {
        id: `q-${Date.now()}`,
        title: form.title,
        body: form.body,
        author: { name: user?.name || 'You', avatar: user?.avatar || '' },
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        answers: 0,
        votes: 0,
        createdAt: 'Just now',
      };
      onSubmit(newQuestion);
    } catch {
      setError('Failed to post question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-slate-800">Ask a Question</h2>
          <button
            id="ask-close-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="aq-title" className="block text-sm text-slate-500 mb-1">Title <span className="text-red-400">*</span></label>
            <input
              id="aq-title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. How does React reconciliation work?"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition"
            />
          </div>
          <div>
            <label htmlFor="aq-body" className="block text-sm text-slate-500 mb-1">Description <span className="text-red-400">*</span></label>
            <textarea
              id="aq-body"
              name="body"
              rows={5}
              value={form.body}
              onChange={handleChange}
              placeholder="Describe your problem in detail…"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition resize-none"
            />
          </div>
          <div>
            <label htmlFor="aq-tags" className="block text-sm text-slate-500 mb-1">Tags <span className="text-slate-400 font-normal">(comma-separated)</span></label>
            <input
              id="aq-tags"
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="e.g. react, javascript, hooks"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition"
            />
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              id="aq-submit-btn"
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition"
            >
              {loading ? 'Posting…' : 'Post Question'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
