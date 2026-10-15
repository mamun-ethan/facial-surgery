import React from 'react';
import { ShieldCheck, Stethoscope, Cpu, Sparkles } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Stethoscope: Stethoscope,
  Cpu: Cpu,
  Sparkles: Sparkles
};

export default function KeyPillars({ t }) {
  return (
    <section id="why" className="py-12 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={pillar.id}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                  {pillar.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
