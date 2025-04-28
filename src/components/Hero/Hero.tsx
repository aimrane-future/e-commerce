import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <section 
      id="hero" 
      className={`relative pt-20 min-h-screen flex items-center ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 z-0"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              {t('heroSubtitle')}
            </p>
            
            <div className="pt-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              >
                {t('ctaButton')}
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Aimrane Bara, e-commerce stock management expert"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h2 className="text-white text-2xl font-bold font-poppins">Aimrane Bara</h2>
                  <p className="text-white/90">E-commerce Stock Management Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center animate-bounce">
          <Link
            to="problem"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-primary-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;