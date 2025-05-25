import React from "react";

const Pricing = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">料金案内</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">グループホーム</h2>
        <ul className="list-disc list-inside">
          <li>初期費用：0円〜数百万円（平均約8.2万円）</li>
          <li>月額費用：15万円〜20万円程度（家賃、食費、管理費、介護サービス費などを含む）</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">多機能型居宅介護（小規模多機能ホーム）</h2>
        <ul className="list-disc list-inside">
          <li>介護保険自己負担額（月額）：
            <ul className="list-disc list-inside ml-4">
              <li>要介護1：1万423円</li>
              <li>要介護2：1万5,318円</li>
              <li>要介護3：2万2,283円</li>
              <li>要介護4：2万4,593円</li>
              <li>要介護5：2万7,117円</li>
            </ul>
          </li>
          <li>その他の費用：
            <ul className="list-disc list-inside ml-4">
              <li>食費：1食あたり約500円</li>
              <li>宿泊費：1泊あたり1,000〜3,000円</li>
              <li>その他：おむつ代、日用品費、加算料金など</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Pricing;
