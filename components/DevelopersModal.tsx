
import React from 'react';

interface DevelopersModalProps {
  onClose: () => void;
}

const DevelopersModal: React.FC<DevelopersModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[3rem] w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-center text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white">
            <i className="fas fa-times"></i>
          </button>
          <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-4 backdrop-blur-xl border border-white/20">
            <i className="fas fa-code text-3xl text-blue-400"></i>
          </div>
          <h2 className="text-2xl font-black tracking-tight">ทีมผู้พัฒนา</h2>
          <p className="text-blue-300 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Project Developers</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">BC</div>
                <div>
                   <p className="text-slate-900 font-black text-sm">แผนกคอมพิวเตอร์ธุรกิจ</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase">Business Computer Dept.</p>
                </div>
             </div>

             <div className="text-center py-2">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  "สร้างสรรค์นวัตกรรมเพื่อพัฒนา <br/> วิทยาลัยเทคนิคยโสธร สู่ยุคดิจิทัล"
                </p>
             </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-100 active:scale-95 transition-all"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopersModal;
