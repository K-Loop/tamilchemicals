import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Layers, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection({ onOpenEnquiry }) {
  const { lang, t } = useLanguage();

  const featureCards = [
    {
      titleEn: "Home Care Products",
      titleTa: "வீட்டு உபயோக பொருட்கள்",
      icon: FlaskConical
    },
    {
      titleEn: "Raw Materials Supplier",
      titleTa: "மூலப்பொருள் விநியோகஸ்தர்",
      icon: Layers
    },
    {
      titleEn: "Reseller & Bulk Support",
      titleTa: "மறுவிற்பனையாளர் ஆதரவு",
      icon: HeartHandshake
    },
    {
      titleEn: "Trusted by 1000+ Customers",
      titleTa: "1000+ வாடிக்கையாளர்கள்",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Authentic Store Photograph matching reference */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <img
                src="/assets/store-interior.jpg"
                alt="Tamil Chemicals Madurai Store Interior"
                className="w-full h-auto object-cover max-h-[420px] rounded-3xl hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right: Story and 4 Cream Feature Cards matching reference */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.about.p1}
            </p>

            {/* 4 Feature Cards in Cream/Beige tone matching reference */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {featureCards.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl bg-[#FFFDF5] border border-amber-200/70 shadow-xs flex flex-col items-center text-center justify-center space-y-2.5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-100/60 text-[#102A43] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-900" />
                    </div>
                    <span className="text-xs font-bold text-[#102A43] leading-snug">
                      {lang === 'ta' ? feat.titleTa : feat.titleEn}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Enquiry Trigger Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="bg-[#102A43] hover:bg-[#1a3d5e] text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-all cursor-pointer text-xs sm:text-sm active:scale-95"
              >
                {lang === 'ta' ? 'எங்களை தொடர்பு கொள்ள' : 'Contact Tamil Chemicals'}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
