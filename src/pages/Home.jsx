import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';

// スタイルのインポート
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'react-toastify/dist/ReactToastify.css';

// モーダルのルート設定
if (typeof window !== 'undefined' && document.getElementById('root')) {
  Modal.setAppElement('#root');
}

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const handleContactClick = () => {
    toast.info("お電話でのお問い合わせをお待ちしております！", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-6 space-y-12 mx-auto"
    >
      {/* ヒーロースライダー */}
      <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="aspect-video"
        >
          <SwiperSlide><img src="/images/facility-010.jpg" alt="施設内景" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/images/gaikan-2.jpg" alt="施設外観" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/images/facility-003.jpg" alt="施設外観2" className="w-full h-full object-cover" /></SwiperSlide>
        </Swiper>
      </div>

      {/* メッセージセクション */}
      <div className="max-w-2xl mx-auto px-4 space-y-8">
        <motion.section whileHover={{ scale: 1.01 }} className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
          <p className="text-lg leading-relaxed text-center text-blue-900">
            弊社は地域密着型通所介護を展開しております。<br />
            <span className="font-bold">グループホームねずがせき</span> では、手厚いケアを心掛けています。
          </p>
        </motion.section>

        <motion.section whileHover={{ scale: 1.01 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">事業目的</h2>
          <p className="text-gray-600 text-center leading-loose">
            認知症によって自立した生活が困難になった利用者に対して、家庭的な環境のもとで安心と尊厳のある生活を営めるよう支援することを目的としています。
          </p>
        </motion.section>
      </div>

      {/* 事業所紹介 */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">事業所紹介</h2>
        <div className="flex justify-center">
          <Link to="/facility/day-service" className="max-w-md w-full">
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <img src="/images/facility-003.jpg" alt="事業所" className="w-full h-56 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">グループホームねずがせき</h3>
                <p className="text-gray-500 mb-6 text-sm">24時間体制で利用者様の安心できる暮らしをサポートいたします。</p>
                <span className="text-blue-600 font-bold underline">詳細はこちら</span>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* アクションリンク */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <Link to="/Pricing" className="bg-blue-600 p-8 rounded-3xl text-center text-white shadow-lg hover:bg-blue-700 transition-colors">
          <h3 className="text-xl font-bold mb-2">料金案内</h3>
          <p className="text-blue-100 text-sm">ご利用料金の詳細はこちら</p>
        </Link>
        <Link to="/Contact" className="bg-gray-800 p-8 rounded-3xl text-center text-white shadow-lg hover:bg-gray-900 transition-colors">
          <h3 className="text-xl font-bold mb-2">お問い合わせ</h3>
          <p className="text-gray-400 text-sm">お電話: 0234-28-8585</p>
        </Link>
      </div>

      {/* 画像拡大モーダル */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white p-4 rounded-2xl outline-none"
        overlayClassName="fixed inset-0 bg-black/80 z-[1000]"
      >
        <div className="relative">
          <img src={selectedImage} alt="拡大" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
          <button onClick={() => setModalIsOpen(false)} className="mt-4 w-full py-3 bg-blue-600 text-white font-bold rounded-xl">閉じる</button>
        </div>
      </Modal>

      <ToastContainer />
    </motion.div>
  );
};

export default Home;