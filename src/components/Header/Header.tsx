import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DarkModeToggle from '../shared/DarkModeToggle';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Header = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: t('home'), to: 'hero' },
    { name: t('problem'), to: 'problem' },
    { name: t('solution'), to: 'solution' },
    { name: t('results'), to: 'results' },
    { name: t('testimonials'), to: 'testimonials' },
    { name: t('about'), to: 'about' },
    { name: t('contact'), to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `${darkMode ? 'bg-neutral-900/95 shadow-md' : 'bg-white/95 shadow-md'}` 
          : 'bg-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-poppins font-bold text-xl text-primary-500">
            Aimrane Bara
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 rtl:space-x-reverse">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary-500 ${
                      darkMode ? 'text-white' : 'text-neutral-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            <DarkModeToggle />
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <DarkModeToggle />
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none ${
                  darkMode ? 'text-white' : 'text-neutral-900'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                  darkMode ? 'text-white hover:bg-neutral-800' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;