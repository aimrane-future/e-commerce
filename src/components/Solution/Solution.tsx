import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, BarChart, ShoppingBag } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

const Solution = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      id: 1,
      title: t('solution1Title'),
      text: t('solution1Text'),
      icon: <LineChart className="h-12 w-12 text-primary-500" />,
    },
    {
      id: 2,
      title: t('solution2Title'),
      text: t('solution2Text'),
      icon: <BarChart className="h-12 w-12 text-primary-500" />,
    },
    {
      id: 3,
      title: t('solution3Title'),
      text: t('solution3Text'),
      icon: <ShoppingBag className="h-12 w-12 text-primary-500" />,
    }
  ];

  return (
    <section 
      id="solution" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            {t('solutionTitle')}
          </h2>
          <p className="text-xl opacity-80">
            {t('solutionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={`p-8 rounded-lg transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                darkMode 
                  ? 'bg-gradient-to-br from-primary-900/40 to-neutral-800 border border-primary-800/30' 
                  : 'bg-gradient-to-br from-primary-50 to-white border border-primary-100'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className={`${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {solution.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div 
            className={`rounded-lg overflow-hidden shadow-xl ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } transition-all duration-700 delay-500`}
          >
            <img 
              src="https://images.pexels.com/photos/8867463/pexels-photo-8867463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Advanced Stock Management Dashboard" 
              className="w-full h-auto object-cover"
            />
            <div 
              className={`absolute inset-0 flex items-center justify-center ${
                darkMode ? 'bg-black/50' : 'bg-primary-500/10'
              }`}
            >
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'en' ? 'Advanced Analytics Dashboard' : 'لوحة تحليلات متقدمة'}
                </h3>
                <p className="text-white/90">
                  {language === 'en' 
                    ? 'Real-time monitoring of your inventory across all channels' 
                    : 'مراقبة مخزونك في الوقت الحقيقي عبر جميع القنوات'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;