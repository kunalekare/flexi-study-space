
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CountingOneToTen = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [showObjects, setShowObjects] = useState(true);

  const handlePrevNumber = () => {
    if (currentNumber > 1) {
      setCurrentNumber(currentNumber - 1);
    }
  };

  const handleNextNumber = () => {
    if (currentNumber < 10) {
      setCurrentNumber(currentNumber + 1);
    }
  };

  const toggleView = () => {
    setShowObjects(!showObjects);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Counting 1 to 10</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <div className="text-center mb-6">
          <div className="flex justify-between items-center mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrevNumber}
              disabled={currentNumber === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <span className="text-5xl font-bold text-primary">{currentNumber}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleNextNumber}
              disabled={currentNumber === 10}
            >
              Next
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          {showObjects && (
            <div className="flex flex-wrap justify-center my-8">
              {Array(currentNumber).fill(0).map((_, idx) => (
                <div key={idx} className="m-2 text-3xl animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {currentNumber === 1 && "🎈"}
                  {currentNumber === 2 && "🐶"}
                  {currentNumber === 3 && "🍎"}
                  {currentNumber === 4 && "🌟"}
                  {currentNumber === 5 && "🐢"}
                  {currentNumber === 6 && "🍦"}
                  {currentNumber === 7 && "🌈"}
                  {currentNumber === 8 && "🐠"}
                  {currentNumber === 9 && "🚀"}
                  {currentNumber === 10 && "🦋"}
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4">
            <Button size="sm" onClick={toggleView}>
              {showObjects ? "Hide Objects" : "Show Objects"}
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg mb-4">
          <h4 className="font-medium mb-2">Number {currentNumber}</h4>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg text-2xl font-bold text-primary mr-4">
              {currentNumber}
            </div>
            <div>
              <p className="text-sm mb-1">
                <span className="font-medium">Number name:</span> {
                  ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"][currentNumber - 1]
                }
              </p>
              <p className="text-sm">
                <span className="font-medium">Count:</span> {
                  Array(currentNumber).fill(0).map((_, idx) => idx + 1).join(", ")
                }
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Practice counting with your child. Ask them to count along with you as you point to each object.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountingOneToTen;
