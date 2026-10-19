import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Language } from '../types';
import { Star, MapPin, Calendar, UtensilsCrossed, MessageCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0e0e12] pt-28 pb-16 lg:py-32">
      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#f2ca50]/10 blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[550px] h-[550px] rounded-full bg-[#8c6d3f]/20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] rounded-full bg-[#d4af37]/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Micro-Badges Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* 2GIS Rating */}
          <a
            href={RESTAURANT_INFO.map2gis}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1b1f]/80 backdrop-blur-md border border-[#4d4635]/40 hover:border-[#f2ca50]/50 transition-colors shadow-sm"
          >
            <Star className="w-4 h-4 text-[#f2ca50] fill-[#f2ca50]" />
            <span className="text-xs text-[#f2ca50] font-bold tracking-wider">
              2GIS {RESTAURANT_INFO.rating2gis} ★
            </span>
            <span className="text-[11px] text-[#d0c5af] font-normal">
              ({RESTAURANT_INFO.reviewsCount} {language === 'kk' ? 'шынайы бағалау' : 'честных отзывов'})
            </span>
          </a>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1b1f]/80 backdrop-blur-md border border-[#4d4635]/40 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#e7c08b]" />
            <span className="text-xs text-[#e4e1e7] tracking-wide">Highvill Astana, Блок F2</span>
          </div>

          {/* Schedule Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1b1f]/80 backdrop-blur-md border border-[#4d4635]/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs text-[#d0c5af] tracking-wide">
              {language === 'kk' ? 'Ашылуы: 15:00 – 04:00' : 'Открыто: 15:00 – 04:00'}
            </span>
          </div>
        </div>

        {/* Main Grid: Left Copy & Right Visual Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-[#f2ca50]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2ca50]">
                Prestige Lounge & Dining
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#e4e1e7] leading-[1.15] tracking-tight">
              {language === 'kk' ? (
                <>
                  Ғажайып дәм мен <span className="italic text-[#f2ca50] font-light">бекзат кештер</span> кеңістігі
                </>
              ) : (
                <>
                  Пространство вкуса и <span className="italic text-[#f2ca50] font-light">благородных вечеров</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#d0c5af] max-w-xl leading-relaxed font-light">
              {language === 'kk'
                ? 'Астананың ең беделді мекені Highvill кешеніндегі авторлық асхана, ерекше миксология және теңдессіз талғампаз түтін мәдениеті. Шынайы жайлылық пен премиум демалыс гармониясы.'
                : 'Авторская кухня, уникальная миксология и безупречная кальянная культура в самом престижном жилом комплексе Highvill в Астане. Гармония истинного комфорта и премиального отдыха.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#f2ca50] text-[#131317] text-sm uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-[#ffe088] hover:shadow-[0_0_28px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'kk' ? 'Үстел брондау' : 'Забронировать стол'}</span>
              </button>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#1f1f23] text-[#e7c08b] hover:text-[#e4e1e7] hover:bg-[#2a292e] border border-[#4d4635]/60 text-sm uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>{language === 'kk' ? 'Мәзірмен танысу' : 'Смотреть меню'}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
                  language === 'kk'
                    ? 'Сәлеметсіз бе! Baoli Highvill-де үстел брондағым келеді.'
                    : 'Здравствуйте! Хочу забронировать стол в Baoli Highvill.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#1f1f23] border border-[#4d4635]/60 text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#131317] transition-all duration-300 shadow-md"
                title="WhatsApp чат"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual Mosaic Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#1f1f23] border border-[#4d4635]/40 group">
              <img
                src={RESTAURANT_INFO.heroMainImage}
                alt="Baoli Highvill Luxury Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/30 to-transparent opacity-90" />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1b1b1f]/90 backdrop-blur-xl border border-[#4d4635]/50 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f2ca50]/20 border border-[#f2ca50]/30 flex items-center justify-center text-[#f2ca50]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#e4e1e7] font-semibold">Baoli Highvill Astana</h4>
                    <p className="text-xs text-[#d0c5af]">
                      {language === 'kk' ? 'Премиум демалыстың жаңа эталоны' : 'Новый эталон премиального отдыха'}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#f2ca50] text-[#131317] text-xs font-bold uppercase tracking-wider">
                  VIP
                </span>
              </div>
            </div>

            {/* Secondary Floating Cocktail Mixology Picture */}
            <div className="hidden sm:block absolute -top-8 -left-8 w-44 h-44 rounded-xl overflow-hidden shadow-2xl bg-[#2a292e] border-2 border-[#f2ca50]/30 group hover:border-[#f2ca50] transition-colors">
              <img
                src={RESTAURANT_INFO.heroMixologistImage}
                alt="Baoli Mixology Cocktail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#f2ca50]/10 mix-blend-overlay" />
            </div>
          </div>
        </div>

        {/* Trust & Numbers Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#1b1b1f] border border-[#4d4635]/30 shadow-xl">
          <div className="flex flex-col gap-1 border-r border-[#4d4635]/30 pr-4">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-[#f2ca50]">{RESTAURANT_INFO.rating2gis}</span>
              <span className="text-[#e7c08b] text-xl">★</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#d0c5af] font-medium">
              {language === 'kk' ? '2GIS Рейтингі' : 'Рейтинг 2GIS'}
            </span>
          </div>

          <div className="flex flex-col gap-1 border-r border-[#4d4635]/30 pr-4">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-[#e4e1e7]">{RESTAURANT_INFO.reviewsCount}</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#d0c5af] font-medium">
              {language === 'kk' ? 'Риза қонақтар легі' : 'Довольных гостей'}
            </span>
          </div>

          <div className="flex flex-col gap-1 border-r border-[#4d4635]/30 pr-4">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-[#e4e1e7]">50+</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#d0c5af] font-medium">
              {language === 'kk' ? 'Авторлық тағам түрі' : 'Авторских блюд'}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-[#e7c08b]">100%</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#d0c5af] font-medium">
              {language === 'kk' ? 'VIP Конфиденциалдық' : 'VIP Приватность'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
