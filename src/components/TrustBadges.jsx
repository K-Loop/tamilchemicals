import React from 'react';
import { motion } from 'framer-motion';
import { Award, IndianRupee, Package, Truck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: Award, title: t.trust.badge1Title },
    { icon: IndianRupee, title: t.trust.badge2Title },
    { icon: Package, title: t.trust.badge3Title },
    { icon: Truck, title: t.trust.badge4Title },
    { icon: Headphones, title: t.trust.badge5Title }
  ];

  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-3xl lg:rounded-full shadow-lg border border-slate-100 py-4 px-5 sm:px-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2.5 min-w-0 justify-start"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFB900] text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-4 h-4 stroke-[2.4]" />
                </div>
                <span className="text-xs sm:text-[13px] font-extrabold text-[#102A43] leading-snug break-words">
                  {b.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
