import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OffersBanner } from './components/OffersBanner';
import { AmbienceGallery } from './components/AmbienceGallery';
import { MenuSection } from './components/MenuSection';
import { DishModal } from './components/DishModal';
import { ReservationSection } from './components/ReservationSection';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Language, MenuItem, ReservationData } from './types';
import { MENU_ITEMS, RESTAURANT_INFO } from './data/restaurantData';
import { MessageCircle, Calendar } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('kk');
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [preselectedDishes, setPreselectedDishes] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [preselectedZone, setPreselectedZone] = useState<string>('Негізгі Лаундж Холл');
  const [bookingSuccessData, setBookingSuccessData] = useState<ReservationData | null>(null);
  const [bookingCode, setBookingCode] = useState<string>('');

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClaimOffer = () => {
    // Add hookah special item if not present
    const hookahItem = MENU_ITEMS.find((m) => m.id === 'premium-shisha-set');
    if (hookahItem) {
      setPreselectedDishes((prev) => {
        const existing = prev.find((p) => p.item.id === hookahItem.id);
        if (existing) {
          return prev;
        }
        return [...prev, { item: hookahItem, quantity: 1 }];
      });
    }
    scrollToReservation();
  };

  const handleSelectZoneForBooking = (zoneName: string) => {
    setPreselectedZone(zoneName);
    scrollToReservation();
  };

  const handleAddDishToReservation = (dish: MenuItem, quantity: number) => {
    setPreselectedDishes((prev) => {
      const idx = prev.findIndex((p) => p.item.id === dish.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += quantity;
        return copy;
      }
      return [...prev, { item: dish, quantity }];
    });
  };

  const handleQuickAddDish = (dish: MenuItem) => {
    handleAddDishToReservation(dish, 1);
  };

  const handleRemovePreselectedDish = (dishId: string) => {
    setPreselectedDishes((prev) => prev.filter((p) => p.item.id !== dishId));
  };

  const handleBookingSuccess = (data: ReservationData, code: string) => {
    setBookingSuccessData(data);
    setBookingCode(code);
  };

  return (
    <div className="min-h-screen bg-[#131317] text-[#e4e1e7] flex flex-col font-sans selection:bg-[#f2ca50] selection:text-[#131317]">
      {/* Top Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenBooking={scrollToReservation}
      />

      <main className="w-full flex flex-col">
        {/* Hero Section */}
        <Hero language={language} onOpenBooking={scrollToReservation} />

        {/* Special 5 500 KZT Hookah & Tea Offer Banner */}
        <OffersBanner language={language} onClaimOffer={handleClaimOffer} />

        {/* Ambience & Spatial Bento Gallery */}
        <AmbienceGallery
          language={language}
          onSelectZoneForBooking={handleSelectZoneForBooking}
        />

        {/* Haute Gastronomy Menu */}
        <MenuSection
          language={language}
          onSelectDish={(dish) => setSelectedDishForModal(dish)}
          onQuickAdd={handleQuickAddDish}
          selectedDishesCount={preselectedDishes.length}
          onScrollToReservation={scrollToReservation}
        />

        {/* Online Reservation Form */}
        <ReservationSection
          language={language}
          preselectedZone={preselectedZone}
          preselectedDishes={preselectedDishes}
          onRemovePreselectedDish={handleRemovePreselectedDish}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* 2GIS Reviews & Trust */}
        <ReviewsSection language={language} />

        {/* Location & Navigation */}
        <LocationSection language={language} />

        {/* Frequently Asked Questions */}
        <FaqSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} onOpenBooking={scrollToReservation} />

      {/* Dish Detailed Modal */}
      {selectedDishForModal && (
        <DishModal
          dish={selectedDishForModal}
          language={language}
          onClose={() => setSelectedDishForModal(null)}
          onAddToReservation={handleAddDishToReservation}
        />
      )}

      {/* Booking Confirmed Receipt Modal */}
      {bookingSuccessData && (
        <BookingSuccessModal
          bookingData={bookingSuccessData}
          bookingCode={bookingCode}
          language={language}
          onClose={() => setBookingSuccessData(null)}
        />
      )}

      {/* Mobile Sticky Quick Action Bar */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#1b1b1f]/95 backdrop-blur-xl border border-[#f2ca50]/30 rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
            language === 'kk'
              ? 'Сәлеметсіз бе! Baoli Highvill-де үстел брондағым келеді.'
              : 'Здравствуйте! Хочу забронировать стол в Baoli Highvill.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#2a292e] text-[#e7c08b] text-xs font-semibold uppercase tracking-wider border border-[#4d4635]"
        >
          <MessageCircle className="w-4 h-4 text-[#f2ca50]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={scrollToReservation}
          className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#f2ca50] text-[#131317] text-xs font-bold uppercase tracking-wider shadow-lg"
        >
          <Calendar className="w-4 h-4" />
          <span>{language === 'kk' ? 'Үстел брондау' : 'Бронь стола'}</span>
        </button>
      </div>
    </div>
  );
}
