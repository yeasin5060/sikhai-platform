import React from 'react';

const Table = ({ headers, children, emptyMessage = 'No records found' }) => {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-2xl border border-slate-200/80 shadow-sm">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="bg-slate-50/80 border-b border-slate-200/80 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {headers.map((header, idx) => (
              <th key={idx} className="px-5 py-3.5">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
