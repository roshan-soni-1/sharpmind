import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import Greeting from "../components/dashboard/Greeting";
import { Settings, Plus, Minus, X, Divide, Zap, Trophy } from 'lucide-react';

const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-2 mb-3 px-1 mt-6 lg:mt-10 first:mt-4 lg:first:mt-6">
    {icon}
    <h3 className="text-slate-700 dark:text-slate-200 font-bold text-lg lg:text-2xl tracking-tight">
      {title}
    </h3>
  </div>
);

const OperationCard = ({ icon: Icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className="
      group relative overflow-hidden 
      bg-white dark:bg-slate-800 
      p-4 lg:p-6 /* Compact padding on mobile, spacious on desktop */
      rounded-2xl lg:rounded-3xl 
      shadow-sm hover:shadow-xl hover:scale-[1.02] 
      transition-all duration-300 
      w-full text-left 
      border border-slate-100 dark:border-slate-700 
      h-full flex flex-col justify-between min-h-[110px] lg:min-h-[160px]
    "
  >
    <div className={`absolute -right-4 -top-4 w-20 h-20 lg:w-32 lg:h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 ${color}`} />
    
    {/* Icon Container - Smaller on mobile */}
    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-xl ${color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-3 lg:mb-4`}>
      <Icon className="text-gray-700 dark:text-gray-200 w-5 h-5 lg:w-7 lg:h-7" strokeWidth={2.5} />
    </div>
    
    <div>
      <span className="font-bold text-gray-700 dark:text-gray-200 text-base lg:text-xl block leading-tight">{label}</span>
      <span className="text-slate-400 text-xs lg:text-sm font-medium mt-1 hidden lg:block">Start Training</span>
    </div>
  </button>
);

const Home = () => {
  const navigate = useNavigate();

  const handleStartGame = (mode, difficulty) => {
    navigate(`/game?mode=${mode}&difficulty=${difficulty}`);
  };

  const renderGrid = (difficulty) => (
    // FIXED: grid-cols-2 on mobile (side by side), 4 on desktop
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
      <OperationCard 
        icon={Plus} 
        label="Addition" 
        color="bg-blue-500" 
        onClick={() => handleStartGame('plus', difficulty)} 
      />
      <OperationCard 
        icon={Minus} 
        label="Subtraction" 
        color="bg-rose-500" 
        onClick={() => handleStartGame('minus', difficulty)} 
      />
      <OperationCard 
        icon={X} 
        label="Multiply" 
        color="bg-violet-500" 
        onClick={() => handleStartGame('multiply', difficulty)} 
      />
      <OperationCard 
        icon={Divide} 
        label="Division" 
        color="bg-emerald-500" 
        onClick={() => handleStartGame('divide', difficulty)} 
      />
    </div>
  );

  return (
    <Layout>
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 lg:py-4 transition-all">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex-1">
             <Greeting />
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate("/settings")}
            className="hover:bg-slate-100 dark:hover:bg-slate-800 p-2 lg:p-3 rounded-full transition-colors"
          >
            <Settings className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </Button>
        </div>
      </div>

      <div className="pb-24 max-w-7xl mx-auto w-full">
        
        <SectionHeader title="Basic Training" icon={<span className="text-xl lg:text-2xl">🌱</span>} />
        {renderGrid('basic')}

        <SectionHeader title="Intermediate" icon={<span className="text-xl lg:text-2xl">🚀</span>} />
        {renderGrid('mid')}

        <SectionHeader title="Master Challenge" icon={<Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500" />} />
        
        {/* Large Bottom Button */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
          <button
            className="w-full relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg group transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border border-transparent dark:border-slate-700 min-h-[120px] lg:min-h-[160px]"
            onClick={() => handleStartGame('mix', 'mix')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900" />
            
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-blue-500 rounded-full blur-[50px] lg:blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />

            <div className="relative z-10 p-5 lg:p-8 flex items-center justify-between h-full">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2 lg:mb-3">
                  <div className="bg-white/10 p-1 rounded backdrop-blur-sm">
                     <Zap className="text-yellow-400 fill-yellow-400 w-3 h-3 lg:w-4 lg:h-4 animate-pulse" />
                  </div>
                  <span className="text-blue-200 font-bold text-[10px] lg:text-xs uppercase tracking-wider">Expert Mode</span>
                </div>
                <h3 className="text-white text-xl lg:text-3xl font-bold mb-1 lg:mb-2">Mixed Operations</h3>
                <p className="text-slate-300 text-xs lg:text-sm font-medium opacity-80 max-w-xs">
                  Complex chains & random ops.
                </p>
              </div>
              
              <div className="h-10 w-10 lg:h-16 lg:w-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/10 shadow-inner ml-2">
                <span className="text-lg lg:text-3xl">🔥</span>
              </div>
            </div>
          </button>
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;
