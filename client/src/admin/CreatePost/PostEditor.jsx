import React from 'react';
import { Bold, Italic, Link2, List, Code, Quote, Sparkles } from 'lucide-react';

const PostEditor = ({ title, onTitleChange, content, onContentChange }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-sm">
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Post Title / Headline
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="e.g. Special Workshop: Building AI Agents with LangChain & Next.js"
          className="w-full text-base sm:text-lg font-bold px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7F3]/20 focus:border-[#00A7F3] text-slate-900 transition"
        />
      </div>

      {/* Formatting Ribbon */}
      <div className="flex items-center gap-1 p-1.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-600">
        <button
          type="button"
          className="p-1.5 hover:bg-white rounded-lg hover:text-slate-900 transition"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1.5 hover:bg-white rounded-lg hover:text-slate-900 transition"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1.5 hover:bg-white rounded-lg hover:text-slate-900 transition"
          title="Link"
        >
          <Link2 className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-slate-200 mx-1" />
        <button
          type="button"
          className="p-1.5 hover:bg-white rounded-lg hover:text-slate-900 transition"
          title="List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1.5 hover:bg-white rounded-lg hover:text-slate-900 transition"
          title="Code Block"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1.5 hover:bg-white rounded-lg hover:text-slate-900 transition"
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content Area */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Article Body / Details
        </label>
        <textarea
          rows={8}
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Compose detailed announcements, guidelines, curriculum updates or notices for students..."
          className="w-full text-sm leading-relaxed p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7F3]/20 focus:border-[#00A7F3] text-slate-800 transition"
        />
      </div>
    </div>
  );
};

export default PostEditor;
