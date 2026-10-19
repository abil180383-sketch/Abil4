import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Language } from '../types';
import { Award, MapPin, Clock, Phone, MessageCircle, Instagram, Check } from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenBooking }) => {
  const [newsletterPhone, setNewsletterPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterPhone.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterPhone('');
    }, 2500);
  };

  return (
    <footer className="w-full bg-[#0e0e12] border-t border-[#4d4635]/30 pt-16 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#4d4635]/20">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={RESTAURANT_INFO.logoUrl}
                alt="Baoli Highvill Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-xl text-[#e4e1e7] tracking-wider font-bold">
                BAOLI HIGHVILL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Астананың қақ төрінде орналасқан престижді Highvill кешеніндегі эксклюзивті ресторан-лаундж кеңістігі. Авторлық гастрономия, элиталық шай рәсімдері және теңдессіз премиум түтін атмосферасы.'
                : 'Эксклюзивный ресторан-лаундж в престижном комплексе Highvill в центре Астаны. Авторская гастрономия, чайные церемонии и безупречная атмосфера премиального отдыха.'}
            </p>

            {/* 2GIS Trust Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#1b1b1f] border border-[#4d4635]/40 w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#f2ca50]/15 flex items-center justify-center text-[#f2ca50]">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-xs text-[#f2ca50] font-bold">
                  <span>2GIS {RESTAURANT_INFO.rating2gis} ★</span>
                  <span className="text-[#d0c5af] font-normal">({RESTAURANT_INFO.reviewsCount} пікір)</span>
                </div>
                <span className="text-[10px] text-[#e7c08b]">
                  {language === 'kk' ? '2GIS Awards жыл жеңімпазы' : 'Победитель 2GIS Awards'}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Location */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg text-[#f2ca50] font-semibold tracking-wide">
              {language === 'kk' ? 'Орналасқан жеріміз' : 'Локация'}
            </h4>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#d0c5af]">
              <MapPin className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
              <p>{language === 'kk' ? RESTAURANT_INFO.addressKk : RESTAURANT_INFO.addressRu}</p>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#d0c5af]">
              <Clock className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#e4e1e7] font-medium">
                  {language === 'kk' ? RESTAURANT_INFO.hoursKk : RESTAURANT_INFO.hoursRu}
                </p>
                <p className="text-[11px] text-[#e7c08b]">
                  {language === 'kk' ? 'Брондау қызметі 24/7 белсенді' : 'Бронь 24/7'}
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Contacts */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg text-[#f2ca50] font-semibold tracking-wide">
              {language === 'kk' ? 'Байланыс & Брондау' : 'Контакты & Бронь'}
            </h4>

            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#d0c5af]">
              <li>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 hover:text-[#f2ca50] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#f2ca50]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#f2ca50] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#f2ca50]" />
                  <span>WhatsApp (24/7)</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#f2ca50] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#f2ca50]" />
                  <span>{RESTAURANT_INFO.instagramHandle}</span>
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenBooking}
              className="mt-2 w-fit px-4 py-2 rounded-lg bg-[#1b1b1f] border border-[#4d4635] hover:border-[#f2ca50] text-[#e7c08b] text-xs uppercase tracking-wider transition-all font-semibold"
            >
              {language === 'kk' ? 'VIP бөлмені таңдау' : 'Выбрать VIP зал'}
            </button>
          </div>

          {/* Col 4: Privilege Club */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg text-[#f2ca50] font-semibold tracking-wide">
              {language === 'kk' ? 'Арнайы артықшылықтар' : 'Privilege Club'}
            </h4>

            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Жабық дегустациялар, шеф-аспаздан ерекше ұсыныстар және Baoli Privilege Club мүшелігі жайлы алғашқы болып біліңіз.'
                : 'Закрытые дегустации, комплименты от шефа и клубные привилегии Baoli Privilege Club.'}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  required
                  value={newsletterPhone}
                  onChange={(e) => setNewsletterPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-3 py-2 rounded-lg bg-[#1b1b1f] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-xs outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#f2ca50] text-[#131317] text-xs font-bold uppercase tracking-wider hover:bg-[#ffe088] transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'OK'}
                </button>
              </div>

              {subscribed && (
                <span className="text-[11px] text-emerald-400 font-medium">
                  {language === 'kk' ? '✓ Қосылдыңыз! Сізге SMS жетеді.' : '✓ Вы добавлены в клуб!'}
                </span>
              )}

              <span className="text-[10px] text-[#d0c5af]/60">
                {language === 'kk'
                  ? 'Деректердің құпиялылығы толық сақталады.'
                  : 'Конфиденциальность гарантируется.'}
              </span>
            </form>
          </div>
        </div>

        {/* Bottom copyright & sub-links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d0c5af]/80">
          <p>© 2025–2026 Baoli Highvill Astana. {language === 'kk' ? 'Барлық құқықтар қорғалған.' : 'Все права защищены.'}</p>

          <div className="flex items-center gap-6">
            <a href="#atmosphere" className="hover:text-[#f2ca50] transition-colors">Highvill F2</a>
            <a href="#offers" className="hover:text-[#f2ca50] transition-colors">
              {language === 'kk' ? 'Акциялар' : 'Акции'}
            </a>
            <a href="#menu" className="hover:text-[#f2ca50] transition-colors">
              {language === 'kk' ? 'Бар картасы' : 'Барная карта'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
