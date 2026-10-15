import React, { useState } from 'react';
import { faqsData } from '../data/servicesData';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';

export default function FaqSection({ t, lang }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = lang === 'en' ? faq.qEn : faq.qBn;
            const answer = lang === 'en' ? faq.aEn : faq.aBn;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-brand-300 shadow-md' 
                    : 'bg-white hover:bg-slate-50/80 border-slate-200/80'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-brand-700' : 'text-slate-900'
                  }`}>
                    {question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-100 text-brand-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Specialist WhatsApp Contact Card */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-emerald-950">
              {t.faq.stillQuestions}
            </h3>
            <p className="text-xs text-emerald-800 mt-0.5">
              {lang === 'en' ? 'Our patient coordinator responds in under 5 minutes.' : 'আমাদের পেশেন্ট কো-অর্ডিনেটর দ্রুত উত্তর দেবেন।'}
            </p>
          </div>

          <a
            href="https://wa.me/8801783532362?text=Hello%20Dr.%20Fakhrul%20Alam%20Munna,%20I%20have%20a%20question%20regarding%20dental%20or%20oral%20treatment%20at%20your%20Ghatail%20clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.faq.askSurgeon}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
