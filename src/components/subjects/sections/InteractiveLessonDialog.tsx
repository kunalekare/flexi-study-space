import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Play, Download, Pencil, Music, BookOpen } from "lucide-react";

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
    switch (selectedLesson?.title) {
      // Math activities
      case "Number Recognition":
        return renderNumberRecognition();
      case "Pattern Matching":
        return renderPatternMatching();
      case "Counting Games":
        return renderCountingGames();
      case "Shape Explorer":
        return renderShapeExplorer();
      case "Counting 1 to 10":
        return renderCountingOneToTen();
      case "Simple Addition":
        return renderSimpleAddition();
      case "Number Tracing":
        return renderNumberTracing();
      case "Sorting & Matching":
        return renderSortingAndMatching();
        
      // Shapes & Colors activities
      case "Color Matching Game":
        return renderColorMatchingGame();
      case "Shape Hunt":
        return renderShapeHunt();
      case "Sorting by Color":
        return renderSortingByColor();
      case "Drawing with Shapes":
        return renderDrawingWithShapes();
        
      // Stories & Songs activities
      case "The Little Red Hen":
        return renderLittleRedHen();
      case "Counting with Songs":
        return renderCountingSongs();
      case "Fairy Tale Time":
        return renderFairyTaleTime();
      case "Alphabet Song":
        return renderAlphabetSong();
        
      // Memory & Logic activities
      case "Find the Pattern":
        return renderFindPattern();
      case "Matching Game":
        return renderMatchingGame();
      case "Memory Challenge":
        return renderMemoryChallenge();
      case "Spot the Difference":
        return renderSpotTheDifference();
        
      // Alphabets activities
      case "A to Z Letter Recognition":
        return renderLetterRecognition();
      case "Phonics Sounds":
        return renderPhonicsSounds();
      case "Letter Tracing Practice":
        return renderLetterTracing();
        
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

  // Color Matching Game activity
  const renderColorMatchingGame = () => {
    const colors = [
      { name: "Red", hex: "#FF0000", items: ["Apple", "Strawberry", "Fire Truck"] },
      { name: "Blue", hex: "#0000FF", items: ["Sky", "Blueberry", "Ocean"] },
      { name: "Yellow", hex: "#FFFF00", items: ["Sun", "Banana", "Lemon"] },
      { name: "Green", hex: "#00FF00", items: ["Leaf", "Frog", "Grass"] }
    ];

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Color Matching Game</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Match colors to objects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {colors.map((color, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div 
                  className="h-16 w-16 rounded-lg mx-auto mb-3"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <h4 className="text-center font-medium mb-2">{color.name}</h4>
                <ul className="space-y-1 pl-2">
                  {color.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-2" 
                        style={{ backgroundColor: color.hex }}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-3"
                  size="sm"
                  variant={selectedColor === color.name ? "default" : "outline"}
                  onClick={() => setSelectedColor(color.name)}
                >
                  Select
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-3">Find something {selectedColor || "..."} in your home!</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {selectedColor ? 
                `Look around you! Can you find something ${selectedColor.toLowerCase()} like the examples above?` :
                "Select a color above to start the activity"
              }
            </p>
            {selectedColor && (
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium">Learning tip:</p>
                <p className="text-xs text-muted-foreground">
                  Identifying colors in everyday objects helps strengthen color recognition and builds vocabulary.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Shape Hunt activity
  const renderShapeHunt = () => {
    const shapes = [
      { name: "Circle", emoji: "⭕", examples: ["Clock", "Wheels", "Plates"] },
      { name: "Square", emoji: "⬛", examples: ["Block", "Window", "Picture frame"] },
      { name: "Triangle", emoji: "🔺", examples: ["Roof", "Pizza slice", "Warning sign"] },
      { name: "Rectangle", emoji: "📱", examples: ["Door", "Book", "TV screen"] }
    ];

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Shape Hunt</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Find shapes in your environment</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {shapes.map((shape, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border">
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">{shape.emoji}</span>
                  <h4 className="font-medium">{shape.name}</h4>
                </div>
                <p className="text-sm mb-2">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {shape.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Shape Hunt Challenge!</h4>
            <p className="text-sm mb-4">
              Go on a shape hunt around your home or classroom! How many different shapes can you find?
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs mb-1">I found a:</p>
                <p className="font-bold">Circle</p>
                <p className="text-xs mt-1">Draw or tell what it was</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs mb-1">I found a:</p>
                <p className="font-bold">Square</p>
                <p className="text-xs mt-1">Draw or tell what it was</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs mb-1">I found a:</p>
                <p className="font-bold">Triangle</p>
                <p className="text-xs mt-1">Draw or tell what it was</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-xs mb-1">I found a:</p>
                <p className="font-bold">Rectangle</p>
                <p className="text-xs mt-1">Draw or tell what it was</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Sorting by Color activity
  const renderSortingByColor = () => {
    const items = [
      { name: "Apple", color: "red", emoji: "🍎" },
      { name: "Blueberry", color: "blue", emoji: "🫐" },
      { name: "Banana", color: "yellow", emoji: "🍌" },
      { name: "Strawberry", color: "red", emoji: "🍓" },
      { name: "Lemon", color: "yellow", emoji: "🍋" },
      { name: "Grapes", color: "purple", emoji: "🍇" },
      { name: "Orange", color: "orange", emoji: "🍊" },
      { name: "Watermelon", color: "green", emoji: "🍉" }
    ];

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Sorting by Color</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Sort the fruits by color</h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Items to sort:</h4>
            <div className="flex flex-wrap gap-3">
              {items.map((item, index) => (
                <div key={index} className="bg-white p-2 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-1">{item.emoji}</div>
                  <p className="text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
              <h4 className="font-medium text-red-700 mb-2">Red Items</h4>
              <div className="min-h-20 flex flex-wrap gap-2">
                {items
                  .filter(item => item.color === "red")
                  .map((item, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg shadow-sm text-center">
                      <div className="text-3xl">{item.emoji}</div>
                      <p className="text-xs">{item.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
              <h4 className="font-medium text-yellow-700 mb-2">Yellow Items</h4>
              <div className="min-h-20 flex flex-wrap gap-2">
                {items
                  .filter(item => item.color === "yellow")
                  .map((item, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg shadow-sm text-center">
                      <div className="text-3xl">{item.emoji}</div>
                      <p className="text-xs">{item.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Sorting Tips</h4>
            <p className="text-sm mb-3">
              Sorting by color helps develop:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Color recognition skills</li>
              <li>• Classification and categorization abilities</li>
              <li>• Visual discrimination</li>
              <li>• Early math concepts</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Drawing with Shapes activity
  const renderDrawingWithShapes = () => {
    const shapes = [
      { name: "Circle", emoji: "⭕" },
      { name: "Square", emoji: "⬛" },
      { name: "Triangle", emoji: "🔺" },
      { name: "Rectangle", emoji: "▬" }
    ];

    const examples = [
      { name: "House", shapes: ["Square", "Triangle", "Rectangle"] },
      { name: "Car", shapes: ["Rectangle", "Circle", "Circle"] },
      { name: "Snowman", shapes: ["Circle", "Circle", "Circle"] },
      { name: "Flower", shapes: ["Circle", "Circle", "Circle", "Circle", "Circle"] }
    ];

    const handleAddShape = (shape: string) => {
      setDrawnShapes([...drawnShapes, shape]);
    };

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Drawing with Shapes</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Create pictures using different shapes</h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Available shapes:</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {shapes.map((shape, index) => (
                <Button 
                  key={index} 
                  variant="outline"
                  className="flex items-center"
                  onClick={() => handleAddShape(shape.name)}
                >
                  <span className="text-2xl mr-2">{shape.emoji}</span>
                  <span>{shape.name}</span>
                </Button>
              ))}
            </div>
            <Button size="sm" onClick={() => setDrawnShapes([])}>Clear</Button>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Your drawing:</h4>
            <div className="bg-white border border-gray-200 p-3 rounded-lg min-h-[150px]">
              {drawnShapes.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center pt-10">
                  Select shapes above to start drawing
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {drawnShapes.map((shape, index) => {
                    const shapeObj = shapes.find(s => s.name === shape);
                    return (
                      <span key={index} className="text-3xl">
                        {shapeObj?.emoji}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Shape Drawing Ideas</h4>
            <div className="grid grid-cols-2 gap-3">
              {examples.map((example, index) => (
                <div key={index} className="bg-white p-3 rounded-lg text-center">
                  <h5 className="font-medium mb-2">{example.name}</h5>
                  <div className="flex flex-wrap justify-center gap-1">
                    {example.shapes.map((shape, idx) => {
                      const shapeObj = shapes.find(s => s.name === shape);
                      return (
                        <span key={idx} className="text-2xl">
                          {shapeObj?.emoji}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // The Little Red Hen story
  const renderLittleRedHen = () => {
    const storyPages = [
      {
        text: "Once upon a time, there was a little red hen who lived on a farm with her friends: a lazy dog, a sleepy cat, and a noisy duck.",
        image: "🐔🐕🐱🦆"
      },
      {
        text: "One day, the little red hen found some wheat seeds. 'Who will help me plant these wheat seeds?' asked the little red hen.",
        image: "🐔🌾"
      },
      {
        text: "'Not I,' said the dog. 'Not I,' said the cat. 'Not I,' said the duck. 'Then I will do it myself,' said the little red hen.",
        image: "🐔🙅‍♂️🐕🙅‍♂️🐱🙅‍♂️🦆"
      },
      {
        text: "The little red hen planted the wheat seeds all by herself. Soon the wheat grew tall.",
        image: "🐔🌾🌾🌾"
      },
      {
        text: "'Who will help me cut the wheat?' asked the little red hen. 'Not I,' said the dog. 'Not I,' said the cat. 'Not I,' said the duck.",
        image: "🐔✂️🌾🙅‍♂️🐕🙅‍♂️🐱🙅‍♂️🦆"
      },
      {
        text: "'Then I will do it myself,' said the little red hen. And she cut the wheat all by herself.",
        image: "🐔✂️🌾"
      },
      {
        text: "The little red hen asked who would help her take the wheat to the mill, but again, no one would help. So she did it herself.",
        image: "🐔🏠🌾"
      },
      {
        text: "Then she asked who would help her bake bread from the flour. Again, no one would help. So she baked the bread herself.",
        image: "🐔👩‍🍳🍞"
      },
      {
        text: "When the bread was ready, she asked, 'Who will help me eat the bread?' 'I will!' said the dog. 'I will!' said the cat. 'I will!' said the duck.",
        image: "🐔🍞🙋‍♂️🐕🙋‍♂️🐱🙋‍♂️🦆"
      },
      {
        text: "'No, you won't,' said the little red hen. 'You didn't help me plant the wheat, cut it, take it to the mill, or bake the bread. So I will eat it myself.' And she did!",
        image: "🐔😋🍞😢🐕😢🐱😢🦆"
      },
      {
        text: "The moral of the story: If you want to enjoy the rewards, you must help with the work.",
        image: "👨‍🏫"
      }
    ];

    const currentPage = storyPages[storyProgress];

    return (
      <div className="p-6">
