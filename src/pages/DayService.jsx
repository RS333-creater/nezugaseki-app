import React from "react";

const DayService = () => {
  return (
    <div className="p-6 space-y-12">
      {/* 上部スライドショー */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/images/grouphome (20).jpg" alt="slide1" className="rounded shadow-md" />
        <img src="/images/grouphome (29).jpg" alt="slide2" className="rounded shadow-md" />
        <img src="/images/grouphome (50).jpg" alt="slide3" className="rounded shadow-md" />
      </section>

      {/* 施設紹介文 */}
      <section className="bg-blue-50 p-6 rounded shadow">
        <p className="text-lg leading-relaxed">
          鼠ヶ関という雄大な山々と日本海という自然に囲まれた環境で、リラックスできる空間を提供しています。<br />
          利用者様一人一人に寄り添い、安定した生活と本人の望む生活を実現できるように
          <span className="font-semibold text-blue-700">24時間体制</span>で支えます。
        </p>
      </section>

      {/* イベントスライド */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-blue-800">イベント</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/grouphome (24).jpg" alt="event1" className="rounded shadow-md" />
          <img src="/images/grouphome (33).jpg" alt="event2" className="rounded shadow-md" />
          <img src="/images/grouphome (2).jpg" alt="event3" className="rounded shadow-md" />
        </div>
        <p className="text-lg leading-relaxed bg-white p-4 rounded shadow">
          月に一度のペースで様々なイベントを行っており、利用者様と一緒に私たち従業員も楽しんでおります。<br />
          また、イベント等で制作した作品や写真を思い出として掲示板に掲示しております。
        </p>
      </section>
    </div>
  );
};

export default DayService;
