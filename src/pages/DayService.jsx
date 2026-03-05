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
      description={
        <>
          自然の光と、穏やかな時間。<br />
          その日の体調やご希望に寄り添いながら、安心して過ごせる一日をお手伝いします。
        </>
      }
    >
      {/* スライドショー（Swiperを使用） */}
      <div className="w-full max-w-5xl mx-auto swiper-container-responsive">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="h-[520px] sm:h-[550px]"
        >
          <SwiperSlide>
            <img
              src="/images/facility-010.jpg"
              alt="施設の様子"
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/gaikan-2.jpg"
              alt="外観"
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/facility-003.jpg"
              alt="施設の外観"
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 施設紹介文 */}
      <div className="max-w-3xl mx-auto">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl bg-gradient-to-br from-white to-sky-50 p-6 sm:p-8 shadow-lg ring-1 ring-sky-100"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-sky-950">
              海と山に囲まれた、やさしい時間
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
              鼠ヶ関という雄大な山々と日本海という自然に囲まれた環境で、リラックスできる空間を提供しています。<br />
              利用者様一人一人に寄り添い、安定した生活と本人の望む生活を実現できるように
              <span className="font-semibold text-sky-700">24時間体制</span>で支えます。
            </p>
          </div>
        </motion.section>
      </div>

      {/* イベントスライド */}
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-sky-950">
            イベント
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            季節の行事や制作を通じて、交流と楽しみを大切にしています。
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="h-[520px] sm:h-[550px]"
        >
          <SwiperSlide>
            <img 
              src="/images/grouphome-024.jpg" 
              alt="event1" 
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/grouphome-033.jpg" 
              alt="event2" 
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/grouphome-002.jpg" 
              alt="event3" 
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
        </Swiper>
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="mt-6 rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-slate-100"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              月に一度のペースで様々なイベントを行っており、利用者様と一緒に私たち従業員も楽しんでおります。<br />
              また、イベント等で制作した作品や写真を思い出として掲示板に掲示しております。
            </p>
          </div>
        </motion.section>
      </div>
    </OceanPage>
  );
};

export default DayService;
