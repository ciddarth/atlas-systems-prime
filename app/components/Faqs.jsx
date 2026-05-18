"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    question: "Can we use existing brand templates?",
    answer: "Yes. Upload your templates and PRIME applies them to current data automatically.",
  },
  {
    question: "How do we handle multiple product lines?",
    answer: "PRIME seamlessly integrates multiple product lines into customized outputs without requiring manual intervention.",
  },
  {
    question: "What if changes are needed after generation?",
    answer: "You can easily make adjustments in the system and regenerate the required documents instantly.",
  },
  {
    question: "Can you handle multiple languages?",
    answer: "Yes, our platform is fully equipped to handle multi-language data translation and localized content generation.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        <h2 
          className="text-black text-center mb-12 tracking-tight"
          data-aos="fade-up"
        >
          FAQs
        </h2>

        <div className="w-full flex flex-col gap-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full bg-surface rounded-xl overflow-hidden cursor-pointer transition-colors hover:bg-gray-100"
                onClick={() => toggleFaq(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-center p-6 lg:px-8">
                  <h3 className="text-xl text-black m-0">
                    {faq.question}
                  </h3>
                  <div className="text-black ml-4 shrink-0">
                    {isOpen ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 lg:px-8 pb-6 pt-0">
                    <p className="text-textbody text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
