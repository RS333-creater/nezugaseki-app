import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DayService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-6 space-y-12"
    >
      {/* スライドショー（Swiperを使用） */}
      <div className="max-w-[1100px] mx-auto">
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
          className="h-[550px]"
          style={{ width: '1100px', height: '550px' }}
        >
          <SwiperSlide>
            <img 
              src="/images/facility-010.jpg" 
              alt="slide1" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/gaikan-2.jpg" 
              alt="slide2" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/facility-003.jpg" 
              alt="slide3" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 施設紹介文 */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="bg-blue-50 p-6 rounded shadow"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              鼠ヶ関という雄大な山々と日本海という自然に囲まれた環境で、リラックスできる空間を提供しています。<br />
              利用者様一人一人に寄り添い、安定した生活と本人の望む生活を実現できるように
              <span className="font-semibold text-blue-700">24時間体制</span>で支えます。
            </p>
          </div>
        </motion.section>
      </div>

      {/* イベントスライド */}
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-blue-800">イベント</h2>
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
          className="h-[550px]"
          style={{ width: '1100px', height: '550px' }}
        >
          <SwiperSlide>
            <img 
              src="/images/grouphome-024.jpg" 
              alt="event1" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/grouphome-033.jpg" 
              alt="event2" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/grouphome-002.jpg" 
              alt="event3" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded shadow mt-6"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              月に一度のペースで様々なイベントを行っており、利用者様と一緒に私たち従業員も楽しんでおります。<br />
              また、イベント等で制作した作品や写真を思い出として掲示板に掲示しております。
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default DayService;
