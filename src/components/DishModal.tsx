import React, { useState } from 'react';
import { MenuItem, Language } from '../types';
import { X, Flame, Sparkles, Check, Plus, Minus, ShoppingBag } from 'lucide-react';

interface DishModalProps {
  dish: MenuItem | null;
  language: Language;
  onClose: () => void;
  onAddToReservation: (dish: MenuItem, quantity: number) => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, language, onClose, onAddToReservation }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToReservation(dish, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  const name = language === 'kk' ? dish.nameKk : dish.nameRu;
  const desc = language === 'kk' ? dish.descKk : dish.descRu;
  const ingredients = language === 'kk' ? dish.ingredientsKk : dish.ingredientsRu;
  const pairing = language === 'kk' ? dish.pairingKk : dish.pairingRu;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#1b1b1f] border border-[#f2ca50]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#131317]/80 hover:bg-[#f2ca50] hover:text-[#131317] text-[#e4e1e7] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0 bg-[#0e0e12]">
          <img
            src={dish.image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1f] via-transparent to-transparent opacity-90" />

          {dish.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#f2ca50] text-[#131317] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {dish.badge}
            </span>
          )}

          {dish.spicy && (
            <span className="absolute top-4 left-36 px-2.5 py-1 rounded-full bg-rose-500/90 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-white" />
              {language === 'kk' ? 'Ащы' : 'Острое'}
            </span>
          )}
        </div>

        {/* Body Details */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e4e1e7] font-semibold">{name}</h3>
              <span className="text-xs text-[#d0c5af] font-medium tracking-wider uppercase mt-1 inline-block">
                {dish.weight} {dish.calories && `• ${dish.calories}`}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-serif text-2xl font-bold text-[#f2ca50]">
                {dish.price.toLocaleString()} ₸
              </span>
              {dish.oldPrice && (
                <span className="text-xs text-[#d0c5af] line-through">
                  {dish.oldPrice.toLocaleString()} ₸
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-[#d0c5af] leading-relaxed">{desc}</p>

          {/* Ingredients list */}
          {ingredients && ingredients.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#e7c08b] font-semibold">
                {language === 'kk' ? 'Құрамы мен ингредиенттері:' : 'Состав и ингредиенты:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ingredients.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#2a292e] text-[#e4e1e7] text-xs border border-[#4d4635]/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pairing Advice */}
          {pairing && (
            <div className="p-3.5 rounded-xl bg-[#2a292e]/60 border border-[#4d4635]/50 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
              <div className="text-xs text-[#d0c5af] leading-relaxed">
                <strong className="text-[#e7c08b]">
                  {language === 'kk' ? 'Шеф ұсынысы: ' : 'Рекомендация шефа: '}
                </strong>
                {pairing}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions: Quantity & Add to Booking */}
        <div className="p-4 sm:p-6 bg-[#131317] border-t border-[#4d4635]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-[#1b1b1f] border border-[#4d4635]/50 rounded-lg p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1.5 text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-sm text-[#e4e1e7]">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            disabled={addedSuccess}
            className={`w-full sm:w-auto flex-grow flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              addedSuccess
                ? 'bg-emerald-500 text-white'
                : 'bg-[#f2ca50] text-[#131317] hover:bg-[#ffe088] shadow-lg'
            }`}
          >
            {addedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>{language === 'kk' ? 'Тапсырысқа қосылды!' : 'Добавлено в предзаказ!'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {language === 'kk'
                    ? `Үстел брондауына қосу (${(dish.price * quantity).toLocaleString()} ₸)`
                    : `Добавить к брони стола (${(dish.price * quantity).toLocaleString()} ₸)`}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
