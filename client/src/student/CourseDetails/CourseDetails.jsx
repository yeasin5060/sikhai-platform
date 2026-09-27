import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CourseHero from './CourseHero';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseInstructor from './CourseInstructor';
import CourseReviews from './CourseReviews';
import CourseFAQ from './CourseFAQ';
import CourseSidebar from './CourseSidebar';
import RelatedCourses from './RelatedCourses';
import { enrollInCourse } from '../../redux/slices/enrollmentSlice';
import toast from 'react-hot-toast';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses?.list || []);
  const enrollments = useSelector(
    (state) => state.enrollment?.enrolledCourses || []
  );

  const course = courses.find((c) => c.id === id) || courses[0];
  const isEnrolled = enrollments.some((e) => e.courseId === course?.id);

  if (!course) {
    return (
      <div className="text-center py-20 text-slate-500 font-bold">
        Course not found.
      </div>
    );
  }

  const handleEnroll = () => {
    dispatch(enrollInCourse({ courseId: course.id }));
    toast.success(`Enrolled successfully in ${course.title}!`);
    navigate(`/student/learn/${course.id}`);
  };

  const handleStartLearning = () => {
    navigate(`/student/learn/${course.id}`);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <CourseHero course={course} />

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Details, Curriculum, Reviews) */}
        <div className="lg:col-span-8 space-y-8">
          <CourseOverview course={course} />
          <CourseCurriculum
            onPreviewLesson={(lessonId) => navigate(`/student/learn/${course.id}/${lessonId}`)}
          />
          <CourseInstructor instructorName={course.instructor} />
          <CourseReviews />
          <CourseFAQ />
        </div>

        {/* Right Floating Column (Sidebar with Price & CTA) */}
        <div className="lg:col-span-4">
          <CourseSidebar
            course={course}
            isEnrolled={isEnrolled}
            onEnroll={handleEnroll}
            onStartLearning={handleStartLearning}
          />
        </div>
      </div>

      {/* Related Programs */}
      <RelatedCourses courses={courses} currentCourseId={course.id} />
    </div>
  );
};

export default CourseDetails;
