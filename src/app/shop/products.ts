export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 120,
    image: '/products/headphones.jpg',
    category: 'Audio',
    description: 'Comfortable headphones with amazing sound quality.'
  },
  {
    id: 2,
    name: 'Gaming Keyboard',
    price: 80,
    image: '/products/keyboard.jpg',
    category: 'Accessories',
    description: 'RGB backlit mechanical keyboard for gamers.'
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 150,
    image: '/products/smartwatch.jpg',
    category: 'Wearables',
    description: 'Track your fitness and notifications on the go.'
  }
];
