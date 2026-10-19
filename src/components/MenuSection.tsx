import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { Language, MenuItem } from '../types';
import { Search, Sparkles, Flame, Plus, Menu as MenuIcon, ArrowRight } from 'lucide-react';

interface MenuSectionProps {
  language: Language;
  onSelectDish: (dish: MenuItem) => void;
  onQuickAdd: (dish: MenuItem) => void;
  selectedDishesCount: number;
  onScrollToReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  language,
  onSelectDish,
  onQuickAdd,
  selectedDishesCount,
  onScrollToReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelKk: 'Барлығы', labelRu: 'Все блюда' },
    { id: 'steaks', labelKk: 'Стейктер & Ыстық', labelRu: 'Стейки & Гриль' },
    { id: 'asian', labelKk: 'Азиялық фьюжн', labelRu: 'Азиатский фьюжн' },
    { id: 'salads', labelKk: 'Буррата & Закуски', labelRu: 'Буррата & Закуски' },
    { id: 'tea', labelKk: 'Шай рәсімі', labelRu: 'Чайная церемония' },
    { id: 'hookah', labelKk: 'Премиум Түтін', labelRu: 'Премиум Дым' },
    { id: 'bar', labelKk: 'Миксология & Бар', labelRu: 'Миксология & Бар' },
    { id: 'desserts', labelKk: 'Десерттер', labelRu: 'Десерты' },
  ];

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const nameMatch =
        dish.nameKk.toLowerCase().includes(q) ||
        dish.nameRu.toLowerCase().includes(q) ||
        dish.descKk.toLowerCase().includes(q) ||
        dish.descRu.toLowerCase().includes(q);

      return matchesCategory && nameMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="w-full bg-[#0e0e12]/70 py-20 border-y border-[#4d4635]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.28em] text-[#f2ca50] font-semibold">
            Haute Gastronomy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e4e1e7]">
            {language === 'kk' ? 'Мәзір мен Дәмдер Палитрасы' : 'Палитра Вкусов и Меню'}
          </h2>
          <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
            {language === 'kk'
              ? 'Шеф-аспазымыздың арнайы рецептурасы бойынша дайындалатын стейктер, балғын теңіз өнімдері және қолдан әзірленетін сусындар.'
              : 'Стейки на огне по авторской рецептуре бренд-шефа, свежие морепродукты и крафтовые барные эликсиры.'}
          </p>

          {/* Search bar */}
          <div className="relative w-full max-w-md mt-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d0c5af]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'kk' ? 'Мәзірден тағам немесе сусын іздеу...' : 'Поиск блюда или напитка...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#1b1b1f] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-xs outline-none transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#f2ca50] text-[#131317] shadow-[0_0_15px_rgba(242,202,80,0.3)]'
                    : 'bg-[#1f1f23] text-[#d0c5af] hover:text-[#e4e1e7] hover:border-[#f2ca50]/40 border border-[#4d4635]/40'
                }`}
              >
                {language === 'kk' ? cat.labelKk : cat.labelRu}
              </button>
            ))}
          </div>
        </div>

        {/* Pre-order notification badge if items are selected */}
        {selectedDishesCount > 0 && (
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#2a292e] border border-[#f2ca50]/50 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2ca50] animate-ping" />
              <span className="text-xs sm:text-sm text-[#e4e1e7] font-medium">
                {language === 'kk'
                  ? `Сіз үстел брондауына ${selectedDishesCount} тағам таңдадыңыз.`
                  : `Вы выбрали ${selectedDishesCount} блюд для предзаказа к брони стола.`}
              </span>
            </div>
            <button
              onClick={onScrollToReservation}
              className="text-xs font-bold uppercase tracking-wider text-[#f2ca50] hover:text-[#ffe088] flex items-center gap-1"
            >
              <span>{language === 'kk' ? 'Брондауға өту' : 'Перейти к брони'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="rounded-2xl overflow-hidden bg-[#1b1b1f] border border-[#4d4635]/30 hover:border-[#f2ca50]/40 shadow-xl group flex flex-col transition-all duration-300"
            >
              {/* Image Banner */}
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => onSelectDish(dish)}
              >
                <img
                  src={dish.image}
                  alt={language === 'kk' ? dish.nameKk : dish.nameRu}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1f] via-transparent to-transparent opacity-80" />

                {dish.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0e0e12]/80 backdrop-blur-md text-[#f2ca50] text-[11px] font-bold uppercase tracking-wider border border-[#f2ca50]/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {dish.badge}
                  </span>
                )}

                {dish.spicy && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-rose-500/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-white" />
                    Hot
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-1.5 cursor-pointer" onClick={() => onSelectDish(dish)}>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg sm:text-xl text-[#e4e1e7] font-semibold group-hover:text-[#f2ca50] transition-colors">
                      {language === 'kk' ? dish.nameKk : dish.nameRu}
                    </h3>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="font-serif text-lg font-bold text-[#f2ca50]">
                        {dish.price.toLocaleString()} ₸
                      </span>
                      {dish.oldPrice && (
                        <span className="text-[11px] text-[#d0c5af] line-through">
                          {dish.oldPrice.toLocaleString()} ₸
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#d0c5af] line-clamp-2 leading-relaxed">
                    {language === 'kk' ? dish.descKk : dish.descRu}
                  </p>
                </div>

                {/* Card Bottom Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-[#4d4635]/30 text-xs">
                  <span className="text-[#d0c5af] font-medium">{dish.weight}</span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="text-[#e7c08b] hover:text-[#f2ca50] font-semibold tracking-wider uppercase text-[11px]"
                    >
                      {language === 'kk' ? 'Құрамы' : 'Детали'}
                    </button>
                    <button
                      onClick={() => onQuickAdd(dish)}
                      className="p-1.5 rounded-lg bg-[#2a292e] text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#131317] transition-all"
                      title={language === 'kk' ? 'Брондауға қосу' : 'Добавить к брони'}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu WhatsApp Card */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-[#1b1b1f] border border-[#4d4635]/40 shadow-xl gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2a292e] border border-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50] shrink-0">
              <MenuIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-serif text-lg text-[#e4e1e7] font-semibold">
                {language === 'kk'
                  ? 'Толық мәзір мен Бар картасын көргіңіз келе ме?'
                  : 'Хотите ознакомиться с полным меню и картой бара?'}
              </h4>
              <p className="text-xs sm:text-sm text-[#d0c5af]">
                {language === 'kk'
                  ? 'Қосымша 80-нен астам асхана тағамы, сомелье коллекциясы және сигар картасы.'
                  : 'Более 80 позиций европейской и паназиатской кухни, винный погреб и премиальная табачная карта.'}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
              language === 'kk'
                ? 'Сәлеметсіз бе! Baoli Highvill толық мәзірін және бар картасын жібере аласыз ба?'
                : 'Здравствуйте! Отправьте, пожалуйста, полное меню и барную карту Baoli Highvill.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#1f1f23] border border-[#f2ca50]/40 text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#131317] font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            {language === 'kk' ? 'Мәзірді WhatsApp-тан сұрау' : 'Запросить меню в WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  );
};
