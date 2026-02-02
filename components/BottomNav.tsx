
import React from 'react';

interface BottomNavProps {
  activeTab: 'home' | 'dev';
  onTabChange: (tab: 'home' | 'dev') => void;
  onReset: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, onReset }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4">
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-[2.5rem] flex items-center justify-between px-8 py-3 relative">
        
        {/* Home Button */}
        <button 
          onClick={() => {
            onTabChange('home');
            onReset();
          }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'text-blue-600' : 'text-slate-400'}`}
        >
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${activeTab === 'home' ? 'bg-blue-50' : ''}`}>
            <i className="fas fa-house-chimney text-lg"></i>
          </div>
          <span className="text-[10px] font-black uppercase tracking-tighter">หน้าแรก</span>
        </button>

        {/* Center Logo (Floating) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 p-1 shadow-xl shadow-blue-200 ring-8 ring-[#F9FBFF]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/20">
              <i className="fas fa-map-location-dot text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        {/* Spacer for center logo */}
        <div className="w-12"></div>

        {/* Developers Button */}
        <button 
          onClick={() => onTabChange('dev')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'dev' ? 'text-blue-600' : 'text-slate-400'}`}
        >
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${activeTab === 'dev' ? 'bg-blue-50' : ''}`}>
            <i className="fas fa-users-gear text-lg"></i>
          </div>
          <span className="text-[10px] font-black uppercase tracking-tighter">ผู้จัดทำ</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
