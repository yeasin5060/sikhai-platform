import React, { useState } from 'react';
import ProfileSettings from './ProfileSettings';
import PlatformSettings from './PlatformSettings';
import { User, Sliders, Shield } from 'lucide-react';

const Settings = () => {
  const [tab, setTab] = useState('profile'); // 'profile' | 'platform'

  return (
    <div className="space-y-6">
      <div className="pb-2 border-b border-slate-200">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Settings & Preferences
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Admin account credentials, security preferences and platform global defaults.
        </p>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200">
        <button
          onClick={() => setTab('profile')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition border-b-2 cursor-pointer ${
            tab === 'profile'
              ? 'border-[#00A7F3] text-[#00A7F3]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Profile Settings</span>
        </button>

        <button
          onClick={() => setTab('platform')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition border-b-2 cursor-pointer ${
            tab === 'platform'
              ? 'border-[#00A7F3] text-[#00A7F3]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Platform Settings</span>
        </button>
      </div>

      {tab === 'profile' && <ProfileSettings />}
      {tab === 'platform' && <PlatformSettings />}
    </div>
  );
};

export default Settings;
