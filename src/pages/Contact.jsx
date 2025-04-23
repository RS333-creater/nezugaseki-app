import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("送信データ:", data);
    alert("お問い合わせありがとうございます！");
    reset(); // フォームリセット
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-8 max-w-2xl mx-auto mt-10">
  <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">お問い合わせフォーム</h1>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

    {/* 名前 */}
    <div>
      <label className="block font-medium mb-1">お名前 <span className="text-red-500">*</span></label>
      <input
        {...register("name", { required: "お名前は必須です" })}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="山田 太郎"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
    </div>

    {/* メール */}
    <div>
      <label className="block font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
      <input
        {...register("email", {
          required: "メールアドレスは必須です",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "正しいメール形式で入力してください"
          }
        })}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="example@mail.com"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    </div>

    {/* 電話番号 */}
    <div>
      <label className="block font-medium mb-1">電話番号（任意）</label>
      <input
        {...register("phone")}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="090-1234-5678"
      />
    </div>

    {/* メッセージ */}
    <div>
      <label className="block font-medium mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
      <textarea
        {...register("message", { required: "お問い合わせ内容は必須です" })}
        rows="5"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="ご相談内容をご記入ください"
      ></textarea>
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
    </div>

    {/* 送信ボタン */}
    <div className="text-center">
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
      >
        送信
      </button>
    </div>
  </form>
</div>

  );
};

export default Contact;
