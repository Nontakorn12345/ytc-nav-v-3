
import React from 'react';

interface DashboardProps {
  onStartNav: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartNav }) => {
  return (
    <div className="space-y-8 md:space-y-12 animate-in fade-in duration-700 pb-12">
      
      {/* Hero Header Section */}
      <div className="p-1 border-2 border-blue-400/30 rounded-[2rem] md:rounded-[3rem]">
        <section className="relative h-[380px] md:h-[500px] rounded-[1.8rem] md:rounded-[2.8rem] overflow-hidden shadow-xl bg-gradient-to-br from-[#3b518d] via-[#1e2b55] to-[#0f172a] group">
          
          {/* Background Decoration (ใช้สีแทนโลโก้ตามสั่ง) */}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-20 relative z-10">
            <div className="max-w-xl text-white space-y-4 md:space-y-6">
              {/* Badge */}
              <div className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-md rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
                Smart Campus Navigation
              </div>

              {/* Main Title - ปรับขนาดให้เล็กลงเพื่อมือถือ */}
              <h2 className="text-3xl md:text-6xl font-black leading-[1.2] tracking-tighter">
                ระบบนำทาง <br/> 
                อัจฉริยะ YTC
              </h2>

              {/* Subtitle */}
              <p className="text-xs md:text-lg text-white/60 font-medium leading-relaxed max-w-sm">
                ค้นหาอาคารและแผนกวิชาต่างๆ ภายในวิทยาลัยเทคนิคยโสธร 
                ได้รวดเร็วและแม่นยำที่สุด
              </p>

              {/* CTA Button */}
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

      {/* Feature Cards (คืนค่าตามรูปถ่ายที่ส่งมา) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
        {/* Card 1 */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">แผนที่ละเอียด</h3>
            <p className="text-slate-400 text-[11px] md:text-xs font-bold mt-2">ข้อมูลพิกัดอาคารล่าสุด</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#059669] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <i className="fas fa-route"></i>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">ค้นหาเส้นทาง</h3>
            <p className="text-slate-400 text-[11px] md:text-xs font-bold mt-2">คำนวณเส้นทางเดินที่สะดวก</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d97706] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <i className="fas fa-database"></i>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-slate-900">ฐานข้อมูลครบ</h3>
            <p className="text-slate-400 text-[11px] md:text-xs font-bold mt-2">ข้อมูลแผนกและห้องเรียน</p>
          </div>
        </div>
      </section>

      {/* ข่าวประชาสัมพันธ์ */}
      <section className="px-2">
        <div className="flex items-end justify-between mb-6 px-2">
           <div>
              <span className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 block">NEWS & ANNOUNCEMENTS</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">ข่าวประชาสัมพันธ์</h3>
           </div>
        </div>

        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 border border-slate-100 flex flex-col lg:flex-row gap-6 items-stretch shadow-sm">
           <div className="w-full lg:w-[40%] rounded-[1.5rem] overflow-hidden shadow-md min-h-[250px]">
              <img 
                src="/images/news-vishnu.png" 
                className="w-full h-full object-cover" 
                alt="ข่าวประชาสัมพันธ์" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1590059536098-9610f6396e95?q=80&w=1000&auto=format&fit=crop";
                }}
              />
           </div>
           
           <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-4">
              <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">ร่วมพิธีเททองหล่อ "องค์พระวิษณุกรรม" ประจำปี 2569</h4>
              <p className="text-slate-500 text-xs md:text-base font-medium">
                ขอเชิญศิษย์เก่าและผู้มีจิตศรัทธา ร่วมสมทบทุนจัดสร้างองค์พระวิษณุกรรม 
                เพื่อเป็นสิริมงคลแก่บุคลากรและนักศึกษาวิทยาลัยเทคนิคยโสธร
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                 <p className="text-blue-600 font-black text-sm md:text-lg">บัญชีธนาคารออมสิน สาขายโสธร</p>
                 <p className="text-slate-800 font-bold text-xs md:text-sm">ชื่อบัญชี: กองทุนส่งเสริมการศึกษา และพัฒนาวิทยาลัยเทคนิคยโสธร</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
