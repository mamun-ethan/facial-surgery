import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Award,
  HeartHandshake,
  Clock
} from 'lucide-react';

export default function Hero({ t, lang, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, CTAs, Trust Elements */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold tracking-wide border border-brand-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-ping" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.titleStart}{' '}
              <span className="text-brand-600">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.bookAction}</span>
              </button>

              <a
                href="https://wa.me/8801783532362?text=Hello%20Dental%20%26%20Facial%20Surgery%20Ghatail,%20I%20would%20like%20to%20consult%20Dr.%20Fakhrul%20Alam%20Munna."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t.hero.whatsappAction}</span>
              </a>

              <a
                href="tel:+8801783532362"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-base shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>{t.hero.callAction}</span>
              </a>
            </div>

            {/* Trust Badges & Rating Stats Row */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              
              {/* Facebook / Google Social Proof Badge */}
              <a 
                href="https://www.facebook.com/thedentmaxsurgery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-sm">{t.hero.googleScore}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] text-brand-700 font-semibold block">
                    {t.hero.googleReviewsText} ↗
                  </span>
                </div>
              </a>

              {/* Happy Patients Metric */}
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex -space-x-2 overflow-hidden">
                  <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-brand-500 text-white text-xs flex items-center justify-center font-bold">😊</span>
                  <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-teal-500 text-white text-xs flex items-center justify-center font-bold">😁</span>
                  <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-cyan-500 text-white text-xs flex items-center justify-center font-bold">✨</span>
                </div>
                <div className="text-left">
                  <span className="font-extrabold text-slate-900 text-sm block leading-tight">
                    {t.hero.happyPatientsCount}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {t.hero.happyPatientsLabel}
                  </span>
                </div>
              </div>

            </div>

            {/* Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {t.hero.featurePills.map((pill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100/90 text-slate-700 text-xs font-semibold border border-slate-200/60 justify-center lg:justify-start"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span className="truncate">{pill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md">
              {/* Main Medical Imagery Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80" 
                  alt="Modern Dental and Facial Surgery Suite" 
                  className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-slate-950/85 text-white">
                  <div className="flex items-center gap-2 text-brand-300 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>State-of-the-Art Care</span>
                  </div>
                  <h2 className="font-bold text-lg leading-tight">
                    {lang === 'en' ? 'Advanced Operatory & Digital CBCT Unit' : 'উন্নত অপারেশন থিয়েটার ও থ্রিডি ডিজিটাল স্ক্যান'}
                  </h2>
                  <p className="text-xs text-slate-200 mt-1">
                    {lang === 'en' ? 'Class-B European Sterilization & 0% Pain Guarantee' : 'ইউরোপীয় ক্লাস-বি স্টেরিলাইজেশন ও ব্যথাহীন চিকিৎসার নিশ্চয়তা'}
                  </p>
                </div>
              </div>

              {/* Floating Reassurance Badge 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    {lang === 'en' ? 'Infection-Free' : 'জীবাণুমুক্তকরণ'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {lang === 'en' ? '100% Autoclaved' : 'শতভাগ অটোক্লেভড'}
                  </span>
                </div>
              </div>

              {/* Floating Reassurance Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    {lang === 'en' ? 'Surgical Success' : 'সফলতার হার'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {lang === 'en' ? '99.2% Clinical Precision' : '৯৯.২% নিখুঁত ফলাফল'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
