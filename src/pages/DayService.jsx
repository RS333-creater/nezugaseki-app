import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import OceanPage from "../components/OceanPage.jsx";

const DayService = () => {
  return (
    <OceanPage
      badge="海辺の空気感を大切にした、落ち着けるデイサービス"
      title="デイサービス"
      description="自然の光と、穏やかな時間。その日の体調やご希望に寄り添いながら、安心して過ごせる一日をお手伝いします。"
    >
      <div className="space-y-24">
        {/* メインビジュアル */}
        <div className="w-full max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            autoplay={{ delay: 4000 }}
            className="h-[300px] sm:h-[600px] rounded-[3rem] shadow-2xl border border-white/10"
          >
            {["/images/facility-010.jpg", "/images/gaikan-2.jpg", "/images/facility-003.jpg"].map((src, i) => (
              <SwiperSlide key={i}><img src={src} className="w-full h-full object-cover" alt="facility" /></SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 紹介文：グラスモフィズム */}
        <motion.section
          whileHover={{ y: -10 }}
          className="max-w-4xl mx-auto rounded-[3rem] bg-white/5 backdrop-blur-2xl p-10 sm:p-20 shadow-2xl border border-white/10 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white mb-8">
            海と山に囲まれた、<br className="sm:hidden" />やさしい時間
          </h2>
          <p className="text-lg sm:text-2xl leading-relaxed text-sky-100/80 font-bold">
            鼠ヶ関という雄大な山々と日本海という自然に囲まれた環境で、リラックスできる空間を提供しています。
            一人一人に寄り添い、<span className="text-sky-400 underline decoration-sky-400 underline-offset-8">24時間体制</span>で支えます。
          </p>
        </motion.section>

        {/* イベントスライド：カードを反転（白背景）にしてリズムを作る */}
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Events</h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            className="h-[300px] sm:h-[600px] rounded-[3rem] shadow-2xl"
          >
            {["/images/grouphome-024.jpg", "/images/grouphome-033.jpg", "/images/grouphome-002.jpg"].map((src, i) => (
              <SwiperSlide key={i}><img src={src} className="w-full h-full object-cover" alt="event" /></SwiperSlide>
            ))}
          </Swiper>
          <div className="bg-#082f49 rounded-[2.5rem] p-10 sm:p-16 text-center shadow-2xl border border-white/10">
            <p className="text-lg sm:text-xl font-bold text-slate-700 leading-loose">
              月に一度のペースで様々なイベントを行っております。<br />
              作品や写真は思い出として掲示板に掲示し、利用者様と共に楽しんでいます。
            </p>
          </div>
        </div>
      </div>
    </OceanPage>
  );
};

export default DayService;