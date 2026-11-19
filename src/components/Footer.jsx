import React from 'react';
import { MapPin, Phone, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenEnquiry }) {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.products, href: '#categories' },
    { name: t.nav.bulkBusiness, href: '#bulk-business' },
    { name: t.nav.aboutUs, href: '#about' },
    { name: t.nav.customerFeedback, href: '#feedback' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const productLinks = [
    { nameEn: 'Washing Liquid Detergent', nameTa: 'வாஷிங் லிக்விட்', href: '#showcase' },
    { nameEn: 'Dishwash Gel & Cleaners', nameTa: 'டிஷ் வாஷ் ஜெல்', href: '#showcase' },
    { nameEn: 'Disinfectant Floor Cleaners', nameTa: 'ப்ளோர் கிளீனர்', href: '#showcase' },
    { nameEn: 'Fabric Conditioner & Perfumes', nameTa: 'ஃபேப்ரிக் கண்டிஷனர்', href: '#showcase' },
    { nameEn: 'Raw Materials (Acid Slurry, SLES)', nameTa: 'மூலப்பொருட்கள் (LABSA/SLES)', href: '#showcase' },
    { nameEn: 'Business Startup Packing Kits', nameTa: 'பேக்கிங் கிட்கள்', href: '#bulk-business' },
  ];

  return (
    <footer className="bg-[#102A43] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 shadow-md overflow-hidden shrink-0 border border-amber-300">
                <img
                  src="/assets/tamil-chemicals-logo.jpg"
                  alt="Tamil Chemicals Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {lang === 'ta' ? 'தமிழ் கெமிக்கல்ஸ்' : 'Tamil Chemicals'}
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  {lang === 'ta' ? 'மதுரை • தமிழ்நாடு' : 'Madurai, Tamil Nadu'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/tamil_chemicals_madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%86%E0%AE%AE%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B8%E0%AF%8D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4 text-red-500" />
              </a>
              <a
                href="https://wa.me/919150090912"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#159447] hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#159447]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#FFB900] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-[#FFB900] transition-colors"
                  >
                    {lang === 'ta' ? item.nameTa : item.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#FFB900] shrink-0 mt-0.5" />
                <span>Tamil Chemicals, Madurai, Tamil Nadu - 625001, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#159447] shrink-0" />
                <a href="tel:+919150090912" className="hover:text-white font-bold text-slate-200">
                  +91 91500 90912
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FFB900] hover:bg-[#E5A600] text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  {lang === 'ta' ? 'விலை வினவல் அனுப்ப' : 'Request Product Price'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Scroll-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400/90 font-medium">{t.footer.allIndia}</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
