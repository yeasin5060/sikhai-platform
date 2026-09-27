import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClassStats from './ClassStats';
import ClassCard from './ClassCard';
import ClassFilters from './ClassFilters';
import LiveClass from './LiveClass';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';
import { addClass } from '../../redux/slices/classSlice';

const ActiveClasses = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classes?.list || []);

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [liveStreamActive, setLiveStreamActive] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // New Class Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('Full Stack MERN Development Bootcamp');
  const [newInstructor, setNewInstructor] = useState('Jhankar Mahbub');
  const [newDate, setNewDate] = useState('2026-09-30');
  const [newTime, setNewTime] = useState('08:00 PM - 10:00 PM');
  const [newTopic, setNewTopic] = useState('');

  const filtered = classes.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === 'All' ? true : c.status === status;
    return matchSearch && matchStatus;
  });

  const handleCreateSession = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    dispatch(
      addClass({
        id: `cls-${Date.now()}`,
        title: newTitle,
        courseName: newCourse,
        instructor: newInstructor,
        date: newDate,
        time: newTime,
        status: 'Upcoming',
        activeAttendees: 0,
        totalRegistered: 120,
        meetLink: 'https://meet.google.com/new-session',
        topic: newTopic || 'Live interactive masterclass',
      })
    );
    setShowScheduleModal(false);
    setNewTitle('');
    setNewTopic('');
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Active Classes & Live Studio
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Host real-time interactive lectures, monitor active students, and manage schedules.
          </p>
        </div>
      </div>

      {/* KPI Stats */}
      <ClassStats />

      {/* Live Broadcast Arena if initiated */}
      {liveStreamActive && (
        <div className="animate-in fade-in zoom-in-95 duration-200">
          <LiveClass
            activeClass={selectedClass || classes[0]}
            onLeave={() => setLiveStreamActive(false)}
          />
        </div>
      )}

      {/* Search and Filters */}
      <ClassFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        onScheduleClick={() => setShowScheduleModal(true)}
      />

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <ClassCard
            key={item.id}
            classItem={item}
            onJoin={(c) => {
              setSelectedClass(c);
              setLiveStreamActive(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewDetails={(c) => setSelectedClass(c)}
          />
        ))}
      </div>

      {/* Schedule Modal */}
      <Modal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        title="Schedule New Live Class"
      >
        <form onSubmit={handleCreateSession} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Class Title
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Masterclass on Next.js 15 Server Actions"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A7F3]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Topic & Objectives
            </label>
            <textarea
              rows={2}
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              placeholder="Brief description of what will be taught"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A7F3]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Time
              </label>
              <input
                type="text"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Assigned Instructor
            </label>
            <input
              type="text"
              value={newInstructor}
              onChange={(e) => setNewInstructor(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowScheduleModal(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Save & Schedule
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ActiveClasses;
