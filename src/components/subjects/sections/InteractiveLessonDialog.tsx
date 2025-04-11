
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Import refactored components
import StartButtons from "./interactive/StartButtons";
import ActivityContent from "./interactive/ActivityContent";
import ActivityFooter from "./interactive/ActivityFooter";
import QuizQuestion from "./interactive/QuizQuestion";
import QuizResult from "./interactive/QuizResult";

// Import our new custom hook
import { useInteractiveLessonState, Lesson } from "@/hooks/useInteractiveLessonState";

interface InteractiveLessonDialogProps {
  selectedLesson: Lesson | null;
  setSelectedLesson: (lesson: Lesson | null) => void;
  selectedVideo: string | null;
}

const InteractiveLessonDialog = ({ selectedLesson, setSelectedLesson, selectedVideo }: InteractiveLessonDialogProps) => {
  // Use our custom hook for state management
  const {
    activityStarted,
    isQuizMode,
    currentQuestionIndex,
    userAnswers,
    showResults,
    quizCompleted,
    activityState,
    setActivityState,
    handleStartActivity,
    handleStartQuiz,
    handleAnswerSelection,
    handleNextQuestion,
    calculateScore,
    resetQuiz,
    exitQuizMode,
    handleBackToOverview,
    startQuizMode,
    completeActivity
  } = useInteractiveLessonState(selectedLesson, setSelectedLesson);

  // Render quiz content if in quiz mode
  const renderQuizContent = () => {
    if (!selectedLesson?.quizQuestions) return null;
    
    if (showResults) {
      return (
        <QuizResult 
          score={calculateScore()} 
          quizQuestions={selectedLesson.quizQuestions} 
          userAnswers={userAnswers}
          resetQuiz={resetQuiz}
          exitQuizMode={exitQuizMode}
        />
      );
    }
    
    const currentQuestion = selectedLesson.quizQuestions[currentQuestionIndex];
    return (
      <QuizQuestion 
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={selectedLesson.quizQuestions.length}
        selectedAnswer={activityState.selectedAnswer}
        handleAnswerSelection={handleAnswerSelection}
        handleNextQuestion={handleNextQuestion}
      />
    );
  };

  return (
    <Dialog open={!!selectedLesson} onOpenChange={(open) => !open && setSelectedLesson(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {selectedLesson?.title || "Interactive Lesson"}
            {selectedLesson?.grade && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                Grade {selectedLesson.grade.replace("grade", "")}
              </span>
            )}
          </DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setSelectedLesson(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        
        {/* Activity content */}
        <div className="relative">
          {!activityStarted && (
            <StartButtons 
              selectedLesson={selectedLesson}
              handleStartActivity={handleStartActivity}
              handleStartQuiz={handleStartQuiz}
            />
          )}
          
          <div className={!activityStarted ? "opacity-80 pointer-events-none" : ""}>
            {isQuizMode ? (
              renderQuizContent()
            ) : (
              <ActivityContent 
                selectedLesson={selectedLesson}
                activityState={activityState}
                setActivityState={setActivityState}
              />
            )}
          </div>
          
          <ActivityFooter 
            isQuizMode={isQuizMode}
            quizCompleted={quizCompleted}
            selectedLesson={selectedLesson}
            handleBackToOverview={handleBackToOverview}
            startQuizMode={startQuizMode}
            completeActivity={completeActivity}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveLessonDialog;
