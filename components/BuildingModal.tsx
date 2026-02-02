
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 md:p-6" onClick={onClose}>
      <div 
        className="bg-white rounded-[3.5rem] w-full max-w-4xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col md:flex-row max-h-[90vh] relative border border-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Visuals */}
        <div className="relative w-full md:w-5/12 h-64 md:h-auto shrink-0 bg-slate-100">
          <img 
            src={imageError ? fallbackImage : building.image} 
            alt={building.name} 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10"></div>
          
          <button 
            onClick={onClose} 
            className="md:hidden absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/30"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {/* Right Side: Content */}
        <div className="flex-1 p-10 md:p-16 overflow-y-auto no-scrollbar bg-white">
          <div className="space-y-12">
            <header className="flex justify-between items-start">
               <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-4 inline-block">Official Record</span>
                  <h2 className="text-4xl font-black text-slate-900 leading-tight tracking-tighter">
                    {building.name}
                  </h2>
                  <p className="text-slate-400 text-sm mt-4 font-bold uppercase tracking-widest flex items-center gap-2">
                    <i className="fas fa-building-circle-check text-blue-600"></i>
                    {building.department || 'Campus Zone A'}
                  </p>
               </div>
               <button 
                onClick={onClose} 
                className="hidden md:flex w-14 h-14 rounded-2xl bg-slate-50 text-slate-300 items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-100 shadow-sm"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <section>
                  <h3 className="text-[11px] font-black text-slate-300 uppercase tracking-widest mb-6">เกี่ยวกับอาคาร</h3>
                  <p className="text-slate-600 leading-relaxed text-base font-medium">
                    {building.description}
                  </p>
               </section>
               
               <section>
                 <h3 className="text-[11px] font-black text-slate-300 uppercase tracking-widest mb-6">พื้นที่ปฏิบัติงาน / ห้องเรียน</h3>
                 <div className="grid grid-cols-1 gap-3">
                   {building.rooms.map((room, idx) => (
                     <div key={idx} className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 group hover:border-blue-600 hover:bg-white transition-all">
                       <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white">
                          <i className="fas fa-door-open text-xs"></i>
                       </div>
                       <span className="text-slate-700 font-black text-sm">{room}</span>
                     </div>
                   ))}
                 </div>
               </section>
            </div>

            <div className="pt-10 flex gap-4">
              <button 
                onClick={onClose}
                className="flex-1 bg-slate-900 text-white py-6 rounded-[2rem] font-black text-lg hover:bg-blue-600 transition-all shadow-2xl uppercase tracking-widest"
              >
                กลับไปหน้าหลัก
              </button>
              <button className="w-20 bg-blue-50 text-blue-600 py-6 rounded-[2rem] font-black text-lg border border-blue-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
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
