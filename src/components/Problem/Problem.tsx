import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

const Problem = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      id: 1,
      title: t('problem1Title'),
      text: t('problem1Text'),
      icon: <CheckCircle className="h-8 w-8 text-red-500" />,
      image: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: t('problem2Title'),
      text: t('problem2Text'),
      icon: <CheckCircle className="h-8 w-8 text-red-500" />,
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: t('problem3Title'),
      text: t('problem3Text'),
      icon: <CheckCircle className="h-8 w-8 text-red-500" />,
      image: "https://images.pexels.com/photos/7621138/pexels-photo-7621138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];

  return (
    <section 
      id="problem" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-neutral-800 text-white' : 'bg-neutral-50 text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            {t('problemTitle')}
          </h2>
          <p className="text-xl opacity-80">
            {t('problemSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={problem.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${darkMode ? 'bg-neutral-700' : 'bg-white'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className={`${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;