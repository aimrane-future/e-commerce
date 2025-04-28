import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Instagram, Linkedin, Mail, Phone, ChevronUp } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <footer 
      className={`pt-12 pb-6 ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`p-3 rounded-full cursor-pointer ${
              darkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-200 shadow-md'
            } transition-colors`}
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6 text-primary-500" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold font-poppins text-primary-500 mb-4">Aimrane Bara</h2>
            <p className={`mb-4 max-w-md ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              {language === 'en' 
                ? 'Strategic solutions for e-commerce businesses to optimize inventory management and eliminate stockouts and refunds.' 
                : 'حلول استراتيجية للشركات العاملة في مجال التجارة الإلكترونية لتحسين إدارة المخزون والقضاء على نفاد المخزون والمبالغ المستردة.'}
            </p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://www.instagram.com/bara_style_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aimrane-bara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:aimranebara@gmail.com"
                className="text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+212626551379"
                className="text-primary-500 hover:text-primary-600 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-primary-500 transition-colors"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  to="problem"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-primary-500 transition-colors"
                >
                  {t('problem')}
                </Link>
              </li>
              <li>
                <Link
                  to="solution"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-primary-500 transition-colors"
                >
                  {t('solution')}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-primary-500 transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Services' : 'الخدمات'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  {language === 'en' ? 'Inventory Management' : 'إدارة المخزون'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  {language === 'en' ? 'Stock Monitoring' : 'مراقبة المخزون'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  {language === 'en' ? 'Process Automation' : 'أتمتة العمليات'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  {language === 'en' ? 'Shipping Optimization' : 'تحسين الشحن'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t('copyright')}
          </p>
          
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-primary-500 transition-colors">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              {t('termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;