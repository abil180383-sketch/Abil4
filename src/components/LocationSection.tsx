import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Language } from '../types';
import { MapPin, Clock, Phone, Navigation, Instagram, Car, ExternalLink, Check, Copy } from 'lucide-react';

interface LocationSectionProps {
  language: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ language }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(
      language === 'kk' ? RESTAURANT_INFO.addressKk : RESTAURANT_INFO.addressRu
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contacts" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Information */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
              {language === 'kk' ? 'Орналасуы & Байланыс' : 'Локация & Контакты'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e4e1e7] leading-tight">
              {language === 'kk' ? (
                <>
                  Бізді қайдан <span className="italic text-[#f2ca50]">табуға болады?</span>
                </>
              ) : (
                <>
                  Где нас <span className="italic text-[#f2ca50]">найти?</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Астананың заманауи орталығы — Highvill Ishim кешенінде орналасқанбыз. Ыңғайлы көлік тұрағы және тәулік бойы күзетілетін қауіпсіз аумақ.'
                : 'Мы находимся в самом сердце деловой столицы — в элитном комплексе Highvill Ishim. Удобная охраняемая парковка и престижная локация.'}
            </p>
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2a292e] border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg text-[#e4e1e7] font-semibold">
                  {language === 'kk' ? 'Мекен-жайымыз' : 'Наш адрес'}
                </span>
                <p className="text-xs sm:text-sm text-[#d0c5af] mt-0.5">
                  {language === 'kk' ? RESTAURANT_INFO.addressKk : RESTAURANT_INFO.addressRu}
                </p>
                <button
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-[#e7c08b] hover:text-[#f2ca50] mt-1 font-medium w-fit"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAddress ? (language === 'kk' ? 'Көшірілді' : 'Скопировано') : (language === 'kk' ? 'Мекен-жайды көшіру' : 'Скопировать адрес')}</span>
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2a292e] border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg text-[#e4e1e7] font-semibold">
                  {language === 'kk' ? 'Жұмыс кестесі' : 'График работы'}
                </span>
                <p className="text-xs sm:text-sm text-[#d0c5af] mt-0.5">
                  {language === 'kk' ? RESTAURANT_INFO.hoursKk : RESTAURANT_INFO.hoursRu}
                </p>
                <span className="text-[11px] text-[#e7c08b]">
                  {language === 'kk' ? 'Брондау қызметі 24/7 белсенді' : 'Бронь столов 24/7'}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2a292e] border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg text-[#e4e1e7] font-semibold">
                  {language === 'kk' ? 'Телефон & Брондау' : 'Телефон & Бронь'}
                </span>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-base text-[#f2ca50] hover:text-[#ffe088] font-bold mt-0.5"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* External Action Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={RESTAURANT_INFO.map2gis}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1b1b1f] border border-[#4d4635] text-[#e4e1e7] hover:text-[#f2ca50] hover:border-[#f2ca50]/50 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Navigation className="w-4 h-4 text-[#f2ca50]" />
              <span>2GIS Бағытты ашу</span>
              <ExternalLink className="w-3 h-3 text-[#d0c5af]" />
            </a>

            <a
              href={RESTAURANT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1b1b1f] border border-[#4d4635] text-[#e4e1e7] hover:text-[#f2ca50] hover:border-[#f2ca50]/50 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Instagram className="w-4 h-4 text-[#f2ca50]" />
              <span>{RESTAURANT_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Right Map & Parking Card */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Stylized Dark Map Preview Container */}
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl relative bg-[#1b1b1f] border border-[#4d4635]/50 flex flex-col justify-between p-6">
            {/* Visual Dark Map Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f2ca50" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Glowing Map Pin in the center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-3 z-10">
              <div className="relative">
                <span className="w-12 h-12 rounded-full bg-[#f2ca50]/20 flex items-center justify-center animate-ping absolute -inset-2" />
                <div className="w-12 h-12 rounded-full bg-[#f2ca50] text-[#131317] flex items-center justify-center shadow-lg relative z-10">
                  <MapPin className="w-6 h-6 fill-[#131317]" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h4 className="font-serif text-xl text-[#e4e1e7] font-bold">
                  Highvill Astana, Блок F2
                </h4>
                <p className="text-xs text-[#d0c5af] max-w-sm mt-1">
                  Ахмет Байтұрсынұлы к-сі, 9. 2GIS және Яндекс.Навигатор жүйелерінде жылдам іздеу.
                </p>
              </div>

              <a
                href={RESTAURANT_INFO.map2gis}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-2.5 rounded-lg bg-[#f2ca50] text-[#131317] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#ffe088] transition-all"
              >
                {language === 'kk' ? 'Картадан қарау (2GIS)' : 'Открыть в 2GIS'}
              </a>
            </div>

            {/* Map Top Status Tag */}
            <div className="relative z-10 flex justify-between items-center text-[11px] text-[#e7c08b]">
              <span className="bg-[#131317]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#4d4635]">
                51.1278° N, 71.4682° E
              </span>
              <span className="bg-[#131317]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#4d4635]">
                {language === 'kk' ? 'Бәйтеректен 5 минут' : '5 минут от Байтерека'}
              </span>
            </div>
          </div>

          {/* Quick Access Barrier & Parking Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#1b1b1f] border border-[#4d4635]/40 shadow-lg flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5c4218]/40 border border-[#f2ca50]/20 flex items-center justify-center text-[#e7c08b] shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-[#e4e1e7]">
                  {language === 'kk' ? 'Қонақтар паркингі' : 'Гостевой паркинг'}
                </span>
                <span className="text-[11px] text-[#d0c5af]">
                  {language === 'kk' ? 'Highvill Ishim ауласына ыңғайлы өту жолы' : 'Удобный въезд во двор Highvill Ishim'}
                </span>
              </div>
            </div>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-xs font-bold uppercase tracking-wider text-[#f2ca50] hover:text-[#ffe088] whitespace-nowrap"
            >
              {language === 'kk' ? 'Шлагбаум аштыру →' : 'Открыть шлагбаум →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
