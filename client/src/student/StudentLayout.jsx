import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-900 flex flex-col justify-between transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default StudentLayout;

