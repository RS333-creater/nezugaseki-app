import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">老人ホーム</Link>
        <ul className="flex space-x-6">
          <li><Link to="/facility/multifunction">多機能ホーム</Link></li>
          <li><Link to="/facility/day-service">デイサービス</Link></li>
          <li><Link to="/pricing">料金案内</Link></li>
          <li><Link to="/access">アクセス</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
