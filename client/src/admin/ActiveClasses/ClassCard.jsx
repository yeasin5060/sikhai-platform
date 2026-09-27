import React from 'react';
import { Radio, Users, Calendar, Clock, Video, ExternalLink } from 'lucide-react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const ClassCard = ({ classItem, onJoin, onViewDetails }) => {
  const isLive = classItem.status === 'Live Now';

  return (
    <div
      className={`p-5 rounded-2xl bg-white border transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
        isLive
          ? 'border-rose-300 ring-2 ring-rose-500/10'
          : 'border-slate-200/80'
      }`}
    >
      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant={isLive ? 'danger' : classItem.status === 'Completed' ? 'neutral' : 'primary'}>
            {isLive ? (
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
                Live Now
              </span>
            ) : (
              classItem.status
            )}
          </Badge>

          <span className="text-xs text-slate-400 font-medium">
            {classItem.courseName}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 line-clamp-1 mb-1">
          {classItem.title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mb-4">
          Topic: {classItem.topic}
        </p>

        {/* Schedule & Attendees Info */}
        <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/80 rounded-xl text-xs text-slate-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{classItem.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{classItem.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">
              {isLive ? `${classItem.activeAttendees} Live` : `${classItem.totalRegistered} Registered`}
            </span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-medium text-slate-500 truncate">
              {classItem.instructor}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        {isLive ? (
          <Button
            variant="danger"
            size="sm"
            className="w-full"
            icon={Radio}
            onClick={() => onJoin && onJoin(classItem)}
          >
            Join Live Class Room
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onViewDetails && onViewDetails(classItem)}
            >
              Session Details
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => onJoin && onJoin(classItem)}
            >
              Start Session
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
