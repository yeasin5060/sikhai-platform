import { Menu, Bell, Search as SearchIcon, Globe, Moon, Sun } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onOpenSidebar }) => {
  const user = useSelector((state) => state.auth?.user);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="h-18 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700/80 sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between">
      {/* Left side: Hamburger (mobile) + search */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative hidden md:block w-72 lg:w-96">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search courses, learners, revenue, reports..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl text-sm focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00A7F3]/20 focus:border-[#00A7F3] transition text-slate-800 dark:text-slate-100 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Right side: quick stats, notifications, profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Quick Portal Switch */}
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#00A7F3] hover:bg-sky-50 rounded-xl transition border border-slate-200/80"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Live Site</span>
        </a>

        {/* Notifications Icon with Badge */}
        <Link
          to="/admin/notifications"
          className="relative p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
        </Link>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

        {/* Profile summary */}
        <Link
          to="/admin/settings"
          className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-100/70 dark:hover:bg-slate-800 transition"
        >
          <img
            src={
              user?.avatar ||
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
            }
            alt="Profile"
            className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200 dark:ring-slate-700"
          />
          <div className="hidden md:block text-left">
            <span className="block text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight">
              {user?.name || 'Tanvir Hossain'}
            </span>
            <span className="block text-[10px] text-emerald-600 font-semibold leading-tight">
              Super Admin
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
