import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Anchor, 
  Zap, 
  ShieldAlert, 
  Activity, 
  Smile, 
  Sparkles, 
  UserCheck, 
  Droplets,
  CheckCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';

const iconMap = {
  Anchor,
  Zap,
  ShieldAlert,
  Activity,
  Smile,
  Sparkles,
  UserCheck,
  Droplets
};

export default function ServicesSection({ t, lang, onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {t.services.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const title = lang === 'en' ? service.titleEn : service.titleBn;
            const desc = lang === 'en' ? service.descEn : service.descBn;
            const tag = lang === 'en' ? service.tagEn : service.tagBn;
            const price = lang === 'en' ? service.priceEn : service.priceBn;
            const features = lang === 'en' ? service.featuresEn : service.featuresBn;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-7 rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${
                  service.highlight 
                    ? 'border-brand-400 ring-2 ring-brand-500/20 shadow-soft' 
                    : 'border-slate-200 hover:border-brand-300'
                }`}
              >
                {/* Top Badge */}
                {tag && (
                  <div className="absolute top-5 right-5">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      service.highlight 
                        ? 'bg-brand-600 text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {tag}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    {features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {lang === 'en' ? 'Fee Estimate' : 'খরচের ধারণা'}
                    </span>
                    <span className="text-sm font-extrabold text-brand-700">
                      {price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white font-bold text-xs transition-all cursor-pointer group"
                  >
                    <span>{lang === 'en' ? 'Book Slot' : 'বুক করুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Emergency Surgery Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              {lang === 'en' ? 'Emergency Care Available' : 'জরুরি চিকিৎসা সেবা'}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold">
              {lang === 'en' ? 'Facing Severe Pain, Broken Tooth or Jaw Trauma?' : 'তীব্র দাঁতের ব্যথা, ভাঙা দাঁত বা মুখে কোনো আঘাত?'}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              {lang === 'en' 
                ? 'Our oral maxillofacial surgeons provide same-day urgent care with instant pain relief protocol.'
                : 'আমাদের বিশেষজ্ঞ সার্জনগণ তাৎক্ষণিক পেইন-রিলিফ প্রোটোকল ও জরুরি চিকিৎসা প্রদানে প্রস্তুত।'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+8801783532362"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>{lang === 'en' ? 'Call Urgent Line: 01783-532362' : 'জরুরি কল: ০১৭৮৩-৫৩২৩৬২'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
