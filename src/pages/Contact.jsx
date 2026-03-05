import React from "react";

const Contact = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* メイン案内カード */}
      <div className="bg-white shadow-md rounded-xl p-8 sm:p-12 max-w-3xl mx-auto border-t-8 border-blue-600">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">お問い合わせ</h1>
        
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            現在、お一人おひとりのご状況を詳しく伺うため、<br className="hidden sm:inline" />
            <span className="font-bold text-blue-700">お電話でのご相談・お問い合わせ</span>を優先的に承っております。
          </p>

          <div className="py-8 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-sm font-bold text-blue-600 mb-2 tracking-widest uppercase">Reception Phone</p>
            <a href="tel:0234288585" className="text-4xl sm:text-5xl font-black text-blue-900 hover:opacity-70 transition-opacity">
              0234-28-8585
            </a>
            <p className="mt-4 text-gray-600 font-medium text-sm sm:text-base">
              受付時間：平日 10:00 〜 17:00
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            ※「ホームページを見た」とお伝えいただくと、スムーズにご案内が可能です。
          </p>
        </div>
      </div>

      {/* 補足情報：寂しさを埋め、安心感を与えるエリア */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左側：よくある相談内容 */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full"></span>
            よくあるご相談内容
          </h2>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li>・施設の見学、体験利用について</li>
            <li>・グループホームの空き状況の確認</li>
            <li>・介護保険の申請やサービス利用の手順</li>
            <li>・月々のご利用料金に関するお見積り</li>
          </ul>
        </div>

        {/* 右側：メッセージ */}
        <div className="bg-white p-8 rounded-xl border border-blue-100 flex flex-col justify-center shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-800">お気軽にお話しください</h2>
          <p className="text-gray-600 leading-relaxed">
            「どんな場所か見てみたい」「今後の参考に話を聞きたい」といった内容でも全く問題ございません。
            専門スタッフが丁寧にお答えいたします。
          </p>
        </div>
      </div>

      {/* 施設連絡先一覧（必要に応じて） */}
      <div className="max-w-4xl mx-auto text-center py-6 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-600 font-medium">
          <div>
            <p className="text-blue-800 font-bold">ケアサービスつきみ 本社</p>
            <p>TEL: 0234-28-8585</p>
          </div>
          <div>
            <p className="text-blue-800 font-bold">グループホームねずがせき</p>
            <p>TEL: 0234-48-4555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;