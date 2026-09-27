import React, { useState } from 'react';
import Button from '../../components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);

  const [name, setName] = useState(user?.name || 'Tanvir Hossain');
  const [email, setEmail] = useState(user?.email || 'admin@sikhai.com');
  const [phone, setPhone] = useState('+880 1711 000111');
  const [bio, setBio] = useState('Head of Operations & Lead Curriculum Architect at Sikhai Platform.');

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, email }));
    toast.success('Admin profile updated!');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
        <img
          src={
            user?.avatar ||
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
          }
          alt="Avatar"
          className="w-20 h-20 rounded-2xl object-cover ring-4 ring-sky-50 shadow-xs"
        />
        <div>
          <h3 className="text-base font-bold text-slate-900">{name}</h3>
          <p className="text-xs text-slate-400">Super Administrator</p>
          <button className="mt-2 text-xs font-bold text-[#00A7F3] hover:underline">
            Change Photo
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Phone
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Admin Bio
          </label>
          <textarea
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          />
        </div>

        <div className="flex justify-end pt-3">
          <Button variant="primary" size="md" type="submit">
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
