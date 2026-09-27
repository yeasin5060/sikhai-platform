import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Dropdown from '../../components/common/Dropdown';

const CreateCourse = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [instructor, setInstructor] = useState('Jhankar Mahbub');
  const [price, setPrice] = useState('5000');
  const [duration, setDuration] = useState('30 Hours');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onSave({
      id: `crs-${Date.now()}`,
      title,
      category,
      instructor,
      price: Number(price),
      duration,
      description: description || 'Master high performance skills through project-based learning.',
      thumbnail,
      enrolledCount: 0,
      rating: 5.0,
      reviewsCount: 0,
      status: 'Published',
      modulesCount: 16,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Create New Course Track</h2>
          <p className="text-xs text-slate-500">Configure curriculum, pricing and instructor assignments</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Course Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Advanced Next.js 15 & Cloud Architecture"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A7F3]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Category
            </label>
            <Dropdown
              value={category}
              onChange={setCategory}
              className="w-full"
              options={[
                { label: 'Web Development', value: 'Web Development' },
                { label: 'Data Science', value: 'Data Science' },
                { label: 'Mobile App', value: 'Mobile App' },
                { label: 'UI/UX Design', value: 'UI/UX Design' },
              ]}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Instructor Name
            </label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A7F3]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Price (BDT)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 40 Hours"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Course Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Key learning outcomes and prerequisites"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <Button variant="outline" size="md" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Publish Course
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
