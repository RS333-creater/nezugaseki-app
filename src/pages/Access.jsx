import OceanPage from "../components/OceanPage.jsx";

const Access = () => {
  return (
    <OceanPage
      badge="地図で確認"
      title="アクセス"
      description="下記の地図をご参照ください。拡大・縮小も可能です。"
    >
      <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-lg ring-1 ring-slate-100">
        <div
          className="relative w-full overflow-hidden rounded-xl ring-1 ring-slate-200"
          style={{ paddingTop: "75%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            title="施設の地図"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1559.7712880725003!2d139.5529439436644!3d38.56735006979684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8c70426e634cf3%3A0x90c6fd30af53b920!2z44Kw44Or44O844OX44Ob44O844Og44Gt44Ga44GM44Gb44GN!5e0!3m2!1sja!2sjp!4v1748182073839!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </OceanPage>
  );
};

export default Access;
