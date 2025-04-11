
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Import refactored components
import StartButtons from "./interactive/StartButtons";
import ActivityContent from "./interactive/ActivityContent";
import ActivityFooter from "./interactive/ActivityFooter";
import QuizQuestion from "./interactive/QuizQuestion";
import QuizResult from "./interactive/QuizResult";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
  grade?: string;
  quizQuestions?: QuizQuestion[];
}

interface InteractiveLessonDialogProps {
  selectedLesson: Lesson | null;
  setSelectedLesson: (lesson: Lesson | null) => void;
  selectedVideo: string | null;
}

const InteractiveLessonDialog = ({ selectedLesson, setSelectedLesson, selectedVideo }: InteractiveLessonDialogProps) => {
  const [activityStarted, setActivityStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentPattern, setCurrentPattern] = useState(0);
  const [draggedShape, setDraggedShape] = useState<string | null>(null);
  const [droppedShapes, setDroppedShapes] = useState<string[]>([]);
  const [countValue, setCountValue] = useState<number | null>(null);
  const [storyProgress, setStoryProgress] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [drawnShapes, setDrawnShapes] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [phonicsLetter, setPhonicLetter] = useState("A");

  // Quiz state
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStartActivity = () => {
    setActivityStarted(true);
    setIsQuizMode(false);
  };

  const handleStartQuiz = () => {
    if (selectedLesson?.quizQuestions && selectedLesson.quizQuestions.length > 0) {
      setActivityStarted(true);
      setIsQuizMode(true);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowResults(false);
      setQuizCompleted(false);
    }
  };

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setUserAnswers([...userAnswers, selectedAnswer]);
      
      if (selectedLesson?.quizQuestions && currentQuestionIndex < selectedLesson.quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
        setQuizCompleted(true);
      }
    }
  };

  const calculateScore = () => {
    if (!selectedLesson?.quizQuestions) return 0;
    
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (selectedLesson.quizQuestions && answer === selectedLesson.quizQuestions[index].correctAnswer) {
        correctCount++;
      }
    });
    
    return Math.round((correctCount / selectedLesson.quizQuestions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const exitQuizMode = () => {
    setIsQuizMode(false);
    setActivityStarted(false);
  };

  const handleBackToOverview = () => {
    setActivityStarted(false);
  };

  const startQuizMode = () => {
    setIsQuizMode(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  // Collect activity state for passing to ActivityContent
  const activityState = {
    selectedAnswer, currentPattern, draggedShape, droppedShapes,
    countValue, storyProgress, selectedColor, selectedLetter,
    drawnShapes, matchedPairs, phonicsLetter
  };
  
  const setActivityState = {
    setSelectedAnswer, setCurrentPattern, setDraggedShape, setDroppedShapes,
    setCountValue, setStoryProgress, setSelectedColor, setSelectedLetter,
    setDrawnShapes, setMatchedPairs, setPhonicLetter
  };

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
        selectedAnswer={selectedAnswer}
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
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveLessonDialog;
