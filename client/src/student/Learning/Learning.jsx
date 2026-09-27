import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import VideoPlayer from './VideoPlayer';
import LessonSidebar from './LessonSidebar';
import LessonContent from './LessonContent';
import LessonNavigation from './LessonNavigation';
import CourseProgress from './CourseProgress';
import Notes from './Notes';
import Resources from './Resources';
import QandA from './QandA';
import Discussion from './Discussion';
import {
  setCurrentLesson,
  markLessonComplete,
} from '../../redux/slices/progressSlice';
import { updateCourseProgress } from '../../redux/slices/enrollmentSlice';
import {
  BookOpen,
  FileText,
  Download,
  HelpCircle,
  MessageSquare,
  ArrowLeft,
} from 'lucide-react';
import toast from 'react-hot-toast';

const lessonMap = {
  'les-1': '1. Course Orientation & Roadmap',
  'les-2': '2. Setting Up VSCode & Terminal Tools',
  'les-3': '3. Modern ECMAScript 2026 Core Patterns',
  'les-4': '4. React 19 useActionState Form Submissions',
  'les-5': '5. Optimistic UI with useOptimistic hook',
  'les-6': '6. Server Functions & Boundary Streaming',
};

const Learning = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses?.list || []);
  const course = courses.find((c) => c.id === courseId) || courses[0];

  const { currentLessonId, completedLessons } = useSelector(
    (state) => state.progress
  );

  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'resources' | 'qa' | 'discussion'

  const handleLessonChange = (id) => {
    dispatch(setCurrentLesson(id));
  };

  const handleComplete = () => {
    dispatch(markLessonComplete(currentLessonId));
    toast.success('Lesson marked as completed! 🎉');
    const newProgress = Math.min(
      Math.round(((completedLessons.length + 1) / 6) * 100),
      100
    );
    dispatch(
      updateCourseProgress({
        courseId: course.id,
        progress: newProgress,
      })
    );
  };

  const lessonKeys = Object.keys(lessonMap);
  const currentIndex = lessonKeys.indexOf(currentLessonId);

  const handleNext = () => {
    if (currentIndex < lessonKeys.length - 1) {
      handleLessonChange(lessonKeys[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleLessonChange(lessonKeys[currentIndex - 1]);
    }
  };

  const calculatedProgress = Math.min(
    Math.round((completedLessons.length / lessonKeys.length) * 100),
    100
  );

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <Link
          to={`/courses/${course?.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A7F3] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Course Page</span>
        </Link>
        <span className="text-xs font-semibold text-slate-500">
          Enrolled in: <strong className="text-slate-800">{course?.title}</strong>
        </span>
      </div>

      {/* Main 2-Column Classroom Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Player, Nav, Content, Interactive Tabs */}
        <div className="lg:col-span-8 space-y-6">
          <VideoPlayer
            title={lessonMap[currentLessonId] || 'Lesson Stream'}
            onCompleteLesson={handleComplete}
          />

          <LessonNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            onComplete={handleComplete}
            isCompleted={completedLessons.includes(currentLessonId)}
          />

          <LessonContent
            lessonTitle={lessonMap[currentLessonId]}
            courseTitle={course?.title}
          />

          {/* Interactive Lesson Tabs (Notes, Resources, Q&A, Discussion) */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 overflow-x-auto">
              {[
                { id: 'notes', label: 'My Notes', icon: FileText },
                { id: 'resources', label: 'Resources', icon: Download },
                { id: 'qa', label: 'Q&A', icon: HelpCircle },
                { id: 'discussion', label: 'Discussion', icon: MessageSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#00A7F3] text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div>
              {activeTab === 'notes' && <Notes currentLessonId={currentLessonId} />}
              {activeTab === 'resources' && <Resources />}
              {activeTab === 'qa' && <QandA currentLessonId={currentLessonId} />}
              {activeTab === 'discussion' && <Discussion />}
            </div>
          </div>
        </div>

        {/* Right Column: Progress Card & Lesson Syllabus Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <CourseProgress progress={calculatedProgress} />
          <LessonSidebar
            currentLessonId={currentLessonId}
            onSelectLesson={handleLessonChange}
            completedLessons={completedLessons}
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
