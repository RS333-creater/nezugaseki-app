import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import OceanPage from "../components/OceanPage.jsx";

// SwiperなどのCSSはApp.jsx等で一括読み込みされている前提です

const Home = () => {
  return (
    <div className="pt-16 sm:pt-20">
      <OceanPage
        badge="地域密着型の介護サービス"
        title="ケアサービスつきみ"
        description="海辺の風を感じるような、落ち着いた空間づくり。日々の暮らしに寄り添い、安心できる時間をサポートします。"
      >
        <div className="space-y-16 sm:space-y-36 pb-20">
          
          {/* メインスライダー */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="h-[300px] sm:h-[650px] rounded-[2rem] sm:rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {["/images/facility-010.jpg", "/images/gaikan-2.jpg", "/images/facility-003.jpg"].map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} className="w-full h-full object-cover" alt="slide" />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* イントロ・ミッション：半透明デザイン */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <motion.section 
              whileHover={{ y: -10 }}
              className="rounded-[2.5rem] bg-white/10 backdrop-blur-2xl p-10 sm:p-16 shadow-2x1"
            >
              <p className="text-xl sm:text-3xl font-black leading-relaxed text-white tracking-tight">
                弊社は地域密着型通所介護を展開しております。<br />
                <span className="text-sky-300 underline decoration-sky-500/50 underline-offset-8">グループホームねずがせき</span> を併設しています。
              </p>
            </motion.section>

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