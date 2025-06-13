import { Link } from "react-router-dom";

const navigation = [
  { name: '多機能ホーム', href: '/facility/multifunction' },
  { name: 'デイサービス', href: '/facility/day-service' },
  { name: '料金案内', href: '/pricing' },
  { name: 'アクセス', href: '/access' },
  { name: 'お問い合わせ', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ケアサービスつきみ</Link>
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
