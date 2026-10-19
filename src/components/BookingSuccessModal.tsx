import React, { useState } from 'react';
import { ReservationData, Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CheckCircle2, Copy, Check, MessageCircle, X, MapPin, Calendar, Users, Phone } from 'lucide-react';

interface BookingSuccessModalProps {
  bookingData: ReservationData | null;
  bookingCode: string;
  language: Language;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  bookingData,
  bookingCode,
  language,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!bookingData) return null;

  const handleCopy = () => {
    const text = `Baoli Highvill Astana | Брондау №${bookingCode}\nҚонақ: ${bookingData.name}\nТел: ${bookingData.phone}\nКүні: ${bookingData.date} | ${bookingData.time}\nАймақ: ${bookingData.zone}\nҚонақ саны: ${bookingData.guests}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    const dishesText = bookingData.selectedDishes.length > 0
      ? `%0A%0A🍽️ Алдын ала таңдалған тағамдар:%0A` +
        bookingData.selectedDishes
          .map((d) => `• ${d.item.nameKk} x ${d.quantity} (${(d.item.price * d.quantity).toLocaleString()} ₸)`)
          .join('%0A')
      : '';

    const message =
      `Сәлеметсіз бе! Baoli Highvill сайтынан үстелге өтінім жібердім:%0A%0A` +
      `📌 Бронь коды: ${bookingCode}%0A` +
      `👤 Есімі: ${encodeURIComponent(bookingData.name)}%0A` +
      `📞 Телефон: ${encodeURIComponent(bookingData.phone)}%0A` +
      `👥 Қонақтар: ${encodeURIComponent(bookingData.guests)}%0A` +
      `🏛️ Аймақ: ${encodeURIComponent(bookingData.zone)}%0A` +
      `📅 Күні: ${encodeURIComponent(bookingData.date)}%0A` +
      `⏰ Уақыты: ${encodeURIComponent(bookingData.time)}` +
      dishesText +
      (bookingData.comments ? `%0A💬 Тілектер: ${encodeURIComponent(bookingData.comments)}` : '');

    window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#1b1b1f] border border-[#f2ca50]/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 border border-[#f2ca50]/30 flex items-center justify-center text-[#f2ca50]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#e7c08b] font-semibold">
            {language === 'kk' ? 'Өтінім сәтті қабылданды' : 'Заявка успешно принята'}
          </span>
          <h3 className="font-serif text-2xl text-[#e4e1e7] font-bold">
            {language === 'kk' ? 'Үстел брондауы рәсімделді' : 'Бронь стола оформлена'}
          </h3>
          <p className="text-xs text-[#d0c5af] max-w-sm">
            {language === 'kk'
              ? 'Әкімші 2-5 минут ішінде өтініміңізді WhatsApp арқылы растайды.'
              : 'Администратор подтвердит детали вашей брони в WhatsApp в течение 2-5 минут.'}
          </p>
        </div>

        {/* Booking Card */}
        <div className="p-4 rounded-xl bg-[#2a292e] border border-[#4d4635]/40 flex flex-col gap-3 text-xs">
          <div className="flex items-center justify-between border-b border-[#4d4635]/30 pb-2">
            <span className="text-[#d0c5af] uppercase tracking-wider text-[10px]">
              {language === 'kk' ? 'Бронь коды' : 'Код брони'}
            </span>
            <span className="font-mono font-bold text-[#f2ca50] text-sm">{bookingCode}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[#e4e1e7]">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#e7c08b]" />
              <span>{bookingData.guests}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#e7c08b]" />
              <span>{bookingData.date} • {bookingData.time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e7c08b]" />
              <span className="truncate">{bookingData.zone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#e7c08b]" />
              <span className="truncate">{bookingData.phone}</span>
            </div>
          </div>

          {bookingData.selectedDishes.length > 0 && (
            <div className="border-t border-[#4d4635]/30 pt-2 flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-[#e7c08b] font-semibold">
                {language === 'kk' ? 'Алдын ала таңдалған тағамдар:' : 'Предзаказ блюд:'}
              </span>
              {bookingData.selectedDishes.map((item, idx) => (
                <div key={idx} className="flex justify-between text-[#d0c5af]">
                  <span>{item.item.nameKk} x {item.quantity}</span>
                  <span className="text-[#f2ca50]">{(item.item.price * item.quantity).toLocaleString()} ₸</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={openWhatsApp}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#f2ca50] text-[#131317] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#ffe088] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'kk' ? 'WhatsApp арқылы растауды ашу' : 'Открыть подтверждение в WhatsApp'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#2a292e] text-[#d0c5af] hover:text-[#e4e1e7] text-xs font-semibold transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (language === 'kk' ? 'Көшірілді!' : 'Скопировано!') : (language === 'kk' ? 'Мәліметтерді көшіріп алу' : 'Скопировать данные брони')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
