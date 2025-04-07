
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Play } from "lucide-react";

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

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
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

  const handleStartActivity = () => {
    setActivityStarted(true);
  };

  // Renders specific interactive content based on the lesson title
  const renderLessonContent = () => {
    if (!activityStarted) {
      return <DefaultContent selectedLesson={selectedLesson} />;
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
        return <CountingGames countValue={countValue} setCountValue={setCountValue} />;
      case "Simple Addition":
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
      case "Number Tracing":
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
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
        return <CountingGames countValue={countValue} setCountValue={setCountValue} />;
      case "Fairy Tale Time":
        return <LittleRedHen storyProgress={storyProgress} setStoryProgress={setStoryProgress} />;
      case "Alphabet Song":
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
        
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
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
      case "Phonics Sounds":
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
      case "Letter Tracing Practice":
        return <NumberRecognition selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
        
      default:
        return <DefaultContent selectedLesson={selectedLesson} />;
    }
  };

  return (
    <Dialog open={!!selectedLesson} onOpenChange={(open) => !open && setSelectedLesson(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {selectedLesson?.title || "Interactive Lesson"}
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
              <Button 
                onClick={handleStartActivity}
                size="lg"
                className="gap-2"
              >
                <Play className="h-5 w-5" />
                Start Activity
              </Button>
            </div>
          ) : null}
          
          <div className={!activityStarted ? "opacity-80 pointer-events-none" : ""}>
            {renderLessonContent()}
          </div>
          
          {activityStarted && (
            <div className="mt-4 flex justify-between">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActivityStarted(false)}
              >
                Back to Overview
              </Button>
              
              <Button 
                size="sm"
                variant="default"
                className="gap-2"
              >
                <CheckCircle className="h-4 w-4" />
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
