import React, { useState } from 'react';
import { ZONES } from '../data/restaurantData';
import { Language, ZoneItem } from '../types';
import { Lock, Music, Flame, Sparkles, Check, ChevronRight } from 'lucide-react';

interface AmbienceGalleryProps {
  language: Language;
  onSelectZoneForBooking: (zoneName: string) => void;
}

export const AmbienceGallery: React.FC<AmbienceGalleryProps> = ({ language, onSelectZoneForBooking }) => {
  const [selectedZone, setSelectedZone] = useState<ZoneItem>(ZONES[0]);
  const [activeTab, setActiveTab] = useState<string>('vip-lounge');

  const handleZoneChange = (zoneId: string) => {
    setActiveTab(zoneId);
    const found = ZONES.find((z) => z.id === zoneId);
    if (found) setSelectedZone(found);
  };

  return (
    <section id="atmosphere" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#f2ca50]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
                Luxury Lounge Experience
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e4e1e7] leading-tight">
              {language === 'kk' ? (
                <>
                  Сәнділік пен құпиялылық мекені: <span className="italic text-[#f2ca50]">Baoli Кеңістігі</span>
                </>
              ) : (
                <>
                  Атмосфера роскоши и приватности: <span className="italic text-[#f2ca50]">Пространство Baoli</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Highvill кешенінің F2 блогында орналасқан Baoli — талғампаздықты сүйетіндер үшін жасалған ерекше локус. Жоғары деңгейлі қызмет көрсету, жұмсақ жарық және эстетикалық интерьер.'
                : 'Расположенный в блоке F2 престижного ЖК Highvill, Baoli создан для истинных ценителей эстетики. Премиальный сервис, приглушенный теплый свет и эксклюзивные интерьеры.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#e7c08b] uppercase tracking-wider bg-[#1b1b1f] border border-[#4d4635]/50 px-3.5 py-1.5 rounded-full">
              {language === 'kk' ? '4 ерекше аймақ & VIP бөлмелер' : '4 уникальные зоны & VIP залы'}
            </span>
          </div>
        </div>

        {/* Zone Navigation Pills */}
        <div className="flex flex-wrap gap-2 border-b border-[#4d4635]/30 pb-4">
          {ZONES.map((zone) => (
            <button
              key={zone.id}
              onClick={() => handleZoneChange(zone.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === zone.id
                  ? 'bg-[#f2ca50] text-[#131317] shadow-[0_0_15px_rgba(242,202,80,0.3)]'
                  : 'bg-[#1b1b1f] text-[#d0c5af] hover:text-[#e4e1e7] hover:border-[#f2ca50]/40 border border-[#4d4635]/40'
              }`}
            >
              <span>{language === 'kk' ? zone.nameKk : zone.nameRu}</span>
              {zone.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    activeTab === zone.id ? 'bg-[#131317] text-[#f2ca50]' : 'bg-[#2a292e] text-[#e7c08b]'
                  }`}
                >
                  {zone.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Highlight Card for Selected Zone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1b1b1f] rounded-2xl p-6 lg:p-8 border border-[#4d4635]/40 shadow-xl">
          <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-xl overflow-hidden group">
            <img
              src={selectedZone.image}
              alt={language === 'kk' ? selectedZone.nameKk : selectedZone.nameRu}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded bg-[#f2ca50] text-[#131317] text-xs uppercase font-bold tracking-wider">
                {selectedZone.capacity}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#e7c08b] font-semibold">
                {language === 'kk' ? selectedZone.subtitleKk : selectedZone.subtitleRu}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e4e1e7]">
                {language === 'kk' ? selectedZone.nameKk : selectedZone.nameRu}
              </h3>
              <p className="text-sm text-[#d0c5af] leading-relaxed">
                {language === 'kk' ? selectedZone.descKk : selectedZone.descRu}
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="flex flex-col gap-2 py-2 border-y border-[#4d4635]/30">
              {(language === 'kk' ? selectedZone.featuresKk : selectedZone.featuresRu).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#e4e1e7]">
                  <Check className="w-4 h-4 text-[#f2ca50] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Book This Zone Button */}
            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={() => onSelectZoneForBooking(language === 'kk' ? selectedZone.nameKk : selectedZone.nameRu)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#f2ca50] text-[#131317] text-xs uppercase tracking-wider font-bold hover:bg-[#ffe088] transition-all duration-300 shadow-md"
              >
                <span>{language === 'kk' ? 'Осы аймаққа тапсырыс беру' : 'Выбрать эту зону'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Architectural Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-xl bg-[#1b1b1f] border border-[#4d4635]/30 shadow-sm flex flex-col gap-3 hover:border-[#f2ca50]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f2ca50]/10 border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-[#e4e1e7] font-semibold">
              {language === 'kk' ? 'Құпиялылық' : 'Приватность'}
            </h4>
            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Жеке автотұрақ, жеке кіру мүмкіндігі және қонақтардың толық тыныштығын сақтау.'
                : 'Закрытый паркинг, отдельный доступ и бережное сохранение персонального пространства гостей.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1b1b1f] border border-[#4d4635]/30 shadow-sm flex flex-col gap-3 hover:border-[#f2ca50]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f2ca50]/10 border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <Music className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-[#e4e1e7] font-semibold">
              {language === 'kk' ? 'Lounge Акустикасы' : 'Lounge Акустика'}
            </h4>
            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Арнайы таңдалған deep-house және organic lounge әуендері әңгімеге кедергі келтірмейді.'
                : 'Тщательно подобранный саундтрек в стиле deep-house и lounge не заглушает беседу.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1b1b1f] border border-[#4d4635]/30 shadow-sm flex flex-col gap-3 hover:border-[#f2ca50]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f2ca50]/10 border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-[#e4e1e7] font-semibold">
              {language === 'kk' ? 'Премиум Түтін' : 'Премиум Дым'}
            </h4>
            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Тәжірибелі шеберлерден жеке қоспалар, жеміс шырындары мен сапалы табактар.'
                : 'Индивидуальные миксы от опытных кальянных мастеров на отборных табачных листах.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1b1b1f] border border-[#4d4635]/30 shadow-sm flex flex-col gap-3 hover:border-[#f2ca50]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f2ca50]/10 border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-[#e4e1e7] font-semibold">
              {language === 'kk' ? 'Мінсіз Сервис' : 'Безупречный Сервис'}
            </h4>
            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Әрбір қонаққа жеке ілтипат пен әдепті официанттар мен сомелье қызметі.'
                : 'Индивидуальное внимание к деталям, тактичные официанты и профессиональные сомелье.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
