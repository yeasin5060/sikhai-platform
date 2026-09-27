import { createSlice } from '@reduxjs/toolkit';

const initialProgress = {
  currentCourseId: 'crs-1',
  currentLessonId: 'les-1',
  completedLessons: ['les-1', 'les-2'],
  notes: [
    {
      id: 'nt-1',
      lessonId: 'les-1',
      timestamp: '04:25',
      text: 'React 19 useActionState automatically binds pending status to form buttons.',
      createdAt: '2 days ago',
    },
    {
      id: 'nt-2',
      lessonId: 'les-2',
      timestamp: '12:40',
      text: 'Remember to always pass key attributes uniquely during Server Components mapping.',
      createdAt: 'Yesterday',
    },
  ],
  qaList: [
    {
      id: 'qa-1',
      lessonId: 'les-1',
      user: 'Rahim Ahmed',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      question: 'Is useOptimistic compatible with Vite React 19 SPA mode?',
      answer: 'Yes! It does not require Next.js; it is a core feature of React 19.',
      timestamp: '1 day ago',
    },
  ],
};

const progressSlice = createSlice({
  name: 'progress',
  initialState: initialProgress,
  reducers: {
    setCurrentLesson: (state, action) => {
      state.currentLessonId = action.payload;
    },
    markLessonComplete: (state, action) => {
      if (!state.completedLessons.includes(action.payload)) {
        state.completedLessons.push(action.payload);
      }
    },
    addNote: (state, action) => {
      state.notes.unshift({
        id: `nt-${Date.now()}`,
        ...action.payload,
        createdAt: 'Just now',
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
    },
    addLessonQuestion: (state, action) => {
      state.qaList.unshift({
        id: `qa-${Date.now()}`,
        ...action.payload,
        timestamp: 'Just now',
      });
    },
  },
});

export const {
  setCurrentLesson,
  markLessonComplete,
  addNote,
  deleteNote,
  addLessonQuestion,
} = progressSlice.actions;

export default progressSlice.reducer;
