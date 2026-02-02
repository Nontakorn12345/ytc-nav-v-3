
import React from 'react';

interface DashboardProps {
  onStartNav: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartNav }) => {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt="Campus" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/60 to-transparent flex items-center px-12 md:px-24">
          <div className="max-w-2xl text-white space-y-8">
            <span className="inline-block px-4 py-2 bg-blue-500 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">Smart Campus Solution</span>
            <h2 className="text-6xl md:text-7xl font-black leading-none tracking-tighter">
              ระบบนำทาง <br/> <span className="text-blue-400">อัจฉริยะ YTC</span>
            </h2>
            <p className="text-xl text-blue-100 font-medium leading-relaxed opacity-80">
              วิทยาลัยเทคนิคยโสธรขอนำเสนอระบบแผนที่และนำทางภายในแคมปัส 
              เพื่อให้การค้นหาตึกเรียน แผนกวิชา และห้องปฏิบัติการเป็นเรื่องง่ายสำหรับทุกคน
            </p>
            <div className="pt-6">
               <button 
                 onClick={onStartNav}
                 className="bg-white text-blue-900 px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-4"
               >
                 เข้าสู่ระบบนำทาง <i className="fas fa-location-dot text-sm"></i>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Public Relations Section */}
      <section className="px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
           <div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-2 block">News & Announcements</span>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter">ข่าวประชาสัมพันธ์</h3>
           </div>
           <a 
             href="https://yt.ac.th/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:gap-4 transition-all"
           >
              ดูข่าวสารทั้งหมด <i className="fas fa-arrow-right"></i>
           </a>
        </div>

        <div className="bg-slate-50 rounded-[4rem] p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 items-center hover:bg-white hover:shadow-2xl transition-all duration-500 group">
           <div className="w-full lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[3/4] max-h-[600px] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1590059536098-9610f6396e95?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                alt="ข่าวประชาสัมพันธ์" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                 <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">กิจกรรมสำคัญ</p>
                 <p className="font-black text-slate-900 text-lg leading-tight">ขอเชิญร่วมทำบุญเป็นเจ้าภาพ พิธีเททองหล่อ "องค์พระวิษณุกรรม"</p>
              </div>
           </div>
           
           <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-blue-600">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-sm">
                       <i className="fas fa-calendar-check text-2xl"></i>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">วันที่จัดงาน</p>
                       <p className="text-2xl font-black text-slate-900">20 กุมภาพันธ์ 2569</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-emerald-600">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-sm">
                       <i className="fas fa-clock text-2xl"></i>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">ฤกษ์พิธีเททอง</p>
                       <p className="text-2xl font-black text-slate-900">09.39 น. เป็นต้นไป</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <h4 className="text-3xl font-black text-slate-900 leading-tight">ร่วมสมทบทุนสร้าง "องค์พระวิษณุกรรม"</h4>
                 <p className="text-slate-500 font-medium leading-relaxed text-lg">
                   วิทยาลัยเทคนิคยโสธร ขอเชิญผู้มีจิตศรัทธาสมทบทุนร่วมเป็นเจ้าภาพ 
                   ในการจัดสร้างองค์พระวิษณุกรรมประจำวิทยาลัย (ขนาดความสูง 196 ซม.) 
                   เพื่อความเป็นสิริมงคลและเป็นศูนย์รวมจิตใจของชาวอาชีวศึกษา
                 </p>
                 
                 <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 space-y-5 shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                       <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">ข้อมูลการบริจาค</span>
                       <span className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase">E-Donation (ลดหย่อนภาษีได้)</span>
                    </div>
                    <div className="space-y-2">
                       <p className="text-slate-800 font-black text-xl">บัญชีเงินฝากเพื่อเรียก ธนาคารออมสิน</p>
                       <p className="text-blue-600 font-black text-lg">ชื่อบัญชี: กองทุนส่งเสริมการศึกษา และพัฒนาวิทยาลัยเทคนิคยโสธร</p>
                       <div className="pt-2 flex items-center gap-3">
                          <i className="fas fa-phone-volume text-slate-300"></i>
                          <p className="text-slate-500 text-sm font-bold">สอบถามข้อมูลเพิ่มเติม: 045-756701</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-4 flex gap-4">
                 <a 
                   href="https://web.facebook.com/permalink.php?story_fbid=pfbid02xSJEDR27iWMiCgphf1UGcm2MveMUsYANuJeD87jAdKprrVsP2i1jEmhr5xsvxD1jl&id=61552023404973&rdid=KhJSeH6gIeSi3TTg#"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-blue-600 text-white py-6 rounded-3xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                 >
                    <i className="fas fa-hand-holding-heart"></i> ร่วมเป็นเจ้าภาพ
                 </a>
                 <button className="w-20 h-20 bg-slate-100 text-slate-400 rounded-3xl flex items-center justify-center hover:bg-slate-200 transition-all text-xl">
                    <i className="fas fa-share-nodes"></i>
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 pb-12">
         <div className="bg-slate-50 p-12 rounded-[3.5rem] space-y-6 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-blue-100">
               <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-2xl font-black text-slate-800">แผนที่ละเอียด</h3>
            <p className="text-slate-500 font-medium leading-relaxed">ข้อมูลพิกัดอาคารเรียนและจุดสำคัญภายในวิทยาลัยเทคนิคยโสธรที่อัปเดตล่าสุด</p>
         </div>
         <div className="bg-slate-50 p-12 rounded-[3.5rem] space-y-6 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
            <div className="w-20 h-20 bg-emerald-600 text-white rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-emerald-100">
               <i className="fas fa-route"></i>
            </div>
            <h3 className="text-2xl font-black text-slate-800">ค้นหาเส้นทาง</h3>
            <p className="text-slate-500 font-medium leading-relaxed">คำนวณเส้นทางเดินที่สั้นที่สุดและสะดวกที่สุดจากตำแหน่งที่คุณอยู่ไปยังจุดหมาย</p>
         </div>
         <div className="bg-slate-50 p-12 rounded-[3.5rem] space-y-6 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
            <div className="w-20 h-20 bg-amber-600 text-white rounded-3xl flex items-center justify-center text-3xl shadow-xl shadow-amber-100">
               <i className="fas fa-database"></i>
            </div>
            <h3 className="text-2xl font-black text-slate-800">ฐานข้อมูลครบ</h3>
            <p className="text-slate-500 font-medium leading-relaxed">ข้อมูลแผนกวิชา ห้องเรียน และบุคลากรที่เกี่ยวข้องในแต่ละอาคารพร้อมรูปภาพประกอบ</p>
         </div>
      </section>
    </div>
  );
};

export default Dashboard;
