import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsApp() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center group">
      <div className="hidden sm:block mr-2 px-3 py-1.5 rounded-xl bg-white shadow-lg border border-slate-100 text-xs font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {lang === 'ta' ? 'வாட்ஸ்அப்பில் பேசவும்' : 'Chat with Tamil Chemicals'}
      </div>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        href="https://wa.me/919150090912?text=Hello%20Tamil%20Chemicals,%20I%20would%20like%20to%20know%20more%20about%20your%20cleaning%20products%20and%20raw%20materials."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#159447] hover:bg-[#12803c] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-colors relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full border-2 border-white"></span>
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
