import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  TrendingUp,
  Radio,
  MessageSquare,
  FilePlus,
  BookOpen,
  Users,
  GraduationCap,
  ClipboardList,
  Bell,
  Settings,
  Sparkles,
  LogOut,
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const menuItems = [
  { name: 'Overview', path: '/admin/overview', icon: LayoutDashboard },
  { name: 'Learner Analytics', path: '/admin/learner-analytics', icon: TrendingUp },
  { name: 'Active Classes', path: '/admin/active-classes', icon: Radio, badge: 'Live' },
  { name: 'Community', path: '/admin/community', icon: MessageSquare },
  { name: 'Create Post', path: '/admin/create-post', icon: FilePlus },
  { name: 'Courses', path: '/admin/courses', icon: BookOpen },
  { name: 'Learners', path: '/admin/learners', icon: Users },
  { name: 'Instructors', path: '/admin/instructors', icon: GraduationCap },
  { name: 'Assignments', path: '/admin/assignments', icon: ClipboardList },
  { name: 'Notifications', path: '/admin/notifications', icon: Bell },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

const Sidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-700/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Logo */}
        <div className="h-18 px-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00A7F3] to-sky-400 flex items-center justify-center text-white font-bold shadow-md shadow-sky-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Sikhai<span className="text-[#00A7F3]">.</span>
              </span>
              <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                Admin Center
              </span>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                    isActive
                      ? 'bg-[#00A7F3] text-white shadow-sm shadow-[#00A7F3]/30 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white text-[#00A7F3]'
                            : 'bg-rose-100 text-rose-600 animate-pulse'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* User Card & Logout */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/70">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={
                  user?.avatar ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
                }
                alt="Admin Avatar"
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-white dark:ring-slate-700 shadow-xs"
              />
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
                  {user?.name || 'Tanvir Hossain'}
                </p>
                <p className="text-[11px] text-slate-400 truncate">
                  {user?.email || 'admin@sikhai.com'}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
