export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Leather' | 'Crochet';
  image: string;
  rating: number;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
