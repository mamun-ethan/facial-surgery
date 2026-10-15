import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Sparkles, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer({ t, lang, onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-glow">
                <img src="/logo.png" alt="Dental & Facial Surgery Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block leading-none">
                  {t.nav.brandName}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-brand-400 uppercase mt-0.5 block">
                  {t.nav.brandSub}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/thedentmaxsurgery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 transition-colors text-xs font-semibold shadow-sm"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current" />
                <span>Facebook Page (845+ Followers)</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#why" className="hover:text-brand-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#surgeons" className="hover:text-brand-400 transition-colors">{t.nav.surgeons}</a></li>
              <li><a href="#before-after" className="hover:text-brand-400 transition-colors">{t.nav.transformation}</a></li>
              <li><a href="#calculator" className="hover:text-brand-400 transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Specialized Services (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.servicesList}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{lang === 'en' ? 'Dental Implants' : 'ডেন্টাল ইমপ্ল্যান্ট'}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{lang === 'en' ? 'Maxillofacial Surgery' : 'ম্যাক্সিলোফেসিয়াল সার্জারি'}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{lang === 'en' ? 'Painless Root Canal' : 'ব্যথামুক্ত রুট ক্যানেল'}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{lang === 'en' ? 'Clear Aligners' : 'ক্লিয়ার এলাইনার'}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{lang === 'en' ? 'Smile Veneers' : 'স্মাইল ভিনিয়ার'}</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">{lang === 'en' ? 'Wisdom Tooth Surgery' : 'আক্কেল দাঁত সার্জারি'}</a></li>
            </ul>
          </div>

          {/* Emergency & Support (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.emergencyContact}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <a 
                href="tel:+8801783532362"
                className="flex items-center gap-2 text-rose-400 hover:text-rose-300 font-bold"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Hotline: 01783-532362</span>
              </a>

              <a 
                href="mailto:thedentmaxsurgery@gmail.com"
                className="flex items-center gap-2 hover:text-brand-400"
              >
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>thedentmaxsurgery@gmail.com</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Alam Shopping Complex (1st Floor), Bazar Road, Ghatail, Tangail - 1980</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                {t.nav.bookBtn}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-slate-600">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
}
