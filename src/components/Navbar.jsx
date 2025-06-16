import { Link } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: '多機能ホーム', href: '/facility/multifunction' },
  { name: 'デイサービス', href: '/facility/day-service' },
  { name: '料金案内', href: '/pricing' },
  { name: 'アクセス', href: '/access' },
  { name: 'お問い合わせ', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">ケアサービスつきみ</Link>
          
          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
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
                  className="hover:text-blue-200 transition-colors"
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
          } mt-4 space-y-2`}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block py-2 hover:text-blue-200 transition-colors"
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
