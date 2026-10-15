import React from 'react';
import { doctorsData } from '../data/servicesData';
import { Award, Calendar, CheckCircle2, Clock, Sparkles, Stethoscope, UserCheck } from 'lucide-react';

export default function DoctorsSection({ t, lang, onSelectDoctor }) {
  return (
    <section id="surgeons" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.surgeons.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.surgeons.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.surgeons.subtitle}
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.map((doc) => {
            const name = lang === 'en' ? doc.nameEn : doc.nameBn;
            const title = lang === 'en' ? doc.titleEn : doc.titleBn;
            const degrees = lang === 'en' ? doc.degreesEn : doc.degreesBn;
            const exp = lang === 'en' ? doc.experienceEn : doc.experienceBn;
            const specialty = lang === 'en' ? doc.specialtyEn : doc.specialtyBn;
            const availability = lang === 'en' ? doc.availabilityEn : doc.availabilityBn;

            return (
              <div
                key={doc.id}
                className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image & Experience Badge Header */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={doc.avatar}
                    alt={name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-md">
                      <Award className="w-3.5 h-3.5" />
                      <span>{exp}</span>
                    </span>
                  </div>

                  {/* Name Overlay over image base */}
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 p-4 text-white">
                    <h3 className="text-xl font-extrabold leading-tight">
                      {name}
                    </h3>
                    <p className="text-xs text-brand-300 font-semibold mt-0.5">
                      {title}
                    </p>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Degrees & Qualifications */}
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                        {lang === 'en' ? 'Credentials & Fellowships' : 'ডিগ্রি ও উচ্চতর প্রশিক্ষণ'}
                      </span>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {degrees}
                      </p>
                    </div>

                    {/* Core Specialty Focus */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider block mb-1">
                        {lang === 'en' ? 'Clinical Focus' : 'চিকিৎসা ক্ষেত্র'}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {specialty}
                      </p>
                    </div>
                  </div>

                  {/* Visiting Hours & CTA */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                      <span className="font-medium">{availability}</span>
                    </div>

                    <button
                      onClick={() => onSelectDoctor(doc.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.surgeons.consultBtn}</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
