import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 space-y-12">
      {/* スライドショー（簡易版画像） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/images/gaikan (12).jpg" alt="slide1" className="rounded shadow-md" />
        <img src="/images/gaikan (2).jpg" alt="slide2" className="rounded shadow-md" />
        <img src="/images/gaikan (4).jpg" alt="slide3" className="rounded shadow-md" />
      </div>

      {/* イントロテキスト */}
      <section className="bg-blue-50 p-6 rounded shadow">
        <p className="text-lg leading-relaxed">
          弊社は地域密着型通所介護を展開しております。<br />
          弊社には <span className="font-semibold text-blue-700">グループホームねずがせき</span>、そして
          <span className="font-semibold text-blue-700">多機能ねずがせき</span> の二つの施設がございます。
        </p>
      </section>

      {/* 事業目的 */}
      <section className="bg-white border border-blue-200 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-2 text-blue-800">事業目的</h2>
        <p className="mb-4">
          認知症によって自立した生活が困難になった利用者に対して家庭的な環境のもとで食事、入浴、排泄の世話及び日常生活の中で心身の機能訓練を行うことにより、安心と尊厳のある生活を利用者がその有する能力に応じ可能な限り自立して生活を営むことができる様にすることを目的とする。
        </p>
        <Link to="/company" className="text-blue-600 underline hover:text-blue-800">法人について</Link>
      </section>

      {/* 施設紹介 */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-center">事業所紹介</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* グループホーム */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-bold mb-2">グループホームねずがせき</h3>
            <img src="/images/grouphome (35).jpg" alt="グループホーム" className="rounded mb-2" />
            <p className="mb-2">
              地域密着型サービスとして利用者様を24時間体制で支えながら、安定した生活と本人の望む生活を実現できるように尽力いたします！
            </p>
            <Link to="/grouphome" className="text-blue-600 underline hover:text-blue-800">詳細はこちら</Link>
          </div>

          {/* 多機能ねずがせき */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-bold mb-2">多機能ねずがせき</h3>
            <img src="/images/takinoo (37).jpg" alt="多機能" className="rounded mb-2" />
            <p className="mb-2">
              デイサービスを中心に訪問介護やショートステイを組み合わせ、在宅での生活の支援や、機能訓練を行っております！
            </p>
            <Link to="/takinou" className="text-blue-600 underline hover:text-blue-800">詳細はこちら</Link>
          </div>
        </div>
      </section>

      {/* ご利用料金 */}
      <section className="bg-blue-100 p-6 rounded shadow text-center">
        <h2 className="text-lg font-bold mb-2">ご利用案内</h2>
        <img src="/images/介護施設.png" alt="施設" className="mx-auto mb-2 w-40" />
        <p className="mb-2">ご相談からご利用までの流れ</p>
        <Link to="/guide" className="text-blue-700 underline hover:text-blue-900">ご利用方法について</Link>
      </section>

      {/* 採用情報
      <section className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-lg font-bold mb-2">採用情報</h2>
        <img src="/images/福祉士.png" alt="福祉士" className="mx-auto mb-2 w-40" />
        <p className="mb-2">一緒に働きませんか？</p>
        <Link to="/recruit" className="text-blue-700 underline hover:text-blue-900">詳細はこちら</Link>
      </section> */}

      {/* お問い合わせ */}
      <section className="bg-gray-50 p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-2">お問合わせ</h2>
        <p>000-0000-0000 10:00~17:00</p>
      </section>
    </div>
  );
};

export default Home;
