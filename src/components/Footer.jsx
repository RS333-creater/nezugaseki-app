import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-white relative z-30 border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tighter">ケアサービスつきみ</h2>
            <p className="text-sm text-slate-400">山形県酒田市二番町8-1 / 0234-28-8585</p>
          </div>
          <ul className="flex justify-center md:justify-end gap-8 text-sm font-bold text-slate-500">
            <li><Link to="/pricing" onClick={scrollToTop} className="hover:text-white">料金案内</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white">お問い合わせ</Link></li>
          </ul>
        </div>
        <div className="mt-12 text-center text-[10px] font-bold text-slate-700 uppercase tracking-widest">
          &copy; 2026 Care Service TUKIMI.
        </div>
      </div>
    </footer>
  );
};
export default Footer;