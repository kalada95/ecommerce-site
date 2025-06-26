import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/shop" className="hover:underline">Shop</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
      <Link href="/cart" className="hover:underline">Cart</Link>
    </nav>
  );
}
