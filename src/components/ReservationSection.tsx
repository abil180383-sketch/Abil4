import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO, ZONES } from '../data/restaurantData';
import { Language, MenuItem, ReservationData } from '../types';
import { Calendar, Users, Phone, Clock, MessageCircle, ShieldCheck, Sparkles, X } from 'lucide-react';

interface ReservationSectionProps {
  language: Language;
  preselectedZone?: string;
  preselectedDishes: { item: MenuItem; quantity: number }[];
  onRemovePreselectedDish: (dishId: string) => void;
  onBookingSuccess: (data: ReservationData, bookingCode: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  language,
  preselectedZone,
  preselectedDishes,
  onRemovePreselectedDish,
  onBookingSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('1-2 адам');
  const [zone, setZone] = useState('Негізгі Лаундж Холл');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [comments, setComments] = useState('');

  // Update selected zone if passed from props
  useEffect(() => {
    if (preselectedZone) {
      setZone(preselectedZone);
    }
  }, [preselectedZone]);

  // Set today's date as initial value
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const guestOptions = [
    { id: '1-2 адам', labelKk: '1-2 адам', labelRu: '1-2 гостя' },
    { id: '3-4 адам', labelKk: '3-4 адам', labelRu: '3-4 гостя' },
    { id: '5-8 адам', labelKk: '5-8 адам', labelRu: '5-8 гостей' },
    { id: 'VIP Зал (8-15 адам)', labelKk: 'VIP Зал (8-15)', labelRu: 'VIP Зал (8-15)' },
  ];

  const timeOptions = [
    { value: '15:00', label: '15:00 (Акция 5 500 ₸)' },
    { value: '16:00', label: '16:00 (Акция 5 500 ₸)' },
    { value: '17:00', label: '17:00 (Акция 5 500 ₸)' },
    { value: '18:00', label: '18:00 (Акция 5 500 ₸)' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00 (Танымал)' },
    { value: '21:00', label: '21:00 (Танымал)' },
    { value: '22:00', label: '22:00' },
    { value: '23:00', label: '23:00' },
    { value: '00:00', label: '00:00' },
    { value: '01:00', label: '01:00' },
    { value: '02:00', label: '02:00' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingCode = `BAOLI-${Math.floor(1000 + Math.random() * 9000)}`;
    const data: ReservationData = {
      name,
      phone,
      guests,
      zone,
      date,
      time,
      selectedDishes: preselectedDishes,
      comments,
    };

    onBookingSuccess(data, bookingCode);
  };

  return (
    <section id="reservation" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
              {language === 'kk' ? 'Онлайн брондау' : 'Онлайн Бронирование'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e4e1e7] leading-tight">
              {language === 'kk' ? (
                <>
                  Өз кешіңізді алдын ала <span className="italic text-[#f2ca50]">жоспарлаңыз</span>
                </>
              ) : (
                <>
                  Спланируйте вечер <span className="italic text-[#f2ca50]">заблаговременно</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? 'Baoli Highvill-дегі VIP бөлмелер мен жайлы орындар шектеулі. Салтанатты іс-шаралар, іскерлік түскі ас немесе романтикалық кездесу үшін үстелді алдын ала брондауды ұсынамыз.'
                : 'Количество столиков и VIP залов в Baoli ограничено. Рекомендуем оформить предварительную бронь для деловых встреч, дней рождения или свиданий.'}
            </p>
          </div>

          {/* Highlights Info */}
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#1b1b1f] border border-[#4d4635]/40 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#f2ca50]/15 flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#e4e1e7]">
                  {language === 'kk' ? 'Дереу растау' : 'Мгновенное подтверждение'}
                </span>
                <p className="text-xs text-[#d0c5af] mt-0.5">
                  {language === 'kk'
                    ? 'Тапсырысыңыз туралы ақпарат бірден менеджердің WhatsApp нөміріне жетеді.'
                    : 'Заявка поступает напрямую администратору и подтверждается за пару минут.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#f2ca50]/15 flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#e4e1e7]">
                  {language === 'kk' ? 'Жеке VIP Бөлмелер' : 'Приватные VIP Залы'}
                </span>
                <p className="text-xs text-[#d0c5af] mt-0.5">
                  {language === 'kk'
                    ? 'Караоке, жеке дыбыс жүйесі және 15 адамға дейінгі жеке қызмет.'
                    : 'Профессиональное караоке, шумоизоляция и личный официант до 15 персон.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-[#4d4635]/30">
              <div className="w-9 h-9 rounded-lg bg-[#f2ca50]/15 flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#d0c5af] uppercase tracking-wider">
                  {language === 'kk' ? 'Қоңырау шалу орталығы' : 'Телефон бронирования'}
                </span>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="font-serif text-xl font-bold text-[#f2ca50] hover:text-[#ffe088] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
                <span className="text-[11px] text-[#d0c5af]/80">
                  {language === 'kk' ? 'Күнделікті 24/7 белсенді' : 'Ежедневно 24/7'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-[#1b1b1f] border border-[#f2ca50]/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#4d4635]/30">
              <h3 className="font-serif text-xl sm:text-2xl text-[#e4e1e7] font-semibold">
                {language === 'kk' ? 'Үстелге өтінім беру' : 'Форма бронирования стола'}
              </h3>
              <span className="text-[11px] font-bold text-[#e7c08b] uppercase tracking-widest">
                {language === 'kk' ? 'Қадамдық пішін' : 'Быстрая бронь'}
              </span>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold">
                  {language === 'kk' ? 'Сіздің есіміңіз' : 'Ваше имя'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'kk' ? 'Мысалы: Әнуар' : 'Например: Ануар'}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a292e] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-sm outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold">
                  {language === 'kk' ? 'Телефон нөмірі' : 'Номер телефона'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (708) 708-99-97"
                  className="w-full px-4 py-3 rounded-lg bg-[#2a292e] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Guest Count */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>{language === 'kk' ? 'Қонақтар саны' : 'Количество персон'}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {guestOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setGuests(opt.id)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-center transition-all ${
                      guests === opt.id
                        ? 'bg-[#f2ca50] text-[#131317] shadow-md font-bold'
                        : 'bg-[#2a292e] text-[#d0c5af] hover:text-[#e4e1e7] border border-[#4d4635]/40'
                    }`}
                  >
                    {language === 'kk' ? opt.labelKk : opt.labelRu}
                  </button>
                ))}
              </div>
            </div>

            {/* Zone Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold">
                {language === 'kk' ? 'Қалаулы зал / аймақ' : 'Предпочитаемая зона'}
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2a292e] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-sm outline-none transition-colors"
              >
                {ZONES.map((z) => (
                  <option key={z.id} value={language === 'kk' ? z.nameKk : z.nameRu}>
                    {language === 'kk' ? z.nameKk : z.nameRu} ({z.capacity})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#f2ca50]" />
                  <span>{language === 'kk' ? 'Күні' : 'Дата'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a292e] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-sm outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#f2ca50]" />
                  <span>{language === 'kk' ? 'Уақыты (15:00 - 03:00)' : 'Время (15:00 - 03:00)'}</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a292e] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-sm outline-none transition-colors"
                >
                  {timeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pre-selected Dishes from Menu if any */}
            {preselectedDishes.length > 0 && (
              <div className="p-4 rounded-xl bg-[#2a292e]/80 border border-[#f2ca50]/30 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-[#f2ca50] font-semibold">
                  {language === 'kk' ? 'Таңдалған мәзір тағамдары:' : 'Предзаказ блюд:'}
                </span>
                <div className="flex flex-col gap-1.5">
                  {preselectedDishes.map(({ item, quantity }) => (
                    <div key={item.id} className="flex items-center justify-between text-xs text-[#e4e1e7]">
                      <span>{item.nameKk} x {quantity}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#f2ca50] font-bold">{(item.price * quantity).toLocaleString()} ₸</span>
                        <button
                          type="button"
                          onClick={() => onRemovePreselectedDish(item.id)}
                          className="text-[#d0c5af] hover:text-rose-400 p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special Wishes */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-[#d0c5af] font-semibold">
                {language === 'kk' ? 'Қосымша тілектеріңіз (міндетті емес)' : 'Пожелания к бронированию (необязательно)'}
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={2}
                placeholder={
                  language === 'kk'
                    ? 'Мысалы: Терезе маңындағы үстел, туған күн мерекесіне торт немесе гүл ұйымдастыру қажет...'
                    : 'Например: Столик у окна, комплимент ко дню рождения, ваза для цветов...'
                }
                className="w-full px-4 py-2.5 rounded-lg bg-[#2a292e] border border-[#4d4635]/60 focus:border-[#f2ca50] text-[#e4e1e7] text-sm outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#f2ca50] text-[#131317] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:bg-[#ffe088] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {language === 'kk'
                  ? 'Брондауды растау (WhatsApp-пен байланысу)'
                  : 'Подтвердить бронь (WhatsApp)'}
              </span>
            </button>

            <p className="text-[11px] text-[#d0c5af]/70 text-center -mt-2">
              {language === 'kk'
                ? 'Түймені басқанда мәліметтер әкімшіге тікелей WhatsApp арқылы жіберіледі.'
                : 'При нажатии откроется диалог с администратором Baoli Highvill для мгновенного подтверждения.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
