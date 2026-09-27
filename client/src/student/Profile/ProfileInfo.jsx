import React from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
  const user = useSelector((state) => state.auth.user);

  const fields = [
    { label: 'Full Name', value: user?.name || '—' },
    { label: 'Email', value: user?.email || '—' },
    { label: 'Role', value: user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : '—' },
    { label: 'Member Since', value: 'January 2025' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-8 items-start">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=6366f1&color=fff&size=128`}
          alt={user?.name}
          className="w-28 h-28 rounded-2xl object-cover shadow"
        />
      </div>

      {/* Info grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map(({ label, value }) => (
          <div key={label}>
            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">{label}</p>
            <p className="text-slate-800 font-semibold text-sm">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
