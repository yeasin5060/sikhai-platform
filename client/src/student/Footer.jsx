import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

// lucide-react-এ brand icons নেই — inline SVG ব্যবহার করা হয়েছে
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/student/home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00A7F3] to-sky-400 flex items-center justify-center text-white font-bold shadow-lg shadow-sky-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Sikhai<span className="text-[#00A7F3]">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering the next generation of engineers, developers and tech innovators in Bangladesh through project-driven interactive education.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 rounded-xl bg-slate-800 hover:bg-[#00A7F3] hover:text-white transition text-slate-300">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter / X" className="p-2 rounded-xl bg-slate-800 hover:bg-[#00A7F3] hover:text-white transition text-slate-300">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-xl bg-slate-800 hover:bg-[#00A7F3] hover:text-white transition text-slate-300">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-xl bg-slate-800 hover:bg-[#00A7F3] hover:text-white transition text-slate-300">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/student/courses" className="hover:text-white transition">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/student/community" className="hover:text-white transition">
                  Community Q&A
                </Link>
              </li>
              <li>
                <Link to="/student/dashboard" className="hover:text-white transition">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/admin/overview" className="hover:text-white transition">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Tracks */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Tracks
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/student/courses?category=Web%20Development" className="hover:text-white transition">
                  Full Stack MERN
                </Link>
              </li>
              <li>
                <Link to="/student/courses?category=Data%20Science" className="hover:text-white transition">
                  Python & AI / ML
                </Link>
              </li>
              <li>
                <Link to="/student/courses?category=Mobile%20App" className="hover:text-white transition">
                  Flutter App Dev
                </Link>
              </li>
              <li>
                <Link to="/student/courses" className="hover:text-white transition">
                  Cloud & Next.js 15
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A7F3]" />
                <span>Banani, Dhaka - 1213, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00A7F3]" />
                <span>+880 1800 123456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A7F3]" />
                <span>support@sikhai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sikhai Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
