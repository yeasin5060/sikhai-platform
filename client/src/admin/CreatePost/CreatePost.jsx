import React, { useState } from 'react';
import PostEditor from './PostEditor';
import MediaUploader from './MediaUploader';
import PostPreview from './PostPreview';
import PostSettings from './PostSettings';
import toast from 'react-hot-toast';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bannerUrl, setBannerUrl] = useState(
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80'
  );
  const [category, setCategory] = useState('Announcement');
  const [tags, setTags] = useState('Bootcamp, Workshop, React19');
  const [visibility, setVisibility] = useState('Public');

  const handlePublish = () => {
    if (!title.trim()) {
      toast.error('Please enter a post title before publishing');
      return;
    }
    toast.success('Post published successfully to Sikhai platform!');
  };

  const handleSaveDraft = () => {
    toast.success('Saved post draft successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Create & Publish Platform Post
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish blog articles, announcements, hackathon notices, and career guides.
          </p>
        </div>
      </div>

      {/* 2-Column Layout: Left (Editor + Media), Right (Preview + Settings) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <PostEditor
            title={title}
            onTitleChange={setTitle}
            content={content}
            onContentChange={setContent}
          />

          <MediaUploader
            bannerUrl={bannerUrl}
            onBannerChange={setBannerUrl}
          />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <PostSettings
            category={category}
            onCategoryChange={setCategory}
            tags={tags}
            onTagsChange={setTags}
            visibility={visibility}
            onVisibilityChange={setVisibility}
            onPublish={handlePublish}
            onSaveDraft={handleSaveDraft}
          />

          <PostPreview
            title={title}
            content={content}
            bannerUrl={bannerUrl}
            category={category}
            tags={tags.split(',').map((t) => t.trim())}
            author="Admin Editorial"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
