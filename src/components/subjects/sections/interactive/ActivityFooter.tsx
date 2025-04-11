
import React from "react";
import { Button } from "@/components/ui/button";
import { Book, CheckCheck } from "lucide-react";

interface ActivityFooterProps {
  isQuizMode: boolean;
  quizCompleted: boolean;
  selectedLesson: {
    quizQuestions?: {
      question: string;
      options: string[];
      correctAnswer: number;
      explanation?: string;
    }[];
  } | null;
  handleBackToOverview: () => void;
  startQuizMode: () => void;
  completeActivity?: () => void;
}

const ActivityFooter = ({ 
  isQuizMode,
  quizCompleted,
  selectedLesson,
  handleBackToOverview,
  startQuizMode,
  completeActivity = () => {}
}: ActivityFooterProps) => {
  if (isQuizMode || quizCompleted) return null;
  
  return (
    <div className="mt-4 flex justify-between">
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleBackToOverview}
      >
        Back to Overview
      </Button>
      
      {selectedLesson?.quizQuestions && selectedLesson.quizQuestions.length > 0 && (
        <Button 
          size="sm"
          variant="secondary"
          className="gap-2"
          onClick={startQuizMode}
        >
          <Book className="h-4 w-4" />
          Take Quiz
        </Button>
      )}
      
      <Button 
        size="sm"
        variant="default"
        className="gap-2"
        onClick={completeActivity}
      >
        <CheckCheck className="h-4 w-4" />
        Complete Activity
      </Button>
    </div>
  );
};

export default ActivityFooter;
