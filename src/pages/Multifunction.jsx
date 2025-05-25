import React from "react";

const Multifunction = () => {
  return (
    <div className="p-6 space-y-12">
      {/* 上部スライドショー */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/images/takinoo (37).jpg" alt="slide1" className="rounded shadow-md" />
        <img src="/images/takinoo (40).jpg" alt="slide2" className="rounded shadow-md" />
        <img src="/images/takinoo (2).jpg" alt="slide3" className="rounded shadow-md" />
      </section>

      {/* 紹介文 */}
      <section className="bg-green-50 p-6 rounded shadow">
        <p className="text-lg leading-relaxed">
          海と山に囲まれた自然豊かな環境で、利用者様の安心・快適な生活をサポートします。<br />
          また、個別ケアプランに基づき、日常生活支援やリハビリを提供し、自然の中で心身ともに健やかな日々を送れるように
          サポートさせていただいております。
        </p>
      </section>

      {/* イベント紹介 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-green-800">イベント</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/takinoo (4).jpg" alt="event1" className="rounded shadow-md" />
          <img src="/images/takinoo (5).jpg" alt="event2" className="rounded shadow-md" />
          <img src="/images/takinoo (21).jpg" alt="event3" className="rounded shadow-md" />
        </div>
        <p className="text-lg leading-relaxed bg-white p-4 rounded shadow">
          お花見や折り紙教室などの各種行事を通じて、入居者同士の交流や楽しみを提供します。<br />
          また、季節ごとのイベントや趣味活動が充実しており、心豊かな生活をサポートします。
        </p>
      </section>
    </div>
  );
};

export default Multifunction;
