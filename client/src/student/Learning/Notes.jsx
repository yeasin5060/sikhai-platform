import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Trash2, Clock } from 'lucide-react';
import { addNote, deleteNote } from '../../redux/slices/progressSlice';
import Button from '../../components/common/Button';

const Notes = ({ currentLessonId }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.progress?.notes || []);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    dispatch(
      addNote({
        lessonId: currentLessonId,
        timestamp: '08:34',
        text: noteText,
      })
    );
    setNoteText('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleAddNote} className="space-y-2">
        <textarea
          rows={3}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Take a quick note at current timestamp..."
          className="w-full text-xs sm:text-sm p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:border-[#00A7F3]"
        />
        <div className="flex justify-end">
          <Button variant="primary" size="sm" type="submit" icon={Plus}>
            Save Timestamped Note
          </Button>
        </div>
      </form>

      <div className="space-y-3">
        {notes.map((n) => (
          <div
            key={n.id}
            className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3 text-xs"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-md bg-sky-100 text-[#00A7F3] font-mono font-bold text-[10px]">
                  {n.timestamp}
                </span>
                <span className="text-slate-400 text-[10px]">{n.createdAt}</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{n.text}</p>
            </div>
            <button
              onClick={() => dispatch(deleteNote(n.id))}
              className="p-1 text-slate-400 hover:text-rose-500 rounded-lg transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
        {notes.length === 0 && (
          <div className="text-center py-6 text-slate-400 text-xs">
            No notes taken yet. Take notes while watching videos to remember key syntax!
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
