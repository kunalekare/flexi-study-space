
import React from "react";
import DefaultContent from "../activities/DefaultContent";
import NumberRecognition from "../activities/NumberRecognition";
import PatternMatching from "../activities/PatternMatching";
import CountingGames from "../activities/CountingGames";
import ShapeExplorer from "../activities/ShapeExplorer";
import CountingOneToTen from "../activities/CountingOneToTen";
import SimpleAddition from "../activities/SimpleAddition";
import LetterTracing from "../activities/LetterTracing";
import SortingByColor from "../activities/SortingByColor";
import ColorMatchingGame from "../activities/ColorMatchingGame";
import ShapeHunt from "../activities/ShapeHunt";
import DrawingWithShapes from "../activities/DrawingWithShapes";
import LittleRedHen from "../activities/LittleRedHen";
import CountingWithSongs from "../activities/CountingWithSongs";
import AlphabetSong from "../activities/AlphabetSong";
import PhonicsSounds from "../activities/PhonicsSounds";

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
  grade?: string;
  quizQuestions?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }[];
}

interface ActivityContentProps {
  selectedLesson: Lesson | null;
  activityState: {
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
  };
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
}

const ActivityContent = ({ 
  selectedLesson, 
  activityState, 
  setActivityState 
}: ActivityContentProps) => {
  const {
    selectedAnswer, currentPattern, draggedShape, droppedShapes,
    countValue, storyProgress, selectedColor, selectedLetter,
    drawnShapes, matchedPairs, phonicsLetter
  } = activityState;
  
  const {
    setSelectedAnswer, setCurrentPattern, setDraggedShape, setDroppedShapes,
    setCountValue, setStoryProgress, setSelectedColor, setSelectedLetter,
    setDrawnShapes, setMatchedPairs, setPhonicLetter
  } = setActivityState;

  // Renders specific interactive content based on the lesson title
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

export default ActivityContent;
