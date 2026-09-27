import { createSlice } from '@reduxjs/toolkit';

const initialLearners = [
  {
    id: 'lrn-101',
    name: 'Rahim Ahmed',
    email: 'rahim.ahmed@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    enrolledCourses: 4,
    completedCourses: 2,
    progress: 78,
    status: 'Active',
    joinedDate: '2025-01-14',
    lastActive: '2 hours ago',
    phone: '+880 1711 000111',
    location: 'Dhaka, Bangladesh',
  },
  {
    id: 'lrn-102',
    name: 'Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    enrolledCourses: 6,
    completedCourses: 5,
    progress: 94,
    status: 'Active',
    joinedDate: '2024-11-20',
    lastActive: '10 mins ago',
    phone: '+880 1812 222333',
    location: 'Chittagong, Bangladesh',
  },
  {
    id: 'lrn-103',
    name: 'Sharif Al Mamun',
    email: 'sharif.mamun@example.com',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
    enrolledCourses: 2,
    completedCourses: 0,
    progress: 35,
    status: 'Inactive',
    joinedDate: '2025-02-01',
    lastActive: '4 days ago',
    phone: '+880 1913 444555',
    location: 'Sylhet, Bangladesh',
  },
  {
    id: 'lrn-104',
    name: 'Farzana Haque',
    email: 'farzana.haque@example.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    enrolledCourses: 5,
    completedCourses: 3,
    progress: 82,
    status: 'Active',
    joinedDate: '2024-09-10',
    lastActive: 'Yesterday',
    phone: '+880 1614 666777',
    location: 'Rajshahi, Bangladesh',
  },
  {
    id: 'lrn-105',
    name: 'Tanvir Hasan',
    email: 'tanvir.h@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    enrolledCourses: 3,
    completedCourses: 1,
    progress: 60,
    status: 'Active',
    joinedDate: '2025-01-28',
    lastActive: '3 hours ago',
    phone: '+880 1515 888999',
    location: 'Khulna, Bangladesh',
  },
];

const learnerSlice = createSlice({
  name: 'learners',
  initialState: {
    list: initialLearners,
    selectedLearner: initialLearners[0],
    searchTerm: '',
    statusFilter: 'All',
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
    selectLearner: (state, action) => {
      state.selectedLearner = state.list.find((l) => l.id === action.payload) || null;
    },
    addLearner: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateLearnerStatus: (state, action) => {
      const { id, status } = action.payload;
      const target = state.list.find((l) => l.id === id);
      if (target) target.status = status;
    },
    deleteLearner: (state, action) => {
      state.list = state.list.filter((l) => l.id !== action.payload);
      if (state.selectedLearner?.id === action.payload) {
        state.selectedLearner = state.list[0] || null;
      }
    },
  },
});

export const {
  setSearchTerm,
  setStatusFilter,
  selectLearner,
  addLearner,
  updateLearnerStatus,
  deleteLearner,
} = learnerSlice.actions;

export default learnerSlice.reducer;
