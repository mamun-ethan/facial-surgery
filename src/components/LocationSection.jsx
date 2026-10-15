import React from 'react';
import { MapPin, Clock, Navigation, Car, PhoneCall, ExternalLink, Sparkles } from 'lucide-react';

export default function LocationSection({ t, lang }) {
  return (
    <section id="location" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.location.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Visiting Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{t.location.addressTitle}</span>
              </div>
              <p className="text-sm font-bold text-slate-900 leading-relaxed">
                {t.location.addressText}
              </p>
              <span className="inline-block text-xs text-brand-700 bg-brand-100/60 font-semibold px-2.5 py-1 rounded-lg">
                📍 {lang === 'en' ? 'Alam Shopping Complex (1st Floor), Bazar Road, Ghatail' : 'আলম শপিং কমপ্লেক্স (১ম তলা), বাজার রোড, ঘাটাইল'}
              </span>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{t.location.hoursTitle}</span>
              </div>
              
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-600">{lang === 'en' ? 'Saturday – Thursday:' : 'শনিবার – বৃহস্পতিবার:'}</span>
                  <span className="font-bold text-slate-900">9:30 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-600">{lang === 'en' ? 'Friday:' : 'শুক্রবার:'}</span>
                  <span className="font-bold text-emerald-700">3:00 PM – 8:30 PM</span>
                </div>
                <div className="flex justify-between py-1 font-medium">
                  <span className="text-slate-600">{lang === 'en' ? 'Emergency Care:' : 'জরুরি ট্রমা ও চিকিৎসা:'}</span>
                  <span className="font-bold text-rose-600">01783-532362</span>
                </div>
              </div>
            </div>

            {/* Transit & Parking Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4" />
                <span>{t.location.transportTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.location.transportText}
              </p>
            </div>

            {/* Google Map Direct Action */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=24.479633683833,89.96985"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.location.getDirections}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Right: Map Embed Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-soft bg-slate-100 min-h-[420px] relative">
            <iframe
              title="Dental & Facial Surgery Clinic Location Map"
              src="https://maps.google.com/maps?q=24.4796337,89.96985&hl=en&z=17&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Pin Badge Overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                🏥
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Dental & Facial Surgery, Ghatail</span>
                <span className="text-[11px] text-slate-500">Alam Shopping Complex (1st Floor), Bazar Road</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
