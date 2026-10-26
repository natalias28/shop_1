import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white text-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          SHOP.
        </Link>

        {/* Навігація */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/catalog" className="hover:text-blue-600 transition">Каталог</Link>
          <Link href="/about" className="hover:text-blue-600 transition">Про нас</Link>
        </nav>

        {/* Кошик */}
        <button className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:bg-gray-800 transition">
          <span>Кошик</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
            0
          </span>
        </button>
      </div>
    </header>
  );
}