import React from 'react';
import Badge from '../../components/common/Badge';
import { Calendar, User, Eye } from 'lucide-react';

const PostPreview = ({ title, content, bannerUrl, category, tags, author }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-[#00A7F3]" />
          <span>Live Learner View Preview</span>
        </h4>
        <Badge variant="primary">{category || 'General'}</Badge>
      </div>

      {bannerUrl && (
        <img
          src={bannerUrl}
          alt="Preview cover"
          className="w-full h-44 object-cover rounded-2xl"
        />
      )}

      <div>
        <h2 className="text-lg font-black text-slate-900 leading-snug">
          {title || 'Draft Article Headline Will Appear Here'}
        </h2>

        <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {author || 'Tanvir Hossain'}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Sep 27, 2026
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-2xl border border-slate-100">
        {content ||
          'Your written paragraphs, formatting, bullet points, and guidelines will render in this live preview block as students see it.'}
      </p>

      {tags && tags.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap pt-2">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPreview;
