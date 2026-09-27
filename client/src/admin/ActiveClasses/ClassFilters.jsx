import React from 'react';
import Search from '../../components/common/Search';
import Dropdown from '../../components/common/Dropdown';
import Button from '../../components/common/Button';
import { Plus } from 'lucide-react';

const ClassFilters = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
  onScheduleClick,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
      <div className="w-full sm:w-72">
        <Search
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          onClear={() => onSearchChange('')}
          placeholder="Search by class title or instructor..."
        />
      </div>

      <div className="flex items-center gap-2.5">
        <Dropdown
          value={status}
          onChange={onStatusChange}
          options={[
            { label: 'All Sessions', value: 'All' },
            { label: 'Live Now', value: 'Live Now' },
            { label: 'Upcoming', value: 'Upcoming' },
            { label: 'Completed', value: 'Completed' },
          ]}
        />

        <Button
          variant="primary"
          size="sm"
          icon={Plus}
          onClick={onScheduleClick}
        >
          Schedule Session
        </Button>
      </div>
    </div>
  );
};

export default ClassFilters;
