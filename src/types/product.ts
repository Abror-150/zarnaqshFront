export interface Product {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  price: number;
  image: string;
  materials: {
    uz: string;
    ru: string;
    en: string;
  };
  inStock: boolean;
  featured?: boolean;
}
