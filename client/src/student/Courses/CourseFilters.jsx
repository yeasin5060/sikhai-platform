import React from 'react';
import CourseSearch from './CourseSearch';
import CategoryFilter from './CategoryFilter';
import Dropdown from '../../components/common/Dropdown';

const CourseFilters = ({
  search,
  onSearchChange,
  categories,
  activeCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
      <CourseSearch
        value={search}
        onChange={onSearchChange}
        onClear={() => onSearchChange({ target: { value: '' } })}
      />

      <div className="flex-1 flex items-center justify-between sm:justify-end gap-3 flex-wrap">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
        />

        <Dropdown
          value={sortBy}
          onChange={onSortChange}
          className="shrink-0"
          options={[
            { label: 'Sort: Popular', value: 'popular' },
            { label: 'Price: Low to High', value: 'price-asc' },
            { label: 'Price: High to Low', value: 'price-desc' },
            { label: 'Highest Rated', value: 'rating' },
          ]}
        />
      </div>
    </div>
  );
};

export default CourseFilters;
