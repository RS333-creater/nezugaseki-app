import React from "react";

const Pricing = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto font-sans bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">料金のご案内</h1>

      {/* 料金構成 */}
      <div className="mb-10 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded-r-lg">
        <h3 className="font-bold mb-1">料金の構成について</h3>
        <p>月々のご利用料金は、主に以下の2つの合計額となります。</p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>介護サービス費</strong>：介護保険適用分（1〜3割負担）。</li>
          <li><strong>その他の費用</strong>：家賃や食費など全額自己負担分。</li>
        </ul>
      </div>

      {/* グループホーム */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-300 text-gray-700">1. グループホームの料金</h2>
        <p className="mb-6 text-gray-600 italic">認知症の診断を受けた方が、家庭的な環境で共同生活を送るサービスです。</p>

        <h3 className="text-lg font-medium mb-3 text-gray-700">(1) 介護サービス費（1日あたり）</h3>
        <div className="overflow-x-auto shadow-md rounded-lg mb-6">
          <table className="min-w-full bg-white text-center">
            <thead className="bg-gray-100">
              <tr className="text-sm">
                <th className="py-3 border-b">介護度</th>
                <th className="py-3 border-b">1割負担</th>
                <th className="py-3 border-b">2割負担</th>
                <th className="py-3 border-b">3割負担</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr><td className="py-2 border-b">要支援2</td><td className="py-2 border-b">749円</td><td className="py-2 border-b">1,498円</td><td className="py-2 border-b">2,247円</td></tr>
              <tr><td className="py-2 border-b">要介護1</td><td className="py-2 border-b">753円</td><td className="py-2 border-b">1,506円</td><td className="py-2 border-b">2,259円</td></tr>
              <tr><td className="py-2 border-b font-semibold bg-blue-50/30">要介護2</td><td className="py-2 border-b bg-blue-50/30">788円</td><td className="py-2 border-b bg-blue-50/30">1,576円</td><td className="py-2 border-b bg-blue-50/30">2,364円</td></tr>
              <tr><td className="py-2 border-b">要介護3</td><td className="py-2 border-b">812円</td><td className="py-2 border-b">1,624円</td><td className="py-2 border-b">2,464円</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium mt-8 mb-3 text-gray-700">(2) その他の費用（実費負担・1日あたり）</h3>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left">項目</th>
                <th className="py-3 px-4 border-b text-right">料金</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50"><td className="py-2 px-4 border-b">家賃（管理費）</td><td className="py-2 px-4 border-b text-right">1,000円</td></tr>
              <tr className="hover:bg-gray-50"><td className="py-2 px-4 border-b">食材料費</td><td className="py-2 px-4 border-b text-right">1,600円</td></tr>
              <tr className="hover:bg-gray-50"><td className="py-2 px-4 border-b">水道光熱費</td><td className="py-2 px-4 border-b text-right">600円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* お支払いについて */}
      <section className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-700">お支払いについて</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>毎月10日までに、前月分のご請求書をお渡しいたします。</li>
          <li>お支払いは原則として口座振替をお願いしております。</li>
        </ul>
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 text-sm">
          <p><strong>ご注意：</strong>上記料金は改定などにより変更になる場合がございます。詳細は個別にご提示いたします。</p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;