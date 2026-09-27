import React, { useState } from 'react';
import Button from '../../components/common/Button';

const InstructorForm = ({ initialData, onSave, onCancel }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [designation, setDesignation] = useState(
    initialData?.designation || 'Senior Software Engineer'
  );
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '+880 1711 000000');
  const [bio, setBio] = useState(initialData?.bio || '');
  const [avatar, setAvatar] = useState(
    initialData?.avatar ||
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    onSave({
      id: initialData?.id || `inst-${Date.now()}`,
      name,
      designation,
      email,
      phone,
      bio: bio || 'Passionate educator committed to building world-class tech talent.',
      avatar,
      coursesCount: initialData?.coursesCount || 1,
      studentsCount: initialData?.studentsCount || 0,
      rating: initialData?.rating || 5.0,
      status: 'Active',
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {initialData ? 'Update Instructor Profile' : 'Onboard New Instructor'}
          </h2>
          <p className="text-xs text-slate-500">Provide personal info, credentials and expertise</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Designation / Role
            </label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Bio / Profile Summary
          </label>
          <textarea
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          />
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
          <Button variant="outline" size="md" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Save Instructor
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InstructorForm;
