import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) { setError('Please enter your email.'); return; }
    setLoading(true);
    try {
      // Mock API — replace with real endpoint
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
    } catch {
      setError('Failed to send reset email. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">Forgot password</h1>
        <p className="text-slate-400 mb-8 text-sm">Enter your email and we&apos;ll send you a reset link</p>

        {sent ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-4 text-green-400 text-sm text-center">
            Reset link sent! Check your inbox.
            <br />
            <Link to="/login" className="mt-3 inline-block text-indigo-400 hover:text-indigo-300 font-medium transition">
              Back to Sign in
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-4 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="forgot-email">Email address</label>
                <input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
              <button
                id="forgot-submit-btn"
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg transition text-sm"
              >
                {loading ? 'Sending…' : 'Send reset link'}
              </button>
            </form>
            <p className="mt-6 text-center text-slate-400 text-sm">
              <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                ← Back to Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
