import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Sparkles, ChevronRight, Stethoscope } from 'lucide-react';
import confetti from 'canvas-confetti';
import { servicesData, doctorsData } from '../data/servicesData';

export default function AppointmentModal({ isOpen, onClose, t, lang, initialServiceId, initialDoctorId }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialServiceId || 'oral-cancer-screening');
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctorId || 'dr-fakhrul');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('5:00 PM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) setSelectedService(initialServiceId);
  }, [initialServiceId]);

  useEffect(() => {
    if (initialDoctorId) setSelectedDoctor(initialDoctorId);
  }, [initialDoctorId]);

  useEffect(() => {
    // Default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateString);
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM', '11:30 AM', '12:30 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({ name: '', phone: '', email: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-brand-300 font-bold uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Priority Booking' : 'অগ্রাধিকার বুকিং'}</span>
            </div>
            <h3 className="text-xl font-extrabold">{t.modal.title}</h3>
            <p className="text-xs text-slate-200 mt-0.5">{t.modal.subtitle}</p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSubmitted ? (
            /* Success View */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                {t.modal.successTitle}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {t.modal.successMessage}
              </p>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">{lang === 'en' ? 'Patient Name:' : 'রোগীর নাম:'}</span>
                  <span className="font-bold text-slate-900">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{lang === 'en' ? 'Contact Phone:' : 'মোবাইল নম্বর:'}</span>
                  <span className="font-bold text-brand-700">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{lang === 'en' ? 'Selected Slot:' : 'নির্বাচিত সময়:'}</span>
                  <span className="font-bold text-slate-900">{selectedDate} at {selectedSlot}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  {t.modal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step indicator tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`text-xs font-bold transition-colors cursor-pointer ${
                    step === 1 ? 'text-brand-600 border-b-2 border-brand-600 pb-1' : 'text-slate-400'
                  }`}
                >
                  {t.modal.step1}
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`text-xs font-bold transition-colors cursor-pointer ${
                    step === 2 ? 'text-brand-600 border-b-2 border-brand-600 pb-1' : 'text-slate-400'
                  }`}
                >
                  {t.modal.step2}
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={`text-xs font-bold transition-colors cursor-pointer ${
                    step === 3 ? 'text-brand-600 border-b-2 border-brand-600 pb-1' : 'text-slate-400'
                  }`}
                >
                  {t.modal.step3}
                </button>
              </div>

              {/* Step 1: Treatment Selection */}
              {step === 1 && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    {lang === 'en' ? 'Select Preferred Treatment Category:' : 'কাঙ্ক্ষিত চিকিৎসা সেবা নির্বাচন করুন:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                    {servicesData.map((svc) => {
                      const isSelected = selectedService === svc.id;
                      const title = lang === 'en' ? svc.titleEn : svc.titleBn;
                      const price = lang === 'en' ? svc.priceEn : svc.priceBn;

                      return (
                        <div
                          key={svc.id}
                          onClick={() => setSelectedService(svc.id)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                            isSelected 
                              ? 'bg-brand-50 border-brand-500 ring-2 ring-brand-500/20 shadow-sm' 
                              : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className={`text-xs font-bold block ${isSelected ? 'text-brand-900' : 'text-slate-800'}`}>
                            {title}
                          </span>
                          <span className="text-[11px] text-slate-500 block mt-0.5">
                            {price}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Next: Choose Doctor & Time' : 'পরবর্তী: ডাক্তার ও সময়'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Doctor & Date / Slot */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Doctor Picker */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      {lang === 'en' ? 'Choose Doctor / Specialist:' : 'ডাক্তার নির্বাচন করুন:'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {doctorsData.map((doc) => {
                        const isSelected = selectedDoctor === doc.id;
                        const name = lang === 'en' ? doc.nameEn : doc.nameBn;

                        return (
                          <div
                            key={doc.id}
                            onClick={() => setSelectedDoctor(doc.id)}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-brand-50 border-brand-500 text-brand-950 font-bold ring-2 ring-brand-500/20'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="text-xs block truncate">{name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        {lang === 'en' ? 'Select Date:' : 'তারিখ নির্বাচন:'}
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        {lang === 'en' ? 'Preferred Slot:' : 'সময় নির্বাচন:'}
                      </label>
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 font-medium"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      {lang === 'en' ? 'Back' : 'পেছনে'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Next: Patient Info' : 'পরবর্তী: রোগীর তথ্য'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Patient Information Form */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {t.modal.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shakib Al Hasan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {t.modal.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="017XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {t.modal.emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {t.modal.notesLabel}
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any pain, previous treatments or specific worries..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      {lang === 'en' ? 'Back' : 'পেছনে'}
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t.modal.confirmBtn}</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
