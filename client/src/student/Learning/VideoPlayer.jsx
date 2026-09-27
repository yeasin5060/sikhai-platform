import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

const VideoPlayer = ({ title, onCompleteLesson }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  return (
    <div className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl aspect-video flex flex-col justify-between group">
      {/* Simulated Video Canvas */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 fill-white ml-1 text-white" />
        </div>
        <span className="text-xs uppercase tracking-wider font-bold text-sky-400">
          Now Streaming
        </span>
        <h3 className="text-base sm:text-xl font-bold max-w-lg mt-1">
          {title || 'Lecture Stream'}
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          1080p Full HD • Interactive Playback Engine
        </p>
      </div>

      {/* Top watermark */}
      <div className="relative z-10 p-4 flex justify-between items-center text-xs text-slate-400 bg-gradient-to-b from-slate-950/80 to-transparent">
        <span className="font-bold text-slate-200">Sikhai Video Player</span>
        <span className="bg-sky-500/20 text-[#00A7F3] px-2.5 py-0.5 rounded-full font-bold">
          React 19 Stream
        </span>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-10 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent space-y-2">
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
          <div className="w-2/5 h-full bg-[#00A7F3] rounded-full" />
        </div>

        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 hover:text-[#00A7F3] transition cursor-pointer"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMuted(!muted)}
              className="p-1.5 hover:text-[#00A7F3] transition cursor-pointer"
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <span className="text-slate-400 font-mono text-[11px]">
              08:34 / 28:10
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCompleteLesson}
              className="text-xs font-bold px-3 py-1 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-lg transition border border-emerald-500/30 cursor-pointer"
            >
              Mark Completed
            </button>
            <button className="p-1.5 hover:text-[#00A7F3] transition cursor-pointer">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
