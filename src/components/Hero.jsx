import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Box, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenEnquiry }) {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24 bg-gradient-to-br from-[#F8FBFF] via-white to-[#FFF9EE]">
      {/* Background Yellow Curved Decorative Shape matching the reference design */}
      <div 
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block overflow-hidden z-0"
      >
        <div 
          className="w-[120%] h-[120%] -mr-20 -mt-10 rounded-bl-[160px] bg-gradient-to-bl from-[#FFB900]/25 via-[#FFB900]/10 to-transparent"
        />
      </div>

      {/* Floating subtle soap bubbles */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[12%] w-7 h-7 rounded-full border border-sky-300/50 bg-sky-200/20 backdrop-blur-xs pointer-events-none z-10"
      />
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-36 right-[22%] w-11 h-11 rounded-full border border-amber-300/50 bg-amber-200/20 backdrop-blur-xs pointer-events-none z-10"
      />
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-28 left-[45%] w-6 h-6 rounded-full border border-blue-300/40 bg-blue-100/30 backdrop-blur-xs pointer-events-none z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Tag Pill with dots matching reference */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB900]"></span>
              <span>{lang === 'ta' ? 'வீட்டு பராமரிப்பு' : 'Home Care'}</span>
              <span className="text-slate-300">•</span>
              <span>{lang === 'ta' ? 'துப்புரவு பொருட்கள்' : 'Cleaning Products'}</span>
              <span className="text-slate-300">•</span>
              <span>{lang === 'ta' ? 'மூலப்பொருட்கள்' : 'Raw Materials'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#102A43] leading-[1.2] tracking-tight">
              {t.hero.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons matching the reference UI */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#categories"
                className="bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center space-x-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{t.hero.viewProducts}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenEnquiry()}
                className="bg-white hover:bg-slate-50 text-[#102A43] font-bold px-7 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center space-x-2.5 cursor-pointer"
              >
                <Box className="w-4 h-4 text-[#0879CE]" />
                <span>{t.hero.bulkEnquiry}</span>
              </motion.button>
            </div>

            {/* Carousel Dots Indicator as shown in reference design */}
            <div className="pt-2 flex items-center space-x-2">
              <span className="w-6 h-2 rounded-full bg-[#FFB900]"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            </div>
          </motion.div>

          {/* Right Column: Seamless Product Lineup Showcase (No overlapping text!) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Product Showcase Card with Clean Border and Soft Shadow */}
              <div className="relative rounded-3xl overflow-hidden bg-white/95 p-2 sm:p-3 shadow-xl border border-amber-100/80">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50/50 to-white">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    src="/assets/hero-products.jpg"
                    alt="Tamil Chemicals Home Care Cleaning Products Range"
                    className="w-full h-auto object-cover object-center max-h-[420px] sm:max-h-[460px] rounded-2xl"
                  />
                </div>

                {/* Clean Floating Badge Top Right - Out of text collision area */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-5 right-5 bg-[#102A43]/90 text-white backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/10 hidden sm:flex items-center space-x-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div className="text-right">
                    <div className="text-[11px] font-bold text-amber-300 leading-tight">
                      {lang === 'ta' ? 'இந்தியா முழுவதும்' : 'Pan-India Despatch'}
                    </div>
                    <div className="text-[10px] text-slate-300">
                      {lang === 'ta' ? 'தினசரி பார்சல் சேவை' : 'Daily Parcel Dispatch'}
                    </div>
                  </div>
                </motion.div>

                {/* Clean Floating Badge Bottom Left - Positioned cleanly without overlapping any text */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 flex items-center space-x-2.5 max-w-[210px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#FFB900]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {lang === 'ta' ? '100% தூய தரம்' : 'Tested Quality'}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {lang === 'ta' ? 'உயர் அடர்த்தி ஃபார்முலா' : 'High Active Matter'}
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
