import { createSlice } from '@reduxjs/toolkit';

const initialQuestions = [
  {
    id: 'comm-1',
    author: 'Rahim Ahmed',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    title: 'How does React 19 useActionState differ from useTransition with useState?',
    content: 'I was testing the new form actions and noticed useActionState automatically bundles pending and error handling. Can we still access the optimistic update state directly?',
    course: 'Full Stack MERN Bootcamp',
    tags: ['React', 'Hooks', 'Actions'],
    votes: 24,
    answersCount: 3,
    isResolved: true,
    createdAt: '3 hours ago',
    answers: [
      {
        id: 'ans-1',
        author: 'Jhankar Mahbub (Instructor)',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
        content: 'Great question! `useActionState` is specifically optimized for async form submission lifecycle with returning states, whereas `useTransition` gives you a boolean `isPending` for any arbitrary state transition. For optimistic UI, combine it with `useOptimistic`!',
        votes: 18,
        isAccepted: true,
        createdAt: '2 hours ago',
      },
      {
        id: 'ans-2',
        author: 'Nusrat Jahan',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
        content: 'Yes! And note that in Next.js Server Actions, useActionState works seamlessly on both client and server boundaries.',
        votes: 5,
        isAccepted: false,
        createdAt: '1 hour ago',
      },
    ],
  },
  {
    id: 'comm-2',
    author: 'Farzana Haque',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    title: 'Which loss function is best for multiclass classification with severe class imbalance?',
    content: 'I am training an image classifier with 5 classes where class 1 has 90% of samples. Standard CrossEntropy is overfitting quickly.',
    course: 'Python for Data Science & ML',
    tags: ['Machine Learning', 'PyTorch', 'Data'],
    votes: 15,
    answersCount: 1,
    isResolved: false,
    createdAt: 'Yesterday',
    answers: [
      {
        id: 'ans-3',
        author: 'Dr. Munirul Haque',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
        content: 'Try using Focal Loss or Weighted Cross Entropy Loss! You can also apply SMOTE during data preparation or class-balanced undersampling.',
        votes: 12,
        isAccepted: false,
        createdAt: '18 hours ago',
      },
    ],
  },
];

const communitySlice = createSlice({
  name: 'community',
  initialState: {
    questions: initialQuestions,
    selectedQuestion: initialQuestions[0],
    activeTag: 'All',
    searchQuery: '',
  },
  reducers: {
    setActiveTag: (state, action) => {
      state.activeTag = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    selectQuestion: (state, action) => {
      state.selectedQuestion = state.questions.find((q) => q.id === action.payload) || null;
    },
    upvoteQuestion: (state, action) => {
      const q = state.questions.find((item) => item.id === action.payload);
      if (q) q.votes += 1;
      if (state.selectedQuestion?.id === action.payload) {
        state.selectedQuestion.votes += 1;
      }
    },
    addAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const q = state.questions.find((item) => item.id === questionId);
      if (q) {
        q.answers.push(answer);
        q.answersCount += 1;
        if (state.selectedQuestion?.id === questionId) {
          state.selectedQuestion.answers.push(answer);
          state.selectedQuestion.answersCount += 1;
        }
      }
    },
    addQuestion: (state, action) => {
      state.questions.unshift(action.payload);
    },
  },
});

export const {
  setActiveTag,
  setSearchQuery,
  selectQuestion,
  upvoteQuestion,
  addAnswer,
  addQuestion,
} = communitySlice.actions;

export default communitySlice.reducer;
