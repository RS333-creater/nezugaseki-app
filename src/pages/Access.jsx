import OceanPage from "../components/OceanPage.jsx";

const Access = () => {
  return (
    <OceanPage
      badge="地図で確認"
      title="アクセス"
      description="下記の地図をご参照ください。拡大・縮小も可能です。"
    >
      {/* bg-whiteを削除し、半透明(white/10)に変更 */}
      <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-2xl p-4 sm:p-8 border border-white/20 shadow-2xl">
        <div className="relative w-full overflow-hidden rounded-[2rem] shadow-inner" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            title="施設の地図"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL" // 実際のURLに差し替え
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </OceanPage>
  );
};
export default Access;