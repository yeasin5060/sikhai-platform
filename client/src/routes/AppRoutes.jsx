import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../admin/AdminLayout';
import Overview from '../admin/Overview/Overview';
import LearnerAnalytics from '../admin/LearnerAnalytics/LearnerAnalytics';
import ActiveClasses from '../admin/ActiveClasses/ActiveClasses';
import Community from '../admin/Community/Community';
import CreatePost from '../admin/CreatePost/CreatePost';
import Courses from '../admin/Courses/Courses';
import Learners from '../admin/Learners/Learners';
import Instructors from '../admin/Instructors/Instructors';
import Assignments from '../admin/Assignments/Assignments';
import Notifications from '../admin/Notifications/Notifications';
import Settings from '../admin/Settings/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default redirect to admin overview */}
      <Route path="/" element={<Navigate to="/admin/overview" replace />} />

      {/* Admin Panel Nested Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="learner-analytics" element={<LearnerAnalytics />} />
        <Route path="active-classes" element={<ActiveClasses />} />
        <Route path="community" element={<Community />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="courses" element={<Courses />} />
        <Route path="learners" element={<Learners />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/admin/overview" replace />} />
    </Routes>
  );
};

export default AppRoutes;
