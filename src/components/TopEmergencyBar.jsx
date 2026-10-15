import React from 'react';
import { PhoneCall, Clock, MapPin, AlertCircle, Globe } from 'lucide-react';

export default function TopEmergencyBar({ t, lang, setLang }) {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Emergency Alert & Phone */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-semibold border border-rose-500/30 animate-pulse">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>24/7 Trauma Care</span>
          </div>
          <span className="hidden sm:inline text-slate-400">|</span>
          <a 
            href="tel:+8801783532362" 
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t.topBar.emergency} <strong>{t.topBar.phone}</strong></span>
          </a>
        </div>

        {/* Right: Hours & Quick Language Selector */}
        <div className="flex items-center gap-4 text-slate-300 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            <span>{t.topBar.hours}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span>{t.topBar.location}</span>
          </div>

          {/* Language Switcher Button */}
          <button
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-900/60 hover:bg-brand-800 text-brand-300 border border-brand-700/50 transition-all cursor-pointer font-medium"
            title="Switch Language / ভাষা পরিবর্তন"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
