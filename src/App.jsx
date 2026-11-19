import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LanguageProvider } from './context/LanguageContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProductCategories from './components/ProductCategories';
import AboutSection from './components/AboutSection';
import BulkBusiness from './components/BulkBusiness';
import ProductShowcase from './components/ProductShowcase';
import CustomerFeedback from './components/CustomerFeedback';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnquiryModal from './components/EnquiryModal';
import InteractiveBubbles from './components/InteractiveBubbles';

gsap.registerPlugin(ScrollTrigger);

function MainContent() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    let lenis;
    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  const handleOpenEnquiry = (product = null) => {
    setSelectedProduct(product);
    setEnquiryModalOpen(true);
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryFilter(categoryId);
    const element = document.getElementById('showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FFB900] selection:text-slate-950 overflow-x-hidden w-full relative">
      <InteractiveBubbles />
      <TopBar />
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />
      <main className="flex-grow overflow-x-hidden w-full">
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
        <TrustBadges />
        <ProductCategories 
          onSelectCategory={handleSelectCategory}
          onOpenEnquiry={() => handleOpenEnquiry()} 
        />
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />
        <BulkBusiness onOpenEnquiry={handleOpenEnquiry} />
        <ProductShowcase 
          onOpenEnquiry={handleOpenEnquiry}
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategory={handleSelectCategory}
        />
        <CustomerFeedback />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />
      <FloatingWhatsApp />
      <EnquiryModal 
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          setSelectedProduct(null);
        }}
        prefilledProduct={selectedProduct}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
