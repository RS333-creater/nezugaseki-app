import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Multifunction = () => {
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
              src="/images/takinoo-034.jpg" 
              alt="slide1" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/takinoo-040.jpg" 
              alt="slide2" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/takinoo-025.jpg" 
              alt="slide3" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 紹介文 */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="bg-green-50 p-6 rounded shadow"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              海と山に囲まれた自然豊かな環境で、利用者様の安心・快適な生活をサポートします。<br />
              また、個別ケアプランに基づき、日常生活支援やリハビリを提供し、自然の中で心身ともに健やかな日々を送れるように
              サポートさせていただいております。
            </p>
          </div>
        </motion.section>
      </div>

      {/* イベント紹介 */}
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-green-800">イベント</h2>
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
              src="/images/takinoo-026.jpg" 
              alt="event1" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/takinoo-005.jpg" 
              alt="event2" 
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/takinoo-021.jpg" 
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
              お花見や折り紙教室などの各種行事を通じて、入居者同士の交流や楽しみを提供します。<br />
              また、季節ごとのイベントや趣味活動が充実しており、心豊かな生活をサポートします。
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Multifunction;
