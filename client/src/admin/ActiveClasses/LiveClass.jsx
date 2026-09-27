import React, { useState } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Share2,
  Users,
  MessageSquare,
  PhoneOff,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import Button from '../../components/common/Button';

const LiveClass = ({ activeClass, onLeave }) => {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [messages, setMessages] = useState([
    { user: 'Rahim Ahmed', text: 'Sir, screen audio is crystal clear!' },
    { user: 'Farzana Haque', text: 'Does useActionState support rollback?' },
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, { user: 'Admin / Instructor', text: chatInput }]);
    setChatInput('');
  };

  return (
    <div className="bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
      {/* Top Session Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>LIVE BROADCAST</span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white truncate">
            {activeClass?.title || 'Interactive Live Classroom'}
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-bold text-slate-200">
            <Users className="w-4 h-4 text-[#00A7F3]" />
            {activeClass?.activeAttendees || 184} Learners
          </span>
          <button
            onClick={onLeave}
            className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Stream Area + Live Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-4 h-[420px] sm:h-[480px]">
        {/* Stream Canvas */}
        <div className="lg:col-span-3 bg-slate-900 relative flex items-center justify-center p-6">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#00A7F3] to-sky-400 flex items-center justify-center text-white shadow-xl shadow-sky-500/20">
              <Video className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Instructor Screen Sharing Stream
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                {activeClass?.topic || 'Streaming live coding demonstration in full 1080p 60fps'}
              </p>
            </div>
          </div>

          {/* Instructor Floating PIP */}
          <div className="absolute bottom-4 left-4 p-2.5 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center font-bold text-xs text-white">
              JM
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-white">
                {activeClass?.instructor || 'Instructor'}
              </p>
              <p className="text-[10px] text-emerald-400">Speaking</p>
            </div>
          </div>
        </div>

        {/* Live Chat Panel */}
        <div className="hidden lg:flex flex-col bg-slate-900/40 border-l border-slate-800">
          <div className="p-3 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#00A7F3]" />
              Live Questions
            </span>
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-400">
              {messages.length} messages
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-xs">
            {messages.map((msg, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="font-bold text-sky-400 block text-[11px]">
                  {msg.user}
                </span>
                <p className="text-slate-300 text-[11px] mt-0.5">{msg.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-2 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Reply to learners..."
              className="flex-1 bg-slate-800 text-xs px-3 py-2 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00A7F3]"
            />
            <Button size="sm" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>

      {/* Media Controls Footer */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMicOn(!micOn)}
            className={`p-3 rounded-2xl transition ${
              micOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-600 text-white'
            }`}
          >
            {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setCameraOn(!cameraOn)}
            className={`p-3 rounded-2xl transition ${
              cameraOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-600 text-white'
            }`}
          >
            {cameraOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
          </button>
          <button className="p-3 bg-slate-800 text-white hover:bg-slate-700 rounded-2xl transition">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        <Button variant="danger" size="md" icon={PhoneOff} onClick={onLeave}>
          End Session
        </Button>
      </div>
    </div>
  );
};

export default LiveClass;
