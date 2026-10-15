import React, { useState } from 'react';
import { translations } from './data/content';
import TopEmergencyBar from './components/TopEmergencyBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyPillars from './components/KeyPillars';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DoctorsSection from './components/DoctorsSection';
import TechAndSafety from './components/TechAndSafety';
import PricingEstimator from './components/PricingEstimator';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import MobileFloatingBar from './components/MobileFloatingBar';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('oral-cancer-screening');
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-fakhrul');

  const t = translations[lang];

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctorId(doctorId);
    setIsBookingOpen(true);
  };

  const handleBookWithEstimate = (selectedItemIds) => {
    if (selectedItemIds.length > 0) {
      setSelectedServiceId(selectedItemIds[0]);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
      {/* Sticky Navbar */}
      <Navbar 
        t={t} 
        lang={lang} 
        setLang={setLang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* 3. Hero Section */}
      <main>
        <Hero 
          t={t} 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 4. Four Core Pillars */}
        <KeyPillars 
          t={t} 
        />

        {/* 5. Comprehensive Services Grid */}
        <ServicesSection 
          t={t} 
          lang={lang} 
          onSelectService={handleSelectService} 
        />

        {/* 6. Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider 
          t={t} 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 7. Board-Certified Surgeons & Specialists */}
        <DoctorsSection 
          t={t} 
          lang={lang} 
          onSelectDoctor={handleSelectDoctor} 
        />

        {/* 8. Modern Technology & Class-B Sterilization Safety */}
        <TechAndSafety 
          t={t} 
          lang={lang} 
        />

        {/* 9. Interactive Treatment Cost & EMI Calculator */}
        <PricingEstimator 
          t={t} 
          lang={lang} 
          onBookWithEstimate={handleBookWithEstimate} 
        />

        {/* 10. Patient Stories & Google 5.0 Star Reviews */}
        <Testimonials 
          t={t} 
          lang={lang} 
        />

        {/* 11. Patient FAQs */}
        <FaqSection 
          t={t} 
          lang={lang} 
        />

        {/* 12. Clinic Location & Interactive Directions */}
        <LocationSection 
          t={t} 
          lang={lang} 
        />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer 
        t={t} 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* 14. Mobile Floating Quick-Dock */}
      <MobileFloatingBar 
        t={t} 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* 15. Priority Booking Consultation Modal */}
      <AppointmentModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        t={t}
        lang={lang}
        initialServiceId={selectedServiceId}
        initialDoctorId={selectedDoctorId}
      />

    </div>
  );
}
