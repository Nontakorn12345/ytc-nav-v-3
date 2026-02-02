
import React, { useState } from 'react';
import { Building } from '../types';

interface BuildingModalProps {
  building: Building;
  onClose: () => void;
}

const BuildingModal: React.FC<BuildingModalProps> = ({ building, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 md:p-6" onClick={onClose}>
      <div 
        className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] w-full max-w-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col max-h-[90vh] relative border border-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Section: Horizontal Image */}
        <div className="relative w-full h-56 md:h-80 shrink-0 bg-slate-100 overflow-hidden">
          <img 
            src={imageError ? fallbackImage : building.image} 
            alt={building.name} 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
          {/* Gradient Overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
          
          {/* Close Button on Image */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/30 z-10"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Floated Badge on Image */}
          <div className="absolute bottom-6 left-8">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Official Building Info
            </span>
          </div>
        </div>
        
        {/* Bottom Section: Content */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto no-scrollbar bg-white">
          <div className="space-y-10">
            <header className="flex flex-col md:flex-row justify-between items-start gap-4">
               <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
                    {building.name}
                  </h2>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      {building.department || 'Yasothon Technical College'}
                    </p>
                  </div>
               </div>
               <div className="shrink-0 flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-inner">
                  <i className="fas fa-stairs text-blue-600"></i>
                  <span className="text-sm font-black text-slate-700">{building.floors} ชั้น</span>
               </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <section>
                  <h3 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] mb-4">ข้อมูลเบื้องต้น</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {building.description}
                  </p>
               </section>
               
               <section>
                 <h3 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] mb-4">ห้องปฏิบัติการ / แผนก</h3>
                 <div className="grid grid-cols-1 gap-2.5">
                   {building.rooms.map((room, idx) => (
                     <div key={idx} className="bg-slate-50 p-3.5 rounded-xl flex items-center gap-4 border border-slate-100 group hover:border-blue-600 hover:bg-white transition-all">
                       <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <i className="fas fa-door-open text-[10px]"></i>
                       </div>
                       <span className="text-slate-700 font-bold text-xs">{room}</span>
                     </div>
                   ))}
                 </div>
               </section>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onClose}
                className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-black text-base hover:bg-blue-600 transition-all shadow-xl uppercase tracking-widest active:scale-95"
              >
                กลับไปหน้าหลัก
              </button>
              <button className="sm:w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl font-black text-lg border border-blue-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md active:scale-95">
                <i className="fas fa-print"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingModal;
