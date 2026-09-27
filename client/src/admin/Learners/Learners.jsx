import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LearnerProfile from './LearnerProfile';
import LearnerDetails from './LearnerDetails';
import Search from '../../components/common/Search';
import Dropdown from '../../components/common/Dropdown';
import Button from '../../components/common/Button';
import Table from '../../components/common/Table';
import Badge from '../../components/common/Badge';
import Modal from '../../components/common/Modal';
import { UserPlus, Trash2, Edit2, Eye } from 'lucide-react';
import {
  addLearner,
  updateLearnerStatus,
  deleteLearner,
  selectLearner,
} from '../../redux/slices/learnerSlice';
import toast from 'react-hot-toast';

const Learners = () => {
  const dispatch = useDispatch();
  const { list: learners, selectedLearner } = useSelector((state) => state.learners);

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // New learner input form
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newLocation, setNewLocation] = useState('Dhaka, Bangladesh');

  const filtered = learners.filter((l) => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === 'All' ? true : l.status === status;
    return matchSearch && matchStatus;
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    dispatch(
      addLearner({
        id: `lrn-${Date.now()}`,
        name: newName,
        email: newEmail,
        avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80`,
        enrolledCourses: 1,
        completedCourses: 0,
        progress: 10,
        status: 'Active',
        joinedDate: '2026-09-27',
        lastActive: 'Just now',
        phone: newPhone || '+880 1711 000000',
        location: newLocation,
      })
    );
    toast.success('New learner enrolled!');
    setShowAddModal(false);
    setNewName('');
    setNewEmail('');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this learner account?')) {
      dispatch(deleteLearner(id));
      toast.success('Learner record removed');
    }
  };

  const headers = ['Learner', 'Location', 'Courses', 'Progress', 'Status', 'Actions'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Learner Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Directory of enrolled students, account permissions, and academic profiles.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={UserPlus}
          onClick={() => setShowAddModal(true)}
        >
          Add Learner
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
        <div className="w-full sm:w-72">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            placeholder="Search learner name or email..."
          />
        </div>

        <Dropdown
          value={status}
          onChange={setStatus}
          options={[
            { label: 'All Statuses', value: 'All' },
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
        />
      </div>

      {/* Main Grid: Roster Table + Profile Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Table headers={headers}>
            {filtered.map((learner) => (
              <tr
                key={learner.id}
                onClick={() => dispatch(selectLearner(learner.id))}
                className={`transition-colors cursor-pointer ${
                  selectedLearner?.id === learner.id
                    ? 'bg-sky-50/50'
                    : 'hover:bg-slate-50/70'
                }`}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={learner.avatar}
                      alt={learner.name}
                      className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-200"
                    />
                    <div>
                      <p className="font-bold text-slate-800 text-xs sm:text-sm">
                        {learner.name}
                      </p>
                      <p className="text-[11px] text-slate-400">{learner.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-xs text-slate-600 font-medium">
                  {learner.location}
                </td>

                <td className="px-5 py-4 text-xs font-bold text-slate-700">
                  {learner.enrolledCourses} Enrolled
                </td>

                <td className="px-5 py-4">
                  <div className="w-24 space-y-1">
                    <span className="text-[11px] font-bold text-[#00A7F3]">
                      {learner.progress}%
                    </span>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00A7F3] rounded-full"
                        style={{ width: `${learner.progress}%` }}
                      />
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <Badge variant={learner.status === 'Active' ? 'success' : 'neutral'}>
                    {learner.status}
                  </Badge>
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(learner.id);
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </div>

        {/* Right side Profile & Details */}
        <div className="lg:col-span-4 space-y-6">
          <LearnerProfile learner={selectedLearner || learners[0]} />
          <LearnerDetails learner={selectedLearner || learners[0]} />
        </div>
      </div>

      {/* Add Learner Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Register New Learner"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. Mahir Faisal"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="e.g. mahir@example.com"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="+880 1..."
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Register Student
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Learners;
