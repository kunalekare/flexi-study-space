
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, HelpCircle, XCircle } from "lucide-react";

interface QuizResultProps {
  score: number;
  quizQuestions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }[];
  userAnswers: number[];
  resetQuiz: () => void;
  exitQuizMode: () => void;
}

const QuizResult = ({ score, quizQuestions, userAnswers, resetQuiz, exitQuizMode }: QuizResultProps) => {
  return (
    <div className="space-y-6 p-4">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {score >= 70 ? (
            <CheckCircle className="h-8 w-8 text-green-500" />
          ) : (
            <HelpCircle className="h-8 w-8 text-amber-500" />
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">Quiz Results</h3>
        <p className="text-lg font-medium">
          You scored {score}%
        </p>
        <div className="w-full mt-4 mb-6">
          <Progress value={score} className="h-3" />
        </div>
        
        {score >= 70 ? (
          <p className="text-green-600 dark:text-green-400 mb-4">Great job! You've mastered this content.</p>
        ) : (
          <p className="text-amber-600 dark:text-amber-400 mb-4">Let's review the content and try again!</p>
        )}
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium text-lg">Review your answers:</h4>
        {quizQuestions.map((question, index) => (
          <div key={index} className="p-4 rounded-lg border bg-card">
            <p className="font-medium mb-2">
              {index + 1}. {question.question}
            </p>
            <p className="mb-1 text-sm">Your answer: 
              <span className={userAnswers[index] === question.correctAnswer ? "text-green-600 dark:text-green-400 font-medium ml-1" : "text-red-600 dark:text-red-400 font-medium ml-1"}>
                {question.options[userAnswers[index]]}
                {userAnswers[index] === question.correctAnswer ? 
                  <CheckCircle className="inline-block ml-1 h-4 w-4" /> : 
                  <XCircle className="inline-block ml-1 h-4 w-4" />
                }
              </span>
            </p>
            {userAnswers[index] !== question.correctAnswer && (
              <p className="text-sm text-muted-foreground">
                Correct answer: <span className="text-green-600 dark:text-green-400 font-medium">{question.options[question.correctAnswer]}</span>
              </p>
            )}
            {question.explanation && (
              <p className="text-sm text-muted-foreground mt-2 bg-muted p-2 rounded">
                {question.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={exitQuizMode}
        >
          Back to Lesson
        </Button>
        <Button onClick={resetQuiz}>
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;
