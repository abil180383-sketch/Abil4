import { MenuItem, ZoneItem, ReviewItem, FaqItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Baoli Highvill Astana',
  brand: 'BAOLI',
  taglineKk: 'Ғажайып дәм мен бекзат кештер кеңістігі',
  taglineRu: 'Пространство изысканного вкуса и благородных вечеров',
  phone: '+7 (708) 708-99-97',
  phoneRaw: '77087089997',
  addressKk: 'Астана қаласы, Сарайшық ауданы, Ахмет Байтұрсынұлы к-сі, 9 үй, блок F2 (Highvill Astana)',
  addressRu: 'г. Астана, район Сарайшык, ул. Ахмета Байтурсынова, д. 9, блок F2 (Highvill Astana)',
  hoursKk: 'Күнделікті: 15:00 – 04:00',
  hoursRu: 'Ежедневно: 15:00 – 04:00',
  rating2gis: '4.9',
  reviewsCount: '955+',
  instagram: 'https://instagram.com/baoli.highvill',
  instagramHandle: '@baoli.highvill',
  map2gis: 'https://2gis.kz/astana/firm/70000001111842795',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ROJQazp0_oeskzl7hTp3HzwGjr5TGh9IFd4w5jQQkLWilhE9qlruhHUeqxQLeHMNMSiadlyu3Uu8Vd0yAv2d_IgWh22Us22qE1OvOTD5HaibgirTkbWrtwCIBPchPAJGNM_uiAoKRh5ysrTuSzuDmw7A594-AV_iP00b5KzN3DTcMk8rR0BwQEVGoLT4RQCQTirsYjMEa-kcCACqaYwYToxi9qioIF75ogqA8lF-RZqPPciho1m7Ng',
  heroMainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfNeiSKLY2t7BEHAhpzoSm8S3GK1b8ax4pX3kQoq3mRccCk4etrtjVgFlEkfrykZwIr3_elIlL-0MawKiaOPFUvlLk-DmGo1lKqQ8cAvshG12z7n7jl8Q--bymHg7gxdmQPxJgMoVk4lZ5AliCUqPIMNfdoq8gLrHEQ3daVDn41SkoVTsdQ2yVobTFkpm1j3YNBObWTd_s-KYQ27w_EfURDhsPSDCRr1kwsi1kTiVUOPaNDC61lEXowQ',
  heroMixologistImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnYq7Mdn27SF3KcrpJjnHJBDCOK9bcEhlf0G7GaFq6dO8f5CAO6vwDwSy4GvS2weaDnXr7gavh16t2SBjRy8_whXME70DOWCXpY7Pmas7tr_9Xv_nY9EYSzFFoPFvZoUNDD548U05aUmN3Jq-X4cWfGesRE-Yz_53SlSzl5ypANiuL_0CkAHNJcHkG-K5VNHnoYvJb4Yl0llAWOjZmyHlT_3jMA7t28bjojOy4kVTJvoujawDKjsjieg'
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'ribeye-steak',
    nameKk: 'Мәрмәр Рибай Стейкі',
    nameRu: 'Стейк Рибай Прайм',
    category: 'steaks',
    price: 14500,
    weight: '380 г',
    descKk: 'Жоғары сұрыпты мәрмәр сиыр еті, трюфельді соус, хоспер пешінде піскен балауса көкөністер және арнайы тұз кристаллдары.',
    descRu: 'Мраморная говядина зернового откорма Prime, трюфельный демигляс, овощи гриль из печи Josper и копченая морская соль.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH9z3NBubIwLImRYwROt7FtU-j67xpdFpy6LNtRgKiajk6WsRSBZF-O75akv3Qk4vjaU5CHLwRBzRqb_YHYK1CwoI3E7DvB87RcieGC_qbaC34HIkVHGUMoBm7KCMt5g9DBmMMttUX43CNUcxxsDBbU9KPoC-gQz9ASvKVGaagFU2_Ok_qnkToGJI_ijWYJDsCJX2bTll2uD1qyf-ish6GMKt6Q_T_cCmaUSiEHXMZIKQu3h8d6zcNzw',
    badge: "Chef's Signature",
    isChefSpecial: true,
    calories: '680 ккал',
    ingredientsKk: ['Мәрмәр еті Рибай (Black Angus)', 'Хоспер спаржасы', 'Шие қызанақтары', 'Трюфель тұздығы', 'Розмарин бұтағы'],
    ingredientsRu: ['Мраморная говядина Рибай (Black Angus)', 'Спаржа гриль', 'Черри томаты', 'Трюфельный соус', 'Веточка розмарина'],
    pairingKk: 'Қызыл авторлық шараптармен немесе Baoli Smoked Old Fashioned коктейлімен үйлеседі.',
    pairingRu: 'Идеально сочетается с сухими красными винами или коктейлем Baoli Smoked Old Fashioned.'
  },
  {
    id: 'salmon-teriyaki',
    nameKk: 'Лосось терияки глазурінде',
    nameRu: 'Лосось в глазури терияки',
    category: 'steaks',
    price: 9800,
    weight: '320 г',
    descKk: 'Атлант мұхитының лосось филесі, үй жағдайында қайнатылған терияки глазурі, қытырлақ брокколи және жабайы күріш гарнирі.',
    descRu: 'Филе атлантического лосося на гриле, домашняя глазурь терияки, брокколи аль-денте и гарнир из дикого риса.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA1IJTKJRdb7XF9CEB29c1I1Ne407OgdITvPfgKcOj24MvU6l-ETC76LRzsbOIuRAlwwjyYKMyMpEhZkswo3ODcNqsS0pUe2IiRQB4RsNmPKWPGnhXUE3uXxxyYOrFTf-2XDDzUkPBJl_5wzHdZEa57oAxsOortNybjbhk_T3sWLgvmb4KfcEyGeYNd_vfe4TxNBd57MALHhKZEM93dEiggW8P0bfPDI2xNJsWKufoEY0NNI4FsHHIgA',
    badge: 'Seafood Master',
    calories: '520 ккал',
    ingredientsKk: ['Балғын лосось филесі', 'Үй терияки глазурі', 'Қара жабайы күріш', 'Брокколи', 'Кунжут дәндері'],
    ingredientsRu: ['Свежее филе лосося', 'Домашний соус терияки', 'Черный дикий рис', 'Брокколи', 'Семена кунжута'],
    pairingKk: 'Салқындатылған цитрус лимонады немесе жасмин жасыл шайы.',
    pairingRu: 'Освежающий цитрусовый лимонад или зеленый жасминовый чай.'
  },
  {
    id: 'tom-yum-soup',
    nameKk: 'Том Ям Теңіз өнімдерімен',
    nameRu: 'Том Ям с морепродуктами',
    category: 'asian',
    price: 6200,
    weight: '450 мл',
    descKk: 'Классикалық тай рецептурасы: ірі тигр асшаяндары, қара мидиялар, кальмар сақиналары, кокос сүті және жасмин күріші.',
    descRu: 'Аутентичный тайский суп: королевские тигровые креветки, мидии, кольца кальмара, кокосовое молоко, лемонграсс и рис жасмин.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNVOkNqpJNyEKeLUE_rAKwkE0s0T5U0W2zAx60XNOVJBaMWkPSLx0tmQToqyIAl-wBO6KbCVl-G3DLmHniulturhMmPYgCyH9frzeaLuiWFGKfTVbH-tQ2u-MeOWj_j0EbYKB0Vj6-ITbzkdvkoPUxuZcua10dysAD0oLABEvHL5TjyWhMFHaw6S1BlYvVk7NypHWtrX0Vvm_3jFmLxZX9llJvgVIV_v-D_obt_gIV7lK8yFNfS79jJA',
    badge: 'Asian Fusion',
    spicy: true,
    calories: '440 ккал',
    ingredientsKk: ['Тигр асшаяндары (Black Tiger)', 'Мидиялар', 'Кальмар', 'Кокос сүті', 'Лемонграсс', 'Каффир-лайм', 'Жасмин күріші'],
    ingredientsRu: ['Тигровые креветки Black Tiger', 'Мидии', 'Кальмар', 'Кокосовое молоко', 'Лемонграсс', 'Листья лайма', 'Рис жасмин'],
    pairingKk: 'Салқын кокос-маракуйя коктейлі немесе зімбір шайы.',
    pairingRu: 'Коктейль кокос-маракуйя или освежающий имбирный чай.'
  },
  {
    id: 'burrata-brioche',
    nameKk: 'Трюфельді буррата бриошьте',
    nameRu: 'Трюфельная буррата на бриоши',
    category: 'salads',
    price: 5900,
    weight: '280 г',
    descKk: 'Нәзік кілегейлі италиялық буррата, хош иісті песто, карамельденген шие қызанақтары және пеште қуырылған майлы бриошь.',
    descRu: 'Нежная сливочная итальянская буррата, свежий песто из базилика, вяленые томаты черри и обжаренная бриошь с трюфельным маслом.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0kCLGZvY_oNKc3wYGwd8A0CpJFUnCKkLbbU0bkOn4a-SE1C7mLIwiWNnmjCjwq2P7mfhsoV5zrWB-1jjt8fa1bnXKYwcpXtkEWVvbV6hA_FBmVB0Mm1ObkGtjBWWGUX2Fg9Yec16G7NZZ9OfsXuVjlVvD7SeWIyXi2kyMPCXTmsqZdrjylC4--9n2E2WdDFhFpd3BbqkNHMJ_GW05YB6Xzvf6th2Zt2Wmzm-NP-Px-69qxplwCwlJ9Q',
    badge: 'Italian Pure',
    calories: '490 ккал',
    ingredientsKk: ['Буррата ірімшігі', 'Француз бриоші', 'Базилик пестосы', 'Карамельденген черри', 'Трюфель майы'],
    ingredientsRu: ['Сыр Буррата', 'Французская бриошь', 'Соус песто', 'Томаты конфи', 'Трюфельное масло'],
    pairingKk: 'Просекко немесе ақ жемісті авторлық шай.',
    pairingRu: 'Просекко или авторский белый чай с персиком.'
  },
  {
    id: 'baoli-gold-tea',
    nameKk: 'Авторлық Baoli Gold шайы',
    nameRu: 'Авторский чай Baoli Gold',
    category: 'tea',
    price: 3200,
    weight: '800 мл',
    descKk: 'Жабайы тау жидектері, табиғи бал, цитрус ноталары, сергітетін жалбыз және зімбір тұнбасынан жасалған салтанатты шай.',
    descRu: 'Таежные ягоды, натуральный горный мед, цитрусовые ноты грейпфрута и апельсина, мята и имбирь в стеклянном чайнике со свечой.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9IOGqnVIBg5NpjriOp-nVYOI5vwqOZ5CaGUTE7N8R_LZZ_20pE6ZVMKNJ0mSrcqMNvA7q6ItTI6L204w74_aqEhSE7WH8lisHedVQgVZjxyonYqCK-AyJR8_HrUH6Q9Tf1S01q7DJ9Lr-Z3kOJEQopgDVihtBPJ2nh8V0KGhfBAIRRkPIlZDMGu6M4NVrecRk3Y602YYfND0RRv3aJUlDt3dQsn7wfDzOCyr-I9Yhp4NkJiW8FkeH6A',
    badge: 'Tea Ritual',
    calories: '110 ккал',
    ingredientsKk: ['Ассам элиталық шайы', 'Шырғанақ және таңқурай', 'Қарағай бүршігі', 'Апельсин және лайм', 'Табиғи бал'],
    ingredientsRu: ['Чай Ассам премиум', 'Облепиха и малина', 'Сосновые шишки', 'Апельсин и лайм', 'Горный мед'],
    pairingKk: '19:00-ге дейінгі түтін қоспасына сыйлық ретінде беріледі.',
    pairingRu: 'Идеален как комплимент к дымному сету до 19:00.'
  },
  {
    id: 'premium-shisha-set',
    nameKk: 'Премиум Түтін Қоспасы & Шай Сыйлыққа',
    nameRu: 'Премиум Дымный Сет + Чай в подарок',
    category: 'hookah',
    price: 5500,
    oldPrice: 8500,
    weight: 'Сағат 15:00 - 19:00',
    descKk: 'Жемісті және премиум табак брендтерінен арнайы жиналған қоспа. Сағат 19:00-ге дейін авторлық Baoli шаймен бірге сыйлыққа ұсынылады.',
    descRu: 'Фирменный микс от лучших мастеров на табаках премиум-класса. До 19:00 подается вместе с чайником авторского чая бесплатно.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv-mMYol8e8SgGzNoWH56UVQ61Gbih4l_WndRAMMEUf--L1Ndl4SYpMphi0QW3Ma9GmplkFiuoq91Woc1Ai2BY9aa8ZtdsUzhcPe1Um4fimY8J6dw_GK-aL9HWFIfq3xU-aTKDisO8to8k885CTBR6oseRHDSb276pmk3yRTWcMxRMxLDdyweGvbf26jOFUljxkLg1tcgvAetOudJ3Lp6Db-WehaofVYna5E4-XKf8i_jI8nUQ4mNqtw',
    badge: 'Хит Ұсыныс (–35%)',
    calories: '0 ккал',
    ingredientsKk: ['Darkside / Tangiers / Musthave', 'Жеміс тостағаны', 'Кокос көмірі', 'Авторлық шәйнек шай'],
    ingredientsRu: ['Премиум табаки (Darkside, Musthave)', 'Фруктовая чаша', 'Кокосовый уголь', 'Чайник авторского чая в подарок'],
    pairingKk: 'Жайлы дивандарда серіктестермен немесе достармен демалуға тамаша.',
    pairingRu: 'Лучший выбор для вечерней релаксации в мягких диванах Highvill.'
  },
  {
    id: 'smoked-old-fashioned',
    nameKk: 'Авторлық Smoked Highvill коктейлі',
    nameRu: 'Фирменный Smoked Highvill',
    category: 'bar',
    price: 4800,
    weight: '160 мл',
    descKk: 'Бурбон, емен ағашының түтіні, хош иісті битттер және алтын түйіршіктерімен безендірілген мұз монолиті.',
    descRu: 'Бурбон премиум, окуривание щепой вишни и дуба, биттер Angostura, монолитный куб льда и сусальное золото.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnYq7Mdn27SF3KcrpJjnHJBDCOK9bcEhlf0G7GaFq6dO8f5CAO6vwDwSy4GvS2weaDnXr7gavh16t2SBjRy8_whXME70DOWCXpY7Pmas7tr_9Xv_nY9EYSzFFoPFvZoUNDD548U05aUmN3Jq-X4cWfGesRE-Yz_53SlSzl5ypANiuL_0CkAHNJcHkG-K5VNHnoYvJb4Yl0llAWOjZmyHlT_3jMA7t28bjojOy4kVTJvoujawDKjsjieg',
    badge: 'Mixology Star',
    isChefSpecial: true,
    calories: '190 ккал',
    ingredientsKk: ['Бурбон Woodford', 'Ангостура биттері', 'Апельсин цедрасы', 'Шие түтіні'],
    ingredientsRu: ['Бурбон Woodford Reserve', 'Биттер Angostura', 'Цедра сицилийского апельсина', 'Вишневый дым'],
    pairingKk: 'Рибай стейкімен және сигар картасымен тамаша үйлеседі.',
    pairingRu: 'Превосходно сочетается со стейками и сигарами.'
  },
  {
    id: 'san-sebastian-cheesecake',
    nameKk: 'Сан-Себастьян күйдірілген чизкейкі',
    nameRu: 'Чизкейк Сан-Себастьян',
    category: 'desserts',
    price: 3600,
    weight: '210 г',
    descKk: 'Испан классикасы: нәзік кілегейлі өзегі, карамельденген қыртысы және ыстық бельгиялық шоколад ганашы.',
    descRu: 'Испанский десерт с нежнейшей шелковистой серединкой, карамелизированной корочкой и горячим бельгийским шоколадом.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfNeiSKLY2t7BEHAhpzoSm8S3GK1b8ax4pX3kQoq3mRccCk4etrtjVgFlEkfrykZwIr3_elIlL-0MawKiaOPFUvlLk-DmGo1lKqQ8cAvshG12z7n7jl8Q--bymHg7gxdmQPxJgMoVk4lZ5AliCUqPIMNfdoq8gLrHEQ3daVDn41SkoVTsdQ2yVobTFkpm1j3YNBObWTd_s-KYQ27w_EfURDhsPSDCRr1kwsi1kTiVUOPaNDC61lEXowQ',
    badge: 'Sweet Finale',
    calories: '420 ккал',
    ingredientsKk: ['Филадельфия кілегейлі ірімшігі', 'Бельгия шоколады', 'Балғын таңқурай', 'Ваниль экстракты'],
    ingredientsRu: ['Крем-сыр Филадельфия', 'Бельгийский шоколад Callebaut', 'Свежая малина', 'Экстракт мадагаскарской ванили'],
    pairingKk: 'Эспрессо, Капучино немесе бергамот қосылған Эрл Грей шайы.',
    pairingRu: 'Идеален с чашечкой эспрессо или ароматным чаем Эрл Грей.'
  }
];

