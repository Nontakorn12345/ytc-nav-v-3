
import React from 'react';

interface HeaderProps {
  onStartNav: () => void;
  onGoHome: () => void;
  onShowQR: () => void;
  onShowDevs: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartNav, onGoHome, onShowQR, onShowDevs }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 h-20">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={onGoHome}>
          <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-800 transition-all">
            <i className="fas fa-landmark text-xl"></i>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-slate-900 leading-none">YTC NAVIGATION</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Yasothon Technical College</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          <button onClick={onGoHome} className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wider">หน้าหลัก</button>
          <button onClick={onStartNav} className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wider">ระบบนำทาง</button>
          <a 
            href="https://yt.ac.th/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            เกี่ยวกับวิทยาลัย
          </a>
          <button onClick={onShowDevs} className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wider">ผู้จัดทำ</button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
           <button 
             onClick={onShowQR}
             className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all"
           >
             Share App
           </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
