import React from "react";
import { Link } from "react-router-dom";

const documentPath = "/documents/group-home-important-information-r8-06.pdf";

const ImportantInformation = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wider text-blue-700 mb-2">
            グループホームねずがせき
          </p>
          <h1 className="text-3xl font-bold text-gray-800">重要事項説明書</h1>
          <p className="mt-3 text-gray-600">令和8年6月改定</p>
        </header>

        <section className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6 sm:p-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            重要事項説明書について
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当事業所では、（介護予防）認知症対応型共同生活介護サービスの提供開始にあたり、
            ご利用者様およびご家族の皆様に事前にご確認いただく重要事項を公開しています。
            サービスの内容や利用料金、緊急時の対応、苦情相談窓口などを記載していますので、
            ご利用前にご確認ください。
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-5">主な記載内容</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="bg-gray-50 rounded-lg p-3">事業の目的および運営方針</li>
            <li className="bg-gray-50 rounded-lg p-3">事業所の概要と職員体制</li>
            <li className="bg-gray-50 rounded-lg p-3">提供するサービスの内容</li>
            <li className="bg-gray-50 rounded-lg p-3">利用料金とお支払い方法</li>
            <li className="bg-gray-50 rounded-lg p-3">事故・緊急時および災害時の対応</li>
            <li className="bg-gray-50 rounded-lg p-3">苦情相談窓口</li>
            <li className="bg-gray-50 rounded-lg p-3">サービスの利用・終了方法</li>
            <li className="bg-gray-50 rounded-lg p-3">ご利用にあたっての留意事項</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            重要事項説明書の閲覧
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            下記から重要事項説明書の全文をPDF形式でご確認いただけます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={documentPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              PDFを開く
            </a>
            <a
              href={documentPath}
              download
              className="inline-flex justify-center items-center px-6 py-3 bg-white text-blue-700 font-semibold border border-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
            >
              PDFを保存する
            </a>
          </div>
        </section>

        <aside className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-5 text-sm text-yellow-900 leading-relaxed">
          実際のご契約時には、担当者が書面に基づいて内容をご説明します。
          ご不明な点は
          <Link to="/contact" className="font-semibold underline hover:no-underline mx-1">
            お問い合わせページ
          </Link>
          に記載の窓口へご相談ください。
        </aside>
      </div>
    </div>
  );
};

export default ImportantInformation;
