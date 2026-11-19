import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, PhoneCall, Package, FlaskRound as Flask, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BulkBusiness({ onOpenEnquiry }) {
  const { lang, t } = useLanguage();

  return (
    <section id="bulk-business" className="py-24 bg-[#102A43] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFB900]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0879CE]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with whileInView */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-[#FFB900]/40 text-xs font-bold text-[#FFB900] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.bulk.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.bulk.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.bulk.subtitle}
          </p>
        </motion.div>

        {/* 3 Main Feature Cards with whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Raw Materials */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 hover:border-[#FFB900]/60 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FFB900] text-slate-950 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20">
                <Flask className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFB900] transition-colors">
                {t.bulk.card1.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.bulk.card1.desc}
              </p>
              <div className="space-y-2.5">
                {t.bulk.card1.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB900] shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEnquiry({ nameEn: 'Raw Materials & Chemical Bases', nameTa: 'மூலப்பொருட்கள்' })}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#FFB900] hover:text-slate-950 text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{lang === 'ta' ? 'மூலப்பொருள் கோரிக்கை' : 'Request Raw Materials'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Ready-to-Use Products */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 hover:border-[#FFB900]/60 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between relative"
          >
            <div className="absolute -top-3 right-8 bg-[#159447] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
              {lang === 'ta' ? 'அதிக லாபம்' : 'High Margins'}
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0879CE] text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFB900] transition-colors">
                {t.bulk.card2.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.bulk.card2.desc}
              </p>
              <div className="space-y-2.5">
                {t.bulk.card2.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEnquiry({ nameEn: 'Ready-to-Use Resale Products', nameTa: 'உடனடி பயன்பாட்டு தயாரிப்புகள்' })}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#FFB900] hover:text-slate-950 text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{lang === 'ta' ? 'மறுவிற்பனை வினவல்' : 'Reseller Enquiry'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Packing Kits */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 hover:border-[#FFB900]/60 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#159447] text-white flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                <Package className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFB900] transition-colors">
                {t.bulk.card3.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.bulk.card3.desc}
              </p>
              <div className="space-y-2.5">
                {t.bulk.card3.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEnquiry({ nameEn: 'Complete Packing Kit & Bottles', nameTa: 'பேக்கிங் கிட்கள்' })}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#FFB900] hover:text-slate-950 text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{lang === 'ta' ? 'பேக்கிங் கிட் பெற' : 'Get Starter Kit'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Big Bottom Action Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-400/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'ta' ? 'புதிய தொழில் தொடங்க வழிகாட்டல் வேண்டுமா?' : 'Looking to launch your own brand in 2026?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {lang === 'ta' ? 'மூலப்பொருட்கள் விகிதம், கலவை முறைகள் மற்றும் ஆரம்ப முதலீடு குறித்த முழு விவரங்களை எங்களிடம் நேரடியாக கேட்டு அறியுங்கள்.' : 'Get complete formula mixing guidelines, minimum order quantity details, and pricing sheets directly on WhatsApp.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenEnquiry({ nameEn: 'New Business Startup Consultation', nameTa: 'புதிய தொழில் தொடங்குதல்' })}
              className="bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-black px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer text-sm whitespace-nowrap"
            >
              {t.bulk.ctaText}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+919150090912"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-4 rounded-xl transition-all text-xs flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FFB900]" />
              <span>+91 91500 90912</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
