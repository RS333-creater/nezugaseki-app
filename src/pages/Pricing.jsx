import React from "react";

const Pricing = () => {
  return (
    // レスポンシブ対応と読みやすさを考慮したスタイリング
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto font-sans bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
        料金のご案内
      </h1>

      {/* 料金構成の全体説明 */}
      <div className="mb-10 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded-r-lg">
        <h3 className="font-bold mb-1">料金の構成について</h3>
        <p>
          月々のご利用料金は、主に以下の2つの合計額となります。
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>介護サービス費</strong>：介護保険適用分。要介護度や所得に応じた負担割合（1〜3割）で変動します。
            </li>
            <li>
              <strong>その他の費用</strong>：介護保険適用外の費用。家賃や食費など全額自己負担となります。
            </li>
          </ul>
        </p>
      </div>

      {/* --- グループホーム --- */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-300 text-gray-700">
          1. グループホームの料金
        </h2>
        <p className="mb-6 text-gray-600">
          認知症の診断を受けた方が、家庭的な環境で共同生活を送るサービスです。料金は日額計算となり、1ヶ月分をまとめてお支払いいただきます。
        </p>

        <h3 className="text-lg font-medium mb-3 text-gray-700">(1) 介護サービス費（1日あたり）</h3>
        
        {/* 基本料金テーブル */}
        <h4 className="font-semibold mb-2 text-gray-600">【基本料金】</h4>
        <div className="overflow-x-auto shadow-md rounded-lg mb-6">
          <table className="min-w-full bg-white text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold">介護度</th>
                <th className="py-3 px-4 border-b font-semibold">1割負担</th>
                <th className="py-3 px-4 border-b font-semibold">2割負担</th>
                <th className="py-3 px-4 border-b font-semibold">3割負担</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b">要支援2</td><td className="py-2 px-4 border-b">749円</td><td className="py-2 px-4 border-b">1,498円</td><td className="py-2 px-4 border-b">2,247円</td></tr>
              <tr><td className="py-2 px-4 border-b">要介護1</td><td className="py-2 px-4 border-b">753円</td><td className="py-2 px-4 border-b">1,506円</td><td className="py-2 px-4 border-b">2,259円</td></tr>
              <tr><td className="py-2 px-4 border-b">要介護2</td><td className="py-2 px-4 border-b">788円</td><td className="py-2 px-4 border-b">1,576円</td><td className="py-2 px-4 border-b">2,364円</td></tr>
              <tr><td className="py-2 px-4 border-b">要介護3</td><td className="py-2 px-4 border-b">812円</td><td className="py-2 px-4 border-b">1,624円</td><td className="py-2 px-4 border-b">2,464円</td></tr>
              <tr><td className="py-2 px-4 border-b">要介護4</td><td className="py-2 px-4 border-b">828円</td><td className="py-2 px-4 border-b">1,656円</td><td className="py-2 px-4 border-b">2,484円</td></tr>
              <tr><td className="py-2 px-4 border-b">要介護5</td><td className="py-2 px-4 border-b">845円</td><td className="py-2 px-4 border-b">1,690円</td><td className="py-2 px-4 border-b">2,535円</td></tr>
            </tbody>
          </table>
        </div>

        {/* 加算料金テーブル */}
        <h4 className="font-semibold mb-2 text-gray-600">【主な加算料金】</h4>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white text-center">
             <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold">加算項目</th>
                <th className="py-3 px-4 border-b font-semibold">1割負担</th>
                <th className="py-3 px-4 border-b font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b">初期加算</td><td className="py-2 px-4 border-b">30円</td><td className="py-2 px-4 border-b text-left">ご入居日から30日間のみ</td></tr>
              <tr><td className="py-2 px-4 border-b">医療連携体制加算(I)ハ</td><td className="py-2 px-4 border-b">37円</td><td className="py-2 px-4 border-b"></td></tr>
              <tr><td className="py-2 px-4 border-b">サービス提供体制強化加算(I)</td><td className="py-2 px-4 border-b">22円</td><td className="py-2 px-4 border-b"></td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-2">※この他に、1ヶ月の介護サービス費合計に対して<strong>18.6%</strong>の「介護職員処遇改善加算(I)」が加わります。</p>


        <h3 className="text-lg font-medium mt-8 mb-3 text-gray-700">(2) その他の費用（実費負担・1日あたり）</h3>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold text-left">項目</th>
                <th className="py-3 px-4 border-b font-semibold text-right">料金</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b">家賃（管理費）</td><td className="py-2 px-4 border-b text-right">1,000円</td></tr>
              <tr><td className="py-2 px-4 border-b">食材料費</td><td className="py-2 px-4 border-b text-right">1,600円</td></tr>
              <tr><td className="py-2 px-4 border-b">水道光熱費</td><td className="py-2 px-4 border-b text-right">600円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 小規模多機能型居宅介護 --- */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-300 text-gray-700">
          2. 小規模多機能型居宅介護の料金
        </h2>
        <p className="mb-6 text-gray-600">
          「通い」を中心に、「訪問」「泊まり」のサービスを柔軟に組み合わせて利用できるサービスです。介護サービス費は月額定額制です。
        </p>
        
        <h3 className="text-lg font-medium mb-3 text-gray-700">(1) 介護サービス費（1ヶ月あたり・1割負担の場合）</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 基本料金 */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-600">【基本料金】</h4>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr><th className="py-3 px-4 border-b font-semibold text-left">介護区分</th><th className="py-3 px-4 border-b font-semibold text-right">自己負担額</th></tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b">要支援1</td><td className="py-2 px-4 border-b text-right">3,438円</td></tr>
                  <tr><td className="py-2 px-4 border-b">要支援2</td><td className="py-2 px-4 border-b text-right">6,972円</td></tr>
                  <tr><td className="py-2 px-4 border-b">要介護1</td><td className="py-2 px-4 border-b text-right">10,458円</td></tr>
                  <tr><td className="py-2 px-4 border-b">要介護2</td><td className="py-2 px-4 border-b text-right">15,370円</td></tr>
                  <tr><td className="py-2 px-4 border-b">要介護3</td><td className="py-2 px-4 border-b text-right">23,369円</td></tr>
                  <tr><td className="py-2 px-4 border-b">要介護4</td><td className="py-2 px-4 border-b text-right">24,877円</td></tr>
                  <tr><td className="py-2 px-4 border-b">要介護5</td><td className="py-2 px-4 border-b text-right">27,239円</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 加算料金 */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-600">【主な加算料金】</h4>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                   <tr><th className="py-3 px-4 border-b font-semibold text-left">加算項目</th><th className="py-3 px-4 border-b font-semibold text-right">自己負担額</th></tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b">サービス提供体制強化加算(I)</td><td className="py-2 px-4 border-b text-right">1,500円</td></tr>
                  <tr><td className="py-2 px-4 border-b">総合マネジメント体制強化加算</td><td className="py-2 px-4 border-b text-right">2,200円</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-medium mt-8 mb-3 text-gray-700">(2) その他の費用（実費負担）</h3>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
             <thead className="bg-gray-100">
               <tr>
                <th className="py-3 px-4 border-b font-semibold text-left">項目</th>
                <th className="py-3 px-4 border-b font-semibold text-right">料金</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b">食費</td><td className="py-2 px-4 border-b text-right">朝食:450円, 昼食:700円, 夕食:500円</td></tr>
              <tr><td className="py-2 px-4 border-b">宿泊費</td><td className="py-2 px-4 border-b text-right">1泊 1,700円</td></tr>
              <tr><td className="py-2 px-4 border-b">おむつ代・日常生活費</td><td className="py-2 px-4 border-b text-right">実費</td></tr>
              <tr><td className="py-2 px-4 border-b">通院介助費</td><td className="py-2 px-4 border-b text-right">1時間 2,000円</td></tr>
              <tr><td className="py-2 px-4 border-b">行事費</td><td className="py-2 px-4 border-b text-right">1ヶ月 500円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- お支払いについて --- */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-300 text-gray-700">
          お支払いについて
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>毎月10日までに、前月分のご利用料金の請求書をお渡しいたします。</li>
          <li>お支払いは、原則として口座振替でお願いしております。</li>
          <li>やむを得ず現金でお支払いされる場合は、翌月末までにお願いいたします。</li>
        </ul>
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-r-lg">
          <p><strong>ご注意：</strong>上記料金は、資料記載時点のものです。介護保険法の改定などにより、料金が変更になる場合がございます。詳細な料金は、ご利用者様のケアプランに基づき個別にご提示いたしますので、お気軽にお問い合わせください。</p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;