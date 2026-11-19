import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { productsData } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export default function ProductShowcase({ onOpenEnquiry, selectedCategoryFilter, onSelectCategory }) {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(selectedCategoryFilter || 'all');

  const filterTabs = [
    { id: 'all', labelEn: 'All Products', labelTa: 'அனைத்தும்' },
    { id: 'washing-detergents', labelEn: 'Washing Detergents', labelTa: 'வாஷிங் திரவங்கள்' },
    { id: 'dish-wash', labelEn: 'Dish Wash', labelTa: 'டிஷ் வாஷ்' },
    { id: 'floor-cleaners', labelEn: 'Floor Cleaners', labelTa: 'ப்ளோர் கிளீனர்' },
    { id: 'fabric-conditioners', labelEn: 'Fabric Care', labelTa: 'துணி மென்மை' },
    { id: 'raw-materials', labelEn: 'Raw Materials', labelTa: 'மூலப்பொருட்கள்' },
    { id: 'packing-kits', labelEn: 'Packing Kits', labelTa: 'பேக்கிங் கிட்கள்' },
  ];

  const filteredProducts = activeTab === 'all' 
    ? productsData 
    : productsData.filter((p) => p.categoryId === activeTab);

  return (
    <section id="showcase" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with whileInView */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#FFB900] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FFB900]"></span>
            <span className="text-[#102A43]">{lang === 'ta' ? 'அனைத்து தயாரிப்புகள்' : 'Catalog Portfolio'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.showcase.title}
          </h2>
          <p className="text-sm text-slate-500">
            {t.showcase.subtitle}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#102A43] text-white shadow-md shadow-slate-900/10'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'ta' ? tab.labelTa : tab.labelEn}
            </motion.button>
          ))}
        </div>

        {/* Products Grid with Framer Motion AnimatePresence & whileInView */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative h-60 bg-slate-50 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.nameEn}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />
                    
                    {/* Category Pill */}
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#102A43] shadow-xs">
                      {lang === 'ta' ? prod.categoryTa : prod.categoryEn}
                    </span>

                    {/* Badge */}
                    <span className="absolute top-4 right-4 bg-[#FFB900] text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase shadow-xs">
                      {lang === 'ta' ? prod.badgeTa : prod.badgeEn}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#0879CE] transition-colors leading-snug">
                      {lang === 'ta' ? prod.nameTa : prod.nameEn}
                    </h3>

                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                      {lang === 'ta' ? prod.descTa : prod.descEn}
                    </p>

                    {/* Packing Sizes Available */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-700 block mb-2">
                        {lang === 'ta' ? 'கிடைக்கும் அளவுகள்:' : 'Available Pack Sizes:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {prod.packSizes.map((size, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-600 border border-slate-200/60"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenEnquiry(prod)}
                    className="w-full bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center space-x-2 shadow-xs group-hover:shadow cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.showcase.enquireBtn}</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note about genuine pricing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between flex-wrap gap-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB900] shrink-0"></span>
            <span>
              {lang === 'ta' 
                ? 'மொத்த கொள்முதல் விலைகள் மற்றும் ஆர்டர் அளவுகளுக்கு வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ளவும்.'
                : 'For factory wholesale pricing, minimum order quantities, and custom packaging, reach out directly.'}
            </span>
          </div>
          <button
            onClick={() => onOpenEnquiry()}
            className="text-xs font-bold text-[#102A43] hover:text-[#0879CE] underline cursor-pointer"
          >
            {t.showcase.enquireBtn} →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
