import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ── Admin ──────────────────────────────────────────────────────────────────
import AdminLayout from '../admin/AdminLayout';
import Overview from '../admin/Overview/Overview';
import LearnerAnalytics from '../admin/LearnerAnalytics/LearnerAnalytics';
import ActiveClasses from '../admin/ActiveClasses/ActiveClasses';
import AdminCommunity from '../admin/Community/Community';
import CreatePost from '../admin/CreatePost/CreatePost';
import AdminCourses from '../admin/Courses/Courses';
import Learners from '../admin/Learners/Learners';
import Instructors from '../admin/Instructors/Instructors';
import Assignments from '../admin/Assignments/Assignments';
import AdminNotifications from '../admin/Notifications/Notifications';
import Settings from '../admin/Settings/Settings';

// ── Auth ───────────────────────────────────────────────────────────────────
import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPassword from '../auth/ForgotPassword';
import ResetPassword from '../auth/ResetPassword';

// ── Student ────────────────────────────────────────────────────────────────
import StudentLayout from '../student/StudentLayout';
import Home from '../student/Home/Home';
import Courses from '../student/Courses/Courses';
import CourseDetails from '../student/CourseDetails/CourseDetails';
import Learning from '../student/Learning/Learning';
import Dashboard from '../student/Dashboard/Dashboard';
import MyCourses from '../student/MyCourses/MyCourses';
import Profile from '../student/Profile/Profile';
import Community from '../student/Community/Community';
import QuestionDetails from '../student/Community/QuestionDetails';
import Notifications from '../student/Notifications/Notifications';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/student/home" replace />} />

      {/* ── Auth Routes ──────────────────────────────────────────────────── */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* ── Student Routes ───────────────────────────────────────────────── */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<Navigate to="/student/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="learn/:courseId" element={<Learning />} />
        <Route path="learn/:courseId/:lessonId" element={<Learning />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="community" element={<Community />} />
        <Route path="community/:id" element={<QuestionDetails />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* ── Admin Routes ─────────────────────────────────────────────────── */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="learner-analytics" element={<LearnerAnalytics />} />
        <Route path="active-classes" element={<ActiveClasses />} />
        <Route path="community" element={<AdminCommunity />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="courses" element={<AdminCourses />} />
        <Route path="learners" element={<Learners />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="notifications" element={<AdminNotifications />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/student/home" replace />} />
    </Routes>
  );
};

export default AppRoutes;
