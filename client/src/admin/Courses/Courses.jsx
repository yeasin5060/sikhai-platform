import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from './CourseCard';
import CourseDetails from './CourseDetails';
import CreateCourse from './CreateCourse';
import EditCourse from './EditCourse';
import Search from '../../components/common/Search';
import Dropdown from '../../components/common/Dropdown';
import Button from '../../components/common/Button';
import { Plus } from 'lucide-react';
import {
  addCourse,
  updateCourse,
  deleteCourse,
  selectCourse,
} from '../../redux/slices/courseSlice';
import toast from 'react-hot-toast';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses?.list || []);

  const [mode, setMode] = useState('list'); // 'list' | 'details' | 'create' | 'edit'
  const [activeCourse, setActiveCourse] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = courses.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' ? true : c.category === category;
    return matchSearch && matchCat;
  });

  const handleSaveNew = (courseData) => {
    dispatch(addCourse(courseData));
    toast.success('Course created and published!');
    setMode('list');
  };

  const handleUpdate = (courseData) => {
    dispatch(updateCourse(courseData));
    toast.success('Course details updated!');
    setMode('list');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this course?')) {
      dispatch(deleteCourse(id));
      toast.success('Course deleted');
    }
  };

  if (mode === 'details' && activeCourse) {
    return (
      <CourseDetails
        course={activeCourse}
        onBack={() => setMode('list')}
        onEdit={(c) => {
          setActiveCourse(c);
          setMode('edit');
        }}
      />
    );
  }

  if (mode === 'create') {
    return (
      <CreateCourse
        onSave={handleSaveNew}
        onCancel={() => setMode('list')}
      />
    );
  }

  if (mode === 'edit' && activeCourse) {
    return (
      <EditCourse
        course={activeCourse}
        onSave={handleUpdate}
        onCancel={() => setMode('list')}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Platform Courses & Tracks
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage educational tracks, syllabus modules, pricing and enrollment status.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={Plus}
          onClick={() => setMode('create')}
        >
          Create New Course
        </Button>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
        <div className="w-full sm:w-72">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            placeholder="Search courses or instructor..."
          />
        </div>

        <div className="flex items-center gap-2.5">
          <Dropdown
            value={category}
            onChange={setCategory}
            options={[
              { label: 'All Categories', value: 'All' },
              { label: 'Web Development', value: 'Web Development' },
              { label: 'Data Science', value: 'Data Science' },
              { label: 'Mobile App', value: 'Mobile App' },
            ]}
          />
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={(c) => {
              setActiveCourse(c);
              setMode('details');
            }}
            onEdit={(c) => {
              setActiveCourse(c);
              setMode('edit');
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
