import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const categoryThemes = {
  'washing-detergents': {
    bg: 'bg-[#EFF8FF]',
    hoverBg: 'hover:bg-[#E0F2FE]',
    border: 'border-blue-100',
    image: '/assets/prod-washing-liquid.jpg'
  },
  'dish-wash': {
    bg: 'bg-[#FFF1F2]',
    hoverBg: 'hover:bg-[#FFE4E6]',
    border: 'border-rose-100',
    image: '/assets/prod-dishwash.jpg'
  },
  'floor-cleaners': {
    bg: 'bg-[#F5F3FF]',
    hoverBg: 'hover:bg-[#EDE9FE]',
    border: 'border-purple-100',
    image: '/assets/prod-floor-cleaner.jpg'
  },
  'fabric-conditioners': {
    bg: 'bg-[#ECFDF5]',
    hoverBg: 'hover:bg-[#D1FAE5]',
    border: 'border-emerald-100',
    image: '/assets/prod-fabric-conditioner.jpg'
  },
  'raw-materials': {
    bg: 'bg-[#FFFBEB]',
    hoverBg: 'hover:bg-[#FEF3C7]',
    border: 'border-amber-100',
    image: '/assets/prod-raw-materials.jpg'
  },
  'perfumes-colours': {
    bg: 'bg-[#FAF5FF]',
    hoverBg: 'hover:bg-[#F3E8FF]',
    border: 'border-purple-100',
    image: '/assets/prod-fabric-conditioner.jpg'
  },
  'packing-kits': {
    bg: 'bg-[#F0FDF4]',
    hoverBg: 'hover:bg-[#DCFCE7]',
    border: 'border-teal-100',
    image: '/assets/prod-packing-kits.jpg'
  },
  'ready-to-use': {
    bg: 'bg-[#F8FAFC]',
    hoverBg: 'hover:bg-[#F1F5F9]',
    border: 'border-slate-200',
    image: '/assets/prod-floor-cleaner.jpg'
  }
};

export default function ProductCategories({ onSelectCategory }) {
  const { lang, t } = useLanguage();

  return (
    <section id="categories" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the reference UI */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
              {t.categories.title}
            </h2>
          </div>

          <div>
            <a
              href="#showcase"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors group"
            >
              <span>{t.categories.viewAll}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Responsive Grid of Pastel Category Cards matching the Reference UI */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.categories.items.map((cat, idx) => {
            const theme = categoryThemes[cat.id] || categoryThemes['washing-detergents'];

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className={`${theme.bg} ${theme.hoverBg} border ${theme.border} rounded-3xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xs hover:shadow-md`}
              >
                {/* Centered Product Image */}
                <div className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden mb-4 bg-white/70 flex items-center justify-center p-2 shadow-inner">
                  <img 
                    src={theme.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-106 transition-transform duration-500"
                  />
                </div>

                {/* Category Title with Arrow -> matching reference UI */}
                <div className="pt-1 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#102A43] group-hover:text-[#0879CE] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <ArrowRight className="w-3.5 h-3.5 text-[#102A43] group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
