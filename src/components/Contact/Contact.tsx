import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Check } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate a form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-primary-900 text-white' : 'bg-primary-50 text-neutral-900'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl opacity-80">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">{t('contactInfo')}</h3>
              
              <div className="space-y-6">
                <div 
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-primary-800' : 'bg-white shadow-md'
                  }`}
                >
                  <h4 className="font-bold mb-2">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</h4>
                  <a 
                    href="mailto:aimranebara@gmail.com"
                    className="text-primary-500 hover:underline"
                  >
                    aimranebara@gmail.com
                  </a>
                </div>
                
                <div 
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-primary-800' : 'bg-white shadow-md'
                  }`}
                >
                  <h4 className="font-bold mb-2">{language === 'en' ? 'Phone' : 'الهاتف'}</h4>
                  <a 
                    href="tel:+212626551379"
                    className="text-primary-500 hover:underline"
                  >
                    +212 626551379
                  </a>
                </div>
                
                <div 
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-primary-800' : 'bg-white shadow-md'
                  }`}
                >
                  <h4 className="font-bold mb-2">{language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي'}</h4>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.instagram.com/bara_style_1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:underline"
                    >
                      Instagram: @bara_style_1
                    </a>
                    <br />
                    <a 
                      href="https://www.linkedin.com/in/aimrane-bara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:underline"
                    >
                      LinkedIn: Aimrane Bara
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`transition-all duration-700 delay-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <form onSubmit={handleSubmit}>
                <div 
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-primary-800' : 'bg-white shadow-lg'
                  }`}
                >
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2"
                    >
                      {t('nameLabel')}
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        darkMode 
                          ? 'bg-primary-700/50 border-primary-600 text-white' 
                          : 'bg-white border-neutral-300 text-neutral-900'
                      }`}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2"
                    >
                      {t('emailLabel')}
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        darkMode 
                          ? 'bg-primary-700/50 border-primary-600 text-white' 
                          : 'bg-white border-neutral-300 text-neutral-900'
                      }`}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2"
                    >
                      {t('messageLabel')}
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        darkMode 
                          ? 'bg-primary-700/50 border-primary-600 text-white' 
                          : 'bg-white border-neutral-300 text-neutral-900'
                      }`}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg flex items-center justify-center ${
                      submitted
                        ? 'bg-secondary-500 hover:bg-secondary-600'
                        : 'bg-primary-500 hover:bg-primary-600'
                    } text-white font-semibold transition-colors duration-200`}
                  >
                    {submitted ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        {language === 'en' ? 'Message Sent!' : 'تم الإرسال!'}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {t('submitButton')}
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 p-4 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <p className="text-center font-semibold">
                  {language === 'en' 
                    ? 'Book a Free Strategy Call' 
                    : 'احجز مكالمة استراتيجية مجانية'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;