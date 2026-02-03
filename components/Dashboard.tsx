
import React from 'react';

interface DashboardProps {
  onStartNav: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartNav }) => {
  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700 pb-12">
      {/* Hero Header - ปรับให้รองรับมือถือ */}
      <section className="relative h-[480px] md:h-[550px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt="Campus" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent flex items-end p-6 md:p-20">
          <div className="max-w-2xl text-white space-y-4 md:space-y-6">
            <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">Smart Campus Navigation</span>
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
              ระบบนำทาง <br/> <span className="text-white/90">อัจฉริยะ YTC</span>
            </h2>
            <p className="text-sm md:text-lg text-blue-100 font-medium leading-relaxed opacity-90 max-w-md">
              ค้นหาอาคารและแผนกวิชาต่างๆ ภายในวิทยาลัยเทคนิคยโสธรได้รวดเร็วและแม่นยำ
            </p>
            <div className="pt-2 md:pt-4">
               <button 
                 onClick={onStartNav}
                 className="bg-white text-blue-900 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3 md:gap-4 group"
               >
                 เข้าสู่ระบบนำทาง <i className="fas fa-location-dot group-hover:translate-x-1 transition-transform"></i>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Public Relations Section - ปรับปรุงการล้นบนมือถือ */}
      <section className="px-1">
        <div className="flex items-end justify-between mb-6 md:mb-8 px-4">
           <div>
              <span className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-1 block">NEWS & ANNOUNCEMENTS</span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter">ข่าวประชาสัมพันธ์</h3>
           </div>
           <a 
             href="https://yt.ac.th/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-[10px] md:text-xs font-black text-blue-600 flex items-center gap-2 uppercase tracking-widest"
           >
              ทั้งหมด <i className="fas fa-arrow-right text-[9px]"></i>
           </a>
        </div>

        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-10 border border-slate-100 flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch hover:shadow-xl transition-all duration-500">
           {/* ฝั่งซ้าย: รูปภาพ */}
           <div className="w-full lg:w-[42%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-lg relative min-h-[350px] md:min-h-[450px]">
              <img 
                src="/images/news-vishnu.png" 
                className="w-full h-full object-cover" 
                alt="ข่าวประชาสัมพันธ์" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1590059536098-9610f6396e95?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                 <span className="text-[9px] font-black text-white/70 uppercase tracking-widest">ACTIVITY</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20">
                 <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.1em] mb-1">กิจกรรมสำคัญ</p>
                 <p className="font-black text-slate-900 text-base md:text-lg leading-tight">ขอเชิญร่วมทำบุญเป็นเจ้าภาพ พิธีเททองหล่อ "องค์พระวิษณุกรรม"</p>
              </div>
           </div>
           
           {/* ฝั่งขวา: รายละเอียดเนื้อหา */}
           <div className="w-full lg:w-[58%] flex flex-col justify-between py-1">
              <div className="space-y-6 md:space-y-8">
                 {/* วันและเวลา */}
                 <div className="flex flex-wrap gap-6 md:gap-10">
                    <div className="flex items-center gap-3 md:gap-4">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                          <i className="fas fa-calendar-alt text-lg"></i>
                       </div>
                       <div>
                          <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">วันที่จัดงาน</p>
                          <p className="text-base md:text-xl font-black text-slate-900 leading-none">20 ก.พ. 2569</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                          <i className="fas fa-clock text-lg"></i>
                       </div>
                       <div>
                          <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">ฤกษ์พิธี</p>
                          <p className="text-base md:text-xl font-black text-slate-900 leading-none">09.39 น.</p>
                       </div>
                    </div>
                 </div>

                 {/* หัวข้อและเนื้อหา */}
                 <div className="space-y-3 md:space-y-4">
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">ร่วมสมทบทุนสร้าง "องค์พระวิษณุกรรม"</h4>
                    <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                      วิทยาลัยเทคนิคยโสธร ขอเชิญผู้มีจิตศรัทธาสมทบทุนร่วมเป็นเจ้าภาพ 
                      จัดสร้างองค์พระวิษณุกรรม (สูง 196 ซม.) เพื่อความเป็นสิริมงคล
                    </p>
                 </div>
                 
                 {/* กล่องบริจาค - แก้ไข Layout ให้มือถือไม่พัง */}
                 <div className="bg-slate-50 p-5 md:p-6 rounded-[2rem] border border-slate-100 space-y-4 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                       <span className="text-slate-400 font-black text-[9px] uppercase tracking-widest leading-none">ข้อมูลการบริจาค</span>
                       <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md text-[8px] font-black uppercase w-fit">
                          E-DONATION (ลดหย่อนภาษีได้)
                       </span>
                    </div>
                    <div className="space-y-1">
                       <p className="text-slate-800 font-black text-base md:text-lg leading-tight">บัญชีธนาคารออมสิน</p>
                       <p className="text-blue-600 font-black text-base md:text-xl leading-snug">ชื่อบัญชี: กองทุนส่งเสริมการศึกษา และพัฒนาวิทยาลัยเทคนิคยโสธร</p>
                    </div>
                    <div className="pt-1 flex items-center gap-2 text-slate-400">
                       <i className="fas fa-phone-volume text-[10px]"></i>
                       <p className="text-[10px] font-bold">สอบถาม: 045-756701</p>
                    </div>
                 </div>
              </div>

              {/* ปุ่มกด */}
              <div className="pt-6 md:pt-8 flex gap-3 md:gap-4">
                 <a 
                   href="https://web.facebook.com/permalink.php?story_fbid=pfbid02xSJEDR27iWMiCgphf1UGcm2MveMUsYANuJeD87jAdKprrVsP2i1jEmhr5xsvxD1jl&id=61552023404973&rdid=KhJSeH6gIeSi3TTg#"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-blue-600 text-white py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                 >
                    <i className="fas fa-hand-holding-heart text-sm"></i> ร่วมเป็นเจ้าภาพ
                 </a>
                 <button className="w-14 h-14 md:w-16 md:h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition-all text-lg">
                    <i className="fas fa-share-nodes"></i>
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
         {[
           { icon: 'fa-map-marked-alt', color: 'bg-blue-600', title: 'แผนที่ละเอียด', desc: 'ข้อมูลพิกัดอาคารล่าสุด' },
           { icon: 'fa-route', color: 'bg-emerald-600', title: 'ค้นหาเส้นทาง', desc: 'คำนวณเส้นทางเดินที่สะดวก' },
           { icon: 'fa-database', color: 'bg-amber-600', title: 'ฐานข้อมูลครบ', desc: 'ข้อมูลแผนกและห้องเรียน' }
         ].map((item, idx) => (
           <div key={idx} className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] space-y-4 border border-slate-100 hover:shadow-lg transition-all group">
              <div className={`${item.color} w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                 <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-800 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
           </div>
         ))}
      </section>
    </div>
  );
};

export default Dashboard;
