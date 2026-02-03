
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8">
            <Dashboard onStartNav={() => setView('nav')} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {!state.showMap ? (
              <div className="bg-white p-5 md:p-10 rounded-[2rem] shadow-xl border border-slate-100">
                {/* Selection Header */}
                <div className="flex items-start gap-4 mb-8">
                   <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shrink-0">
                      <i className={`fas ${step === 1 ? 'fa-location-dot' : 'fa-bullseye'}`}></i>
                   </div>
                   <div>
                      <h2 className="text-xl md:text-2xl font-black text-slate-900">
                         {step === 1 ? 'ระบุจุดเริ่มต้นของคุณ' : 'เลือกจุดหมายปลายทาง'}
                      </h2>
                      <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mt-1">
                        STEP {step} OF 2
                      </p>
                   </div>
                </div>

                {/* Categories */}
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
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeCategory === cat.id 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative mb-6">
                  <input 
                    type="text"
                    placeholder="ค้นหาอาคาร..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-xl py-4 pl-12 pr-4 font-bold text-slate-800 transition-all text-sm outline-none shadow-inner"
                  />
                  <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"></i>
                </div>

                {/* List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1 no-scrollbar pb-4">
                  {filteredBuildings.map(loc => (
                    <button 
                      key={loc.id}
                      onClick={() => setTempSelection(loc.id)} 
                      className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-center gap-4 ${
                        tempSelection === loc.id 
                          ? 'border-blue-600 bg-blue-50/50' 
                          : 'border-slate-50 bg-slate-50 hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        tempSelection === loc.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-300 shadow-sm'
                      }`}>
                        <i className={`fas ${loc.category === 'service' ? 'fa-utensils' : 'fa-building'} text-sm`}></i>
                      </div>
                      <div className="flex-1 truncate">
                        <p className={`font-black text-[13px] truncate ${tempSelection === loc.id ? 'text-blue-900' : 'text-slate-800'}`}>
                          {loc.name}
                        </p>
                        <p className="text-[8px] font-black tracking-widest uppercase text-slate-400">
                          {loc.department || 'CAMPUS AREA'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {tempSelection && (
                  <div className="mt-8 pt-6 border-t border-slate-50">
                    <button 
                      onClick={handleConfirm} 
                      className="w-full bg-slate-900 text-white py-5 rounded-xl font-black text-base hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-4"
                    >
                      {step === 1 ? 'ยืนยันตำแหน่งนี้' : 'ดูเส้นทาง'} 
                      <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center justify-between gap-4">
                   <div className="flex-1 text-center md:text-left">
                     <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">START</p>
                     <p className="font-black text-slate-900 text-sm md:text-xl truncate">{BUILDINGS.find(b => b.id === state.currentLocation)?.name}</p>
                   </div>
                   <i className="fas fa-arrow-right text-blue-600 text-sm"></i>
                   <div className="flex-1 text-center md:text-right">
                     <p className="text-[9px] text-blue-600 font-black uppercase tracking-widest">DESTINATION</p>
                     <p className="font-black text-slate-900 text-sm md:text-xl truncate">{BUILDINGS.find(b => b.id === state.destination)?.name}</p>
                   </div>
                </div>

                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                   <MapDisplay from={state.currentLocation} to={state.destination} />
                </div>

                <div className="flex justify-center gap-4 pb-12">
                  <button onClick={reset} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-slate-800 shadow-xl flex items-center gap-3">
                    <i className="fas fa-rotate-left"></i>
                    เริ่มต้นใหม่
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer onShowDevs={() => setShowDevs(true)} />
      
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

      {state.selectedBuilding && (
        <BuildingModal 
          building={state.selectedBuilding} 
          onClose={() => setState(prev => ({ ...prev, selectedBuilding: null }))} 
        />
      )}
      {showQR && <AdminPanel onClose={() => setShowQR(false)} />}
      {showDevs && <DevelopersModal onClose={() => { setShowDevs(false); setActiveTab('home'); }} />}
    </div>
  );
};

export default App;
