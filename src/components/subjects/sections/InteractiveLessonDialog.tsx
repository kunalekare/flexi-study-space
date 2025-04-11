
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Play, Book, BookOpen, CheckCheck, HelpCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

// Import activity components
import NumberRecognition from "./activities/NumberRecognition";
import PatternMatching from "./activities/PatternMatching";
import CountingGames from "./activities/CountingGames";
import ShapeExplorer from "./activities/ShapeExplorer";
import ColorMatchingGame from "./activities/ColorMatchingGame";
import ShapeHunt from "./activities/ShapeHunt";
import SortingByColor from "./activities/SortingByColor";
import DrawingWithShapes from "./activities/DrawingWithShapes";
import LittleRedHen from "./activities/LittleRedHen";
import DefaultContent from "./activities/DefaultContent";
import CountingOneToTen from "./activities/CountingOneToTen";
import SimpleAddition from "./activities/SimpleAddition";
import CountingWithSongs from "./activities/CountingWithSongs";
import AlphabetSong from "./activities/AlphabetSong";
import LetterTracing from "./activities/LetterTracing";
import PhonicsSounds from "./activities/PhonicsSounds";

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

  // Renders specific interactive content based on the lesson title
  const renderLessonContent = () => {
    if (!activityStarted) {
      return <DefaultContent selectedLesson={selectedLesson} />;
    }

    if (isQuizMode && selectedLesson?.quizQuestions) {
      return renderQuiz();
    }

    switch (selectedLesson?.title) {
      // Math activities
      case "Number Recognition":
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
      case "Pattern Matching":
        return (
          <PatternMatching 
            currentPattern={currentPattern} 
            draggedShape={draggedShape} 
            setDraggedShape={setDraggedShape}
            droppedShapes={droppedShapes}
            setDroppedShapes={setDroppedShapes}
          />
        );
      case "Counting Games":
        return <CountingGames countValue={countValue} setCountValue={setCountValue} />;
      case "Shape Explorer":
        return <ShapeExplorer />;
      case "Counting 1 to 10":
        return <CountingOneToTen />;
      case "Simple Addition":
        return <SimpleAddition />;
      case "Number Tracing":
        return <LetterTracing />;
      case "Sorting & Matching":
        return <SortingByColor />;
        
      // Shapes & Colors activities
      case "Color Matching Game":
        return <ColorMatchingGame selectedColor={selectedColor} setSelectedColor={setSelectedColor} />;
      case "Shape Hunt":
        return <ShapeHunt />;
      case "Sorting by Color":
        return <SortingByColor />;
      case "Drawing with Shapes":
        return <DrawingWithShapes drawnShapes={drawnShapes} setDrawnShapes={setDrawnShapes} />;
        
      // Stories & Songs activities
      case "The Little Red Hen":
        return <LittleRedHen storyProgress={storyProgress} setStoryProgress={setStoryProgress} />;
      case "Counting with Songs":
        return <CountingWithSongs />;
      case "Fairy Tale Time":
        return <LittleRedHen storyProgress={storyProgress} setStoryProgress={setStoryProgress} />;
      case "Alphabet Song":
        return <AlphabetSong />;
        
      // Memory & Logic activities
      case "Find the Pattern":
        return (
          <PatternMatching 
            currentPattern={currentPattern} 
            draggedShape={draggedShape} 
            setDraggedShape={setDraggedShape}
            droppedShapes={droppedShapes}
            setDroppedShapes={setDroppedShapes}
          />
        );
      case "Matching Game":
        return <SortingByColor />;
      case "Memory Challenge":
        return <ShapeExplorer />;
      case "Spot the Difference":
        return <ShapeHunt />;
        
      // Alphabets activities
      case "A to Z Letter Recognition":
        return <LetterTracing />;
      case "Phonics Sounds":
        return <PhonicsSounds />;
      case "Letter Tracing Practice":
        return <LetterTracing />;
        
      default:
        return <DefaultContent selectedLesson={selectedLesson} />;
    }
  };

  const renderQuiz = () => {
    if (!selectedLesson?.quizQuestions) return null;
    
    if (showResults) {
      const score = calculateScore();
      
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
            {selectedLesson.quizQuestions.map((question, index) => (
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
              onClick={() => {
                setIsQuizMode(false);
                setActivityStarted(false);
              }}
            >
              Back to Lesson
            </Button>
            <Button onClick={resetQuiz}>
              Try Again
            </Button>
          </div>
        </div>
      );
    }
    
    const currentQuestion = selectedLesson.quizQuestions[currentQuestionIndex];
    
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {selectedLesson.quizQuestions.length}
          </div>
          <Progress 
            value={((currentQuestionIndex) / selectedLesson.quizQuestions.length) * 100} 
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
              {currentQuestionIndex < selectedLesson.quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </CardFooter>
        </Card>
      </div>
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
          {!activityStarted ? (
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
          ) : null}
          
          <div className={!activityStarted ? "opacity-80 pointer-events-none" : ""}>
            {renderLessonContent()}
          </div>
          
          {activityStarted && !quizCompleted && !isQuizMode && (
            <div className="mt-4 flex justify-between">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActivityStarted(false)}
              >
                Back to Overview
              </Button>
              
              {selectedLesson?.quizQuestions && selectedLesson.quizQuestions.length > 0 && (
                <Button 
                  size="sm"
                  variant="secondary"
                  className="gap-2"
                  onClick={() => {
                    setIsQuizMode(true);
                    setCurrentQuestionIndex(0);
                    setUserAnswers([]);
                    setShowResults(false);
                  }}
                >
                  <Book className="h-4 w-4" />
                  Take Quiz
                </Button>
              )}
              
              <Button 
                size="sm"
                variant="default"
                className="gap-2"
              >
                <CheckCheck className="h-4 w-4" />
                Complete Activity
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveLessonDialog;
