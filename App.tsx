
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

  const filteredBuildings = useMemo(() => {
    return BUILDINGS
      .filter(l => step === 1 || l.id !== state.currentLocation)
      .filter(l => 
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (l.department && l.department.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  }, [step, state.currentLocation, searchQuery]);

  const handleConfirm = () => {
    if (!tempSelection) return;
    if (step === 1) {
      setState(prev => ({ ...prev, currentLocation: tempSelection }));
      setTempSelection('');
      setSearchQuery('');
      setStep(2);
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
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-kanit flex flex-col">
      
      {/* Web Header */}
      <Header 
        onStartNav={() => { setView('nav'); reset(); }} 
        onGoHome={() => setView('dashboard')} 
        onShowQR={() => setShowQR(true)} 
        onShowDevs={() => setShowDevs(true)}
      />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {view === 'dashboard' ? (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <Dashboard onStartNav={() => setView('nav')} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {!state.showMap ? (
              <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-slate-100">
                <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                      <i className={`fas ${step === 1 ? 'fa-location-dot' : 'fa-bullseye'}`}></i>
                   </div>
                   <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                         {step === 1 ? 'จุดเริ่มต้นของคุณ' : 'เลือกจุดหมายปลายทาง'}
                      </h2>
                      <p className="text-slate-400 font-medium">ขั้นตอนที่ {step} จาก 2 ของการตั้งค่าระบบนำทาง</p>
                   </div>
                </div>

                <div className="relative mb-8">
                  <input 
                    type="text"
                    placeholder="พิมพ์ชื่ออาคาร หรือแผนกวิชาที่ต้องการค้นหา..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl py-6 pl-16 pr-8 font-bold text-slate-800 transition-all text-xl outline-none"
                  />
                  <i className="fas fa-search absolute left-7 top-1/2 -translate-y-1/2 text-slate-300 text-xl"></i>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] overflow-y-auto pr-4 no-scrollbar">
                  {filteredBuildings.map(loc => (
                    <button 
                      key={loc.id}
                      onClick={() => setTempSelection(loc.id)} 
                      className={`w-full p-6 rounded-2xl text-left border-2 transition-all flex items-center gap-6 ${
                        tempSelection === loc.id 
                          ? 'border-blue-600 bg-blue-50/50' 
                          : 'border-slate-50 bg-slate-50 hover:bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        tempSelection === loc.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-200 shadow-sm'
                      }`}>
                        <i className="fas fa-building text-lg"></i>
                      </div>
                      <div className="flex-1 truncate">
                        <p className={`font-black text-lg truncate ${tempSelection === loc.id ? 'text-blue-700' : 'text-slate-800'}`}>{loc.name}</p>
                        <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                          {loc.department || 'YTC CAMPUS'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {tempSelection && (
                  <div className="mt-12 flex justify-end">
                    <button 
                      onClick={handleConfirm} 
                      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 active:scale-95 transition-all shadow-xl flex items-center gap-4"
                    >
                      {step === 1 ? 'ขั้นตอนต่อไป' : 'เริ่มนำทาง'} <i className="fas fa-arrow-right text-sm"></i>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-10">
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex-1 text-center md:text-left">
                     <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">จาก</p>
                     <p className="font-black text-slate-900 text-2xl leading-none">{BUILDINGS.find(b => b.id === state.currentLocation)?.name}</p>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xl shadow-inner shrink-0">
                      <i className="fas fa-chevron-right"></i>
                   </div>
                   <div className="flex-1 text-center md:text-right">
                     <p className="text-xs text-blue-600 font-black uppercase tracking-widest mb-1">ไปยัง</p>
                     <p className="font-black text-slate-900 text-2xl leading-none">{BUILDINGS.find(b => b.id === state.destination)?.name}</p>
                   </div>
                </div>

                <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100">
                   <MapDisplay from={state.currentLocation} to={state.destination} />
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-6 pb-20">
                  <button 
                    onClick={() => {
                      const dest = BUILDINGS.find(b => b.id === state.destination);
                      if (dest) setState(prev => ({ ...prev, selectedBuilding: dest }));
                    }}
                    className="bg-white text-slate-800 px-10 py-5 rounded-2xl font-black text-lg border-2 border-slate-100 hover:border-blue-600 transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    <i className="fas fa-circle-info text-blue-600"></i>
                    ข้อมูลอาคาร
                  </button>
                  <button onClick={reset} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3">
                    <i className="fas fa-rotate-left"></i>
                    เริ่มใหม่
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Full Web Footer */}
      <Footer onShowDevs={() => setShowDevs(true)} />

      {/* Modals */}
      {state.selectedBuilding && (
        <BuildingModal 
          building={state.selectedBuilding} 
          onClose={() => setState(prev => ({ ...prev, selectedBuilding: null }))} 
        />
      )}
      {showQR && <AdminPanel onClose={() => setShowQR(false)} />}
      {showDevs && <DevelopersModal onClose={() => setShowDevs(false)} />}
    </div>
  );
};

export default App;
