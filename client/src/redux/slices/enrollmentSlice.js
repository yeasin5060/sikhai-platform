import { createSlice } from '@reduxjs/toolkit';

const initialEnrollments = [
  {
    courseId: 'crs-1',
    enrolledAt: '2026-01-15',
    progress: 68,
    lastLessonId: 'les-4',
    certificateEarned: false,
    status: 'In Progress',
  },
  {
    courseId: 'crs-2',
    enrolledAt: '2026-02-10',
    progress: 35,
    lastLessonId: 'les-2',
    certificateEarned: false,
    status: 'In Progress',
  },
  {
    courseId: 'crs-4',
    enrolledAt: '2025-11-20',
    progress: 100,
    lastLessonId: 'les-8',
    certificateEarned: true,
    certificateDate: '2026-01-10',
    status: 'Completed',
  },
];

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: {
    enrolledCourses: initialEnrollments,
    loading: false,
    error: null,
  },
  reducers: {
    enrollInCourse: (state, action) => {
      const exists = state.enrolledCourses.find(
        (e) => e.courseId === action.payload.courseId
      );
      if (!exists) {
        state.enrolledCourses.unshift({
          courseId: action.payload.courseId,
          enrolledAt: new Date().toISOString().split('T')[0],
          progress: 0,
          lastLessonId: 'les-1',
          certificateEarned: false,
          status: 'In Progress',
        });
      }
    },
    updateCourseProgress: (state, action) => {
      const { courseId, progress } = action.payload;
      const target = state.enrolledCourses.find((e) => e.courseId === courseId);
      if (target) {
        target.progress = progress;
        if (progress >= 100) {
          target.status = 'Completed';
          target.certificateEarned = true;
          target.certificateDate = new Date().toISOString().split('T')[0];
        }
      }
    },
  },
});

export const { enrollInCourse, updateCourseProgress } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
