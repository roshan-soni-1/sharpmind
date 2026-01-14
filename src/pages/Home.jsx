import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import Greeting from "../components/dashboard/Greeting";
import { Settings, Plus, Minus, X, Divide, Zap, Trophy } from 'lucide-react';

const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-2 mb-3 px-1 mt-6">
    {icon}
    <h3 className="text-slate-700 dark:text-slate-200 font-bold text-lg tracking-tight">
      {title}
    </h3>
  </div>
);

const OperationCard = ({ icon: Icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className="group relative overflow-hidden bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 w-full text-left border border-slate-100 dark:border-slate-700"
  >
    <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-10 transition-transform group-hover:scale-150 ${color}`} />
    
    <div className="flex flex-col items-start gap-3 relative z-10">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 dark:bg-opacity-20`}>
        <Icon size={24} strokeWidth={2.5} className="text-gray-700 dark:text-gray-200" />
      </div>
      <span className="font-bold text-gray-700 dark:text-gray-200 text-lg">{label}</span>
    </div>
  </button>
);

const Home = () => {
  const navigate = useNavigate();

  const handleStartGame = (mode, difficulty) => {
    navigate(`/game?mode=${mode}&difficulty=${difficulty}`);
  };

  const renderGrid = (difficulty) => (
    <div className="grid grid-cols-2 gap-3">
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
      <div className="bg-white/50 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20 px-6 py-4 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="flex justify-between items-start">
          <div className="flex-1">
             <Greeting />
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate("/settings")}
            className="mt-1"
          >
            <Settings className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </Button>
        </div>
      </div>

      <div className="px-6 pb-24">
        
        <SectionHeader title="Basic Training" icon={<span className="text-xl">🌱</span>} />
        {renderGrid('basic')}

        <SectionHeader title="Intermediate" icon={<span className="text-xl">🚀</span>} />
        {renderGrid('mid')}

        <SectionHeader title="Master Challenge" icon={<Trophy className="w-5 h-5 text-amber-500" />} />
        
        <button
          className="w-full relative overflow-hidden rounded-2xl shadow-lg group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] mt-2 border border-transparent dark:border-slate-700"
          onClick={() => handleStartGame('mix', 'mix')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900" />
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity" />

          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                <span className="text-blue-200 font-semibold text-xs uppercase tracking-wider">Expert Mode</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">Mixed Operations</h3>
              <p className="text-slate-300 text-sm font-medium opacity-80">
                Complex Chains • High Speed
              </p>
            </div>
            
            <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/10">
              <span className="text-2xl">🔥</span>
            </div>
          </div>
        </button>
        
      </div>
    </Layout>
  );
};

export default Home;
