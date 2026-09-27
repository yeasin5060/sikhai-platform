import { createSlice } from '@reduxjs/toolkit';

const initialAnalytics = {
  timeframe: 'Month',
  stats: {
    totalRevenue: '৳ 1,485,200',
    revenueGrowth: '+18.4%',
    activeLearners: '12,450',
    learnerGrowth: '+12.6%',
    courseCompletions: '3,890',
    completionRate: '78.2%',
    activeLiveSessions: '8',
  },
  revenueMonthly: [
    { month: 'Jan', amount: 820000, learners: 850 },
    { month: 'Feb', amount: 950000, learners: 980 },
    { month: 'Mar', amount: 1100000, learners: 1200 },
    { month: 'Apr', amount: 1040000, learners: 1150 },
    { month: 'May', amount: 1280000, learners: 1420 },
    { month: 'Jun', amount: 1485200, learners: 1680 },
  ],
  coursePerformance: [
    { name: 'Full Stack MERN Bootcamp', enrolled: 1420, rating: 4.9, revenue: 9230000 },
    { name: 'Python for Data Science & ML', enrolled: 980, rating: 4.8, revenue: 5096000 },
    { name: 'Flutter & Dart Mobile App', enrolled: 840, rating: 4.9, revenue: 4872000 },
    { name: 'Next.js 15 UI/UX Arch', enrolled: 650, rating: 4.7, revenue: 2925000 },
  ],
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: initialAnalytics,
  reducers: {
    setTimeframe: (state, action) => {
      state.timeframe = action.payload;
    },
  },
});

export const { setTimeframe } = analyticsSlice.actions;
export default analyticsSlice.reducer;
