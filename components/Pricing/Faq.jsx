// 'use client';

// import { useTranslation } from 'react-i18next';

// const FAQSection = () => {
//   const { t } = useTranslation();

//   const faqs = [
//     { question: t('faq.question1'), answer: t('faq.answer1') },
//     { question: t('faq.question2'), answer: t('faq.answer2') },
//     { question: t('faq.question3'), answer: t('faq.answer3') },
//     { question: t('faq.question4'), answer: t('faq.answer4') },
//   ];

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center mb-4">{t('faq.title')}</h2>
//       <p className="text-gray-600 text-center mb-8">{t('faq.subtitle')}</p>
//       <div className="space-y-6">
//         {faqs.map((faq, index) => (
//           <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
//             <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
//             <p className="text-gray-700 mt-2">{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null); // Track the active FAQ index

  const faqs = [
    { question: t('faq.question1'), answer: t('faq.answer1') },
    { question: t('faq.question2'), answer: t('faq.answer2') },
    { question: t('faq.question3'), answer: t('faq.answer3') },
    { question: t('faq.question4'), answer: t('faq.answer4') },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if it's already open
    } else {
      setActiveIndex(index); // Expand the clicked FAQ
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">{t('faq.title')}</h2>
      <p className="text-gray-600 text-center mb-8">{t('faq.subtitle')}</p>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg bg-white">
            <div
              onClick={() => handleToggle(index)}
              className="cursor-pointer p-6 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="p-6 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
