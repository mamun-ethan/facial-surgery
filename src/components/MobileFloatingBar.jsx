import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileFloatingBar({ t, lang, onOpenBooking }) {
  return (
    <aside aria-label="Quick Action Toolbar" className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-2.5 px-4 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href="tel:+8801783532362"
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-600 mb-0.5" />
          <span className="text-[11px] font-bold">{t.mobileBar.call}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8801783532362?text=Hello%20Dental%20%26%20Facial%20Surgery%20Ghatail,%20I%20would%20like%20to%20consult%20Dr.%20Fakhrul%20Alam%20Munna."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5 fill-current" />
          <span className="text-[11px] font-bold">{t.mobileBar.whatsapp}</span>
        </a>

        {/* Instant Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.2] flex flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-md cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">{t.mobileBar.book}</span>
        </button>

      </div>
    </aside>
  );
}
