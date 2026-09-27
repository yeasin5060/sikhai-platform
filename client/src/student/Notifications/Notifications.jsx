import React, { useState } from 'react';

const mockNotifications = [
  {
    id: 'n-1',
    type: 'course',
    title: 'New lesson available',
    message: 'A new lesson "Advanced React Hooks" has been added to your enrolled course.',
    time: '5 minutes ago',
    read: false,
    icon: '📚',
  },
  {
    id: 'n-2',
    type: 'community',
    title: 'Your question was answered',
    message: 'Nabil Hasan answered your question about closures in JavaScript.',
    time: '1 hour ago',
    read: false,
    icon: '💬',
  },
  {
    id: 'n-3',
    type: 'achievement',
    title: 'Certificate earned!',
    message: 'Congratulations! You\'ve completed "JavaScript for Beginners" and earned a certificate.',
    time: '2 days ago',
    read: true,
    icon: '🏆',
  },
  {
    id: 'n-4',
    type: 'reminder',
    title: 'Continue your learning',
    message: 'You haven\'t studied in 3 days. Resume "Web Development Bootcamp" and keep your streak!',
    time: '3 days ago',
    read: true,
    icon: '⏰',
  },
  {
    id: 'n-5',
    type: 'system',
    title: 'Profile updated',
    message: 'Your profile information was successfully updated.',
    time: '1 week ago',
    read: true,
    icon: '✅',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState('all');

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered = filter === 'unread' ? notifications.filter((n) => !n.read) : notifications;

  const markRead = (id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Notifications</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-slate-500 mt-1">
              You have <span className="font-semibold text-indigo-600">{unreadCount}</span> unread notification{unreadCount > 1 ? 's' : ''}
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            id="notifications-mark-all-btn"
            onClick={markAllRead}
            className="text-sm text-indigo-600 hover:text-indigo-500 font-medium transition"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-fit mb-6">
        {['all', 'unread'].map((f) => (
          <button
            key={f}
            id={`notif-filter-${f}`}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
              filter === f ? 'bg-white text-indigo-600 shadow' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((notif) => (
            <div
              key={notif.id}
              id={`notification-item-${notif.id}`}
              onClick={() => markRead(notif.id)}
              className={`flex gap-4 p-4 rounded-2xl border cursor-pointer transition ${
                notif.read
                  ? 'bg-white border-slate-100 text-slate-500'
                  : 'bg-indigo-50/50 border-indigo-100 text-slate-800'
              }`}
            >
              <div className="text-2xl flex-shrink-0 mt-0.5">{notif.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm font-semibold ${notif.read ? 'text-slate-600' : 'text-slate-800'}`}>
                    {notif.title}
                  </p>
                  {!notif.read && (
                    <span className="flex-shrink-0 w-2.5 h-2.5 bg-indigo-500 rounded-full mt-1" />
                  )}
                </div>
                <p className="text-sm mt-0.5 leading-relaxed">{notif.message}</p>
                <p className="text-xs text-slate-400 mt-1.5">{notif.time}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 text-slate-400 text-sm">
            <div className="text-5xl mb-4">🔔</div>
            No {filter === 'unread' ? 'unread ' : ''}notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
