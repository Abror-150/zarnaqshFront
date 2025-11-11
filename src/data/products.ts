import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: {
      uz: 'Tillaqosh',
      ru: 'Тиллакош',
      en: 'Tillaqosh'
    },
    description: {
      uz: "An'anaviy milliy uslubda yasalgan chiroyli tillaqosh. Har bir detal qo'lda ishlangan.",
      ru: 'Красивый тиллакош, изготовленный в традиционном национальном стиле. Каждая деталь обработана вручную.',
      en: 'Beautiful tillaqosh made in traditional national style. Each detail is handcrafted.'
    },
    price: 350000,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    materials: {
      uz: 'Kumush, tosh, bonchuqlar',
      ru: 'Серебро, камни, бусины',
      en: 'Silver, stones, beads'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: {
      uz: 'Zebigardon',
      ru: 'Зебигардон',
      en: 'Zebigardon'
    },
    description: {
      uz: 'Noyob uslubdagi zebigardon. Milliy liboslar uchun mukammal.',
      ru: 'Зебигардон в уникальном стиле. Идеально подходит для национальных костюмов.',
      en: 'Zebigardon in unique style. Perfect for national costumes.'
    },
    price: 280000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    materials: {
      uz: 'Kumush, oltin pardoz',
      ru: 'Серебро, золотое покрытие',
      en: 'Silver, gold plating'
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: {
      uz: 'Tika',
      ru: 'Тика',
      en: 'Tika'
    },
    description: {
      uz: 'Zamonaviy va an\'anaviy uslubni birlashtirgan tika. Har qanday to\'y uchun mos.',
      ru: 'Тика, сочетающая современный и традиционный стиль. Подходит для любой свадьбы.',
      en: 'Tika combining modern and traditional style. Suitable for any wedding.'
    },
    price: 420000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    materials: {
      uz: 'Kumush, kristallar, marvarid',
      ru: 'Серебро, кристаллы, жемчуг',
      en: 'Silver, crystals, pearls'
    },
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: {
      uz: 'Sirg\'a',
      ru: 'Серьги',
      en: 'Earrings'
    },
    description: {
      uz: 'Milliy naqshli chiroyli sirg\'alar. Kundalik va bayram kiyimlariga mos.',
      ru: 'Красивые серьги с национальными узорами. Подходят для повседневной и праздничной одежды.',
      en: 'Beautiful earrings with national patterns. Suitable for everyday and festive wear.'
    },
    price: 150000,
    image: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=800&q=80',
    materials: {
      uz: 'Kumish, zarhal toshlar',
      ru: 'Серебро, драгоценные камни',
      en: 'Silver, precious stones'
    },
    inStock: true
  },
  {
    id: '5',
    name: {
      uz: 'Bilaguzuk',
      ru: 'Браслет',
      en: 'Bracelet'
    },
    description: {
      uz: 'Nozik ishlangan milliy uslubdagi bilaguzuk. Har bir elementda san\'at.',
      ru: 'Тонко обработанный браслет в национальном стиле. Искусство в каждом элементе.',
      en: 'Finely crafted bracelet in national style. Art in every element.'
    },
    price: 200000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    materials: {
      uz: 'Kumish, oltin pardoz, toshlar',
      ru: 'Серебро, золотое покрытие, камни',
      en: 'Silver, gold plating, stones'
    },
    inStock: true
  },
  {
    id: '6',
    name: {
      uz: 'Uzuk',
      ru: 'Кольцо',
      en: 'Ring'
    },
    description: {
      uz: 'Zamonaviy dizayndagi uzuk. Har qanday stil uchun mos.',
      ru: 'Кольцо в современном дизайне. Подходит для любого стиля.',
      en: 'Ring in modern design. Suitable for any style.'
    },
    price: 180000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    materials: {
      uz: 'Kumish, kristall',
      ru: 'Серебро, кристалл',
      en: 'Silver, crystal'
    },
    inStock: true
  },
  {
    id: '7',
    name: {
      uz: 'Toj',
      ru: 'Корона',
      en: 'Crown'
    },
    description: {
      uz: 'Hashamatli toj. Kelin liboslari uchun mukammal tanlov.',
      ru: 'Роскошная корона. Идеальный выбор для свадебных нарядов.',
      en: 'Luxurious crown. Perfect choice for bridal outfits.'
    },
    price: 550000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    materials: {
      uz: 'Kumush, oltin pardoz, kristallar, marvarid',
      ru: 'Серебро, золотое покрытие, кристаллы, жемчуг',
      en: 'Silver, gold plating, crystals, pearls'
    },
    inStock: true
  },
  {
    id: '8',
    name: {
      uz: 'Diodema',
      ru: 'Диадема',
      en: 'Diadem'
    },
    description: {
      uz: 'Nafis ishlov berilgan diodema. Maxsus tadbirlar uchun.',
      ru: 'Изящно обработанная диадема. Для особых мероприятий.',
      en: 'Elegantly crafted diadem. For special occasions.'
    },
    price: 480000,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    materials: {
      uz: 'Kumush, kristallar',
      ru: 'Серебро, кристаллы',
      en: 'Silver, crystals'
    },
    inStock: true
  }
];
