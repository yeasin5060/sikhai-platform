import React, { useState } from 'react';
import AssignmentDetails from './AssignmentDetails';
import CreateAssignment from './CreateAssignment';
import Search from '../../components/common/Search';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Table from '../../components/common/Table';
import { Plus, Eye, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const initialAssignments = [
  {
    id: 'asg-1',
    title: 'MERN Stack Auth System with JWT & Refresh Tokens',
    course: 'Full Stack MERN Development Bootcamp',
    dueDate: '2026-10-02',
    totalMarks: 100,
    submissions: 142,
    evaluated: 98,
    status: 'Active',
    description: 'Implement secure login, registration, email verification, and password reset with MongoDB and Express.',
  },
  {
    id: 'asg-2',
    title: 'Exploratory Data Analysis on Customer Churn',
    course: 'Python for Data Science & ML',
    dueDate: '2026-09-30',
    totalMarks: 50,
    submissions: 85,
    evaluated: 85,
    status: 'Completed',
    description: 'Perform correlation analysis, boxplots, outliers cleaning and hypothesis testing with Pandas and Seaborn.',
  },
  {
    id: 'asg-3',
    title: 'Food Delivery UI with Flutter Slivers & Animations',
    course: 'Mobile App Development with Flutter',
    dueDate: '2026-10-10',
    totalMarks: 100,
    submissions: 64,
    evaluated: 20,
    status: 'Active',
    description: 'Build responsive custom app bar, hero animations, cart state management and persistent local storage.',
  },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [activeAsg, setActiveAsg] = useState(null);
  const [mode, setMode] = useState('list'); // 'list' | 'details' | 'create'
  const [search, setSearch] = useState('');

  const filtered = assignments.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.course.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = (data) => {
    setAssignments([data, ...assignments]);
    toast.success('Assignment created!');
    setMode('list');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this assignment?')) {
      setAssignments(assignments.filter((a) => a.id !== id));
      toast.success('Assignment deleted');
    }
  };

  if (mode === 'details' && activeAsg) {
    return (
      <AssignmentDetails
        assignment={activeAsg}
        onBack={() => setMode('list')}
      />
    );
  }

  if (mode === 'create') {
    return (
      <CreateAssignment
        onSave={handleCreate}
        onCancel={() => setMode('list')}
      />
    );
  }

  const headers = ['Assignment', 'Course', 'Due Date', 'Submissions', 'Status', 'Action'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Assignments & Assessments
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Create homework tasks, evaluate student code submissions, and grade rubrics.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={Plus}
          onClick={() => setMode('create')}
        >
          Create Assignment
        </Button>
      </div>

      {/* Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
        <div className="w-full sm:w-72">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            placeholder="Search assignments or courses..."
          />
        </div>
      </div>

      {/* Table */}
      <Table headers={headers}>
        {filtered.map((item) => (
          <tr
            key={item.id}
            className="hover:bg-slate-50/70 transition cursor-pointer"
            onClick={() => {
              setActiveAsg(item);
              setMode('details');
            }}
          >
            <td className="px-5 py-4">
              <span className="font-bold text-slate-900 text-xs sm:text-sm block">
                {item.title}
              </span>
              <span className="text-[11px] text-slate-400">
                Max Marks: {item.totalMarks}
              </span>
            </td>

            <td className="px-5 py-4 text-xs font-semibold text-slate-600">
              {item.course}
            </td>

            <td className="px-5 py-4 text-xs font-bold text-rose-600">
              {item.dueDate}
            </td>

            <td className="px-5 py-4 text-xs font-semibold text-slate-700">
              {item.submissions} turned in ({item.evaluated} graded)
            </td>

            <td className="px-5 py-4">
              <Badge variant={item.status === 'Active' ? 'success' : 'neutral'}>
                {item.status}
              </Badge>
            </td>

            <td className="px-5 py-4 text-right">
              <div className="flex items-center justify-end gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveAsg(item);
                    setMode('details');
                  }}
                  className="p-1.5 text-slate-400 hover:text-[#00A7F3] rounded-lg transition"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Assignments;
