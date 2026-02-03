
import React, { useState, useMemo } from 'react';
import { BUILDINGS } from './constants';
import { NavState } from './types';
import Header from './components/Header';
import MapDisplay from './components/MapDisplay';
import BuildingModal from './components/BuildingModal';
import AdminPanel from './components/AdminPanel';
import DevelopersModal from './components/DevelopersModal';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [state, setState] = useState<NavState>({
    currentLocation: '',
    destination: '',
    showMap: false,
    selectedBuilding: null,
    isAdminMode: false
  });
  const [view, setView] = useState<'dashboard' | 'nav'>('dashboard');
  const [step, setStep] = useState(1);
  const [tempSelection, setTempSelection] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [showDevs, setShowDevs] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'dev'>('home');
  const [activeCategory, setActiveCategory] = useState<'all' | 'department' | 'office' | 'service'>('all');

  const filteredBuildings = useMemo(() => {
    return BUILDINGS
      .filter(l => step === 1 || l.id !== state.currentLocation)
      .filter(l => activeCategory === 'all' || l.category === activeCategory)
      .filter(l => 
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (l.department && l.department.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  }, [step, state.currentLocation, searchQuery, activeCategory]);

  const handleConfirm = () => {
    if (!tempSelection) return;
    if (step === 1) {
      setState(prev => ({ ...prev, currentLocation: tempSelection }));
      setTempSelection('');
      setSearchQuery('');
      setStep(2);
      setActiveCategory('all');
    } else {
      setState(prev => ({ ...prev, destination: tempSelection, showMap: true }));
    }
  };

  const reset = () => {
    setState({ 
      currentLocation: '', 
      destination: '', 
      showMap: false, 
      selectedBuilding: null,
      isAdminMode: false 
    });
    setStep(1);
    setTempSelection('');
    setSearchQuery('');
    setView('dashboard');
    setActiveTab('home');
    setActiveCategory('all');
  };

  return (
    <div className="min-h-screen bg-[#F9FBFF] text-slate-800 font-kanit flex flex-col pb-24 md:pb-0">
      <Header 
        onStartNav={() => { setView('nav'); reset(); }} 
        onGoHome={reset} 
        onShowQR={() => setShowQR(true)} 
        onShowDevs={() => setShowDevs(true)}
      />
      
      <main className="flex-1">
        {view === 'dashboard' ? (
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
            <Dashboard onStartNav={() => setView('nav')} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {!state.showMap ? (
              <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-xl shadow-lg">
                      <i className={`fas ${step === 1 ? 'fa-location-dot' : 'fa-bullseye'}`}></i>
                   </div>
                   <div>
                      <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                         {step === 1 ? 'จุดเริ่มต้นของคุณ' : 'เลือกจุดหมายปลายทาง'}
                      </h2>
                      <p className="text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-wider">ขั้นตอนที่ {step} จาก 2</p>
                   </div>
                </div>

                {/* Category Pills */}
                <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
                  {[
                    { id: 'all', label: 'ทั้งหมด' },
                    { id: 'department', label: 'แผนกวิชา' },
                    { id: 'office', label: 'สำนักงาน' },
                    { id: 'service', label: 'จุดบริการ' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id as any)}
                      className={`whitespace-nowrap px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeCategory === cat.id 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="relative mb-6">
                  <input 
                    type="text"
                    placeholder="ค้นหาอาคารหรือแผนก..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl py-4 pl-12 pr-4 md:py-5 md:pl-14 md:pr-6 font-bold text-slate-800 transition-all text-base md:text-lg outline-none shadow-inner"
                  />
                  <i className="fas fa-search absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-slate-300 text-base md:text-lg"></i>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[350px] md:max-h-[400px] overflow-y-auto pr-1 no-scrollbar">
                  {filteredBuildings.length > 0 ? filteredBuildings.map(loc => (
                    <button 
                      key={loc.id}
                      onClick={() => setTempSelection(loc.id)} 
                      className={`w-full p-4 md:p-5 rounded-2xl text-left border-2 transition-all flex items-center gap-4 ${
                        tempSelection === loc.id 
                          ? 'border-blue-600 bg-blue-50/50 shadow-md' 
                          : 'border-slate-50 bg-slate-50 hover:bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        tempSelection === loc.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-200 shadow-sm'
                      }`}>
                        <i className={`fas ${loc.category === 'service' ? 'fa-utensils' : 'fa-building'} text-xs md:text-sm`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-black text-sm md:text-base leading-tight break-words ${tempSelection === loc.id ? 'text-blue-700' : 'text-slate-800'}`}>{loc.name}</p>
                        <p className="text-[8px] md:text-[9px] font-black tracking-widest text-slate-400 uppercase mt-1">
                          {loc.department || 'YTC CAMPUS'}
                        </p>
                      </div>
                    </button>
                  )) : (
                    <div className="col-span-full py-16 text-center">
                      <i className="fas fa-magnifying-glass text-3xl text-slate-200 mb-3"></i>
                      <p className="font-bold text-slate-400 text-sm">ไม่พบข้อมูลอาคารที่คุณค้นหา</p>
                    </div>
                  )}
                </div>

                {tempSelection && (
                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={handleConfirm} 
                      className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-blue-700 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 md:gap-4"
                    >
                      {step === 1 ? 'ต่อไป' : 'เริ่มนำทาง'} <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6 md:space-y-8">
                {/* Route Overview */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                   <div className="flex-1 text-center md:text-left">
                     <p className="text-[9px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">เริ่มต้นที่</p>
                     <p className="font-black text-slate-900 text-lg md:text-xl leading-none">{BUILDINGS.find(b => b.id === state.currentLocation)?.name}</p>
                   </div>
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner shrink-0 rotate-90 md:rotate-0">
                      <i className="fas fa-chevron-right text-xs"></i>
                   </div>
                   <div className="flex-1 text-center md:text-right">
                     <p className="text-[9px] md:text-[10px] text-blue-600 font-black uppercase tracking-widest mb-1">จุดหมาย</p>
                     <p className="font-black text-slate-900 text-lg md:text-xl leading-none">{BUILDINGS.find(b => b.id === state.destination)?.name}</p>
                   </div>
                </div>

                <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
                   <MapDisplay from={state.currentLocation} to={state.destination} />
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 pb-10">
                  <button 
                    onClick={() => {
                      const dest = BUILDINGS.find(b => b.id === state.destination);
                      if (dest) setState(prev => ({ ...prev, selectedBuilding: dest }));
                    }}
                    className="bg-white text-slate-800 px-6 py-4 rounded-2xl font-black text-sm md:text-base border-2 border-slate-100 hover:border-blue-600 transition-all shadow-md flex items-center justify-center gap-3"
                  >
                    <i className="fas fa-circle-info text-blue-600"></i>
                    ข้อมูลอาคาร
                  </button>
                  <button onClick={reset} className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-sm md:text-base hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-3">
                    <i className="fas fa-rotate-left"></i>
                    เริ่มใหม่
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Main Components */}
      <Footer onShowDevs={() => setShowDevs(true)} />
      
      {/* AI Floating Button */}
      <button 
        onClick={() => setShowChat(true)}
        className="fixed bottom-28 right-4 md:bottom-32 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <i className="fas fa-robot text-xl md:text-2xl"></i>
      </button>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden">
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === 'dev') setShowDevs(true);
            else reset();
          }} 
          onReset={reset} 
        />
      </div>

      {/* Modals */}
      {state.selectedBuilding && (
        <BuildingModal 
          building={state.selectedBuilding} 
          onClose={() => setState(prev => ({ ...prev, selectedBuilding: null }))} 
        />
      )}
      {showQR && <AdminPanel onClose={() => setShowQR(false)} />}
      {showDevs && <DevelopersModal onClose={() => { setShowDevs(false); setActiveTab('home'); }} />}
      {showChat && <ChatAssistant onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default App;
