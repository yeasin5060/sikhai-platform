import React from 'react';
import { Download, RefreshCw, Calendar } from 'lucide-react';
import Button from '../../components/common/Button';

const AnalyticsHeader = ({ onRefresh }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Learner Analytics & Insights
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Real-time metrics on user progression, retention, and course completions.
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          icon={RefreshCw}
        >
          Refresh Data
        </Button>
        <Button
          variant="primary"
          size="sm"
          icon={Download}
        >
          Export CSV Report
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsHeader;
