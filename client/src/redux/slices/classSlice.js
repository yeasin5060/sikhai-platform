import { createSlice } from '@reduxjs/toolkit';

const initialClasses = [
  {
    id: 'cls-1',
    title: 'Advanced React 19 State & Async Actions',
    courseName: 'Full Stack MERN Development Bootcamp',
    instructor: 'Jhankar Mahbub',
    date: '2026-09-27',
    time: '08:30 PM - 10:30 PM',
    status: 'Live Now',
    activeAttendees: 184,
    totalRegistered: 240,
    meetLink: 'https://meet.google.com/abc-defg-hij',
    topic: 'React 19 useActionState, Server Functions, Suspense & Streaming',
  },
  {
    id: 'cls-2',
    title: 'Data Wrangling with Pandas & Feature Engineering',
    courseName: 'Python for Data Science & ML',
    instructor: 'Dr. Munirul Haque',
    date: '2026-09-28',
    time: '07:00 PM - 09:00 PM',
    status: 'Upcoming',
    activeAttendees: 0,
    totalRegistered: 195,
    meetLink: 'https://meet.google.com/xyz-uvw-rst',
    topic: 'Cleaning dirty data, imputation, categorical encoding with Python',
  },
  {
    id: 'cls-3',
    title: 'Flutter Riverpod 2.0 Global State Management',
    courseName: 'Mobile App Development with Flutter & Dart',
    instructor: 'Tariqul Islam',
    date: '2026-09-26',
    time: '08:00 PM - 10:00 PM',
    status: 'Completed',
    activeAttendees: 210,
    totalRegistered: 215,
    meetLink: 'https://meet.google.com/mno-pqrs-tuv',
    topic: 'AsyncNotifier, code generation, and auto-dispose caching',
  },
];

const classSlice = createSlice({
  name: 'classes',
  initialState: {
    list: initialClasses,
    filterStatus: 'All',
    selectedClass: initialClasses[0],
    isStreamingLive: true,
  },
  reducers: {
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    selectClass: (state, action) => {
      state.selectedClass = state.list.find((c) => c.id === action.payload) || null;
    },
    addClass: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateClassStatus: (state, action) => {
      const { id, status } = action.payload;
      const target = state.list.find((c) => c.id === id);
      if (target) target.status = status;
    },
  },
});

export const { setFilterStatus, selectClass, addClass, updateClassStatus } = classSlice.actions;
export default classSlice.reducer;
