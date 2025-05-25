const Access = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">アクセス</h1>
      <p className="mb-4">下記の地図をご参照ください。</p>
      <div className="w-full h-[400px]">
        <iframe
            title="施設の地図"  // ★必須！アクセシビリティ対応のための説明的タイトル
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1559.7712880725003!2d139.5529439436644!3d38.56735006979684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8c70426e634cf3%3A0x90c6fd30af53b920!2z44Kw44Or44O844OX44Ob44O844Og44Gt44Ga44GM44Gb44GN!5e0!3m2!1sja!2sjp!4v1748182073839!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}  // ★styleはオブジェクトで書く
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />


      </div>
    </div>
  );
};

export default Access;
