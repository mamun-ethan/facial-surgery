import React from 'react';
import { ShieldCheck, Cpu, Droplets, Sparkles, CheckCircle2, Lock, HeartHandshake } from 'lucide-react';

export default function TechAndSafety({ t, lang }) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.techSafety.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.techSafety.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.techSafety.subtitle}
          </p>
        </div>

        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.techSafety.points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-brand-300 hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center font-extrabold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sterilization Visual Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-center border border-slate-800">
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center gap-2 text-brand-300 text-xs font-bold uppercase">
              <Lock className="w-4 h-4" />
              <span>{lang === 'en' ? 'Strict 6-Stage Infection Control' : 'কঠোর ৬-ধাপের জীবাণুমুক্তকরণ'}</span>
            </div>
            <h4 className="text-2xl font-bold">
              {lang === 'en' 
                ? 'Your Health Deserves 100% Sterile Confidence' 
                : 'আপনার সুরক্ষা আমাদের কাছে সর্বোচ্চ অগ্রাধিকার'}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'We unpack sterilized instruments and disposables right in front of you. Every surgical pouch carries an autoclave validation color strip for absolute reassurance.'
                : 'চিকিৎসা শুরুর আগে আপনার সামনেই সিল করা অটোক্লেভ প্যাকেট খোলা হয়। প্রতিটি প্যাকেটে থাকে সঠিক জীবাণুমুক্তকরণের আন্তর্জাতিক কালার স্ট্রিপ।'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold">
              ✨ {lang === 'en' ? 'Class-B Vacuum Autoclave' : 'ইউরোপীয় ক্লাস-বি অটোক্লেভ'}
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold">
              🧪 {lang === 'en' ? 'HEPA Air Filtered OT' : 'হেপা ফিল্টারযুক্ত সার্জিক্যাল ওটি'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
