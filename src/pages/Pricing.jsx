import React from "react";
import OceanPage from "../components/OceanPage.jsx";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <OceanPage
      badge="料金の目安と構成"
      title="料金のご案内"
      description="介護サービス費（保険適用）と、その他費用（実費）の組み合わせでご案内します。"
    >
      <div className="max-w-6xl mx-auto space-y-16 pb-20">
        {/* 全体説明：ダークグラス */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="rounded-[2.5rem] bg-white/10 backdrop-blur-2xl p-8 sm:p-12 border border-white/20 shadow-2xl"
        >
          <h3 className="text-2xl font-black text-sky-400 mb-6 uppercase tracking-widest">Structure</h3>
          <ul className="space-y-6 text-white text-lg font-bold">
            <li className="flex gap-4"><span className="text-sky-400">01</span> 介護サービス費（1〜3割負担）</li>
            <li className="flex gap-4"><span className="text-sky-400">02</span> その他の費用（実費：家賃・食費等）</li>
          </ul>
        </motion.div>

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