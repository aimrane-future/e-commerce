import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThumbsUp, Users, TrendingUp, Package } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Results = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      id: 1,
      title: t('results1'),
      value: 70,
      suffix: '%',
      description: language === 'en' ? 'Fewer stockout refunds' : 'انخفاض في المبالغ المستردة بسبب نفاد المخزون',
      icon: <ThumbsUp className="h-8 w-8 text-primary-500" />,
    },
    {
      id: 2,
      title: t('results2'),
      value: 2,
      prefix: '',
      suffix: 'x',
      description: language === 'en' ? 'Increase in satisfaction' : 'زيادة في رضا العملاء',
      icon: <Users className="h-8 w-8 text-primary-500" />,
    },
    {
      id: 3,
      title: t('results3'),
      value: 35,
      suffix: '%',
      description: language === 'en' ? 'Average revenue growth' : 'متوسط نمو الإيرادات',
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />,
    },
    {
      id: 4,
      title: t('results4'),
      value: 40,
      suffix: '%',
      description: language === 'en' ? 'Reduction in overstock' : 'انخفاض في المخزون الزائد',
      icon: <Package className="h-8 w-8 text-primary-500" />,
    },
  ];

  return (
    <section 
      id="results" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-primary-900 text-white' : 'bg-primary-50 text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            {t('resultsTitle')}
          </h2>
          <p className="text-xl opacity-80">
            {t('resultsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={`p-6 rounded-lg transition-all duration-500 text-center ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                darkMode 
                  ? 'bg-primary-800/50 border border-primary-700' 
                  : 'bg-white shadow-lg'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full mb-4 bg-primary-100">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.title}</h3>
              <div className="text-4xl font-bold text-primary-500 mb-3">
                {stat.prefix || ''}
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    separator="," 
                    suffix={stat.suffix || ''}
                  />
                ) : '0'}
              </div>
              <p className={`${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;