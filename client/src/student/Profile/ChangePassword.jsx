import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [form, setForm] = useState({ current: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current || !form.password || !form.confirm) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirm) {
      toast.error('New passwords do not match.');
      return;
    }
    if (form.password.length < 8) {
      toast.error('Password must be at least 8 characters.');
      return;
    }
    setLoading(true);
    try {
      // Mock API — replace with real password update call
      await new Promise((r) => setTimeout(r, 700));
      toast.success('Password changed successfully!');
      setForm({ current: '', password: '', confirm: '' });
    } catch {
      toast.error('Failed to change password. Check your current password.');
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { id: 'cp-current', label: 'Current Password', name: 'current' },
    { id: 'cp-new', label: 'New Password', name: 'password' },
    { id: 'cp-confirm', label: 'Confirm New Password', name: 'confirm' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <h2 className="text-lg font-semibold text-slate-800 mb-2">Change Password</h2>
      {fields.map(({ id, label, name }) => (
        <div key={name}>
          <label htmlFor={id} className="block text-sm text-slate-500 mb-1">{label}</label>
          <input
            id={id}
            type="password"
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition"
          />
        </div>
      ))}
      <button
        id="cp-submit-btn"
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition"
      >
        {loading ? 'Updating…' : 'Update Password'}
      </button>
    </form>
  );
};

export default ChangePassword;
