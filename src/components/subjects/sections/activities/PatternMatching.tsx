
import React from "react";
import { Button } from "@/components/ui/button";

interface PatternMatchingProps {
  currentPattern: number;
  draggedShape: string | null;
  setDraggedShape: (shape: string | null) => void;
  droppedShapes: string[];
  setDroppedShapes: (shapes: string[]) => void;
}

const PatternMatching = ({ 
  currentPattern, 
  draggedShape, 
  setDraggedShape, 
  droppedShapes, 
  setDroppedShapes 
}: PatternMatchingProps) => {
  const patterns = [
    { sequence: ["red", "blue", "red", "blue"], next: ["red", "blue"] },
    { sequence: ["square", "circle", "triangle", "square"], next: ["circle", "triangle"] }
  ];
  
  const currentPatternData = patterns[currentPattern];
  const shapes = ["circle", "square", "triangle", "red", "blue"];

  const handleDragStart = (shape: string) => {
    setDraggedShape(shape);
  };
  
  const handleDrop = () => {
    if (draggedShape && droppedShapes.length < 2) {
      setDroppedShapes([...droppedShapes, draggedShape]);
      setDraggedShape(null);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pattern Matching</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-3">Complete the pattern</h3>
        
        <div className="flex items-center justify-center mb-6">
          {currentPatternData.sequence.map((item, index) => (
            <div 
              key={index}
              className={`h-12 w-12 m-1 rounded-md flex items-center justify-center text-white font-bold
                ${item === "red" ? "bg-red-500" : 
                  item === "blue" ? "bg-blue-500" : 
                  item === "square" ? "bg-amber-500 rounded-none" : 
                  item === "circle" ? "bg-green-500 rounded-full" : 
                  item === "triangle" ? "bg-purple-500 triangle" : ""}`}
            >
              {item === "triangle" && "▲"}
              {item === "square" && "■"}
              {item === "circle" && "●"}
            </div>
          ))}
          <div className="mx-2 text-xl">→</div>
          {droppedShapes.map((shape, index) => (
            <div 
              key={index}
              className={`h-12 w-12 m-1 rounded-md flex items-center justify-center text-white font-bold
                ${shape === "red" ? "bg-red-500" : 
                  shape === "blue" ? "bg-blue-500" : 
                  shape === "square" ? "bg-amber-500 rounded-none" : 
                  shape === "circle" ? "bg-green-500 rounded-full" : 
                  shape === "triangle" ? "bg-purple-500 triangle" : ""}`}
            >
              {shape === "triangle" && "▲"}
              {shape === "square" && "■"}
              {shape === "circle" && "●"}
            </div>
          ))}
          {Array(2 - droppedShapes.length).fill(0).map((_, idx) => (
            <div 
              key={idx} 
              className="h-12 w-12 m-1 border-2 border-dashed border-gray-300 rounded-md"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            ></div>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-4">
          {shapes.map((shape) => (
            <div 
              key={shape}
              className={`h-10 w-10 m-1 rounded-md flex items-center justify-center text-white font-bold cursor-move
                ${shape === "red" ? "bg-red-500" : 
                  shape === "blue" ? "bg-blue-500" : 
                  shape === "square" ? "bg-amber-500 rounded-none" : 
                  shape === "circle" ? "bg-green-500 rounded-full" : 
                  shape === "triangle" ? "bg-purple-500 triangle" : ""}`}
              draggable
              onDragStart={() => handleDragStart(shape)}
            >
              {shape === "triangle" && "▲"}
              {shape === "square" && "■"}
              {shape === "circle" && "●"}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground mb-3">Drag and drop the shapes to complete the pattern</p>
          <Button 
            size="sm" 
            onClick={() => setDroppedShapes([])}
            variant="outline"
            className="mr-2"
          >
            Clear
          </Button>
          <Button 
            size="sm"
            onClick={() => {
              if (droppedShapes.length === 2) {
                // Simple check if pattern is correct
                const isCorrect = droppedShapes[0] === currentPatternData.next[0] && 
                                 droppedShapes[1] === currentPatternData.next[1];
                alert(isCorrect ? "Correct pattern!" : "Try again!");
              } else {
                alert("Please complete the pattern first");
              }
            }}
          >
            Check Pattern
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatternMatching;
