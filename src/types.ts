export type Language = 'kk' | 'ru';

export interface MenuItem {
  id: string;
  nameKk: string;
  nameRu: string;
  category: 'all' | 'steaks' | 'asian' | 'salads' | 'tea' | 'bar' | 'hookah' | 'desserts';
  price: number;
  oldPrice?: number;
  weight: string;
  descKk: string;
  descRu: string;
  image: string;
  badge?: string;
  spicy?: boolean;
  isChefSpecial?: boolean;
  calories?: string;
  ingredientsKk?: string[];
  ingredientsRu?: string[];
  pairingKk?: string;
  pairingRu?: string;
}

export interface ZoneItem {
  id: string;
  nameKk: string;
  nameRu: string;
  subtitleKk: string;
  subtitleRu: string;
  capacity: string;
  descKk: string;
  descRu: string;
  image: string;
  featuresKk: string[];
  featuresRu: string[];
  badge?: string;
  tablesCount: number;
  minDeposit?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  cityKk: string;
  cityRu: string;
  rating: number;
  date: string;
  textKk: string;
  textRu: string;
  source: '2GIS' | 'Google' | 'Yandex';
  avatarColor: string;
}

export interface FaqItem {
  questionKk: string;
  questionRu: string;
  answerKk: string;
  answerRu: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  zone: string;
  selectedDishes: { item: MenuItem; quantity: number }[];
  comments: string;
}
