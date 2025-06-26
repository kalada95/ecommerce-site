'use client';
import { create } from 'zustand';
import { Product } from '../shop/products';

interface CartStore {
  items: Product[];
  addToCart: (product: Product) => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({
      items: [...state.items, product],
    })),
}));
