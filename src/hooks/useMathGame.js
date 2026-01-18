import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { generateQuestion } from "../utils/mathEngine";

const TOTAL_TIME = 30;

export const useMathGame = (initialBonusTimeProp) => {
  const [searchParams] = useSearchParams();
  
  // 1. Configuration
  const mode = searchParams.get("mode") || "plus";
  const difficulty = searchParams.get("difficulty") || "basic";
  const [currentBonus, setCurrentBonus] = useState(1);

  // 2. Game State
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [gameState, setGameState] = useState("playing"); // "playing" | "finished"
  
  // 3. UI/Interaction State
  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBonusAnim, setShowBonusAnim] = useState(false);

  // Initialize Bonus Time from LocalStorage or Prop
  useEffect(() => {
    const savedBonus = localStorage.getItem("bonusTimeSeconds");
    setCurrentBonus(savedBonus ? Number(savedBonus) : (initialBonusTimeProp || 1));
  }, [initialBonusTimeProp]);

  // Initialize First Question
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

  // Answer Handler
  const handleAnswer = useCallback((option) => {
    if (isProcessing || gameState !== "playing") return;

    setIsProcessing(true);
    setSelectedOption(option);

    if (option === question.answer) {
      // --- CORRECT ANSWER ---
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
    } else {
      // --- WRONG ANSWER ---
      // Delay slightly so user sees the red color, then finish game
      setTimeout(() => setGameState("finished"), 1000);
    }
  }, [isProcessing, gameState, question, currentBonus, mode, difficulty]);

  // Restart Handler
  const restartGame = useCallback(() => {
    setScore(0);
    setTimeLeft(TOTAL_TIME);
    setSelectedOption(null);
    setIsProcessing(false);
    setGameState("playing");
    setQuestion(generateQuestion(mode, difficulty));
  }, [mode, difficulty]);

  // UI Helper: Determines color of buttons
  const getOptionVariant = (opt) => {
    if (!isProcessing) return "option";
    if (opt === question?.answer) return "correct";
    if (opt === selectedOption) return "wrong";
    return "option";
  };

  return {
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
    getOptionVariant,
  };
};
