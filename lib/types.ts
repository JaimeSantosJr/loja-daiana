export type Category = 'leggings' | 'tops' | 'conjuntos' | 'macaquinhos' | 'acessorios';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Color = 'preto' | 'rosa-blush' | 'rosa-claro' | 'off-white';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  colors: Color[];
  sizes: Size[];
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: Size;
  color: Color;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}
