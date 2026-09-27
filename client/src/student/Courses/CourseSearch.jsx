import React from 'react';
import Search from '../../components/common/Search';

const CourseSearch = ({ value, onChange, onClear }) => {
  return (
    <div className="w-full sm:w-80">
      <Search
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClear={onClear}
        placeholder="Search courses or instructor..."
      />
    </div>
  );
};

export default CourseSearch;
