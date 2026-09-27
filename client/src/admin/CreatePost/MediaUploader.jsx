import React, { useRef } from 'react';
import { UploadCloud, Image, X } from 'lucide-react';

const MediaUploader = ({ bannerUrl, onBannerChange }) => {
  const fileInputRef = useRef(null);

  const sampleImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-sm">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Featured Cover Media
        </label>
        {bannerUrl && (
          <button
            type="button"
            onClick={() => onBannerChange('')}
            className="text-xs text-rose-500 hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" /> Remove
          </button>
        )}
      </div>

      {bannerUrl ? (
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 group h-48">
          <img
            src={bannerUrl}
            alt="Cover preview"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          onClick={() => onBannerChange(sampleImages[0])}
          className="border-2 border-dashed border-slate-200 hover:border-[#00A7F3] rounded-2xl p-6 text-center cursor-pointer transition bg-slate-50/50 hover:bg-sky-50/30"
        >
          <UploadCloud className="w-8 h-8 text-[#00A7F3] mx-auto mb-2" />
          <p className="text-xs font-bold text-slate-700">
            Click to upload cover or choose presets
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            PNG, JPG or WebP (Recommended 1200 x 630px)
          </p>
        </div>
      )}

      {/* Preset select */}
      <div>
        <span className="block text-[11px] font-semibold text-slate-400 mb-2">
          Or pick from stock cover presets:
        </span>
        <div className="grid grid-cols-3 gap-2">
          {sampleImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Preset ${i}`}
              onClick={() => onBannerChange(img)}
              className="h-14 w-full object-cover rounded-xl cursor-pointer hover:opacity-80 transition ring-1 ring-slate-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaUploader;
