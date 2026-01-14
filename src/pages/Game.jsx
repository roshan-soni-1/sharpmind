import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ResultModal from "../components/game/ResultModal";
import GameHeader from "../components/game/GameHeader";
import QuestionCard from "../components/game/QuestionCard";
import OptionsGrid from "../components/game/OptionsGrid";
import { generateQuestion } from "../utils/mathEngine";

const TOTAL_TIME = 30;

const Game = ({ bonusTime }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Game Configuration
  const mode = searchParams.get("mode") || "plus";
  const difficulty = searchParams.get("difficulty") || "basic";
  const [currentBonus, setCurrentBonus] = useState(1);

  // Game State
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [gameState, setGameState] = useState("playing"); // 
  
  // Interaction State
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBonusAnim, setShowBonusAnim] = useState(false);

  useEffect(() => {
    const savedBonus = localStorage.getItem("bonusTimeSeconds");
    setCurrentBonus(savedBonus ? Number(savedBonus) : (bonusTime || 1));
  }, [bonusTime]);
  
  // Initial Question
  useEffect(() => {
    setQuestion(generateQuestion(mode, difficulty));
  }, [mode, difficulty]);

  // Timer Logic
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      setGameState("finished");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleAnswer = (option) => {
    if (isProcessing) return;

    setIsProcessing(true);
    setSelectedOption(option);
    
    // CORRECT ANSWER
    if (option === question.answer) {
      // Trigger Bonus Animation
      setShowBonusAnim(true);
      setTimeout(() => setShowBonusAnim(false), 800);

      setTimeout(() => {
        setScore((s) => s + 1);
        setTimeLeft((t) => Math.min(t + currentBonus, TOTAL_TIME));
        
        // Reset for next round
        setSelectedOption(null);
        setIsProcessing(false);
        setQuestion(generateQuestion(mode, difficulty));
      }, 400); 
    } 
    // WRONG ANSWER
    else {
      setTimeout(() => setGameState("finished"), 1000);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(TOTAL_TIME);
    setSelectedOption(null);
    setIsProcessing(false);
    setGameState("playing");
    setQuestion(generateQuestion(mode, difficulty));
  };

  const getVariant = (opt) => {
    if (!isProcessing) return "option";
    if (opt === question.answer) return "correct";
    if (opt === selectedOption) return "wrong";
    return "option"; 
  };

  if (gameState === "finished") {
    return (
      <Layout>
        <ResultModal
          score={score}
          onRestart={handleRestart}
          onHome={() => navigate("/")}
        />
      </Layout>
    );
  }

  if (!question) return <Layout><div className="flex h-screen items-center justify-center text-slate-500">Preparing Math...</div></Layout>;

  return (
    <Layout>

      {showBonusAnim && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-bounce-custom">
          <span className="text-4xl font-black text-green-500 drop-shadow-lg">+{currentBonus}s</span>
        </div>
      )}

      <div className="flex flex-col h-full px-4 pt-4 pb-6 max-w-md mx-auto">
        <GameHeader
          timeLeft={timeLeft}
          totalTime={TOTAL_TIME}
          score={score}
        />

        <div className="flex-1 flex flex-col justify-center gap-6 my-4">
          <QuestionCard
            question={question}
            isWrong={isProcessing && selectedOption !== question.answer}
          />
          
          <div className="mt-2">
            <h3 className={`text-center font-bold text-lg mb-4 transition-colors duration-300 ${
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
              onSelect={handleAnswer}
              getVariant={getVariant}
              disabled={isProcessing}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Game;
