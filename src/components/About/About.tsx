import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            className={`md:w-1/2 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Aimrane Bara"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div 
                className={`absolute bottom-0 right-0 p-6 rounded-tl-lg rounded-br-lg ${
                  darkMode ? 'bg-primary-900' : 'bg-primary-500'
                }`}
              >
                <h3 className="text-white text-2xl font-bold font-poppins">Aimrane Bara</h3>
                <p className="text-white/90">
                  {language === 'en' 
                    ? 'E-commerce Stock Management Expert' 
                    : 'خبير في إدارة مخزون التجارة الإلكترونية'}
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/bara_style_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg transition-transform hover:scale-105"
              >
                <Instagram className="h-5 w-5" />
                <span>@bara_style_1</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/aimrane-bara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
                <span>Aimrane Bara</span>
              </a>
              
              <a 
                href="mailto:aimranebara@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg transition-transform hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                <span>aimranebara@gmail.com</span>
              </a>
              
              <a 
                href="tel:+212626551379"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>+212 626551379</span>
              </a>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              {t('aboutTitle')}
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                {t('aboutText')}
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">
                {language === 'en' ? 'Areas of Expertise' : 'مجالات الخبرة'}
              </h3>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span>
                    {language === 'en' 
                      ? 'Strategic Inventory Management' 
                      : 'الإدارة الاستراتيجية للمخزون'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span>
                    {language === 'en' 
                      ? 'E-commerce Operations Optimization' 
                      : 'تحسين عمليات التجارة الإلكترونية'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span>
                    {language === 'en' 
                      ? 'Supply Chain Management' 
                      : 'إدارة سلسلة التوريد'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span>
                    {language === 'en' 
                      ? 'Business Process Automation' 
                      : 'أتمتة العمليات التجارية'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span>
                    {language === 'en' 
                      ? 'E-commerce Growth Consulting' 
                      : 'استشارات نمو التجارة الإلكترونية'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;