import React, { useState } from 'react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import {
  Bell,
  CheckCheck,
  CreditCard,
  MessageCircle,
  Video,
  Award,
  Trash2,
} from 'lucide-react';
import toast from 'react-hot-toast';

const initialNotifications = [
  {
    id: 1,
    title: 'New Student Enrollment',
    desc: 'Farzana Haque successfully purchased "Full Stack MERN Bootcamp" via bKash (৳6,500).',
    time: '15 mins ago',
    type: 'payment',
    read: false,
    icon: CreditCard,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 2,
    title: 'Live Class Reminder',
    desc: 'Session "Advanced React 19 State & Async Actions" has 184 active live attendees.',
    time: '45 mins ago',
    type: 'live',
    read: false,
    icon: Video,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    id: 3,
    title: 'Course Completed',
    desc: 'Nusrat Jahan submitted the capstone project and received her graduation certificate.',
    time: '3 hours ago',
    type: 'academic',
    read: true,
    icon: Award,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 4,
    title: 'Community Query Escalated',
    desc: 'A question regarding "loss function in PyTorch" has been unanswered for 12 hours.',
    time: '5 hours ago',
    type: 'community',
    read: true,
    icon: MessageCircle,
    color: 'bg-sky-50 text-[#00A7F3]',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast.success('All marked as read');
  };

  const clearAll = () => {
    setNotifications([]);
    toast.success('Notifications cleared');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Notifications & System Alerts
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time triggers, enrollment alerts, live event milestones, and community reports.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            icon={CheckCheck}
            onClick={markAllRead}
          >
            Mark All Read
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={Trash2}
            onClick={clearAll}
          >
            Clear
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => {
          const Icon = n.icon;
          return (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border transition flex items-start gap-4 ${
                !n.read
                  ? 'bg-sky-50/40 border-sky-200 shadow-xs'
                  : 'bg-white border-slate-200/80'
              }`}
            >
              <div className={`p-3 rounded-2xl shrink-0 ${n.color}`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    {n.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {n.time}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {n.desc}
                </p>
              </div>

              {!n.read && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A7F3] shrink-0 mt-2" />
              )}
            </div>
          );
        })}

        {notifications.length === 0 && (
          <div className="p-12 text-center text-slate-400 bg-white rounded-3xl border border-slate-200">
            <Bell className="w-10 h-10 mx-auto text-slate-300 mb-2" />
            <p className="text-sm font-semibold">No notifications right now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
