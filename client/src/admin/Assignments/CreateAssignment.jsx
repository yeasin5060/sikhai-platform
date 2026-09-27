import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Dropdown from '../../components/common/Dropdown';

const CreateAssignment = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('Full Stack MERN Development Bootcamp');
  const [dueDate, setDueDate] = useState('2026-10-05');
  const [totalMarks, setTotalMarks] = useState('100');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onSave({
      id: `asg-${Date.now()}`,
      title,
      course,
      dueDate,
      totalMarks: Number(totalMarks),
      description: description || 'Build the full requirements outlined in the prompt.',
      submissions: 0,
      evaluated: 0,
      status: 'Active',
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Create New Assignment</h2>
          <p className="text-xs text-slate-500">Configure task problem statements, rubric and deadline</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Assignment Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Build an E-commerce API with JWT & Stripe integration"
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Associated Course
            </label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Total Marks
              </label>
              <input
                type="number"
                value={totalMarks}
                onChange={(e) => setTotalMarks(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Problem Description & Specifications
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write requirements, bonus marks criteria and edge cases"
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          />
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
          <Button variant="outline" size="md" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Publish Assignment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;
