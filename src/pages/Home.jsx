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

// モーダルのルート要素を設定
Modal.setAppElement('#root');

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // 画像をクリックしたときのハンドラー
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  // お問い合わせボタンクリック時のハンドラー
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
      {/* スライドショー（Swiperを使用） */}
      <div className="w-[1000px] mx-auto">
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
          style={{ width: '1100px', height: '550px' }}
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
              弊社には <span className="font-semibold text-blue-700">グループホームねずがせき</span>、そして
              <span className="font-semibold text-blue-700">多機能ねずがせき</span> の二つの施設がございます。
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
        <div className="grid md:grid-cols-2 gap-6">
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

          {/* 多機能ねずがせき */}
          <Link to="/facility/multifunction" onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded shadow p-4 cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">多機能ねずがせき</h3>
                <div className="w-full h-48 mb-4 relative">
                  <img
                    src="/images/takinoo-031.jpg"
                    alt="多機能"
                    className="w-full h-full object-cover rounded cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleImageClick("/images/takinoo-037.jpg");
                    }}
                  />
                </div>
                <p className="mb-4">
                  デイサービスを中心に訪問介護やショートステイを組み合わせ、在宅での生活の支援や、機能訓練を行っております！
                </p>
                <p className="text-blue-600 underline hover:text-blue-800">詳細はこちら</p>
              </div>
            </motion.div>
          </Link>
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
              <h2 className="text-lg font-bold mb-4">ご利用案内</h2>
              <img src="/images/介護施設.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
              <p className="mb-4">ご相談からご利用までの流れ</p>
              <p className="text-blue-700 underline hover:text-blue-900">ご利用方法について</p>
            </div>
          </motion.section>
        </Link>
      </div>

      {/* お問い合わせ */}
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}>
          <motion.section
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 p-6 rounded shadow cursor-pointer"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-lg font-bold mb-4">お問合わせ</h2>
              <img src="/images/caremanager.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
              <p className="cursor-pointer" onClick={(e) => {
                e.preventDefault();
                handleContactClick();
              }}>000-0000-0000 10:00~17:00</p>
              <p className="text-blue-600 underline hover:text-blue-800">お問い合わせフォームへ</p>
            </div>
          </motion.section>
        </Link>
      </div>

      {/* モーダル */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
          }
        }}
        contentLabel="Image Modal"
      >
        <div style={{ width: '100%' }}>
          <img 
            src={selectedImage} 
            alt="拡大画像" 
            style={{ 
              width: '100%',
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain'
            }} 
          />
          <button
            onClick={() => setModalIsOpen(false)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            閉じる
          </button>
        </div>
      </Modal>

      {/* Toast通知のコンテナ */}
      <ToastContainer />
    </motion.div>
  );
};

export default Home;
