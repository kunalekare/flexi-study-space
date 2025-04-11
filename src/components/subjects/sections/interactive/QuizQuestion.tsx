
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuizQuestionProps {
  currentQuestion: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  };
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  handleAnswerSelection: (answerIndex: number) => void;
  handleNextQuestion: () => void;
}

const QuizQuestion = ({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions, 
  selectedAnswer, 
  handleAnswerSelection, 
  handleNextQuestion 
}: QuizQuestionProps) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
        <Progress 
          value={((currentQuestionIndex) / totalQuestions) * 100} 
          className="w-1/2 h-2" 
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswerSelection(parseInt(value))}>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">{option}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
            {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizQuestion;
