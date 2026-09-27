import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CourseFilters from './CourseFilters';
import CourseGrid from './CourseGrid';
import Pagination from './Pagination';

const allCategories = [
  'All',
  'Web Development',
  'Data Science',
  'Mobile App',
  'UI/UX Design',
];

const Courses = () => {
  const courses = useSelector((state) => state.courses?.list || []);
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [sortBy, setSortBy] = useState('popular');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const q = searchParams.get('search');
    const c = searchParams.get('category');
    if (q !== null) setSearch(q);
    if (c !== null) setActiveCategory(c);
  }, [searchParams]);

  // Filtering
  let filtered = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCat =
      activeCategory === 'All' ? true : c.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  // Sorting
  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else {
    // popular
    filtered = [...filtered].sort((a, b) => b.enrolledCount - a.enrolledCount);
  }

  const handleReset = () => {
    setSearch('');
    setActiveCategory('All');
    setSearchParams({});
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2 py-4">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Explore All Learning Pathways
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Find your next breakthrough skill with structured syllabuses, video lectures, and live code challenges.
        </p>
      </div>

      {/* Filter toolbar */}
      <CourseFilters
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        categories={allCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Course Cards Grid */}
      <CourseGrid courses={filtered} onClearFilters={handleReset} />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={1}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Courses;
