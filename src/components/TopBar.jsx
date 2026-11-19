import React from 'react';
import { MapPin, Truck, Phone } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#102A43] text-slate-200 text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-white/10 hidden lg:block select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
          <div className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#FFB900] shrink-0" />
            <span className="whitespace-nowrap">{t.topBar.location}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors">
            <Truck className="w-3.5 h-3.5 text-[#FFB900] shrink-0" />
            <span className="font-medium text-amber-200 whitespace-nowrap">{t.topBar.dispatch}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-5 shrink-0">
          <a
            href="https://www.youtube.com/@%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%86%E0%AE%AE%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B8%E0%AF%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-slate-300 hover:text-red-400 transition-colors whitespace-nowrap"
          >
            <YoutubeIcon className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span className="hidden xl:inline">{t.topBar.youtube}</span>
            <span className="xl:hidden">YouTube</span>
          </a>
          <a
            href="https://www.instagram.com/tamil_chemicals_madurai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-slate-300 hover:text-pink-400 transition-colors whitespace-nowrap"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
            <span>tamil_chemicals_madurai</span>
          </a>
          <a
            href="tel:+919150090912"
            className="flex items-center space-x-1 text-[#FFB900] font-semibold hover:text-amber-300 transition-colors pl-2 border-l border-slate-700 whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-[#FFB900] shrink-0" />
            <span>+91 91500 90912</span>
          </a>
        </div>
      </div>
    </div>
  );
}
