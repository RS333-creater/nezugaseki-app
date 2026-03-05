import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const handleContactClick = () => {
    toast.info("お電話、もしくはお問い合わせフォームからのお問い合わせをお待ちしております！", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-6 space-y-12"
    >
      {/* スライドショー */}
      <div className="w-full max-w-5xl mx-auto swiper-container-responsive">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg overflow-hidden"
        >
          <SwiperSlide><img src="/images/facility-010.jpg" alt="slide1" /></SwiperSlide>
          <SwiperSlide><img src="/images/gaikan-2.jpg" alt="slide2" /></SwiperSlide>
          <SwiperSlide><img src="/images/facility-003.jpg" alt="slide3" /></SwiperSlide>
        </Swiper>
      </div>

      {/* イントロ */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.section whileHover={{ scale: 1.02 }} className="bg-blue-50 p-6 rounded shadow">
          <p className="text-lg leading-relaxed text-center">
            弊社は地域密着型通所介護を展開しております。<br />
            弊社には <span className="font-semibold text-blue-700">グループホームねずがせき</span> がございます。
          </p>
        </motion.section>
      </div>

      {/* 事業目的 */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.section whileHover={{ scale: 1.02 }} className="bg-white border border-blue-200 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-800 text-center">事業目的</h2>
          <p className="mb-4 text-center">認知症によって自立した生活が困難になった利用者に対して、家庭的な環境のもとで安心と尊厳のある生活を営めるよう支援することを目的とします。</p>
        </motion.section>
      </div>

      {/* 施設紹介：中央配置修正済み */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-6">事業所紹介</h2>
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <Link to="/facility/day-service" onClick={() => window.scrollTo(0, 0)}>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded shadow p-4 cursor-pointer">
                <h3 className="text-lg font-bold mb-4">グループホームねずがせき</h3>
                <div className="w-full h-48 mb-4">
                  <img src="/images/facility-003.jpg" alt="グループホーム" className="w-full h-full object-cover rounded" />
                </div>
                <p className="mb-4 text-sm leading-relaxed">地域密着型サービスとして利用者様を24時間体制で支えながら、安定した生活と本人の望む生活を実現します。</p>
                <p className="text-blue-600 underline">詳細はこちら</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* ご利用案内 */}
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/Pricing" onClick={() => window.scrollTo(0, 0)}>
          <motion.section whileHover={{ scale: 1.02 }} className="bg-blue-100 p-6 rounded shadow cursor-pointer text-center">
            <h2 className="text-lg font-bold mb-4">ご利用料金案内</h2>
            <img src="/images/介護施設.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
            <p className="text-blue-700 underline">ご利用料金について</p>
          </motion.section>
        </Link>
      </div>

      {/* お問い合わせ */}
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}>
          <motion.section whileHover={{ scale: 1.02 }} className="bg-gray-50 p-6 rounded shadow cursor-pointer text-center">
            <h2 className="text-lg font-bold mb-4">お問合わせ</h2>
            <img src="/images/caremanager.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
            <p className="mb-2">0234-28-8585 10:00~17:00</p>
            <p className="text-blue-600 underline">お問い合わせフォームへ</p>
          </motion.section>
        </Link>
      </div>

      {/* モーダル */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1000 },
          content: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', width: '90%', maxWidth: '800px', bottom: 'auto', right: 'auto' }
        }}
      >
        <div className="text-center">
          <img src={selectedImage} alt="拡大画像" className="max-w-full h-auto max-h-[70vh] mx-auto object-contain" />
          <button onClick={() => setModalIsOpen(false)} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">閉じる</button>
        </div>
      </Modal>

      <ToastContainer />
    </motion.div>
  );
};

export default Home;