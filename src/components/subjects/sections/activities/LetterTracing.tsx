
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const LetterTracing = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [traceCompleted, setTraceCompleted] = useState(false);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const currentLetter = letters[currentLetterIndex];
  
  const handlePrevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
      setTraceCompleted(false);
    }
  };
  
  const handleNextLetter = () => {
    if (currentLetterIndex < letters.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
      setTraceCompleted(false);
    }
  };
  
  const handleReset = () => {
    setTraceCompleted(false);
  };
  
  const completeTracing = () => {
    setTraceCompleted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Letter Tracing Practice</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrevLetter}
            disabled={currentLetterIndex === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <h3 className="font-medium">Tracing Letter: {currentLetter}</h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNextLetter}
            disabled={currentLetterIndex === letters.length - 1}
          >
            Next
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-64 h-64 bg-white rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div 
              className={`text-8xl font-bold ${traceCompleted ? "text-primary" : "text-gray-200"}`}
              style={{ fontFamily: "cursive" }}
            >
              {currentLetter}
            </div>
            {!traceCompleted && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  onClick={completeTracing}
                  size="sm"
                  variant="outline"
                >
                  Click to Trace
                </Button>
              </div>
            )}
          </div>
          
          {traceCompleted && (
            <div className="flex justify-center mb-6">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleReset}
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
          )}
          
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">
              {traceCompleted ? 
                "Great job! You traced the letter properly." : 
                "Follow the outline to trace the letter."}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Letter {currentLetter} words:</h4>
            <ul className="space-y-1 text-sm">
              {(() => {
                const letterWords = {
                  'A': ['Apple', 'Ant', 'Airplane'],
                  'B': ['Ball', 'Banana', 'Boat'],
                  'C': ['Cat', 'Car', 'Cake'],
                  'D': ['Dog', 'Duck', 'Donut'],
                  'E': ['Elephant', 'Egg', 'Exit']
                };
                const words = letterWords[currentLetter as keyof typeof letterWords] || 
                              ['Example 1', 'Example 2', 'Example 3'];
                return words.map((word, idx) => (
                  <li key={idx}>• <span className="text-primary font-bold">{word.charAt(0)}</span>{word.slice(1)}</li>
                ));
              })()}
            </ul>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Tracing Tips</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Start at the dot and follow the arrows</li>
              <li>• Practice makes perfect</li>
              <li>• Try tracing in the air with your finger</li>
              <li>• Say the letter sound while tracing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterTracing;
