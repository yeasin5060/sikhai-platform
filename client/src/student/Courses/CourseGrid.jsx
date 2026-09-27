import React from 'react';
import CourseCard from './CourseCard';
import EmptyState from '../../components/common/EmptyState';
import { BookOpen } from 'lucide-react';

const CourseGrid = ({ courses, onClearFilters }) => {
  if (courses.length === 0) {
    return (
      <EmptyState
        icon={BookOpen}
        title="No courses matched your filters"
        description="Try searching for a different keyword or selecting 'All' from categories."
        actionLabel="Reset Search & Filters"
        onAction={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
