import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

const videoThumbnails = [
  '/assets/prod-washing-liquid.jpg',
  '/assets/prod-packing-kits.jpg',
  '/assets/prod-dishwash.jpg'
];

export default function SocialSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with whileInView */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#FFB900] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FFB900]"></span>
            <span className="text-[#102A43]">{t.social.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.social.title}
          </h2>
          <p className="text-sm text-slate-500">
            {t.social.subtitle}
          </p>
        </motion.div>

        {/* 3 Video Cards with whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.social.videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={videoThumbnails[idx] || '/assets/hero-products.jpg'}
                  alt={vid.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-106 group-hover:opacity-95 transition-all duration-500"
                />
                
                {/* Play Button Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  className="absolute w-14 h-14 rounded-full bg-[#FFB900] text-slate-950 flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                </motion.div>

                {/* Badge Tag */}
                <span className="absolute top-3 left-3 bg-[#102A43]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {vid.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#0879CE] transition-colors leading-snug">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {vid.desc}
                </p>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href="https://www.instagram.com/tamil_chemicals_madurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0879CE] hover:underline"
                >
                  <span>{lang === 'ta' ? 'வீடியோவை பார்க்க' : 'Watch on Instagram'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Channel Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.instagram.com/tamil_chemicals_madurai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold px-6 py-3.5 rounded-xl shadow-md text-xs sm:text-sm flex items-center space-x-2 transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>{t.social.instaBtn} (@tamil_chemicals_madurai)</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.youtube.com/@%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%86%E0%AE%AE%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B8%E0%AF%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md text-xs sm:text-sm flex items-center space-x-2 transition-all"
          >
            <YoutubeIcon className="w-4 h-4 text-white" />
            <span>{t.social.youtubeBtn}</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
