import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';

const EditProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    phone: user?.phone || '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Mock API — replace with real update call
      await new Promise((r) => setTimeout(r, 600));
      dispatch(updateProfile(form));
      toast.success('Profile updated successfully!');
    } catch {
      toast.error('Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <h2 className="text-lg font-semibold text-slate-800 mb-2">Edit Profile</h2>
      {[
        { id: 'ep-name', label: 'Full Name', name: 'name', type: 'text' },
        { id: 'ep-email', label: 'Email', name: 'email', type: 'email' },
        { id: 'ep-phone', label: 'Phone', name: 'phone', type: 'tel' },
      ].map(({ id, label, name, type }) => (
        <div key={name}>
          <label htmlFor={id} className="block text-sm text-slate-500 mb-1">{label}</label>
          <input
            id={id}
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition"
          />
        </div>
      ))}
      <div>
        <label htmlFor="ep-bio" className="block text-sm text-slate-500 mb-1">Bio</label>
        <textarea
          id="ep-bio"
          name="bio"
          rows={3}
          value={form.bio}
          onChange={handleChange}
          placeholder="Tell us a bit about yourself…"
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 transition resize-none"
        />
      </div>
      <button
        id="ep-save-btn"
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition"
      >
        {loading ? 'Saving…' : 'Save Changes'}
      </button>
    </form>
  );
};

export default EditProfile;
