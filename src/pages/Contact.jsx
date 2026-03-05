import { useForm } from "react-hook-form";
import OceanPage from "../components/OceanPage.jsx";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert("お問い合わせありがとうございます！");
        reset();
      } else {
        alert("送信に失敗しました。");
      }
    } catch (error) {
      alert("送信時にエラーが発生しました。");
    }
  };

  return (
    <OceanPage
      badge="ご相談・お問い合わせ"
      title="お問い合わせ"
      description="お電話、またはフォームからお気軽にご連絡ください。"
    >
      <div className="max-w-2xl mx-auto rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-slate-100 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide mb-6 text-center text-sky-950">
          お問い合わせフォーム
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

    {/* 名前 */}
    <div>
      <label className="block font-medium mb-1 text-slate-800">お名前 <span className="text-red-500">*</span></label>
      <input
        {...register("name", { required: "お名前は必須です" })}
        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none"
        placeholder="山田 太郎"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
    </div>

    {/* メール */}
    <div>
      <label className="block font-medium mb-1 text-slate-800">メールアドレス <span className="text-red-500">*</span></label>
      <input
        {...register("email", {
          required: "メールアドレスは必須です",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "正しいメール形式で入力してください"
          }
        })}
        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none"
        placeholder="example@mail.com"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    </div>

    {/* 電話番号 */}
    <div>
      <label className="block font-medium mb-1 text-slate-800">電話番号（任意）</label>
      <input
        {...register("phone")}
        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none"
        placeholder="090-1234-5678"
      />
    </div>

    {/* メッセージ */}
    <div>
      <label className="block font-medium mb-1 text-slate-800">お問い合わせ内容 <span className="text-red-500">*</span></label>
      <textarea
        {...register("message", { required: "お問い合わせ内容は必須です" })}
        rows="5"
        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none"
        placeholder="ご相談内容をご記入ください"
      ></textarea>
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
    </div>

    {/* 送信ボタン */}
    <div className="text-center">
      <button
        type="submit"
        className="bg-sky-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-sky-700 transition duration-300 shadow-sm"
      >
        送信
      </button>
    </div>
        </form>
      </div>
    </OceanPage>

  );
};

export default Contact;
