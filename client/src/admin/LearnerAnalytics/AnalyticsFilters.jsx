import React from 'react';
import Search from '../../components/common/Search';
import Dropdown from '../../components/common/Dropdown';

const AnalyticsFilters = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  timeframe,
  onTimeframeChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
      <div className="w-full sm:w-72">
        <Search
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onClear={() => onSearchChange('')}
          placeholder="Filter learner records..."
        />
      </div>

      <div className="flex items-center gap-2.5">
        <Dropdown
          value={statusFilter}
          onChange={onStatusChange}
          options={[
            { label: 'All Statuses', value: 'All' },
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
        />

        <Dropdown
          value={timeframe}
          onChange={onTimeframeChange}
          options={[
            { label: 'This Week', value: 'Week' },
            { label: 'This Month', value: 'Month' },
            { label: 'This Year', value: 'Year' },
          ]}
        />
      </div>
    </div>
  );
};

export default AnalyticsFilters;
