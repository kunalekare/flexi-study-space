
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, BookOpen } from "lucide-react";

interface StartButtonsProps {
  selectedLesson: {
    quizQuestions?: {
      question: string;
      options: string[];
      correctAnswer: number;
      explanation?: string;
    }[];
  } | null;
  handleStartActivity: () => void;
  handleStartQuiz: () => void;
}

const StartButtons = ({ selectedLesson, handleStartActivity, handleStartQuiz }: StartButtonsProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button 
          onClick={handleStartActivity}
          size="lg"
          className="gap-2"
        >
          <Play className="h-5 w-5" />
          Start Activity
        </Button>
        
        {selectedLesson?.quizQuestions && selectedLesson.quizQuestions.length > 0 && (
          <Button 
            onClick={handleStartQuiz}
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Take Quiz
          </Button>
        )}
      </div>
    </div>
  );
};

export default StartButtons;
