import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import OceanPage from "../components/OceanPage.jsx";

// SwiperなどのCSSはApp.jsx等で一括読み込みされている前提です

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-6 space-y-12"
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
          // style={{ width: '1100px', height: '550px' }}
        >
          <SwiperSlide>
            <img 
              src="/images/facility-010.jpg" 
              alt="slide1" 
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/gaikan-2.jpg" 
              alt="slide2" 
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/facility-003.jpg" 
              alt="slide3" 
              className="rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* イントロテキスト */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="bg-blue-50 p-6 rounded shadow"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              弊社は地域密着型通所介護を展開しております。<br />
              弊社には <span className="font-semibold text-blue-700">グループホームねずがせき</span> がございます。
            </p>
          </div>
        </motion.section>
      </div>

      {/* 事業目的 */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-blue-200 p-6 rounded shadow"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-blue-800">事業目的</h2>
            <p className="mb-4">
              認知症によって自立した生活が困難になった利用者に対して家庭的な環境のもとで食事、入浴、排泄の世話及び日常生活の中で心身の機能訓練を行うことにより、安心と尊厳のある生活を利用者がその有する能力に応じ可能な限り自立して生活を営むことができる様にすることを目的とする。
            </p>
          </div>
        </motion.section>
      </div>

      {/* 施設紹介 */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">事業所紹介</h2>
        </div>
        <div className="flex justify-center"> 
        <div className="max-w-md w-full">
          {/* グループホーム */}
          <Link to="facility/day-service" onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded shadow p-4 cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">グループホームねずがせき</h3>
                <div className="w-full h-48 mb-4 relative">
                  <img
                    src="/images/facility-003.jpg"
                    alt="グループホーム"
                    className="w-full h-full object-cover rounded cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleImageClick("/images/grouphome-035.jpg");
                    }}
                  />
                </div>
                <p className="mb-4">
                  地域密着型サービスとして利用者様を24時間体制で支えながら、安定した生活と本人の望む生活を実現できるように尽力いたします！
                </p>
                <p className="text-blue-600 underline hover:text-blue-800">詳細はこちら</p>
              </div>
            </motion.div>
          </Link>
          </div>
          </div>
          </div>

      {/* ご利用案内 */}
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/Pricing" onClick={() => window.scrollTo(0, 0)}>
          <motion.section
            whileHover={{ scale: 1.02 }}
            className="bg-blue-100 p-6 rounded shadow cursor-pointer"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-lg font-bold mb-4">ご利用料金案内</h2>
              <img src="/images/介護施設.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
              <p className="mb-4"></p>
              <p className="text-blue-700 underline hover:text-blue-900">ご利用料金について</p>
            </div>
          </motion.section>
        </Link>
      </div>

            <motion.section 
              whileHover={{ y: -10 }}
              className="rounded-[2.5rem] bg-#082f49 p-10 sm:p-16 shadow-2xl flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-6 text-sky-950 tracking-tighter">事業目的</h2>
              <p className="text-slate-600 leading-loose text-base sm:text-xl font-bold">
                認知症によって自立した生活が困難になった利用者に対して、安心と尊厳のある生活を営めるよう支援することを目的としています。
              </p>
            </motion.section>
          </div>

          {/* 事業所紹介：ダークグラスデザイン */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-10 sm:mb-16 tracking-tighter">事業所紹介</h2>
            <Link to="/facility/day-service">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="group bg-sky-900/30 backdrop-blur-md rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="h-64 sm:h-[450px] lg:w-3/5 overflow-hidden">
                    <img src="/images/facility-003.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="facility" />
                  </div>
                  <div className="p-10 sm:p-16 lg:w-2/5 flex flex-col justify-center">
                    <h3 className="text-3xl sm:text-4xl font-black mb-6 text-white tracking-tight">グループホームねずがせき</h3>
                    <p className="text-sky-100/70 mb-10 text-base sm:text-xl leading-relaxed">24時間体制で、利用者様の安定した生活と望む暮らしを実現いたします。</p>
                    <div className="text-sky-400 font-black tracking-[0.2em] text-sm uppercase">VIEW DETAILS →</div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </OceanPage>
    </div>
  );
};

export default Home;