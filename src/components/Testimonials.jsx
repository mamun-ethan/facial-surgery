import React from 'react';
import { reviewsData } from '../data/servicesData';
import { Star, CheckCircle2, Quote, Sparkles, MapPin } from 'lucide-react';

export default function Testimonials({ t, lang }) {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-emerald-600 fill-current" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => {
            const comment = lang === 'en' ? rev.commentEn : rev.commentBn;
            const treatment = lang === 'en' ? rev.treatmentEn : rev.treatmentBn;

            return (
              <div
                key={rev.id}
                className="flex flex-col justify-between p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Rating Stars & Verified Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t.testimonials.verified}</span>
                    </div>
                  </div>

                  {/* Treatment Pill */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-brand-700 bg-brand-100/70 px-3 py-1 rounded-lg">
                      {treatment}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{comment}"
                  </p>
                </div>

                {/* Patient Author Profile */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {rev.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{rev.location}</span>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    {rev.date}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.2 0 5.9 1.1 8.1 2.9l6-6C34.4 3.2 29.5 1 24 1 14.8 1 7 6.7 3.7 14.7l7 5.4C12.4 14 17.7 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9h.4z"/>
                <path fill="#FBBC05" d="M10.7 28.6A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-7-5.4A23.9 23.9 0 0 0 .5 24c0 3.9.9 7.5 2.6 10.7l7.6-6.1z"/>
                <path fill="#34A853" d="M24 46.5c5.4 0 10-1.8 13.3-4.8l-7.4-5.7c-1.8 1.2-4.1 2-6.9 2-6.3 0-11.6-4.2-13.5-10l-7.6 5.9C6.8 41.5 14.8 46.5 24 46.5z"/>
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                {lang === 'en' ? '5.0 Star Rated Quality Care & Happy Patients' : '৫.০ স্টার রেটিং ও রোগীদের আন্তরিক সন্তুষ্টি'}
              </span>
              <span className="text-xs text-slate-500">
                {lang === 'en' ? '100% genuine feedback from patients treated at our Ghatail clinic.' : 'আমাদের ঘাটাইল ক্লিনিকে চিকিৎসাপ্রাপ্ত সম্মানিত রোগীদের প্রকৃত মতামত।'}
              </span>
            </div>
          </div>

          <a
            href="https://www.facebook.com/thedentmaxsurgery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>{lang === 'en' ? 'View Facebook Page (845+ Followers)' : 'ফেসবুক পেজ দেখুন (৮৪৫+ ফলোয়ার)'}</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
