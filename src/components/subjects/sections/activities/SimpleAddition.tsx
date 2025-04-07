
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SimpleAddition = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  const problems = [
    { num1: 1, num2: 2, options: [2, 3, 4, 5], answer: 3 },
    { num1: 2, num2: 2, options: [3, 4, 5, 6], answer: 4 },
    { num1: 3, num2: 1, options: [2, 3, 4, 5], answer: 4 }
  ];
  
  const handleNextProblem = () => {
    if (currentProblem < problems.length - 1) {
      setCurrentProblem(currentProblem + 1);
      setSelectedAnswer(null);
    } else {
      // Reset back to the first problem
      setCurrentProblem(0);
      setSelectedAnswer(null);
    }
  };
  
  const problem = problems[currentProblem];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Simple Addition</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-6 text-center">Let's add these numbers!</h3>
        
        <div className="flex items-center justify-center my-8">
          <div className="flex items-center">
            <div className="flex flex-wrap justify-center">
              {Array(problem.num1).fill(0).map((_, idx) => (
                <span key={`first-${idx}`} role="img" aria-label="apple" className="text-3xl m-1">🍎</span>
              ))}
            </div>
            <span className="text-4xl mx-4">+</span>
            <div className="flex flex-wrap justify-center">
              {Array(problem.num2).fill(0).map((_, idx) => (
                <span key={`second-${idx}`} role="img" aria-label="apple" className="text-3xl m-1">🍎</span>
              ))}
            </div>
            <span className="text-4xl mx-4">=</span>
            <span className="text-4xl">?</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-8 mb-4">
          {problem.options.map((option) => (
            <Button 
              key={option}
              variant={selectedAnswer === option ? "default" : "outline"} 
              className={`py-6 text-xl ${selectedAnswer === option && option === problem.answer ? "bg-green-500" : selectedAnswer === option ? "bg-red-500" : ""}`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          {selectedAnswer === problem.answer && (
            <div>
              <p className="text-green-600 font-medium mb-3">Correct! {problem.num1} + {problem.num2} = {problem.answer}</p>
              <Button 
                onClick={handleNextProblem}
                className="animate-bounce"
              >
                Next Problem
              </Button>
            </div>
          )}
          {selectedAnswer !== null && selectedAnswer !== problem.answer && (
            <p className="text-red-600 font-medium">Try again! Count carefully.</p>
          )}
        </div>
        
        <div className="mt-6 bg-white p-4 rounded-lg">
          <h4 className="font-medium mb-2">Learning Tip</h4>
          <p className="text-sm text-muted-foreground">
            When adding, start with the first number and then count forward the second number.
            For example, for {problem.num1} + {problem.num2}, start at {problem.num1} and count forward {problem.num2} more: {
              Array(problem.num2).fill(0).map((_, idx) => problem.num1 + idx + 1).join(", ")
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleAddition;
