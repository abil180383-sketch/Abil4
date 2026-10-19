import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Language } from '../types';
import { CheckCircle2, Flame, MessageCircle, Clock } from 'lucide-react';

interface OffersBannerProps {
  language: Language;
  onClaimOffer: () => void;
}

export const OffersBanner: React.FC<OffersBannerProps> = ({ language, onClaimOffer }) => {
  return (
    <section id="offers" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2a292e] via-[#1f1f23] to-[#5c4218]/40 p-6 md:p-10 border border-[#f2ca50]/20 shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f2ca50]/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#f2ca50] text-[#131317] text-xs uppercase tracking-widest font-bold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-[#131317]" />
                {language === 'kk' ? 'Өзекті жеңілдік' : 'Горячая акция'}
              </span>
              <span className="text-xs text-[#e7c08b] tracking-wider uppercase font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {language === 'kk' ? 'Күнделікті сағат 19:00-ге дейін' : 'Ежедневно до 19:00'}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e4e1e7] leading-tight font-medium">
              {language === 'kk' ? (
                <>
                  Дым 5 500 ₸ + Бір шәйнек <span className="text-[#f2ca50] italic">авторлық шай</span> сыйлыққа!
                </>
              ) : (
                <>
                  Дым 5 500 ₸ + Чайник <span className="text-[#f2ca50] italic">авторского чая</span> в подарок!
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#d0c5af] max-w-2xl leading-relaxed">
              {language === 'kk'
                ? 'Күннің қарбаласынан кейін Baoli Highvill жайлы дивандарында демалыңыз. Сағат 19:00-ге дейін келген әрбір қонағымызға элиталық жеміс қоспасы мен дәруменді шай салтанаты ерекше бағамен ұсынылады.'
                : 'Отдохните после рабочего дня в атмосфере уюта Baoli Highvill. Всем гостям до 19:00 фирменный дымный сет на премиальных табаках и стеклянный чайник ягодного или жасминового чая по специальной цене.'}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[#d0c5af] text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50]" />
                {language === 'kk' ? 'Үздік премиум табактар' : 'Премиальные бренды табака'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50]" />
                {language === 'kk' ? 'Жасмин және жидек шайлары' : 'Ягодные и цитрусовые чаи'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50]" />
                {language === 'kk' ? 'Highvill Ishim тыныштығы' : 'Уют и приватность Highvill'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={onClaimOffer}
              className="w-full text-center px-6 py-3.5 rounded-lg bg-[#f2ca50] text-[#131317] text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg hover:bg-[#ffe088] transition-all duration-300"
            >
              {language === 'kk' ? 'Орынды алып қалу' : 'Забронировать по акции'}
            </button>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
                language === 'kk'
                  ? 'Сәлеметсіз бе! 19:00-ге дейінгі 5 500 ₸ акциясы бойынша үстел брондағым келеді.'
                  : 'Здравствуйте! Хочу забронировать столик по акции 5 500 ₸ до 19:00.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1f1f23] border border-[#4d4635] text-[#e7c08b] hover:text-[#e4e1e7] hover:border-[#f2ca50]/50 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-[#f2ca50]" />
              <span>{language === 'kk' ? 'WhatsApp арқылы жазу' : 'Написать в WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
