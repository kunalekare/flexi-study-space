
import { useState } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
  grade?: string;
  quizQuestions?: QuizQuestion[];
}

interface ActivityState {
  selectedAnswer: number | null;
  currentPattern: number;
  draggedShape: string | null;
  droppedShapes: string[];
  countValue: number | null;
  storyProgress: number;
  selectedColor: string | null;
  selectedLetter: string | null;
  drawnShapes: string[];
  matchedPairs: number[];
  phonicsLetter: string;
}

interface InteractiveLessonState {
  activityStarted: boolean;
  isQuizMode: boolean;
  currentQuestionIndex: number;
  userAnswers: number[];
  showResults: boolean;
  quizCompleted: boolean;
  activityState: ActivityState;
  setActivityState: {
    setSelectedAnswer: (value: number | null) => void;
    setCurrentPattern: (value: number) => void;
    setDraggedShape: (value: string | null) => void;
    setDroppedShapes: (value: string[]) => void;
    setCountValue: (value: number | null) => void;
    setStoryProgress: (value: number) => void;
    setSelectedColor: (value: string | null) => void;
    setSelectedLetter: (value: string | null) => void;
    setDrawnShapes: (value: string[]) => void;
    setMatchedPairs: (value: number[]) => void;
    setPhonicLetter: (value: string) => void;
  };
  handleStartActivity: () => void;
  handleStartQuiz: () => void;
  handleAnswerSelection: (answerIndex: number) => void;
  handleNextQuestion: () => void;
  calculateScore: () => number;
  resetQuiz: () => void;
  exitQuizMode: () => void;
  handleBackToOverview: () => void;
  startQuizMode: () => void;
  completeActivity: () => void;
}

export const useInteractiveLessonState = (
  selectedLesson: Lesson | null,
  setSelectedLesson: (lesson: Lesson | null) => void
): InteractiveLessonState => {
  // Activity state
  const [activityStarted, setActivityStarted] = useState(false);
  
  // Activity-specific state values
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

  // Combined activity state object for passing to components
  const activityState = {
    selectedAnswer,
    currentPattern,
    draggedShape,
    droppedShapes,
    countValue,
    storyProgress,
    selectedColor,
    selectedLetter,
    drawnShapes,
    matchedPairs,
    phonicsLetter
  };
  
  // Combined setter functions for passing to components
  const setActivityState = {
    setSelectedAnswer,
    setCurrentPattern,
    setDraggedShape,
    setDroppedShapes,
    setCountValue,
    setStoryProgress,
    setSelectedColor,
    setSelectedLetter,
    setDrawnShapes,
    setMatchedPairs,
    setPhonicLetter
  };

  // Handler functions
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

  const completeActivity = () => {
    // Logic for completing an activity
    // This could include saving progress, showing a completion message, etc.
    setActivityStarted(false);
  };

  return {
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
  };
};
