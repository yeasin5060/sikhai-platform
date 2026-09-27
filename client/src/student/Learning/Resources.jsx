import React from 'react';
import { Download, FileCode, ExternalLink } from 'lucide-react';
import Button from '../../components/common/Button';

const resources = [
  {
    name: 'starter-project-v1.zip',
    size: '12.4 MB',
    type: 'Code Archive',
    url: '#',
  },
  {
    name: 'react19-cheatsheet.pdf',
    size: '1.8 MB',
    type: 'PDF Reference',
    url: '#',
  },
  {
    name: 'figma-design-specifications.link',
    size: 'External',
    type: 'Figma UI',
    url: '#',
  },
];

const Resources = () => {
  return (
    <div className="space-y-3">
      {resources.map((item, idx) => (
        <div
          key={idx}
          className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white text-[#00A7F3] shadow-xs">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{item.name}</h4>
              <span className="text-slate-400 text-[11px]">
                {item.type} • {item.size}
              </span>
            </div>
          </div>

          <Button variant="outline" size="sm" icon={Download}>
            Download
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Resources;
