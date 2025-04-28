import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      text: language === 'en' 
        ? "Aimrane's inventory system has completely transformed our business. We've cut refunds by 80% and increased customer satisfaction dramatically."
        : "لقد غير نظام المخزون الخاص بعمران أعمالنا بالكامل. لقد قللنا المبالغ المستردة بنسبة 80٪ وزادت رضا العملاء بشكل كبير.",
      name: language === 'en' ? "Sarah Johnson" : "سارة جونسون",
      position: language === 'en' ? "CEO, FashionTrends" : "الرئيس التنفيذي، فاشن تريندز",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      text: language === 'en'
        ? "The real-time alerts have been a game-changer. We now handle stock issues before they affect our customers. Highly recommended!"
        : "كانت التنبيهات في الوقت الحقيقي بمثابة تغيير في قواعد اللعبة. نحن الآن نتعامل مع مشاكل المخزون قبل أن تؤثر على عملائنا. موصى به بشدة!",
      name: language === 'en' ? "David Chen" : "ديفيد تشين",
      position: language === 'en' ? "Operations Director, TechGadgets" : "مدير العمليات، تيك غادجيتس",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      text: language === 'en'
        ? "After implementing Aimrane's system, our shipping became more efficient and our customer complaints dropped by 65%. The ROI has been incredible."
        : "بعد تنفيذ نظام عمران، أصبحت عمليات الشحن لدينا أكثر كفاءة وانخفضت شكاوى العملاء بنسبة 65٪. كان العائد على الاستثمار مذهلاً.",
      name: language === 'en' ? "Maria Garcia" : "ماريا غارسيا",
      position: language === 'en' ? "Founder, HomeEssentials" : "مؤسس، هوم إيسينشالز",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-neutral-800 text-white' : 'bg-neutral-50 text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl opacity-80">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div 
                      className={`p-8 rounded-lg ${
                        darkMode ? 'bg-neutral-700' : 'bg-white shadow-lg'
                      }`}
                    >
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic text-center">"{testimonial.text}"</p>
                      <div className="flex items-center justify-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className={`text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className={`absolute top-1/2 -translate-y-1/2 left-0 -ml-4 p-2 rounded-full ${
                darkMode ? 'bg-neutral-700 text-white' : 'bg-white text-neutral-900'
              } shadow-lg focus:outline-none z-10`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className={`absolute top-1/2 -translate-y-1/2 right-0 -mr-4 p-2 rounded-full ${
                darkMode ? 'bg-neutral-700 text-white' : 'bg-white text-neutral-900'
              } shadow-lg focus:outline-none z-10`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary-500' 
                    : darkMode ? 'bg-neutral-600' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;