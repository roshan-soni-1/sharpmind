import React from "react";
import Card from "../common/Card";

const QuestionCard = ({ question, isWrong,isRight,extraTime }) => {
  return (
    <Card className="text-center mb-8 py-12 relative overflow-hidden">
      
      {isWrong && (
        <div className="absolute inset-0 bg-red-500 flex items-center justify-center rounded-2xl z-10">
          <span className="text-white font-black text-2xl">
            Wrong! Answer is {question.answer}
          </span>
        </div>
      )}
      
      {isRight && (
        <div className="absolute inset-0 bg-green-500 flex items-center justify-center rounded-2xl z-10">
          <span className="text-white font-black text-5xl">
             {`+${extraTime || 5}`}
          </span>
        </div>
      )}
      <div className="text-3xl font-extrabold text-primary-dark">
        {question.display} =
        <span className="bg-blue-600 text-white w-16 h-16 inline-flex items-center justify-center rounded-xl text-4xl shadow-inner ml-3">
          ?
        </span>
      </div>
    </Card>
  );
};

export default QuestionCard;