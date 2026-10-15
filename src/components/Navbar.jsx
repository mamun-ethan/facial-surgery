import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Globe,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Smile,
  Calculator,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
  Award,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ t, lang, setLang, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navLinks = [
    { label: t.nav.about, href: "#why", icon: ShieldCheck, badge: null },
    { label: t.nav.services, href: "#services", icon: Stethoscope, hasSubmenu: true },
    { label: t.nav.surgeons, href: "#surgeons", icon: Award, badge: lang === 'en' ? 'FCPS/MS' : 'বিশেষজ্ঞ' },
    { label: t.nav.transformation, href: "#before-after", icon: Smile, badge: lang === 'en' ? 'Live Cases' : 'প্রমাণ' },
    { label: t.nav.pricing, href: "#calculator", icon: Calculator, badge: '0% EMI' },
    { label: t.nav.reviews, href: "#reviews", icon: Sparkles, badge: '5.0 ★' },
    { label: t.nav.faq, href: "#faq", icon: Sparkles, badge: null },
    { label: t.nav.contact, href: "#location", icon: MapPin, badge: lang === 'en' ? 'Ghatail' : 'ঘাটাইল' }
  ];

  const quickServices = [
    { name: lang === 'en' ? "Swiss Dental Implants" : "সুইস ডেন্টাল ইমপ্ল্যান্ট", href: "#services", icon: "🔩" },
    { name: lang === 'en' ? "Oral Cancer Screening" : "মুখের ঘা ও ক্যান্সার নির্ণয়", href: "#services", icon: "🛡️" },
    { name: lang === 'en' ? "Painless Root Canal (RCT)" : "ব্যথামুক্ত রুট ক্যানেল", href: "#services", icon: "🌱" },
    { name: lang === 'en' ? "Oral & Facial Surgery" : "ওরাল ও ফেসিয়াল সার্জারি", href: "#services", icon: "🩺" },
    { name: lang === 'en' ? "Clear Aligners & Braces" : "ক্লিয়ার এলাইনার ও ব্রেসেস", href: "#services", icon: "✨" },
    { name: lang === 'en' ? "Surgical Wisdom Extraction" : "সার্জিক্যাল আক্কেল দাঁত", href: "#services", icon: "🦷" },
    { name: lang === 'en' ? "Smile Makeover & Veneers" : "স্মাইল মেকওভার ও ভিনিয়ার", href: "#services", icon: "💎" }
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' 
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo & Clinic Name */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white p-1 border border-teal-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <img src="/logo.png" alt="Dental & Facial Surgery Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight text-slate-900 leading-none">
                {lang === 'en' ? 'Dental & Facial Surgery' : 'ডেন্টাল এন্ড ফেসিয়াল সার্জারি'}
              </span>
            </a>

            {/* Right: Language Switcher + Hamburger Menu (Call & Booking buttons removed as requested) */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Language Switcher */}
              <button
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200/80 transition-all cursor-pointer"
                title="Switch Language / ভাষা পরিবর্তন"
              >
                <Globe className="w-4 h-4 text-brand-600" />
                <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
              </button>

              {/* Hamburger Menu Toggle Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Full Menu"
                className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-brand-600 text-white transition-all cursor-pointer shadow-sm group"
              >
                <Menu className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Menu' : 'মেনু'}
                </span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Full Navigation Drawer / Overlay for Desktop & Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
          
          {/* Dimmed Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sliding Panel from Right */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
              
              {/* Drawer Header */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shrink-0 shadow-md">
                    <img src="/logo.png" alt="Dental & Facial Surgery Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg leading-tight text-white">{t.nav.brandName}</h3>
                    <p className="text-[10px] tracking-widest text-brand-400 font-bold uppercase">{t.nav.brandSub}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Language Switcher inside Drawer */}
                  <button
                    onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-brand-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
                  </button>

                  {/* Close Drawer Button */}
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Items List */}
              <div className="p-6 space-y-6 flex-1">
                
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    {lang === 'en' ? 'Explore Clinic & Treatments' : 'চিকিৎসা ও ক্লিনিক তথ্য'}
                  </span>

                  <div className="space-y-1.5">
                    {navLinks.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx}>
                          <a
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between p-3 rounded-2xl hover:bg-brand-50/80 text-slate-800 hover:text-brand-800 transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-brand-900">
                                {item.label}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800">
                                  {item.badge}
                                </span>
                              )}
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-brand-600 transition-all" />
                            </div>
                          </a>

                          {/* Quick Services submenu list right under services */}
                          {item.hasSubmenu && (
                            <div className="ml-11 my-1 p-2 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase">
                                {lang === 'en' ? 'Specialized Treatments' : 'বিশেষায়িত সেবাসমূহ'}
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                {quickServices.map((svc, sIdx) => (
                                  <a
                                    key={sIdx}
                                    href={svc.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-white text-xs font-medium text-slate-700 hover:text-brand-700 transition-colors"
                                  >
                                    <span>{svc.icon}</span>
                                    <span className="truncate">{svc.name}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Direct Patient Outreach Box */}
                <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-3 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                      {lang === 'en' ? 'Patient Concierge & Emergency' : 'জরুরি রোগী সেবা'}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                  </div>

                  <a 
                    href="tel:+8801783532362"
                    className="flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-white hover:text-brand-200 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>+880 1783-532362</span>
                  </a>

                  <p className="text-xs text-slate-300">
                    {lang === 'en' 
                      ? 'Alam Shopping Complex (1st Floor), Bazar Road, Ghatail, Tangail.' 
                      : 'আলম শপিং কমপ্লেক্স (১ম তলা), বাজার রোড, ঘাটাইল, টাঙ্গাইল।'}
                  </p>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        onOpenBooking();
                      }}
                      className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      {t.nav.bookBtn}
                    </button>

                    <a
                      href="https://wa.me/8801783532362?text=Hello%20Dental%20%26%20Facial%20Surgery%20Ghatail,%20I%20would%20like%20to%20consult%20Dr.%20Fakhrul%20Alam%20Munna."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{lang === 'en' ? 'WhatsApp Doctor Chat' : 'হোয়াটসঅ্যাপে পরামর্শ'}</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-400">
                <span>{lang === 'en' ? 'Certified Oral Surgery & Digital Dentistry' : 'আন্তর্জাতিক মানের ডেন্টাল ও ফেসিয়াল সার্জারি সেন্টার'}</span>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
