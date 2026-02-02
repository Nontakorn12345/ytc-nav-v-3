
import React from 'react';

interface FooterProps {
  onShowDevs: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowDevs }) => {
  return (
    <footer className="bg-[#444444] text-white pt-10">
      {/* Social Icons Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex gap-4">
          <a href="#" className="w-11 h-11 bg-slate-100/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="w-11 h-11 bg-slate-100/10 hover:bg-slate-300 hover:text-slate-900 rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-phone"></i>
          </a>
          <a href="#" className="w-11 h-11 bg-slate-100/10 hover:bg-red-500 rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* Column 1: YTC Info */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tighter">YTC.</h3>
            <p className="font-bold text-slate-100">วิทยาลัยเทคนิคยโสธร</p>
            <div className="text-slate-300 space-y-1">
              <p>เปิดทำการวันจันทร์ - วันศุกร์</p>
              <p>เวลา 08.00 น. - 16.00 น.</p>
            </div>
          </div>
          <div className="w-32 h-32 bg-white rounded-full p-2 shadow-xl">
             <img src="https://upload.wikimedia.org/wikipedia/th/thumb/a/a2/Yasothon_Technical_College_Logo.png/1200px-Yasothon_Technical_College_Logo.png" alt="YTC Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-4">
          <ul className="space-y-2 text-slate-300">
            <li><a href="#" className="hover:text-white transition-colors">หน้าหลัก</a></li>
            <li><a href="https://yt.ac.th/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">เกี่ยวกับวิทยาลัย</a></li>
            <li><button onClick={onShowDevs} className="hover:text-white transition-colors text-left focus:outline-none">ผู้จัดทำ</button></li>
          </ul>
        </div>

        {/* Column 3: Systems Links (Empty as per request) */}
        <div className="space-y-4">
          {/* Content removed per user request */}
        </div>

        {/* Column 4: Contact Us */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Contract Us.</h3>
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-white">วิทยาลัยเทคนิคยโสธร</p>
            <p>96 หมู่ 1 ต.สำราญ อ.เมือง จ.ยโสธร 35000</p>
            <p>โทรศัพท์ 045-756701</p>
            <p>โทรสาร 045-756705</p>
            <p>Mail : ytc@yt.ac.th</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4 text-center">
        <p className="text-[11px] font-bold text-slate-400">
          © Yasothon Technical College. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
