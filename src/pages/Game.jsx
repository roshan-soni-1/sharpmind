import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ResultModal from "../components/game/ResultModal";
import GameHeader from "../components/game/GameHeader";
import QuestionCard from "../components/game/QuestionCard";
import OptionsGrid from "../components/game/OptionsGrid";
import { useMathGame } from "../hooks/useMathGame";

const Game = ({ bonusTime }) => {
  const navigate = useNavigate();
  
  const {
    gameState,
    score,
    timeLeft,
    question,
    selectedOption,
    isProcessing,
    showBonusAnim,
    currentBonus,
    TOTAL_TIME,
    handleAnswer,
    restartGame,
    getOptionVariant
  } = useMathGame(bonusTime);

  if (gameState === "finished") {
    return (
      <Layout>
        <ResultModal
          score={score}
          onRestart={restartGame}
          onHome={() => navigate("/")}
        />
      </Layout>
    );
  }

  if (!question) return (
    <Layout>
      <div className="flex h-[80vh] items-center justify-center text-slate-500 font-medium text-lg animate-pulse">
        Preparing Question...
      </div>
    </Layout>
  );

  return (
    <Layout>
      {showBonusAnim && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-bounce-custom">
          <span className="text-5xl md:text-7xl font-black text-green-500 drop-shadow-2xl">
            +{currentBonus}s
          </span>
        </div>
      )}

      <div className="flex flex-col w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto h-full min-h-[85vh] py-4 md:py-8 justify-between md:justify-center relative">
        
        {/* Header */}
        <div className="mb-6 md:mb-10 w-full">
          <GameHeader
            timeLeft={timeLeft}
            totalTime={TOTAL_TIME}
            score={score}
          />
        </div>

        {/* Game Area */}
        <div className="flex-1 flex flex-col justify-center gap-6 md:gap-12 w-full">
          <QuestionCard
            question={question}
            isWrong={isProcessing && selectedOption !== question.answer}
            isRight={isProcessing && selectedOption === question.answer}
            isProcessing={isProcessing}
            extraTime={currentBonus}
          />
          
          <div className="mt-2 md:mt-6 w-full">
            <h3 className={`text-center font-bold text-lg md:text-2xl mb-4 md:mb-8 transition-colors duration-300 ${
              isProcessing 
                ? (selectedOption === question.answer ? "text-green-500" : "text-red-500") 
                : "text-slate-400 dark:text-slate-500"
            }`}>
              {isProcessing 
                ? (selectedOption === question.answer ? "Correct!" : "Game Over!") 
                : "Select the correct answer"}
            </h3>

            <OptionsGrid
              options={question.options}
              answer={question.answer}
              getVariant={getOptionVariant}
              onSelect={handleAnswer}
              disabled={isProcessing}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Game;