export const ZONES: ZoneItem[] = [
  {
    id: 'vip-lounge',
    nameKk: 'VIP Lounge Залы',
    nameRu: 'VIP Lounge Зал',
    subtitleKk: 'Құпиялылық, жеке дыбыс және жеке сервис',
    subtitleRu: 'Приватность, премиальная акустика и персональный сервис',
    capacity: '8 – 15 адам',
    descKk: 'Жеке кездесулерге, маңызды бизнес-келіссөздерге және жақын достар шеңберіндегі бейресми кештерге арналған дыбыс оқшауланған премиум бөлме. AST-караоке жүйесі, жұмсақ былғары дивандар және жеке даяршы.',
    descRu: 'Шумоизолированная комната для частных закрытых встреч, деловых ужинов и празднований в узком кругу. Профессиональная система AST-караоке, мягкие диваны и личный официант.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA22c9a9n2ldA0DxtkJaXKpYSL0Rhem4i6s4dbnbdhBLMWE5mMqzFlUqfbnoD1zl21xsUz_8zqx3U1HE9DX8sKtdnRlxosuQlBhNlaaDyup7_QQdL1ElmmOPaQW8TWfSng35GOIroG15ZGVgnfmmmUJo3BSl9q2h0D4micvn-cYSTpuoZeVauw4Wvi8zvhWBEM0nGAMmY-buId1mr5DnmZGWxTaRPNHQ0I9LRCVoTO11FCesuuIUdUtYw',
    featuresKk: ['AST профессионалды караоке', 'Жеке дыбыс жүйесі', 'VIP кондиционер және вентиляция', 'Жеке қызмет көрсететін сомелье мен даяршы'],
    featuresRu: ['Профессиональное AST-караоке', 'Персональная аудиосистема', 'VIP климат-контроль', 'Личный сомелье и официант'],
    badge: 'VIP Бөлме',
    tablesCount: 2,
    minDeposit: 'Депозит бойынша (менеджерден нақтылаңыз)'
  },
  {
    id: 'panorama-windows',
    nameKk: 'Панорамалық Терезелер Аймағы',
    nameRu: 'Панорамная Зона у Окон',
    subtitleKk: 'Астананың кешкі көрінісі мен романтикалық тылсым',
    subtitleRu: 'Вечерние огни столицы и романтическая атмосфера',
    capacity: '2 – 6 адам',
    descKk: 'Highvill Ishim көшесіне қарайтын үлкен витриналық панорамалық терезелер. Жұмсақ шамдардың жарығы, қала ырғағы мен тыныш демалыстың үйлесімі.',
    descRu: 'Большие витринные окна с видом на вечерний Highvill. Уютные столики с приглушенным светом — фаворит среди пар и деловых партнеров.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4WdUKmn8wdDYrwUST0bKfTIVucKS8Y6biVvTZvJXcbcOQvyN5pyZJEbUqMmIvQTceNVADts-k7K9WeE2Zti1XZmW1RAR0bPS3hMdmVq57xw4QZ4H7tElcyW-zMVQrgFYRSVaiihJgYWE0LMU7B0wSG9ZIIG9XPX5OHz_nZ10yVhAl08wQzC3GzQrmlKdXCCAcuxRnrw_GA9aJ1ZNXo3MVWII5u_61GQwTIDrEWTjBYhIIlizWYIZ3VA',
    featuresKk: ['Елорда көрінісі', 'Жайлы терең креслолар', 'Романтикалық кешкі жарық', 'Шаммен безендіру'],
    featuresRu: ['Панорамный вид на Highvill', 'Глубокие комфортные кресла', 'Приглушенный свет свечей', 'Идеально для свиданий'],
    badge: 'Танымал',
    tablesCount: 6
  },
  {
    id: 'bar-mixology',
    nameKk: 'Авторлық Миксология & Бар',
    nameRu: 'Авторский Бар и Миксология',
    subtitleKk: 'Бармен шеберлігі және таңдаулы сусындар',
    subtitleRu: 'Мастерство миксологов и эксклюзивная карта',
    capacity: '1 – 4 адам',
    descKk: 'Жарқыраған алтын сөрелер, хрусталь бокалдар және Астананың үздік бартендерлерінің тікелей алдыңызда дайындайтын шоу-коктейльдері.',
    descRu: 'Светящиеся золотые стеллажи, хрустальная посуда и эффектная подача авторских коктейлей прямо перед вами.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxTo3JJKKjwp-HxRiiQPJjULasN-CYhJ6oEaL9aiThPOJB0k-AOCzOpcg0-eoLEKzXGkvDDuuM3RmGlkmOcUKw2Uiiyc6kRXKbJlK9IpY81PWgEbcQCp6PsOAbkmR34xuyaaCSov380PPGUAvnjP9y0OXWuZvReOx-dYuI1gOInq_VvKvv3bOMAFXU7d1nGiID01a1slHxEnUCdDYDOqLejJeoh-m2upSlbMCDOqRAUrR7VlQa7fnPzg',
    featuresKk: ['Эксклюзивті коктейльдер', 'Тікелей бар маңындағы орындар', 'Шеф-миксолог кеңесі', 'Дәмді снектер'],
    featuresRu: ['Эксклюзивные коктейли', 'Места у контактной барной стойки', 'Совет шеф-бармена', 'Изысканные закуски'],
    badge: 'Bar Lounge',
    tablesCount: 8
  },
  {
    id: 'main-dining-hall',
    nameKk: 'Негізгі Лаундж Холл',
    nameRu: 'Главный Лаундж Зал',
    subtitleKk: 'Кеңістік, демалыс және теңдессіз түтін мәдениеті',
    subtitleRu: 'Простор, релакс и премиальная кальянная культура',
    capacity: '2 – 10 адам',
    descKk: 'Жасыл барқыт және алтын түстес жиһаздармен жабдықталған кең де сәнді орта. Мұнда deep house әуендерімен тынығып, шеберлердің түтінінен ләззат аласыз.',
    descRu: 'Просторный стильный зал с мягкими диванами, премиальной вытяжкой и непринужденной deep house атмосферой.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfNeiSKLY2t7BEHAhpzoSm8S3GK1b8ax4pX3kQoq3mRccCk4etrtjVgFlEkfrykZwIr3_elIlL-0MawKiaOPFUvlLk-DmGo1lKqQ8cAvshG12z7n7jl8Q--bymHg7gxdmQPxJgMoVk4lZ5AliCUqPIMNfdoq8gLrHEQ3daVDn41SkoVTsdQ2yVobTFkpm1j3YNBObWTd_s-KYQ27w_EfURDhsPSDCRr1kwsi1kTiVUOPaNDC61lEXowQ',
    featuresKk: ['Қуатты вентиляция жүйесі', 'Үлкен компанияларға қолайлы үстелдер', 'Түтін картасының толық жинағы', 'Жоғары жылдамдықтағы Wi-Fi'],
    featuresRu: ['Мощная бесшумная вентиляция', 'Столы для компаний', 'Вся линейка премиум табаков', 'Быстрый Wi-Fi'],
    badge: 'Негізгі Зал',
    tablesCount: 12
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Айдос Смағұлов',
    cityKk: 'Астана қ. тұрғыны',
    cityRu: 'Житель Астаны',
    rating: 5,
    date: '2 апта бұрын',
    textKk: '«Highvill-дегі ең сүйікті орнымыз! Атмосферасы керемет, музыка тыныш әрі сапалы. Стейктері тіл үйіреді, ал түтін шеберлерінің жұмысы 10/10. 19:00-ге дейінгі акциясы да өте тиімді!»',
    textRu: '«Любимое заведение в Highvill! Атмосфера потрясающая, музыка ненавязчивая и качественная. Стейки тают во рту, а дымные мастера работают на 10 из 10. Акция до 19:00 очень радует!»',
    source: '2GIS',
    avatarColor: 'bg-primary/20 text-primary'
  },
  {
    id: 'rev-2',
    author: 'Динара Төлегенова',
    cityKk: 'Тұрақты қонақ',
    cityRu: 'Постоянный гость',
    rating: 5,
    date: '1 ай бұрын',
    textKk: '«VIP бөлмесін туған күн кешіне брондадық. Қызмет көрсету жылдам, әкімшілер өте сыпайы. Авторлық шайлары мен десерттері сөзсіз керемет. Қонақтарымның бәрі риза болды!»',
    textRu: '«Бронировали VIP зал на день рождения. Обслуживание моментальное, персонал очень вежливый. Авторские чаи и десерты — это отдельное искусство. Все гости в восторге!»',
    source: '2GIS',
    avatarColor: 'bg-amber-500/20 text-amber-400'
  },
  {
    id: 'rev-3',
    author: 'Марат Касымов',
    cityKk: 'Highvill тұрғыны',
    cityRu: 'Житель ЖК Highvill',
    rating: 5,
    date: '3 апта бұрын',
    textKk: '«Премиальный лаундж в лучшем ЖК столицы. Удобная локация, уютный приглушенный свет, Том Ям просто бесподобный. Идеальное место как для свиданий, так и для отдыха после работы.»',
    textRu: '«Премиальный лаундж в лучшем ЖК столицы. Удобная локация, уютный приглушенный свет, Том Ям просто бесподобный. Идеальное место как для свиданий, так и для отдыха после работы.»',
    source: '2GIS',
    avatarColor: 'bg-emerald-500/20 text-emerald-400'
  },
  {
    id: 'rev-4',
    author: 'Елена Белова',
    cityKk: 'Гастро-блогер',
    cityRu: 'Гастро-блогер',
    rating: 5,
    date: 'Өткен аптада',
    textKk: '«Бурратасы өте балғын әрі тәтті. Бардағы коктейльдердің берілуі шоу секілді. Эстетикалық фото жасауға таптырмас жер!»',
    textRu: '«Буррата нежнейшая со свежим песто. Подача коктейлей на баре выглядит как настоящее шоу. Прекрасное место для красивых кадров и бесед.»',
    source: '2GIS',
    avatarColor: 'bg-rose-500/20 text-rose-400'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    questionKk: 'Үстелді қалай алдын ала брондауға болады?',
    questionRu: 'Как забронировать столик заранее?',
    answerKk: 'Сайттағы онлайн брондау пішіні арқылы, +7 (708) 708-99-97 нөміріне қоңырау шалып немесе WhatsApp желісіне тікелей жазу арқылы брондауға болады. Менеджер 2 минут ішінде жауап береді.',
    answerRu: 'Вы можете забронировать столик через форму на сайте, позвонив по номеру +7 (708) 708-99-97 или напрямую в WhatsApp. Администратор подтверждает бронь в течение 2 минут.'
  },
  {
    questionKk: '19:00-ге дейінгі 5 500 ₸ акциясы қалай жұмыс істейді?',
    questionRu: 'Как действует акция 5 500 ₸ до 19:00?',
    answerKk: 'Күнделікті сағат 15:00-ден 19:00-ге дейін кез келген премиум түтін қоспасына тапсырыс бергенде, бір үлкен шәйнек авторлық Baoli шайы толықтай тегін сыйлыққа ұсынылады.',
    answerRu: 'Каждый день с 15:00 до 19:00 при заказе премиального дымного сета вы получаете большой стеклянный чайник авторского чая Baoli в подарок.'
  },
  {
    questionKk: 'VIP залдарда қандай мүмкіндіктер бар және сыйымдылығы қандай?',
    questionRu: 'Что есть в VIP залах и какова вместимость?',
    answerKk: 'VIP залдар 8-ден 15 адамға дейін сыйдыра алады. Онда AST караоке, жеке дыбыс баптауы, қуатты дербес климат-бақылау және жеке даяршы қызметі қарастырылған.',
    answerRu: 'VIP залы рассчитаны на 8-15 гостей. В них установлена профессиональная система караоке AST, отдельная шумоизоляция, климат-контроль и персональное обслуживание.'
  },
  {
    questionKk: 'Көлік тұрағы (паркинг) бар ма? Шлагбаум қалай ашылады?',
    questionRu: 'Есть ли парковка и как проехать через шлагбаум?',
    answerKk: 'Иә, Highvill Ishim кешенінің аумағында қонақтарға арналған ыңғайлы көлік тұрағы бар. Келген кезде біздің +7 (708) 708-99-97 нөмірімізге қоңырау шалсаңыз, әкімші шлагбаумды бірден ашып береді.',
    answerRu: 'Да, на территории ЖК Highvill Ishim предусмотрена гостевая парковка. По прибытию позвоните нам по номеру +7 (708) 708-99-97, и администратор сразу откроет шлагбаум.'
  },
  {
    questionKk: 'Дресс-код немесе жас шектеуі бар ма?',
    questionRu: 'Есть ли дресс-код и возрастное ограничение?',
    answerKk: 'Бізде Smart Casual стилі құпталады. Спорттық киімдерге шектеу қойылуы мүмкін. Заңнама талаптарына сәйкес кешкі 21:00-ден кейін 21 жасқа толған қонақтар қабылданады.',
    answerRu: 'В заведении приветствуется стиль Smart Casual (спортивная одежда не допускается). После 21:00 вход для гостей старше 21 года согласно законодательству.'
  }
];
