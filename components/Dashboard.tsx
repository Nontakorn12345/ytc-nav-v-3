import React from 'react';

interface DashboardProps {
  onStartNav: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartNav }) => {
  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700 pb-12">
      
      {/* Hero Section */}
      <div className="p-1 border-2 border-blue-400/20 rounded-[2.5rem] md:rounded-[3rem]">
        <section className="relative h-[350px] md:h-[500px] rounded-[2.2rem] md:rounded-[2.8rem] overflow-hidden shadow-xl bg-gradient-to-br from-[#2e4277] via-[#1a2544] to-[#0f172a] group">
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 md:w-[600px] md:h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-20 relative z-10">
            <div className="max-w-xl text-white space-y-4 md:space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
                Smart Campus Navigation
              </div>

              <h2 className="text-3xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                ระบบนำทาง <br/> 
                อัจฉริยะ YTC
              </h2>

              <p className="text-xs md:text-lg text-white/60 font-medium leading-relaxed max-w-sm">
                ค้นหาอาคารและแผนกวิชาต่างๆ ภายในวิทยาลัยเทคนิคยโสธร 
                ให้เราช่วยพาคุณไปยังจุดหมายที่ต้องการ
              </p>

              <div className="pt-2">
                 <button 
                   onClick={onStartNav}
                   className="bg-white text-slate-950 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-black text-sm md:text-lg hover:bg-blue-50 transition-all shadow-lg active:scale-95 flex items-center gap-4 group"
                 >
                   เข้าสู่ระบบนำทาง 
                   <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                      <i className="fas fa-location-dot"></i>
                   </div>
                 </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 leading-none">แผนที่ละเอียด</h3>
            <p className="text-slate-400 text-[11px] font-bold mt-2">ข้อมูลพิกัดอาคารล่าสุด</p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-12 h-12 bg-[#059669] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <i className="fas fa-route"></i>
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 leading-none">ค้นหาเส้นทาง</h3>
            <p className="text-slate-400 text-[11px] font-bold mt-2">คำนวณเส้นทางเดินที่สะดวก</p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-12 h-12 bg-[#d97706] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <i className="fas fa-database"></i>
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 leading-none">ฐานข้อมูลครบ</h3>
            <p className="text-slate-400 text-[11px] font-bold mt-2">ข้อมูลแผนกและห้องเรียน</p>
          </div>
        </div>
      </section>

      {/* ข่าวประชาสัมพันธ์ */}
      <section className="px-2">
        <div className="flex items-end justify-between mb-8 px-4">
           <div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 block">NEWS & ANNOUNCEMENTS</span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter">ข่าวประชาสัมพันธ์</h3>
           </div>
           <a href="https://yt.ac.th/" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-blue-600 flex items-center gap-2 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
              ทั้งหมด <i className="fas fa-arrow-right text-[10px]"></i>
           </a>
        </div>

        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-10 border border-slate-100 flex flex-col lg:flex-row gap-8 items-stretch shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden">
           
           <div className="w-full lg:w-[45%] rounded-[2rem] overflow-hidden shadow-lg relative min-h-[300px] md:min-h-[450px]">
              <img 
                src="/images/news-vishnu.png" 
                className="w-full h-full object-cover" 
                alt="ข่าวประชาสัมพันธ์" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1541829070764-84a7d30dee73?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl">
                 <p className="text-[9px] font-black text-blue-600 uppercase mb-1">กิจกรรมสำคัญ</p>
                 <p className="font-black text-slate-900 text-sm md:text-lg leading-tight">ขอเชิญร่วมทำบุญเป็นเจ้าภาพ พิธีเททองหล่อ "องค์พระวิษณุกรรม"</p>
              </div>
           </div>
           
           <div className="w-full lg:w-[55%] flex flex-col justify-between py-2">
              <div className="space-y-6">
                 <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl">
                       <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm shadow-md">
                          <i className="fas fa-calendar-day"></i>
                       </div>
                       <div>
                          <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">วันที่จัดงาน</p>
                          <p className="text-sm md:text-base font-black text-slate-900 leading-none">20 ก.พ. 2569</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-xl">
                       <div className="w-8 h-8 bg-[#059669] text-white rounded-lg flex items-center justify-center text-sm shadow-md">
                          <i className="fas fa-clock"></i>
                       </div>
                       <div>
                          <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">ฤกษ์พิธี</p>
                          <p className="text-sm md:text-base font-black text-slate-900 leading-none">09.39 น.</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <h4 className="text-2xl md:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight">ร่วมสมทบทุนสร้าง "องค์พระวิษณุกรรม"</h4>
                    <p className="text-slate-500 text-xs md:text-base font-medium leading-relaxed">
                      วิทยาลัยเทคนิคยโสธร ขอเชิญผู้มีจิตศรัทธาสมทบทุนร่วมเป็นเจ้าภาพ จัดสร้างองค์พระวิษณุกรรม (สูง 196 ซม.) เพื่อความเป็นสิริมงคล
                    </p>
                 </div>
                 
                 <div className="bg-slate-50/80 p-6 rounded-[1.8rem] border border-slate-100 relative group">
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#d1fae5] text-[#065f46] text-[8px] font-black rounded-full uppercase tracking-widest border border-[#059669]/20">
                       E-DONATION (ลดหย่อนภาษีได้)
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">ข้อมูลการบริจาค</p>
                    <div className="space-y-1">
                       <p className="text-slate-800 font-black text-sm md:text-xl">บัญชีธนาคารออมสิน</p>
                       <p className="text-blue-600 font-black text-sm md:text-2xl leading-tight">ชื่อบัญชี: กองทุนส่งเสริมการศึกษา และพัฒนาวิทยาลัยเทคนิคยโสธร</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-slate-400">
                       <i className="fas fa-phone-volume text-[10px]"></i>
                       <p className="text-[10px] font-bold">สอบถาม: 045-756701</p>
                    </div>
                 </div>
              </div>

              <div className="pt-8 flex gap-3">
                 <a 
                   href="https://web.facebook.com/photo/?fbid=122301867806067446&set=a.122117044334067446"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-blue-600 text-white py-4 md:py-5 rounded-2xl font-black text-sm md:text-lg shadow-xl shadow-blue-200 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-95 text-center"
                 >
                    <i className="fas fa-circle-info"></i> ข้อมูลเพิ่มเติม
                 </a>
                 <button className="w-14 h-14 md:w-16 md:h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center text-lg hover:bg-slate-200 transition-all active:scale-95">
                    <i className="fas fa-share-alt"></i>
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
