import React, { useState } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Award, Clock, Stethoscope } from 'lucide-react';

export default function BeforeAfterSlider({ t, lang, onOpenBooking }) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const cases = t.beforeAfter.cases;
  const currentCase = cases[activeCaseIndex];

  // Case image pairs (aesthetic, medical before/after representations)
  const caseImages = [
    {
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80"
    },
    {
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80"
    },
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.beforeAfter.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.beforeAfter.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{t.beforeAfter.patientCaseLabel} 0{idx + 1}: {c.category}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-soft">
          
          {/* Left / Top: Interactive Before-After Image Viewer */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden select-none shadow-lg border-2 border-white bg-slate-900">
              
              {/* After Image (Background) */}
              <img
                src={caseImages[activeCaseIndex].after}
                alt="After Dental & Facial Treatment"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                {lang === 'en' ? 'After Treatment' : 'চিকিৎসার পরে'}
              </div>

              {/* Before Image (Clipped by slider position) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={caseImages[activeCaseIndex].before}
                  alt="Before Dental & Facial Treatment"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  {lang === 'en' ? 'Before Treatment' : 'চিকিৎসার পূর্বে'}
                </div>
              </div>

              {/* Divider Line & Circular Drag Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-2xl border-2 border-brand-500 flex items-center justify-center text-brand-600">
                  <MoveHorizontal className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              {/* Native Range Input over the entire image for seamless drag */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                aria-label="Before and after comparison slider"
              />
            </div>

            {/* Drag helper hint below */}
            <p className="text-center text-xs text-slate-500 mt-3 font-medium flex items-center justify-center gap-1.5">
              <MoveHorizontal className="w-4 h-4 text-brand-600" />
              <span>{t.beforeAfter.dragInstruction}</span>
            </p>
          </div>

          {/* Right: Case Details & Clinical Outcomes */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
                {currentCase.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2 leading-tight">
                {currentCase.title}
              </h3>
            </div>

            {/* Before vs After Cards */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wide block mb-1">
                  {lang === 'en' ? 'Initial Clinical Condition' : 'প্রাথমিক শারীরিক সমস্যা'}
                </span>
                <p className="text-xs sm:text-sm text-slate-600">
                  {currentCase.beforeDesc}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide block mb-1">
                  {lang === 'en' ? 'Restored Surgical & Aesthetic Result' : 'অর্জিত ফলাফল ও সুন্দর পরিবর্তন'}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {currentCase.afterDesc}
                </p>
              </div>
            </div>

            {/* Timeframe & Lead Surgeon */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{currentCase.timeframe}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Stethoscope className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="truncate">{currentCase.doctor}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              {lang === 'en' ? 'Get a Similar Smile Makeover' : 'আপনার স্মাইল মেকওভারের পরামর্শ নিন'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
