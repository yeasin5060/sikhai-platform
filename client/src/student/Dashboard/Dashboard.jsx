import React from 'react';
import { useSelector } from 'react-redux';
import WelcomeBanner from './WelcomeBanner';
import LearningStats from './LearningStats';
import ContinueLearning from './ContinueLearning';
import MyCourses from './MyCourses';
import RecentActivity from './RecentActivity';
import RecommendedCourses from './RecommendedCourses';

const Dashboard = () => {
  const courses = useSelector((state) => state.courses?.list || []);
  const enrollments = useSelector(
    (state) => state.enrollment?.enrolledCourses || []
  );

  const activeCourse = courses.find(
    (c) => c.id === enrollments[0]?.courseId
  ) || courses[0];

  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <LearningStats />

      {activeCourse && (
        <ContinueLearning
          course={activeCourse}
          progress={enrollments[0]?.progress || 68}
        />
      )}

      <MyCourses enrolledList={enrollments} courses={courses} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <RecommendedCourses courses={courses} />
      </div>
    </div>
  );
};

export default Dashboard;
