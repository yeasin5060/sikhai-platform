import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Dropdown from '../../components/common/Dropdown';

const EditCourse = ({ course, onSave, onCancel }) => {
  const [title, setTitle] = useState(course.title);
  const [category, setCategory] = useState(course.category);
  const [instructor, setInstructor] = useState(course.instructor);
  const [price, setPrice] = useState(course.price);
  const [duration, setDuration] = useState(course.duration);
  const [status, setStatus] = useState(course.status);
  const [description, setDescription] = useState(course.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...course,
      title,
      category,
      instructor,
      price: Number(price),
      duration,
      status,
      description,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Edit Course</h2>
          <p className="text-xs text-slate-500">Update track configuration, content & status</p>
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
              Status
            </label>
            <Dropdown
              value={status}
              onChange={setStatus}
              className="w-full"
              options={[
                { label: 'Published', value: 'Published' },
                { label: 'Draft', value: 'Draft' },
                { label: 'Archived', value: 'Archived' },
              ]}
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
              Instructor Name
            </label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
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
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <Button variant="outline" size="md" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
