
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Play, Download } from "lucide-react";

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

  const handleStartActivity = () => {
    setActivityStarted(true);
  };

  // Renders specific interactive content based on the lesson title
  const renderLessonContent = () => {
    switch (selectedLesson?.title) {
      case "Number Recognition":
        return renderNumberRecognition();
      case "Pattern Matching":
        return renderPatternMatching();
      case "Counting Games":
        return renderCountingGames();
      case "Shape Explorer":
        return renderShapeExplorer();
      default:
        return renderDefaultContent();
    }
  };

  // Number Recognition activity
  const renderNumberRecognition = () => {
    const numbers = [
      { number: 7, options: [2, 5, 7, 9] },
      { number: 12, options: [10, 12, 15, 18] },
      { number: 4, options: [1, 4, 6, 9] }
    ];
    const currentNumber = numbers[0];

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Number Recognition</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-2">What number is this?</h3>
          <div className="flex items-center justify-center">
            <div className="text-8xl font-bold text-primary my-6">{currentNumber.number}</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {currentNumber.options.map((option) => (
              <Button 
                key={option}
                variant={selectedAnswer === option ? "default" : "outline"} 
                className={`py-6 text-xl ${selectedAnswer === option && option === currentNumber.number ? "bg-green-500" : selectedAnswer === option ? "bg-red-500" : ""}`}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <div className="mt-4 text-center">
            {selectedAnswer === currentNumber.number && (
              <p className="text-green-600 font-medium">Correct! That's the number {currentNumber.number}.</p>
            )}
            {selectedAnswer !== null && selectedAnswer !== currentNumber.number && (
              <p className="text-red-600 font-medium">Try again! That's not the number {currentNumber.number}.</p>
            )}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Number Audio</h4>
              <Button size="sm" variant="ghost">
                <Play className="h-4 w-4 mr-2" />
                Listen
              </Button>
            </div>
            <div className="mt-2 border rounded-md p-3 bg-background">
              <p className="text-sm">Click to hear the number pronounced. Learning to associate the sound with the visual number helps with number recognition.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Pattern Matching activity
  const renderPatternMatching = () => {
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

  // Counting Games activity
  const renderCountingGames = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Counting Games</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Count the apples</h3>
          
          <div className="flex items-center justify-center flex-wrap my-6">
            {Array(7).fill(0).map((_, idx) => (
              <div key={idx} className="m-1">
                <span role="img" aria-label="apple" className="text-3xl">🍎</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-6">
            <p className="font-medium mb-2">How many apples do you see?</p>
            <div className="flex justify-center gap-2 my-4">
              {[5, 6, 7, 8].map(num => (
                <Button 
                  key={num}
                  variant={countValue === num ? "default" : "outline"}
                  className={`w-12 h-12 ${countValue === num && num === 7 ? "bg-green-500" : countValue === num ? "bg-red-500" : ""}`}
                  onClick={() => setCountValue(num)}
                >
                  {num}
                </Button>
              ))}
            </div>
            {countValue !== null && (
              <p className={`mt-2 ${countValue === 7 ? "text-green-600" : "text-red-600"} font-medium`}>
                {countValue === 7 ? "Correct! There are 7 apples." : "Try again! Count carefully."}
              </p>
            )}
          </div>
          
          <div className="mt-4 border rounded-md p-3 bg-background">
            <h4 className="font-medium mb-2">Counting Tips</h4>
            <p className="text-sm">
              Try counting out loud while pointing to each apple. This helps keep track of 
              objects and builds the connection between numbers and quantities.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Shape Explorer activity
  const renderShapeExplorer = () => {
    const shapes = [
      { name: "Circle", color: "bg-blue-500", style: "rounded-full", description: "A round shape with no corners or edges." },
      { name: "Square", color: "bg-red-500", style: "rounded-none", description: "A shape with 4 equal sides and 4 corners." },
      { name: "Triangle", color: "bg-green-500", style: "triangle", description: "A shape with 3 sides and 3 corners." },
      { name: "Rectangle", color: "bg-purple-500", style: "rounded-none h-16 w-24", description: "A shape with 4 sides and 4 corners, where opposite sides are equal." }
    ];

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Shape Explorer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {shapes.map((shape) => (
            <div key={shape.name} className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-3">{shape.name}</h3>
              <div className="flex justify-center mb-4">
                <div 
                  className={`${shape.color} ${shape.style} h-20 w-20 flex items-center justify-center text-white text-xl font-bold`}
                >
                  {shape.name === "Triangle" && "▲"}
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground">{shape.description}</p>
              <div className="mt-3 pt-3 border-t">
                <h4 className="text-sm font-medium mb-2">Real-world examples:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {shape.name === "Circle" && (
                    <>
                      <span role="img" aria-label="ball" className="text-2xl">⚽</span>
                      <span role="img" aria-label="plate" className="text-2xl">🍽️</span>
                      <span role="img" aria-label="cookie" className="text-2xl">🍪</span>
                    </>
                  )}
                  {shape.name === "Square" && (
                    <>
                      <span role="img" aria-label="box" className="text-2xl">📦</span>
                      <span role="img" aria-label="window" className="text-2xl">🪟</span>
                      <span role="img" aria-label="book" className="text-2xl">📚</span>
                    </>
                  )}
                  {shape.name === "Triangle" && (
                    <>
                      <span role="img" aria-label="pizza" className="text-2xl">🍕</span>
                      <span role="img" aria-label="mountain" className="text-2xl">⛰️</span>
                      <span role="img" aria-label="pyramid" className="text-2xl">🏔️</span>
                    </>
                  )}
                  {shape.name === "Rectangle" && (
                    <>
                      <span role="img" aria-label="door" className="text-2xl">🚪</span>
                      <span role="img" aria-label="phone" className="text-2xl">📱</span>
                      <span role="img" aria-label="tv" className="text-2xl">📺</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Default content for other lessons
  const renderDefaultContent = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{selectedLesson?.title}</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">About This Lesson</h3>
          <p className="text-muted-foreground">{selectedLesson?.content}</p>
        </div>
        
        <div className="border-t border-border pt-4 mt-6">
          <h3 className="font-medium mb-3">Lesson Activities</h3>
          <div className="grid gap-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium text-primary">Interactive Exercise</h4>
              <p className="text-sm text-muted-foreground mt-1">Complete the interactive activities related to {selectedLesson?.title}</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium text-primary">Practice Questions</h4>
              <p className="text-sm text-muted-foreground mt-1">Test your understanding with these practice questions</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={!!selectedLesson && !selectedVideo} onOpenChange={(open) => !open && setSelectedLesson(null)}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>{selectedLesson?.title}</span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogTitle>
          <DialogDescription>
            Interactive lesson with learning objectives and practice activities
          </DialogDescription>
        </DialogHeader>
        
        {!activityStarted ? (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Learning Objectives</h3>
              <ul className="space-y-2" aria-label="Learning objectives">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" aria-hidden="true" />
                  <span>Understand key concepts of {selectedLesson?.title}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" aria-hidden="true" />
                  <span>Practice through interactive exercises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" aria-hidden="true" />
                  <span>Apply knowledge to real-world scenarios</span>
                </li>
              </ul>
            </div>
            
            <div className="aspect-video w-full bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <div className="text-center p-4">
                <Play className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-medium">Interactive {selectedLesson?.type} Content</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  This is a preview for the interactive content for {selectedLesson?.title}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline"
                aria-label={`Download materials for ${selectedLesson?.title}`}
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download Materials
              </Button>
              <Button 
                onClick={handleStartActivity}
                aria-label={`Start ${selectedLesson?.title} activity`}
                aria-describedby="activity-description"
              >
                <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                Start activity
              </Button>
              <span id="activity-description" className="sr-only">
                Starting this activity will present interactive content related to {selectedLesson?.title}
              </span>
            </div>
          </div>
        ) : (
          <div>
            {renderLessonContent()}
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                onClick={() => setActivityStarted(false)}
                aria-label="Return to lesson overview"
              >
                Return to overview
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveLessonDialog;
