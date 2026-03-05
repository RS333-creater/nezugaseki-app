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

        {/* 料金詳細：白カード */}
        <section className="rounded-[3rem] bg-#082f50 p-8 sm:p-20 shadow-2xl overflow-hidden">
          <h2 className="text-3xl font-black mb-10 text-sky-950 border-b-4 border-sky-500 pb-4 inline-block">
            1. グループホームの料金
          </h2>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-black mb-6 text-slate-800 uppercase tracking-widest">基本料金 (1日)</h4>
              <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
                <table className="min-w-full text-center">
                  <thead className="bg-slate-50">
                    <tr className="text-slate-500 text-xs font-black uppercase">
                      <th className="py-5 px-4">介護度</th>
                      <th className="py-5 px-4">1割負担</th>
                      <th className="py-5 px-4">3割負担</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold text-slate-700">
                    <tr className="border-t border-slate-50"><td>要支援2</td><td>749円</td><td>2,247円</td></tr>
                    <tr className="border-t border-slate-50 bg-slate-50/30"><td>要介護1</td><td>753円</td><td>2,259円</td></tr>
                    <tr className="border-t border-slate-50"><td>要介護2</td><td>788円</td><td>2,364円</td></tr>
                    <tr className="border-t border-slate-50 bg-slate-50/30"><td>要介護3</td><td>812円</td><td>2,464円</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-black mb-6 text-slate-800 uppercase tracking-widest">その他費用</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {[{t:"家賃", p:"1,000円"}, {t:"食費", p:"1,600円"}, {t:"光熱費", p:"600円"}].map((item, i)=>(
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-xs font-black text-slate-400 mb-2 uppercase">{item.t}</p>
                    <p className="text-2xl font-black text-sky-700">{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </OceanPage>
  );
};

export default Pricing;