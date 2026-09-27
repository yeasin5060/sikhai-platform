import React, { useState } from 'react';
import InstructorDetails from './InstructorDetails';
import InstructorForm from './InstructorForm';
import Search from '../../components/common/Search';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { UserPlus, Star, Users, BookOpen, Trash2, Edit2, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const initialInstructors = [
  {
    id: 'inst-1',
    name: 'Jhankar Mahbub',
    designation: 'Senior Web Architect & Founder',
    email: 'jhankar@sikhai.com',
    phone: '+880 1711 111222',
    bio: 'Author of best-selling programming books, former senior developer in US tech companies, trained over 50,000+ developers.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    coursesCount: 4,
    studentsCount: 3820,
    rating: 4.9,
    status: 'Active',
  },
  {
    id: 'inst-2',
    name: 'Dr. Munirul Haque',
    designation: 'AI & Data Science Specialist',
    email: 'munirul@sikhai.com',
    phone: '+880 1812 333444',
    bio: 'PhD in Machine Learning, expert in PyTorch, computer vision models and scalable big data analytics.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    coursesCount: 2,
    studentsCount: 1650,
    rating: 4.8,
    status: 'Active',
  },
  {
    id: 'inst-3',
    name: 'Tariqul Islam',
    designation: 'Mobile Engineering Lead',
    email: 'tariqul@sikhai.com',
    phone: '+880 1913 555666',
    bio: 'Specialized in cross-platform Flutter/Dart engineering, high performance animations and clean reactive architecture.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    coursesCount: 2,
    studentsCount: 1240,
    rating: 4.9,
    status: 'Active',
  },
];

const Instructors = () => {
  const [instructors, setInstructors] = useState(initialInstructors);
  const [activeInst, setActiveInst] = useState(null);
  const [mode, setMode] = useState('list'); // 'list' | 'details' | 'form'
  const [search, setSearch] = useState('');

  const filtered = instructors.filter((inst) =>
    inst.name.toLowerCase().includes(search.toLowerCase()) ||
    inst.designation.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (data) => {
    if (activeInst) {
      setInstructors(
        instructors.map((item) => (item.id === data.id ? data : item))
      );
      toast.success('Instructor updated successfully');
    } else {
      setInstructors([data, ...instructors]);
      toast.success('Instructor onboarded successfully');
    }
    setMode('list');
    setActiveInst(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Remove instructor from platform?')) {
      setInstructors(instructors.filter((item) => item.id !== id));
      toast.success('Instructor deleted');
    }
  };

  if (mode === 'details' && activeInst) {
    return (
      <InstructorDetails
        instructor={activeInst}
        onBack={() => setMode('list')}
        onEdit={(inst) => {
          setActiveInst(inst);
          setMode('form');
        }}
      />
    );
  }

  if (mode === 'form') {
    return (
      <InstructorForm
        initialData={activeInst}
        onSave={handleSave}
        onCancel={() => {
          setMode('list');
          setActiveInst(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Instructors & Faculty Directory
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage course teachers, performance metrics, bios and assignments.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={UserPlus}
          onClick={() => {
            setActiveInst(null);
            setMode('form');
          }}
        >
          Add Instructor
        </Button>
      </div>

      {/* Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
        <div className="w-full sm:w-72">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            placeholder="Search by instructor name..."
          />
        </div>
      </div>

      {/* Instructors Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((inst) => (
          <div
            key={inst.id}
            className="p-5 bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={inst.avatar}
                  alt={inst.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-sky-50 shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 truncate">
                    {inst.name}
                  </h3>
                  <p className="text-xs text-[#00A7F3] font-medium truncate">
                    {inst.designation}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {inst.email}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {inst.bio}
              </p>

              <div className="grid grid-cols-3 gap-2 p-2.5 bg-slate-50 rounded-xl text-center text-xs mb-4">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">
                    Courses
                  </span>
                  <span className="font-bold text-slate-800">
                    {inst.coursesCount}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">
                    Learners
                  </span>
                  <span className="font-bold text-slate-800">
                    {inst.studentsCount}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">
                    Rating
                  </span>
                  <span className="font-bold text-amber-500">
                    ★ {inst.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                icon={Eye}
                onClick={() => {
                  setActiveInst(inst);
                  setMode('details');
                }}
              >
                Inspect
              </Button>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setActiveInst(inst);
                    setMode('form');
                  }}
                  className="p-1.5 text-slate-400 hover:text-[#00A7F3] rounded-lg transition"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(inst.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
