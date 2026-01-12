import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import { Settings, Plus, Minus, X, Divide } from 'lucide-react';
import Greeting from "../components/dashboard/Greeting.jsx"

const Section = ({ title, children }) => (
  <div className="mb-6 px-4">
    <h3 className="text-blue-900 font-bold text-lg mb-2">{title}</h3>
    <div className="bg-blue-600 rounded-xl p-4 shadow-lg">
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const handleStartGame = (mode, difficulty) => {
    navigate(`/game?mode=${mode}&difficulty=${difficulty}`);
  };

  const renderButtons = (difficulty) => (
    <>
      <Button onClick={() => handleStartGame('plus', difficulty)}>
        <Plus size={32} className="mb-2" />
        <span>Plus</span>
      </Button>

      <Button onClick={() => handleStartGame('minus', difficulty)}>
        <Minus size={32} className="mb-2" />
        <span>Minus</span>
      </Button>

      <Button onClick={() => handleStartGame('multiply', difficulty)}>
        <X size={32} className="mb-2" />
        <span>Multiply</span>
      </Button>

      <Button onClick={() => handleStartGame('divide', difficulty)}>
        <Divide size={32} className="mb-2" />
        <span>Divide</span>
      </Button>
    </>
  );

  return (
    <Layout>
      {/* Header */}
      <div className="p-6 pt-10 text-primary-dark">
        <div className="flex justify-between items-center">
          <Greeting/>
          
          <Settings className="w-8 h-8 text-white/80 cursor-pointer" />
        </div>
      </div>

      <div className="pb-10">
        {/* Basic */}
        <Section title="Basic Calculation Practice">
          {renderButtons('basic')}
        </Section>

        {/* Mid */}
        <Section title="Mid Level Calculation Practice">
          {renderButtons('mid')}
        </Section>

        {/* Advance */}
        <Section title="Advance Calculation Practice">
          <div className="col-span-2">
            <Button
              className="w-full flex-row justify-between items-center px-6"
              onClick={() => handleStartGame('mix', 'mix')}
            >
              <div className="text-left">
                <div className="text-xl font-semibold">
                  Advance Mode
                </div>
                <div className="text-sm font-normal opacity-80">
                  Brackets • Mixed operations • High difficulty
                </div>
              </div>
              <span className="text-4xl font-light">🔥</span>
            </Button>
          </div>
        </Section>
        
        
        
      </div>
    </Layout>
  );
};

export default Home;