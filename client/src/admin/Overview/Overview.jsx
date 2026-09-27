import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import StatsCards from './StatsCards';
import RevenueChart from './RevenueChart';
import LearnerGrowth from './LearnerGrowth';
import RecentActivity from './RecentActivity';
import RecentCourses from './RecentCourses';
import QuickActions from './QuickActions';

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <WelcomeBanner />

      {/* KPI Stats Cards */}
      <StatsCards />

      {/* Analytics & Growth Visualizers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <LearnerGrowth />
        </div>
      </div>

      {/* Quick Shortcuts */}
      <QuickActions />

      {/* Recent Courses and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentCourses />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Overview;
