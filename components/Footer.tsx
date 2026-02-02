
import React, { useState } from 'react';

interface FooterProps {
  onShowDevs: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowDevs }) => {
  const [logoError, setLogoError] = useState(false);
  const logoUrl = '/images/yct_logo.png';

  return (
    <footer className="bg-[#444444] text-white pt-10">
      {/* ============================================================
          1. โซเชียลมีเดีย (Facebook, โทรศัพท์, อีเมล)
          ============================================================ */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex gap-4">
          <a href="#" className="w-11 h-11 bg-slate-100/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="tel:045-756701" className="w-11 h-11 bg-slate-100/10 hover:bg-slate-300 hover:text-slate-900 rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-phone"></i>
          </a>
          <a href="mailto:ytc@yt.ac.th" className="w-11 h-11 bg-slate-100/10 hover:bg-red-500 rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* ============================================================
            2. ข้อมูลวิทยาลัย และ โลโก้
            ============================================================ */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tighter">YTC.</h3>
            <p className="font-bold text-slate-100 uppercase tracking-wide">วิทยาลัยเทคนิคยโสธร</p>
            <div className="text-slate-300 space-y-1 text-[13px]">
              <p>เปิดทำการวันจันทร์ - วันศุกร์</p> {/* แก้เวลาทำการตรงนี้ */}
              <p>เวลา 08.00 น. - 16.00 น.</p>
            </div>
          </div>
          
          {/* กล่องใส่รูปโลโก้ */}
          <div className="w-32 h-32 bg-white rounded-full p-3 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white/10 group transition-transform hover:scale-105">
             {!logoError ? (
               <img 
                 src={logoUrl} 
                 alt="YTC Logo" 
                 className="w-full h-full object-contain" 
                 onError={() => setLogoError(true)}
               />
             ) : (
               <div className="flex flex-col items-center text-blue-600">
                 <i className="fas fa-map-location-dot text-3xl"></i>
                 <span className="text-[8px] font-black mt-1">YTC NAV</span>
               </div>
             )}
          </div>
        </div>

        {/* ============================================================
            3. เมนูทางลัดต่างๆ
            ============================================================ */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-l-4 border-blue-500 pl-3">เมนูหลัก</h3>
          <ul className="space-y-3 text-slate-300 font-medium">
            <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <i className="fas fa-chevron-right text-[10px]"></i> หน้าหลัก
            </a></li>
            <li><a href="https://yt.ac.th/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <i className="fas fa-chevron-right text-[10px]"></i> เกี่ยวกับวิทยาลัย
            </a></li>
            <li><button onClick={onShowDevs} className="hover:text-blue-400 transition-colors text-left flex items-center gap-2 focus:outline-none">
              <i className="fas fa-chevron-right text-[10px]"></i> ผู้จัดทำ
            </button></li>
          </ul>
        </div>

        <div className="hidden md:block"></div>

        {/* ============================================================
            4. ข้อมูลการติดต่อ (เบอร์โทร / ที่อยู่)
            ============================================================ */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-l-4 border-blue-500 pl-3">ติดต่อเรา</h3>
          <div className="space-y-4 text-slate-300">
            <div className="flex gap-3">
              <i className="fas fa-location-dot text-blue-400 mt-1"></i>
              <p className="leading-relaxed">96 หมู่ 1 ต.สำราญ อ.เมือง <br/> จ.ยโสธร 35000</p> {/* แก้ที่อยู่ตรงนี้ */}
            </div>
            <div className="flex gap-3 items-center">
              <i className="fas fa-phone text-blue-400"></i>
              <p>045-756701</p> {/* แก้เบอร์โทรตรงนี้ */}
            </div>
            <div className="flex gap-3 items-center">
              <i className="fas fa-envelope text-blue-400"></i>
              <p>ytc@yt.ac.th</p> {/* แก้อีเมลตรงนี้ */}
            </div>
          </div>
        </div>
      </div>

      {/* แถบลิขสิทธิ์ด้านล่างสุด */}
      <div className="bg-black/40 py-5 text-center border-t border-white/5">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Yasothon Technical College. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
