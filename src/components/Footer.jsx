import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 施設情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">ケアサービスつきみ</h3>
            <p className="mb-2">〒000-0000</p>
            <p className="mb-2">東京都○○区○○1-1-1</p>
            <p className="mb-2">TEL: 03-0000-0000</p>
            <p>FAX: 03-0000-0000</p>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-xl font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop}>ホーム</Link></li>
              <li><Link to="/facility/multifunction" onClick={scrollToTop}>多機能ホーム</Link></li>
              <li><Link to="/facility/day-service" onClick={scrollToTop}>デイサービス</Link></li>
              <li><Link to="/pricing" onClick={scrollToTop}>料金案内</Link></li>
              <li><Link to="/access" onClick={scrollToTop}>アクセス</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>お問い合わせ</Link></li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div>
            <h3 className="text-xl font-bold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/careserviceTUKIMI" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Twitter
              </a>
              <a href="https://www.instagram.com/careserviceTUKIMI" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ケアサービスつきみ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 