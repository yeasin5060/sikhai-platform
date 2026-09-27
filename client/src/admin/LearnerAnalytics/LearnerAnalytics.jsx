import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnalyticsHeader from './AnalyticsHeader';
import AnalyticsStats from './AnalyticsStats';
import LearnerGrowthChart from './LearnerGrowthChart';
import CoursePerformance from './CoursePerformance';
import LearnerTable from './LearnerTable';
import AnalyticsFilters from './AnalyticsFilters';
import Pagination from '../../components/common/Pagination';
import Modal from '../../components/common/Modal';
import Badge from '../../components/common/Badge';
import { setTimeframe } from '../../redux/slices/analyticsSlice';
import { selectLearner } from '../../redux/slices/learnerSlice';

const LearnerAnalytics = () => {
  const dispatch = useDispatch();
  const learners = useSelector((state) => state.learners?.list || []);
  const timeframe = useSelector((state) => state.analytics?.timeframe || 'Month');

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [activeModalLearner, setActiveModalLearner] = useState(null);
  const [page, setPage] = useState(1);

  const filteredLearners = learners.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === 'All' ? true : item.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <AnalyticsHeader onRefresh={() => {}} />

      {/* Analytics KPI stats */}
      <AnalyticsStats />

      {/* Charts breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearnerGrowthChart />
        <CoursePerformance />
      </div>

      {/* Filter and Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Learner Cohort Roster ({filteredLearners.length})
          </h2>
        </div>

        <AnalyticsFilters
          searchQuery={search}
          onSearchChange={setSearch}
          statusFilter={status}
          onStatusChange={setStatus}
          timeframe={timeframe}
          onTimeframeChange={(val) => dispatch(setTimeframe(val))}
        />

        <LearnerTable
          learners={filteredLearners}
          onSelectLearner={(lrn) => setActiveModalLearner(lrn)}
        />

        <Pagination
          currentPage={page}
          totalPages={1}
          onPageChange={setPage}
        />
      </div>

      {/* Learner Detail Quick Modal */}
      <Modal
        isOpen={Boolean(activeModalLearner)}
        onClose={() => setActiveModalLearner(null)}
        title="Learner Analytics Summary"
      >
        {activeModalLearner && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <img
                src={activeModalLearner.avatar}
                alt={activeModalLearner.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-xs"
              />
              <div>
                <h4 className="text-base font-bold text-slate-800">
                  {activeModalLearner.name}
                </h4>
                <p className="text-xs text-slate-400">{activeModalLearner.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={activeModalLearner.status === 'Active' ? 'success' : 'neutral'}>
                    {activeModalLearner.status}
                  </Badge>
                  <span className="text-[11px] text-slate-500">
                    Location: {activeModalLearner.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-100">
                <span className="text-slate-500">Enrolled Courses</span>
                <p className="text-lg font-black text-[#00A7F3]">
                  {activeModalLearner.enrolledCourses}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <span className="text-slate-500">Completed Courses</span>
                <p className="text-lg font-black text-emerald-600">
                  {activeModalLearner.completedCourses}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Overall Curriculum Progress</span>
                <span className="text-[#00A7F3]">{activeModalLearner.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00A7F3] rounded-full"
                  style={{ width: `${activeModalLearner.progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LearnerAnalytics;
