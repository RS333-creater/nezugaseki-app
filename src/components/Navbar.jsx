import { Link } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: 'デイサービス', href: '/facility/day-service' },
  { name: '料金案内', href: '/pricing' },
  { name: 'アクセス', href: '/access' },
  { name: 'お問い合わせ', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-sky-950/75 text-white backdrop-blur ring-1 ring-white/10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-lg sm:text-xl font-semibold tracking-wide">
            ケアサービスつきみ
          </Link>
          
          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* デスクトップメニュー */}
          <ul className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm font-medium tracking-wide text-sky-50/90 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } pb-4 space-y-1`}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-xl px-3 py-2 text-sm font-medium tracking-wide text-sky-50/90 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
