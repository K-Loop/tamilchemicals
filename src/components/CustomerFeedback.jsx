import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CustomerFeedback() {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? t.feedback.items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === t.feedback.items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="feedback" className="py-20 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with whileInView */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#159447] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#159447]" />
              <span>{t.feedback.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              {t.feedback.title}
            </h2>
            <p className="text-sm text-slate-500 max-w-xl">
              {t.feedback.subtitle}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center space-x-2 mt-4 md:mt-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#102A43] hover:border-slate-400 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#102A43] hover:border-slate-400 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonials Grid with whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.feedback.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#102A43] text-[#FFB900] font-bold text-xs flex items-center justify-center shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102A43] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                  {item.verified}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
