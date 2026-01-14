import React from "react";
import { Check, X } from "lucide-react";

const QuestionCard = ({ question, isWrong, isRight, extraTime }) => {
  let num1 = question.num1;
  let operator = question.operator;
  let num2 = question.num2;

  if ((!num1 || !operator) && question.display) {
    const parts = question.display.split(' '); 
    if (parts.length >= 3) {
      num1 = parts[0];
      operator = parts[1];
      num2 = parts[2];
    }
  }

  const getOperatorSymbol = (op) => {
    switch (op) {
      case "*": case "x": return "×";
      case "/": return "÷";
      case "plus": case "+": return "+";
      case "minus": case "-": return "-";
      default: return op;
    }
  };

  return (
    <div className={`
      relative w-full mx-auto mb-8
      bg-white dark:bg-slate-800 
      rounded-3xl shadow-xl dark:shadow-none
      border-[3px] 
      ${isWrong ? 'border-rose-500 animate-shake' : 'border-slate-100 dark:border-slate-700'}
      ${isRight ? 'border-emerald-500 scale-105' : ''}
      transition-all duration-300 ease-out
      overflow-hidden
    `}>
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 dark:bg-purple-900/20 rounded-tr-full opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 py-10 px-4 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        
        <span className="text-5xl sm:text-6xl font-black text-slate-800 dark:text-white tracking-tight">
          {num1 || "?"}
        </span>

        <span className="text-4xl sm:text-5xl font-bold text-blue-500 dark:text-blue-400">
          {getOperatorSymbol(operator || "?")}
        </span>


        <span className="text-5xl sm:text-6xl font-black text-slate-800 dark:text-white tracking-tight">
          {num2 || "?"}
        </span>


        <span className="text-4xl sm:text-5xl font-bold text-slate-300 dark:text-slate-600">
          =
        </span>
        
        <div className={`
          w-20 h-20 sm:w-24 sm:h-24 
          rounded-2xl flex items-center justify-center
          text-4xl font-bold shadow-inner
          transition-colors duration-300
          ${isRight 
            ? 'bg-emerald-500 text-white shadow-emerald-600/50' 
            : isWrong 
              ? 'bg-rose-500 text-white shadow-rose-600/50' 
              : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500'
          }
        `}>
          {isRight ? <Check size={40} strokeWidth={4} /> : 
           isWrong ? <X size={40} strokeWidth={4} /> : 
           "?"}
        </div>
      </div>

      {isRight && (
        <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-[2px] flex items-center justify-center z-20 animate-fade-in">
          <div className="flex flex-col items-center">
            <span className="text-emerald-600 dark:text-emerald-400 font-black text-6xl drop-shadow-sm animate-bounce-custom">
              +{extraTime || 1}s
            </span>
          </div>
        </div>
      )}

      {isWrong && (
        <div className="absolute inset-0 bg-rose-500/90 backdrop-blur-sm flex items-center justify-center z-20 animate-fade-in">
          <div className="text-center text-white">
            <p className="text-sm font-bold uppercase opacity-80 mb-1">Correct Answer</p>
            <p className="text-5xl font-black tracking-wider">{question.answer}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default QuestionCard;
