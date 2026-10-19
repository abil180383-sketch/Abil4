import React, { useState } from 'react';
import { FAQ_LIST } from '../data/restaurantData';
import { Language } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="font-serif text-3xl text-[#e4e1e7]">
            {language === 'kk' ? 'Жиі қойылатын сұрақтар' : 'Часто задаваемые вопросы'}
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af]">
            {language === 'kk'
              ? 'Қонақтарымыздың демалысын барынша жайлы етуге арналған маңызды мәліметтер.'
              : 'Вся важная информация для вашего комфортного визита в Baoli Highvill.'}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const q = language === 'kk' ? faq.questionKk : faq.questionRu;
            const a = language === 'kk' ? faq.answerKk : faq.answerRu;

            return (
              <div
                key={idx}
                className="rounded-xl bg-[#1b1b1f] border border-[#4d4635]/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:text-[#f2ca50] transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg text-[#e4e1e7] font-medium">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#f2ca50] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#d0c5af] leading-relaxed border-t border-[#4d4635]/20 animate-fadeIn">
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
