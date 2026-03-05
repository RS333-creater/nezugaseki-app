import { useForm } from "react-hook-form";
import OceanPage from "../components/OceanPage.jsx";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => { /* 送信処理 */ };

  return (
    <OceanPage
      badge="ご相談・お問い合わせ"
      title="お問い合わせ"
      description="お電話、またはフォームからお気軽にご連絡ください。"
    >
      {/* bg-whiteを削除し、半透明(white/10)に変更。文字は白くする。 */}
      <div className="max-w-2xl mx-auto rounded-[3rem] bg-white/10 backdrop-blur-3xl shadow-2xl border border-white/20 p-8 sm:p-16">
        <h2 className="text-3xl font-black mb-10 text-center text-white">Contact Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label className="block text-xs font-black text-sky-300 uppercase mb-2">Name</label>
            <input {...register("name")} className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-black text-sky-300 uppercase mb-2">Message</label>
            <textarea {...register("message")} className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-sky-500" rows="5" />
          </div>
          <button type="submit" className="w-full bg-white text-sky-950 font-black py-4 rounded-2xl hover:bg-sky-400 hover:text-white transition-all">SEND</button>
        </form>
      </div>
    </OceanPage>
  );
};
export default Contact;