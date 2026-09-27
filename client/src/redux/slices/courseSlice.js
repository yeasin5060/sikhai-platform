import { createSlice } from '@reduxjs/toolkit';

const initialCourses = [
  {
    id: 'crs-1',
    title: 'Full Stack MERN Development Bootcamp',
    category: 'Web Development',
    instructor: 'Jhankar Mahbub',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
    price: 6500,
    enrolledCount: 1420,
    rating: 4.9,
    reviewsCount: 320,
    duration: '42 Hours',
    status: 'Published',
    description: 'Master MongoDB, Express.js, React 19, and Node.js with real-life enterprise web applications.',
    modulesCount: 24,
  },
  {
    id: 'crs-2',
    title: 'Python for Data Science & Machine Learning',
    category: 'Data Science',
    instructor: 'Dr. Munirul Haque',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    price: 5200,
    enrolledCount: 980,
    rating: 4.8,
    reviewsCount: 190,
    duration: '36 Hours',
    status: 'Published',
    description: 'From NumPy, Pandas, Scikit-Learn to Deep Learning models, start your AI & ML career.',
    modulesCount: 18,
  },
  {
    id: 'crs-3',
    title: 'Next.js 15 & Modern UI/UX Architecture',
    category: 'Web Development',
    instructor: 'Sadik Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    price: 4500,
    enrolledCount: 650,
    rating: 4.7,
    reviewsCount: 112,
    duration: '28 Hours',
    status: 'Draft',
    description: 'App router, Server Actions, Server Components, and Tailwind CSS animations mastery.',
    modulesCount: 14,
  },
  {
    id: 'crs-4',
    title: 'Mobile App Development with Flutter & Dart',
    category: 'Mobile App',
    instructor: 'Tariqul Islam',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    price: 5800,
    enrolledCount: 840,
    rating: 4.9,
    reviewsCount: 205,
    duration: '35 Hours',
    status: 'Published',
    description: 'Build native iOS and Android apps using single Flutter codebase with state management.',
    modulesCount: 20,
  },
];

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    list: initialCourses,
    selectedCourse: initialCourses[0],
    categoryFilter: 'All',
    searchQuery: '',
    loading: false,
    error: null,
  },
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    selectCourse: (state, action) => {
      state.selectedCourse = state.list.find((c) => c.id === action.payload) || null;
    },
    addCourse: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.list.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    deleteCourse: (state, action) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
      if (state.selectedCourse?.id === action.payload) {
        state.selectedCourse = state.list[0] || null;
      }
    },
  },
});

export const {
  setCategoryFilter,
  setSearchQuery,
  selectCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
