import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import LearningStatistics from './LearningStatistics';

const tabs = ['Profile', 'Edit Profile', 'Change Password', 'Statistics'];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const renderTab = () => {
    switch (activeTab) {
      case 'Profile': return <ProfileInfo />;
      case 'Edit Profile': return <EditProfile />;
      case 'Change Password': return <ChangePassword />;
      case 'Statistics': return <LearningStatistics />;
      default: return <ProfileInfo />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Profile</h1>

      {/* Tab navigation */}
      <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-8 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`profile-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab
                ? 'bg-white text-indigo-600 shadow'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        {renderTab()}
      </div>
    </div>
  );
};

export default Profile;
