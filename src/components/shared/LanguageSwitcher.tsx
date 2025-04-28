import React, { useContext } from 'react';
import { Globe } from 'lucide-react';
import { LanguageContext } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 p-2 rounded-full transition-colors duration-200 focus:outline-none"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;