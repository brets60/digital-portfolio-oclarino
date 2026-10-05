import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, Send, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage('Please enter a short message.');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('sending');

    // Simulate sending
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Message & Info */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 font-display tracking-tight mt-3">
                Have a project or opportunity?
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              I am always open to discussing new IoT projects, embedded hardware ideas, collaborations, or internships.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-slate-700">
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <a
                  href="mailto:oclarino.dev@gmail.com"
                  className="hover:text-brand-600 font-semibold transition-colors"
                >
                  oclarino.dev@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{personalInfo.location} (GMT+8)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Simple Contact Form */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your message has been noted. You can also reach me directly at <strong>oclarino.dev@gmail.com</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-3 px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-brand-600 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 shadow-xs"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
