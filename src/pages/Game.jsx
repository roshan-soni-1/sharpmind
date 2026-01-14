import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ResultModal from "../components/game/ResultModal";
import GameHeader from "../components/game/GameHeader";
import QuestionCard from "../components/game/QuestionCard";
import OptionsGrid from "../components/game/OptionsGrid";
import { generateQuestion } from "../utils/mathEngine";

const TOTAL_TIME = 30;
const extraTime = localStorage.getItem("bonusTimeSeconds") || 1;

const Game = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "plus";
  const difficulty = searchParams.get("difficulty") || "basic";

  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [gameState, setGameState] = useState("playing");

  const [selectedOption, setSelectedOption] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setQuestion(generateQuestion(mode, difficulty));
  }, [mode, difficulty]);

  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) return setGameState("finished");

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleAnswer = (option) => {
    if (isProcessing) return;

    setIsProcessing(true);
    setSelectedOption(option);
    
    {/* if answer is correct */}
    if (option === question.answer) {
      setTimeout(() => {
        {/* if answer is correct add 5 seconds to timer*/}
        setScore(s => s + 1);
        
        setTimeLeft(t => Math.min(t + extraTime , TOTAL_TIME));
        
        
        setSelectedOption(null);
        setIsProcessing(false);
        setQuestion(generateQuestion(mode, difficulty));
      }, 500);
    } else {
      setTimeout(() => setGameState("finished"), 1500);
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

  if (!question) {
    return <Layout><div className="p-10 text-center">Loading...</div></Layout>;
  }

  return (
    <Layout>
      <GameHeader
        timeLeft={timeLeft}
        totalTime={TOTAL_TIME}
        score={score}
        showPoint={isProcessing && selectedOption === question.answer}
      />

      <div className="px-4">
        <QuestionCard
          question={question}
          extraTime={extraTime}
          isWrong={isProcessing && selectedOption !== question.answer}
          isRight={isProcessing && selectedOption === question.answer}
        />

        <h3 className="text-center text-primary-dark font-bold text-xl mb-6">
          {isProcessing && selectedOption !== question.answer
            ? "Game Over..."
            : "Pick your Answer"}
        </h3>

        <OptionsGrid
          options={question.options}
          onSelect={handleAnswer}
          getVariant={getVariant}
        />
      </div>
    </Layout>
  );
};

export default Game;