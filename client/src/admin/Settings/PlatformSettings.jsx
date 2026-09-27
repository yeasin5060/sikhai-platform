import React, { useState } from 'react';
import Button from '../../components/common/Button';
import toast from 'react-hot-toast';

const PlatformSettings = () => {
  const [platformName, setPlatformName] = useState('Sikhai EdTech Platform');
  const [currency, setCurrency] = useState('BDT (৳)');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoApproveCommunity, setAutoApproveCommunity] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Platform configurations saved!');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="pb-4 border-b border-slate-100">
        <h3 className="text-base font-bold text-slate-900">
          Global System Configurations
        </h3>
        <p className="text-xs text-slate-500">Platform branding, payment gateways, and policies</p>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Platform Brand Name
            </label>
            <input
              type="text"
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Default Currency
            </label>
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-3 pt-3">
          <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">
                Maintenance Mode
              </span>
              <span className="text-[11px] text-slate-400">
                Disable student checkout and show service banner
              </span>
            </div>
            <input
              type="checkbox"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
              className="w-4 h-4 accent-[#00A7F3] rounded"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">
                Instant Email Notifications for Enrollment
              </span>
              <span className="text-[11px] text-slate-400">
                Dispatch invoice confirmation immediately on bKash/Nagad verification
              </span>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-4 h-4 accent-[#00A7F3] rounded"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">
                Auto-approve Community Questions
              </span>
              <span className="text-[11px] text-slate-400">
                Skip manual moderation filter for questions by registered learners
              </span>
            </div>
            <input
              type="checkbox"
              checked={autoApproveCommunity}
              onChange={(e) => setAutoApproveCommunity(e.target.checked)}
              className="w-4 h-4 accent-[#00A7F3] rounded"
            />
          </label>
        </div>

        <div className="flex justify-end pt-3">
          <Button variant="primary" size="md" type="submit">
            Save System Settings
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlatformSettings;
