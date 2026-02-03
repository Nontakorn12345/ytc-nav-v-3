
import React from 'react';

interface DashboardProps {
  onStartNav: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartNav }) => {
  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700 pb-12">
      
      {/* Container with Blue Frame - กรอบสีฟ้าตามรูปที่ส่งมา */}
      <div className="p-1 md:p-2 border-2 border-blue-400/40 rounded-[2.8rem] md:rounded-[3.8rem]">
        
        {/* Hero Header - ปรับดีไซน์เป็น Gradient และ Layout ตามรูป */}
        <section className="relative h-[450px] md:h-[550px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#5369A1] via-[#2B3E75] to-[#162248] group">
          
          {/* จุดสำหรับใส่ "โลโก้ครึ่งเดียว" (พี่สามารถเปลี่ยน src เป็นไฟล์รูปโลโก้ได้เลย) */}
          <div className="absolute top-1/2 -right-20 md:-right-40 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] opacity-10 pointer-events-none transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110">
             <img 
               src="/images/ytc_logo.png" 
               className="w-full h-full object-contain filter brightness-0 invert" 
               alt="Background Decoration"
               onError={(e) => e.currentTarget.style.display = 'none'}
             />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-24 relative z-10">
            <div className="max-w-2xl text-white space-y-6">
              {/* Pill Badge */}
              <div className="inline-block px-4 py-1.5 bg-blue-500 rounded-lg text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-lg border border-white/20">
                Smart Campus Navigation
              </div>

              {/* Main Title - ขนาดใหญ่และหนาตามรูป */}
              <h2 className="text-5xl md:text-[5.5rem] font-black leading-[1.1] tracking-tighter drop-shadow-2xl">
                ระบบนำทาง <br/> 
                <span className="text-white/95">อัจฉริยะ YTC</span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm md:text-lg text-white/70 font-medium leading-relaxed max-w-md">
                ค้นหาอาคารและแผนกวิชาต่างๆ ภายในวิทยาลัยเทคนิคยโสธร <br className="hidden md:block"/> 
                ได้รวดเร็วและแม่นยำ
              </p>

              {/* CTA Button */}
              <div className="pt-6">
                 <button 
                   onClick={onStartNav}
                   className="bg-white text-slate-900 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-4 group"
                 >
                   เข้าสู่ระบบนำทาง 
                   <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm group-hover:translate-x-1 transition-transform">
                      <i className="fas fa-location-dot"></i>
                   </div>
                 </button>
              </div>
            </div>
          </div>

          {/* แสง Flare ตกแต่งมุม */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -ml-20 -mb-20"></div>
        </section>
      </div>

      {/* Public Relations Section */}
      <section className="px-1">
        <div className="flex items-end justify-between mb-6 md:mb-8 px-4">
           <div>
              <span className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-1 block">NEWS & ANNOUNCEMENTS</span>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">ข่าวประชาสัมพันธ์</h3>
           </div>
           <a 
             href="https://yt.ac.th/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-[10px] md:text-xs font-black text-blue-600 flex items-center gap-2 uppercase tracking-widest hover:underline"
           >
              ทั้งหมด <i className="fas fa-arrow-right text-[9px]"></i>
           </a>
        </div>

        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-5 md:p-10 border border-slate-100 flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch hover:shadow-2xl transition-all duration-500 shadow-sm">
           {/* ฝั่งซ้าย: รูปภาพข่าว */}
           <div className="w-full lg:w-[45%] rounded-[2rem] md:rounded-[2.8rem] overflow-hidden shadow-xl relative min-h-[350px] md:min-h-[480px] group/news">
              <img 
                src="/images/news-vishnu.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/news:scale-105" 
                alt="ข่าวประชาสัมพันธ์" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1590059536098-9610f6396e95?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                 <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/20">EVENT</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-2xl border border-white/40">
                 <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.15em] mb-1.5">ประกาศจากวิทยาลัย</p>
                 <p className="font-black text-slate-900 text-lg md:text-xl leading-tight">ขอเชิญร่วมพิธีเททองหล่อ "องค์พระวิษณุกรรม" ประจำปี 2569</p>
              </div>
           </div>
           
           {/* ฝั่งขวา: รายละเอียดเนื้อหา */}
           <div className="w-full lg:w-[55%] flex flex-col justify-between py-2">
              <div className="space-y-8">
                 <div className="flex flex-wrap gap-8 md:gap-12">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                          <i className="fas fa-calendar-check text-xl"></i>
                       </div>
                       <div>
                          <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">วัน/เดือน/ปี</p>
                          <p className="text-lg md:text-2xl font-black text-slate-900 leading-none">20 ก.พ. 2569</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shadow-inner">
                          <i className="fas fa-sun text-xl"></i>
                       </div>
                       <div>
                          <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">เวลาฤกษ์ดี</p>
                          <p className="text-lg md:text-2xl font-black text-slate-900 leading-none">09.39 น.</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h4 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">ร่วมสร้างศูนย์รวมจิตใจชาว YTC</h4>
                    <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
                      ขอเชิญศิษย์เก่า ศิษย์ปัจจุบัน และผู้มีจิตศรัทธา ร่วมสมทบทุนจัดสร้างองค์พระวิษณุกรรม 
                      ขนาดความสูง 196 ซม. เพื่อเป็นสิริมงคลแก่บุคลากรและนักศึกษา
                    </p>
                 </div>
                 
                 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4 shadow-sm relative overflow-hidden group/card">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-8 -mt-8 transition-transform group-hover/card:scale-150 duration-700"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                       <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">ข้อมูลการรับบริจาค</span>
                       <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-tight border border-emerald-200">
                          ลดหย่อนภาษีได้ (E-Donation)
                       </span>
                    </div>
                    <div className="space-y-2">
                       <p className="text-slate-800 font-black text-lg md:text-xl">ธนาคารออมสิน (สาขายโสธร)</p>
                       <p className="text-blue-600 font-black text-lg md:text-2xl leading-tight">ชื่อบัญชี: กองทุนส่งเสริมการศึกษา และพัฒนาวิทยาลัยเทคนิคยโสธร</p>
                    </div>
                    <div className="pt-2 flex items-center gap-3 text-slate-400">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs shadow-sm">
                          <i className="fas fa-phone"></i>
                       </div>
                       <p className="text-xs font-bold uppercase tracking-wider">ติดต่อสอบถาม: 045-756701</p>
                    </div>
                 </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                 <a 
                   href="https://web.facebook.com/permalink.php?story_fbid=pfbid02xSJEDR27iWMiCgphf1UGcm2MveMUsYANuJeD87jAdKprrVsP2i1jEmhr5xsvxD1jl&id=61552023404973&rdid=KhJSeH6gIeSi3TTg#"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                 >
                    <i className="fas fa-heart"></i> ร่วมเป็นเจ้าภาพ
                 </a>
                 <button className="w-full sm:w-20 h-16 md:h-20 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition-all text-xl">
                    <i className="fas fa-share-nodes"></i>
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
         {[
           { icon: 'fa-map-location-dot', color: 'bg-blue-600', title: 'Interactive Map', desc: 'แผนที่อาคารเรียน 22 จุดสำคัญ' },
           { icon: 'fa-diamond-turn-right', color: 'bg-emerald-600', title: 'Route Finder', desc: 'คำนวณเส้นทางเดินแบบอัจฉริยะ' },
           { icon: 'fa-user-group', color: 'bg-indigo-600', title: 'YTC Assistant', desc: 'ผู้ช่วย AI คอยตอบคำถามของคุณ' }
         ].map((item, idx) => (
           <div key={idx} className="bg-white p-8 md:p-12 rounded-[2.5rem] space-y-5 border border-slate-100 hover:shadow-2xl transition-all group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-full -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors"></div>
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 transition-transform relative z-10`}>
                 <i className={`fas ${item.icon}`}></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm md:text-base font-medium mt-2 leading-relaxed">{item.desc}</p>
              </div>
           </div>
         ))}
      </section>
    </div>
  );
};

export default Dashboard;
