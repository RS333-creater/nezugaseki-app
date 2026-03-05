import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden text-white">
      {/* 背景グラデ＋きらめき */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950 via-slate-950 to-slate-950" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(800px 420px at 20% 10%, rgba(255,255,255,0.14), transparent 60%), radial-gradient(900px 520px at 70% 50%, rgba(56,189,248,0.12), transparent 60%)"
        }}
      />

      <div className="relative container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 施設情報 */}
          <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6">
            <h3 className="text-lg font-semibold tracking-wide mb-4">ケアサービスつきみ</h3>
            <p className="mb-2 text-sky-50/80">本社</p>
            <p className="mb-2 text-sky-50/80">〒998-0045</p>
            <p className="mb-2 text-sky-50/80">山形県酒田市二番町8-1</p>
            <p className="mb-2 text-sky-50/80">TEL: 0234-28-8585</p>
            <p className="text-sky-50/80">FAX: 0234-21-0106</p>
          </div>

          {/* 施設情報 */}
          <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6">
            <h3 className="text-lg font-semibold tracking-wide mb-4">グループホームねずがせき</h3>
            <p className="mb-2 text-sky-50/80">〒999-7126</p>
            <p className="mb-2 text-sky-50/80">山形県鶴岡市鼠ヶ関字横路9-3</p>
            <p className="mb-2 text-sky-50/80">TEL: 0234-48-4555</p>
            <p className="text-sky-50/80">FAX: 0234-48-4556</p>
          </div>

          {/* リンク */}
          <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6">
            <h3 className="text-lg font-semibold tracking-wide mb-4">サイトマップ</h3>
            <ul className="space-y-2 text-sky-50/85">
              <li><Link className="hover:text-white transition-colors" to="/" onClick={scrollToTop}>ホーム</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/facility/day-service" onClick={scrollToTop}>デイサービス</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/pricing" onClick={scrollToTop}>料金案内</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/access" onClick={scrollToTop}>アクセス</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/contact" onClick={scrollToTop}>お問い合わせ</Link></li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6">
            <h3 className="text-lg font-semibold tracking-wide mb-4">SNS</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sky-50/85">
              <a
                href="https://twitter.com/careserviceTUKIMI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/careserviceTUKIMI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sky-50/70">
          <p>&copy; {new Date().getFullYear()} ケアサービスつきみ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 