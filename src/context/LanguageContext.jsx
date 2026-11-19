import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Requirement: Default language must be English unless previously saved
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('tamil_chemicals_lang');
      return saved === 'ta' ? 'ta' : 'en';
    } catch {
      return 'en';
    }
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ta' : 'en';
      try {
        localStorage.setItem('tamil_chemicals_lang', next);
      } catch (e) {
        console.error('Failed to save language in localStorage', e);
      }
      return next;
    });
  };

  const switchLanguage = (targetLang) => {
    if (targetLang === 'en' || targetLang === 'ta') {
      setLang(targetLang);
      try {
        localStorage.setItem('tamil_chemicals_lang', targetLang);
      } catch (e) {
        console.error('Failed to save language in localStorage', e);
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ta') {
      document.body.classList.add('tamil-font');
    } else {
      document.body.classList.remove('tamil-font');
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
