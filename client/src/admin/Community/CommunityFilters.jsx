import React from 'react';
import Search from '../../components/common/Search';
import Dropdown from '../../components/common/Dropdown';
import Button from '../../components/common/Button';
import { Plus } from 'lucide-react';

const CommunityFilters = ({
  search,
  onSearchChange,
  activeTag,
  onTagChange,
  onAskQuestion,
}) => {
  const tags = ['All', 'React', 'Data', 'Flutter', 'Hooks', 'Machine Learning'];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
      <div className="w-full sm:w-72">
        <Search
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          onClear={() => onSearchChange('')}
          placeholder="Search discussions & queries..."
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => onTagChange(t)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeTag === t
                ? 'bg-[#00A7F3] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t}
          </button>
        ))}

        <Button
          variant="primary"
          size="sm"
          icon={Plus}
          onClick={onAskQuestion}
          className="ml-2 shrink-0"
        >
          Ask Question
        </Button>
      </div>
    </div>
  );
};

export default CommunityFilters;
