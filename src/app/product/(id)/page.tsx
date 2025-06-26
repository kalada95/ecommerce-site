import { products } from '@/app/shop/products';
import Image from 'next/image';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={500} height={400} className="rounded" />
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
    </main>
  );
}
