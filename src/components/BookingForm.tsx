import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { BookingFormData } from '../types';
import { SERVICE_TYPES } from '../constants';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '', phone: '', haircutType: '', notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking Request: ${formData.name}`);
    const body = encodeURIComponent(
      `New Booking Request\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.haircutType}\n` +
      `Notes: ${formData.notes}`
    );
    window.location.href = `mailto:skpcuts@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 text-center animate-fade-in">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900">Request Prepared!</h3>
        <p className="text-slate-600 mt-2">Your email app should open. Click "Send" to finish your booking.</p>
        <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm text-slate-500 underline">Send another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 text-center">Request an Appointment</h3>
      <div className="space-y-4">
        <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all"
          onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all"
          onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all bg-white"
          onChange={(e) => setFormData({...formData, haircutType: e.target.value})}>
          <option value="">Select a Service</option>
          {SERVICE_TYPES.map(type => <option key={type.id} value={type.label}>{type.label}</option>)}
        </select>
        <textarea placeholder="Any specific details (Time/Date preference)..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all h-24"
          onChange={(e) => setFormData({...formData, notes: e.target.value})} />
      </div>
      <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg">
        <Send className="w-4 h-4" /> Send Booking Request
      </button>
    </form>
  );
};
