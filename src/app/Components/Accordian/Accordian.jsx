"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({
    src: '../../../../public/Fonts/TWKEverett-Medium.otf',
    display: 'swap',
  })

const FAQAccordion = () => {
  const faqs = [
    { question: 'How do I sign up?', answer: 'To sign up, click on the "Sign Up" button and follow the instructions.' },
    { question: 'What information do I need to provide during the sign-up process?', answer: 'You need to provide your name, email, and a secure password.' },
    { question: 'Is my information secure during the sign-up process?', answer: 'Yes, we prioritize security and use encrypted servers to protect your information.' },
    { question: 'Who can apply?', answer: 'Anyone interested in our services can apply. There are no specific restrictions.' },
    { question: 'What are the terms and conditions for the collaboration?', answer: 'Our terms and conditions can be found in the documentation section of the website.' },
    { question: 'What is the minimum duration of the contract?', answer: 'The minimum duration of the contract is six months.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex container mt-[127px] gap-[21%]">
      <h1 className={` ${myFont.className} w-[551px] text-[52px] h-[90px] `}>Frequently asked questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium"
            >
              <span className='font-[18px] leading-[18px]'>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.5l-7.5 7.5-7.5-7.5"
                />
              </svg>
              
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
