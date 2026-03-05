import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import OceanPage from "../components/OceanPage.jsx";
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
    <OceanPage
      badge="地域密着型の介護サービス"
      title="ケアサービスつきみ"
      description={
        <>
          海辺の風を感じるような、落ち着いた空間づくり。<br />
          日々の暮らしに寄り添い、安心できる時間をサポートします。
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
              alt="slide1" 
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/gaikan-2.jpg" 
              alt="slide2" 
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="/images/facility-003.jpg" 
              alt="slide3" 
              className="rounded-2xl w-full h-full object-cover shadow-xl ring-1 ring-slate-200"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* イントロテキスト */}
      <div className="max-w-2xl mx-auto">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl bg-gradient-to-br from-white to-sky-50 p-6 sm:p-8 shadow-lg ring-1 ring-sky-100"
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              弊社は地域密着型通所介護を展開しております。<br />
              弊社には <span className="font-semibold text-sky-700">グループホームねずがせき</span> がございます。
            </p>
          </div>
        </motion.section>
      </div>

      {/* 事業目的 */}
      <div className="max-w-2xl mx-auto">
        <motion.section
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-slate-100"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-wide text-sky-950">
              事業目的
            </h2>
            <p className="mb-1 text-slate-700 leading-relaxed">
              認知症によって自立した生活が困難になった利用者に対して家庭的な環境のもとで食事、入浴、排泄の世話及び日常生活の中で心身の機能訓練を行うことにより、安心と尊厳のある生活を利用者がその有する能力に応じ可能な限り自立して生活を営むことができる様にすることを目的とする。
            </p>
          </div>
        </motion.section>
      </div>

      {/* 施設紹介 */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-sky-950">
            事業所紹介
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Link to="/facility/day-service" onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-100 p-5 cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide mb-4 text-sky-950">
                  グループホームねずがせき
                </h3>
                <div className="w-full h-48 mb-4 relative">
                  <img
                    src="/images/facility-003.jpg"
                    alt="グループホーム"
                    className="w-full h-full object-cover rounded-xl cursor-pointer ring-1 ring-slate-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleImageClick("/images/grouphome-035.jpg");
                    }}
                  />
                </div>
                <p className="mb-4 text-slate-700 leading-relaxed">
                  地域密着型サービスとして利用者様を24時間体制で支えながら、安定した生活と本人の望む生活を実現できるように尽力いたします！
                </p>
                <p className="text-sky-700 underline hover:text-sky-900">詳細はこちら</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* ご利用案内 */}
      <div className="max-w-2xl mx-auto">
        <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
          <motion.section
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-sky-100 cursor-pointer"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-lg sm:text-xl font-semibold tracking-wide mb-4 text-sky-950">
                ご利用案内
              </h2>
              <img src="/images/介護施設.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
              <p className="mb-4 text-slate-700">ご相談からご利用までの流れ</p>
              <p className="text-sky-700 underline hover:text-sky-900">ご利用方法について</p>
            </div>
          </motion.section>
        </Link>
      </div>

      {/* お問い合わせ */}
      <div className="max-w-2xl mx-auto">
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <motion.section
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-slate-100 cursor-pointer"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-lg sm:text-xl font-semibold tracking-wide mb-4 text-sky-950">
                お問い合わせ
              </h2>
              <img src="/images/caremanager.png" alt="施設" className="mx-auto mb-4 h-24 w-auto" />
              <p className="cursor-pointer text-slate-700" onClick={(e) => {
                e.preventDefault();
                handleContactClick();
              }}>0234-28-8585 10:00~17:00</p>
              <p className="text-sky-700 underline hover:text-sky-900">お問い合わせフォームへ</p>
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
    </OceanPage>
  );
};

export default Home;
