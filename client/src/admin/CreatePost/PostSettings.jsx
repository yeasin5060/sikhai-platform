import React from 'react';
import Dropdown from '../../components/common/Dropdown';
import Button from '../../components/common/Button';
import { Send, Save, Eye } from 'lucide-react';

const PostSettings = ({
  category,
  onCategoryChange,
  tags,
  onTagsChange,
  visibility,
  onVisibilityChange,
  onPublish,
  onSaveDraft,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-5 shadow-sm">
      <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
        Publishing Parameters
      </h3>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Category
        </label>
        <Dropdown
          value={category}
          onChange={onCategoryChange}
          className="w-full"
          options={[
            { label: 'Announcement', value: 'Announcement' },
            { label: 'Curriculum Update', value: 'Curriculum Update' },
            { label: 'Workshop / Event', value: 'Workshop' },
            { label: 'Career Guide', value: 'Career' },
          ]}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Tags (comma separated)
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => onTagsChange(e.target.value)}
          placeholder="e.g. react, nextjs, workshop"
          className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A7F3]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Visibility
        </label>
        <Dropdown
          value={visibility}
          onChange={onVisibilityChange}
          className="w-full"
          options={[
            { label: 'Public (All Learners & Visitors)', value: 'Public' },
            { label: 'Enrolled Learners Only', value: 'Enrolled' },
            { label: 'Instructors & Admin Only', value: 'Internal' },
          ]}
        />
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
        <Button
          variant="primary"
          size="md"
          icon={Send}
          onClick={onPublish}
          className="w-full shadow-md shadow-[#00A7F3]/20"
        >
          Publish Post Now
        </Button>
        <Button
          variant="outline"
          size="md"
          icon={Save}
          onClick={onSaveDraft}
          className="w-full"
        >
          Save to Drafts
        </Button>
      </div>
    </div>
  );
};

export default PostSettings;
