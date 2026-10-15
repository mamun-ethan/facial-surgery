import React, { useState } from 'react';
import { Calculator, CheckSquare, Square, Sparkles, CreditCard, ShieldAlert, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function PricingEstimator({ t, lang, onBookWithEstimate }) {
  const [selectedItems, setSelectedItems] = useState(['implants', 'scaling-polishing']);
  const [emiMonths, setEmiMonths] = useState(6);

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter(item => item !== id));
      }
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const totalMin = selectedItems.reduce((acc, currId) => {
    const item = servicesData.find(s => s.id === currId);
    return acc + (item ? item.priceVal : 0);
  }, 0);

  const totalMax = Math.round(totalMin * 1.25);
  const monthlyEmi = Math.round(totalMin / emiMonths);

  return (
    <section id="calculator" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.calculator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Treatment Selection Checklist */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              {t.calculator.selectTreatments}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesData.map((svc) => {
                const isSelected = selectedItems.includes(svc.id);
                const title = lang === 'en' ? svc.titleEn : svc.titleBn;
                const price = lang === 'en' ? svc.priceEn : svc.priceBn;

                return (
                  <div
                    key={svc.id}
                    onClick={() => toggleItem(svc.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                      isSelected 
                        ? 'bg-brand-50/80 border-brand-500 shadow-sm' 
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-600'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-brand-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-xs sm:text-sm font-bold block truncate ${
                        isSelected ? 'text-brand-900' : 'text-slate-800'
                      }`}>
                        {title}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
                        {price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-400 mt-4 italic">
              * {t.calculator.includeConsultation}
            </p>
          </div>

          {/* Right: Calculation Summary & EMI Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-700 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  {lang === 'en' ? 'Selected Treatments' : 'নির্বাচিত সেবা'}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 font-bold">
                  {selectedItems.length} {lang === 'en' ? 'Item(s)' : 'টি সেবা'}
                </span>
              </div>

              {/* Total Estimated Cost */}
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {t.calculator.estimatedRange}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ৳{totalMin.toLocaleString()} – ৳{totalMax.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* EMI Tenure Selector */}
              <div className="pt-4 border-t border-slate-700/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-brand-400" />
                    <span>{lang === 'en' ? '0% EMI Tenure:' : '০% কিস্তির মেয়াদ:'}</span>
                  </span>
                  <div className="flex gap-1.5">
                    {[3, 6, 12].map((m) => (
                      <button
                        key={m}
                        onClick={() => setEmiMonths(m)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          emiMonths === m 
                            ? 'bg-brand-500 text-white shadow-sm' 
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {m}M
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-slate-300">
                    {lang === 'en' ? `Monthly Installment (${emiMonths} mos):` : `মাসিক কিস্তি (${emiMonths} মাস):`}
                  </span>
                  <span className="text-base font-extrabold text-emerald-400">
                    ৳{monthlyEmi.toLocaleString()} / mo
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {t.calculator.emiNote}
              </p>
            </div>

            {/* Lock in CTA */}
            <div className="pt-6 mt-6 border-t border-slate-700">
              <button
                onClick={() => onBookWithEstimate(selectedItems)}
                className="w-full py-3.5 px-5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.calculator.bookEstimate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
