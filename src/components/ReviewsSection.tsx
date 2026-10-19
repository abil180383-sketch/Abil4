import React, { useState } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Language, ReviewItem } from '../types';
import { Star, Award, MessageSquarePlus, Check, X } from 'lucide-react';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: authorName,
      cityKk: 'Астана қ. қонағы',
      cityRu: 'Гость из Астаны',
      rating: userRating,
      date: 'Жаңа ғана',
      textKk: `«${reviewText}»`,
      textRu: `«${reviewText}»`,
      source: '2GIS',
      avatarColor: 'bg-primary/20 text-[#f2ca50]',
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewModal(false);
      setAuthorName('');
      setReviewText('');
      setUserRating(5);
    }, 1500);
  };

  return (
    <section id="reviews" className="w-full bg-[#0e0e12] py-20 border-b border-[#4d4635]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold">
              {language === 'kk' ? 'Шынайы Пікірлер' : 'Честные Отзывы'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e4e1e7] leading-tight">
              {language === 'kk' ? 'Біз туралы қонақтарымыз не дейді?' : 'Что говорят наши гости?'}
            </h2>
            <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
              {language === 'kk'
                ? '2GIS платформасындағы 955-тен астам бағалау нәтижесінде Baoli Highvill елорданың ең жоғары бағаланған лаундж мекендерінің біріне айналды.'
                : 'По результатам более чем 955 оценок в 2GIS, Baoli Highvill входит в число лучших лаундж-ресторанов столицы с рейтингом 4.9.'}
            </p>
          </div>

          {/* 2GIS Metric Badge & Leave Review Trigger */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="p-4 rounded-xl bg-[#1b1b1f] border border-[#4d4635]/40 flex items-center gap-4 shadow-md">
              <div className="flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-[#f2ca50] text-[#131317] font-bold">
                <span className="font-serif text-xl sm:text-2xl leading-none">4.9</span>
                <div className="flex text-[#131317] text-[10px] mt-1">★★★★★</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-[#e4e1e7] font-bold tracking-wider">
                  <Award className="w-4 h-4 text-[#f2ca50]" />
                  <span>2GIS Awards Жеңімпазы</span>
                </div>
                <span className="text-[11px] text-[#e7c08b]">
                  {language === 'kk' ? 'Астана лаундж-барлары санатында' : 'В категории Лаундж-бары Астаны'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#2a292e] text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#131317] border border-[#f2ca50]/30 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{language === 'kk' ? 'Пікір қалдыру' : 'Оставить отзыв'}</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#1b1b1f] border border-[#4d4635]/30 hover:border-[#f2ca50]/40 shadow-lg flex flex-col justify-between gap-6 transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f2ca50] text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f2ca50]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#d0c5af] font-medium">{rev.source}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed italic">
                  {language === 'kk' ? rev.textKk : rev.textRu}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#4d4635]/20">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-serif text-sm ${rev.avatarColor}`}>
                  {rev.author[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#e4e1e7]">{rev.author}</span>
                  <span className="text-[10px] text-[#d0c5af]">
                    {language === 'kk' ? rev.cityKk : rev.cityRu} • {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#1b1b1f] border border-[#f2ca50]/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#d0c5af] hover:text-[#f2ca50]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl text-[#e4e1e7] font-semibold">
              {language === 'kk' ? 'Baoli туралы пікір қалдыру' : 'Оставить отзыв о Baoli'}
            </h3>

            <form onSubmit={handleAddReview} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#d0c5af]">{language === 'kk' ? 'Бағалау:' : 'Оценка:'}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= userRating ? 'text-[#f2ca50] fill-[#f2ca50]' : 'text-[#4d4635]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase text-[#d0c5af] font-medium">
                  {language === 'kk' ? 'Есіміңіз' : 'Ваше имя'}
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder={language === 'kk' ? 'Мысалы: Бауыржан' : 'Например: Бауыржан'}
                  className="w-full px-3 py-2 rounded-lg bg-[#2a292e] border border-[#4d4635] text-[#e4e1e7] text-xs outline-none focus:border-[#f2ca50]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase text-[#d0c5af] font-medium">
                  {language === 'kk' ? 'Сіздің пікіріңіз' : 'Ваш отзыв'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={
                    language === 'kk'
                      ? 'Атмосфера, тағамдар немесе қызмет көрсету туралы жазыңыз...'
                      : 'Напишите об атмосфере, кухне или обслуживании...'
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#2a292e] border border-[#4d4635] text-[#e4e1e7] text-xs outline-none focus:border-[#f2ca50] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#f2ca50] text-[#131317] hover:bg-[#ffe088]'
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{language === 'kk' ? 'Пікіріңіз қосылды!' : 'Отзыв опубликован!'}</span>
                  </>
                ) : (
                  <span>{language === 'kk' ? 'Пікірді жариялау' : 'Опубликовать'}</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
