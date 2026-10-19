import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Language } from '../types';
import { loungeAudio } from '../utils/audioAmbience';
import { Volume2, VolumeX, Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    const active = loungeAudio.toggle();
    setIsAudioPlaying(active);
  };

  const navLinks = [
    { href: '#home', labelKk: 'Басты бет', labelRu: 'Главная' },
    { href: '#offers', labelKk: 'Арнайы ұсыныстар', labelRu: 'Акции' },
    { href: '#atmosphere', labelKk: 'Атмосфера & Залдар', labelRu: 'Атмосфера & Залы' },
    { href: '#menu', labelKk: 'Мәзір', labelRu: 'Меню' },
    { href: '#reservation', labelKk: 'Брондау', labelRu: 'Бронь' },
    { href: '#reviews', labelKk: 'Пікірлер 4.9★', labelRu: 'Отзывы 4.9★' },
    { href: '#contacts', labelKk: 'Байланыс', labelRu: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#131317]/95 backdrop-blur-2xl border-b border-[#4d4635]/30 transition-all duration-300">
      {/* Top Micro-Bar */}
      <div className="bg-[#0e0e12]/90 px-4 sm:px-8 border-b border-[#4d4635]/20 hidden md:block">
        <div className="w-full max-w-7xl mx-auto h-9 flex items-center justify-between text-[#d0c5af] text-xs font-medium tracking-wide">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse"></span>
            <span className="text-[#e7c08b] font-semibold tracking-wider">
              {language === 'kk' ? '🔥 ДЫМ ЗА 5 500 ₸ + ШАЙ СЫЙЛЫҚҚА (САҒАТ 19:00-ГЕ ДЕЙІН)' : '🔥 ДЫМ ЗА 5 500 ₸ + ЧАЙ В ПОДАРОК (ДО 19:00)'}
            </span>
            <span className="text-[#4d4635]">•</span>
            <span className="text-[#d0c5af]/80">
              {language === 'kk' ? 'ЖҰМЫС УАҚЫТЫ: 15:00 - 04:00' : 'РЕЖИМ РАБОТЫ: 15:00 - 04:00'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${RESTAURANT_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-[#f2ca50] hover:text-[#ffe088] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[#4d4635]">•</span>
            <span className="text-[#d0c5af]/70">Astana, Highvill Ishim</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={RESTAURANT_INFO.logoUrl}
            alt="Baoli Highvill Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg text-[#e4e1e7] tracking-[0.22em] font-bold group-hover:text-[#f2ca50] transition-colors">
              BAOLI
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#e7c08b] -mt-1 font-semibold uppercase">
              Highvill Astana
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider uppercase text-[#d0c5af] hover:text-[#f2ca50] transition-colors relative py-1 font-medium hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#f2ca50]"
            >
              {language === 'kk' ? link.labelKk : link.labelRu}
            </a>
          ))}
        </nav>

        {/* Action Controls: Audio, Lang Switcher, WhatsApp & Booking */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Ambient Sound Toggle */}
          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? (language === 'kk' ? 'Музыканы өшіру' : 'Выключить лаундж-музыку') : (language === 'kk' ? 'Лаундж-атмосфера әуенін қосу' : 'Включить лаундж-атмосферу')}
            className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 ${
              isAudioPlaying
                ? 'border-[#f2ca50] text-[#f2ca50] bg-[#f2ca50]/10 shadow-[0_0_12px_rgba(242,202,80,0.2)]'
                : 'border-[#4d4635]/50 text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50]/50 bg-[#1b1b1f]'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="text-xs hidden xl:inline font-medium">
              {isAudioPlaying ? (language === 'kk' ? 'Lounge қосулы' : 'Lounge On') : (language === 'kk' ? 'Lounge' : 'Lounge')}
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#1b1b1f] border border-[#4d4635]/50 rounded-lg p-0.5 text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('kk')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'kk'
                  ? 'bg-[#f2ca50] text-[#131317]'
                  : 'text-[#d0c5af] hover:text-white'
              }`}
            >
              ҚАЗ
            </button>
            <button
              onClick={() => onLanguageChange('ru')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'ru'
                  ? 'bg-[#f2ca50] text-[#131317]'
                  : 'text-[#d0c5af] hover:text-white'
              }`}
            >
              РУС
            </button>
          </div>

          {/* Quick WhatsApp */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
              language === 'kk'
                ? 'Сәлеметсіз бе! Baoli Highvill-де үстел брондау немесе мәзір сұрағы бойынша жазып тұрмын.'
                : 'Здравствуйте! Пишу по поводу брони столика в Baoli Highvill.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1f1f23] text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50]/40 border border-[#4d4635]/40 transition-all text-xs font-semibold uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 text-[#f2ca50]" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Main Book Table Button */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 rounded-lg bg-[#f2ca50] text-[#131317] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-[#ffe088] hover:shadow-[0_0_28px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            {language === 'kk' ? 'Үстел брондау' : 'Бронь стола'}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1b1b1f] border border-[#4d4635]/50 text-[#d0c5af] hover:text-[#f2ca50]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131317] border-b border-[#4d4635]/40 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#e4e1e7] hover:text-[#f2ca50] font-medium py-1.5 border-b border-[#2a292e]"
              >
                {language === 'kk' ? link.labelKk : link.labelRu}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-[#f2ca50]"
            >
              <Phone className="w-4 h-4" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1b1b1f] border border-[#4d4635] text-[#e7c08b] text-sm uppercase tracking-wider font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#f2ca50]" />
              <span>WhatsApp арқылы байланысу</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
