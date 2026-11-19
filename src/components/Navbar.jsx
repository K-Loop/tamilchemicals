import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenEnquiry }) {
  const { lang, switchLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.products, href: '#categories', hasDropdown: true },
    { name: t.nav.bulkBusiness, href: '#bulk-business' },
    { name: t.nav.aboutUs, href: '#about' },
    { name: t.nav.customerFeedback, href: '#feedback' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const categoryHighlights = [
    { titleEn: 'Washing Detergents', titleTa: 'வாஷிங் டிடர்ஜெண்டுகள்', href: '#categories' },
    { titleEn: 'Dish Wash Liquids', titleTa: 'பாத்திரம் கழுவும் திரவம்', href: '#categories' },
    { titleEn: 'Floor Cleaners & Phenyl', titleTa: 'ப்ளோர் கிளீனர்', href: '#categories' },
    { titleEn: 'Raw Materials (LABSA/SLES)', titleTa: 'மூலப்பொருட்கள்', href: '#categories' },
    { titleEn: 'Fabric Conditioners', titleTa: 'ஃபேப்ரிக் கண்டிஷனர்', href: '#categories' },
    { titleEn: 'Startup Packing Kits', titleTa: 'பேக்கிங் கிட்கள்', href: '#bulk-business' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-100'
          : 'bg-white py-3 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo and Brand Title matching the Reference Layout */}
          <a href="#home" className="flex items-center space-x-2.5 shrink-0 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white overflow-hidden p-0.5 border border-amber-300 shadow-xs group-hover:scale-105 transition-transform">
              <img
                src="/assets/tamil-chemicals-logo.jpg"
                alt="Tamil Chemicals Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-[#102A43] tracking-tight leading-tight whitespace-nowrap">
                {lang === 'ta' ? 'தமிழ் கெமிக்கல்ஸ்' : 'Tamil Chemicals'}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                {lang === 'ta' ? 'மதுரை • தமிழ்நாடு' : 'Tamil Chemicals Madurai'}
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 min-w-0">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setProductsDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setProductsDropdown(false)}
              >
                <a
                  href={link.href}
                  className="px-2 2xl:px-3 py-1.5 text-xs 2xl:text-[13px] font-semibold text-[#102A43] hover:text-[#0879CE] rounded-lg transition-colors flex items-center space-x-0.5 hover:bg-slate-50 whitespace-nowrap"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        productsDropdown ? 'rotate-180 text-[#0879CE]' : 'text-slate-400'
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu for Products */}
                <AnimatePresence>
                  {link.hasDropdown && productsDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50"
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                        {lang === 'ta' ? 'தயாரிப்பு வகைகள்' : 'Product Categories'}
                      </div>
                      <div className="space-y-1">
                        {categoryHighlights.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => setProductsDropdown(false)}
                            className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#102A43] hover:bg-amber-50/70 rounded-xl transition-colors group"
                          >
                            <span>{lang === 'ta' ? item.titleTa : item.titleEn}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FFB900] group-hover:translate-x-0.5 transition-all" />
                          </a>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-100">
                        <a
                          href="#categories"
                          onClick={() => setProductsDropdown(false)}
                          className="block text-center text-xs font-bold text-[#0879CE] hover:underline py-1"
                        >
                          {t.categories.viewAll} →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Action Items matching reference UI */}
          <div className="hidden lg:flex items-center space-x-2 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 shrink-0">
              <button
                type="button"
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLanguage('ta')}
                className={`px-2 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                  lang === 'ta'
                    ? 'bg-[#FFB900] text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                தமிழ்
              </button>
            </div>

            {/* Direct Phone Button matching the reference UI yellow pill button */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+919150090912"
              className="bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-extrabold px-3 py-2 rounded-full text-xs tracking-wide shadow-xs flex items-center space-x-1.5 cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950 shrink-0" />
              <span>+91 91500 90912</span>
            </motion.a>

            {/* Green Circular WhatsApp Button matching the reference UI */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              href="https://wa.me/919150090912?text=Hello%20Tamil%20Chemicals,%20I%20would%20like%20to%20enquire%20about%20cleaning%20products%20and%20raw%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#159447] hover:bg-[#12803c] text-white flex items-center justify-center shadow-xs transition-colors shrink-0"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </motion.a>
          </div>

          {/* Mobile & Tablet Toggle */}
          <div className="flex items-center space-x-2 xl:hidden shrink-0">
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 lg:hidden">
              <button
                type="button"
                onClick={() => switchLanguage('en')}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full transition-all ${
                  lang === 'en' ? 'bg-[#102A43] text-white' : 'text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLanguage('ta')}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full transition-all ${
                  lang === 'ta' ? 'bg-[#FFB900] text-slate-950' : 'text-slate-600'
                }`}
              >
                தமிழ்
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-amber-50 hover:text-[#102A43] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href="tel:+919150090912"
                className="flex items-center justify-center space-x-1.5 py-2.5 rounded-full bg-[#FFB900] text-slate-950 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/919150090912"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-2.5 rounded-full bg-[#159447] text-white text-xs font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
