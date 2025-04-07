
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface NumberRecognitionProps {
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number | null) => void;
}

const NumberRecognition = ({ selectedAnswer, setSelectedAnswer }: NumberRecognitionProps) => {
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

export default NumberRecognition;
