'use client';

import Image from 'next/image';
import { products } from './products';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../cart/cartstore';


export default function ShopPage() {
  const [search, setSearch] = useState('');

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Shop Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 mb-6 w-full max-w-md rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <Link
              href={`/product/${product.id}`}
              className="text-blue-600 underline mt-2 inline-block"
            >
              View Product
            </Link>
            <button
              onClick={() => useCart.getState().addToCart(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
