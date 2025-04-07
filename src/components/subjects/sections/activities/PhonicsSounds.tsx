
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

const PhonicsSounds = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  
  const phonicsData = [
    { letter: "A", sound: "a as in apple", examples: ["Apple", "Ant", "Alligator"], emoji: "🍎" },
    { letter: "B", sound: "b as in ball", examples: ["Ball", "Banana", "Butterfly"], emoji: "🏀" },
    { letter: "C", sound: "c as in cat", examples: ["Cat", "Cake", "Candy"], emoji: "🐱" },
    { letter: "D", sound: "d as in dog", examples: ["Dog", "Duck", "Donut"], emoji: "🐶" },
    { letter: "E", sound: "e as in elephant", examples: ["Elephant", "Egg", "Exit"], emoji: "🐘" }
  ];
  
  const currentPhonics = phonicsData[currentLetterIndex];
  
  const handlePrevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  };
  
  const handleNextLetter = () => {
    if (currentLetterIndex < phonicsData.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    }
  };
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Phonics Sounds</h2>
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
          <h3 className="font-medium">Letter Sounds</h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNextLetter}
            disabled={currentLetterIndex === phonicsData.length - 1}
          >
            Next
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="text-7xl font-bold text-primary mr-8">
              {currentPhonics.letter}
            </div>
            <div className="text-6xl">
              {currentPhonics.emoji}
            </div>
          </div>
          
          <p className="text-xl mb-4">{currentPhonics.sound}</p>
          
          <Button 
            variant="outline"
            size="sm"
            className="mx-auto mb-6 gap-2"
          >
            <Play className="h-4 w-4" />
            Listen to Sound
          </Button>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Examples of words that start with {currentPhonics.letter}:</h4>
            <div className="flex justify-center gap-4 mb-4">
              {currentPhonics.examples.map((example, idx) => (
                <div key={idx} className="text-center">
                  <span className="font-bold text-primary">{example.charAt(0)}</span>
                  <span>{example.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Practice Activity</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Can you think of other words that start with the letter {currentPhonics.letter}?
            </p>
            <div className="flex justify-center space-x-3">
              <span role="img" aria-label="example" className="text-3xl cursor-pointer hover:scale-110 transition-transform">
                {currentPhonics.emoji}
              </span>
              <span role="img" aria-label="question mark" className="text-3xl cursor-pointer hover:scale-110 transition-transform">
                ❓
              </span>
              <span role="img" aria-label="question mark" className="text-3xl cursor-pointer hover:scale-110 transition-transform">
                ❓
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonicsSounds;
