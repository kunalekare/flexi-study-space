
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const AlphabetSong = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // Simulated playback logic
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate song progress by cycling through letters
      let letterIndex = 0;
      const interval = setInterval(() => {
        setCurrentLetter(letterIndex);
        letterIndex = (letterIndex + 1) % alphabet.length;
        if (letterIndex === 0) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 500); // Change letter every 500ms
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Alphabet Song</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <div className="text-center mb-8">
          <h3 className="font-medium mb-6">Learn the Alphabet through Song</h3>
          
          <div className="grid grid-cols-13 gap-1 mb-8">
            {alphabet.map((letter, index) => (
              <div 
                key={index}
                className={`p-2 rounded-md text-center ${
                  index === currentLetter && isPlaying
                    ? "bg-primary text-white animate-bounce"
                    : "bg-primary/10"
                }`}
              >
                <span className="text-lg font-bold">{letter}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mb-4">
            <Button 
              variant="default"
              size="lg"
              onClick={togglePlay}
              className="gap-2"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              {isPlaying ? "Pause Song" : "Play the Alphabet Song"}
            </Button>
          </div>
          
          {isPlaying && (
            <div className="text-2xl font-bold text-primary animate-bounce">
              {alphabet[currentLetter]}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Learning Tips</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Sing along with your child</li>
              <li>• Point to each letter as you sing it</li>
              <li>• Encourage your child to dance along</li>
              <li>• Practice identifying letters after singing</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Activity Extensions</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Find objects that start with different letters</li>
              <li>• Draw letters in sand or with finger paint</li>
              <li>• Create an alphabet collage with magazine cutouts</li>
              <li>• Use alphabet flashcards for additional practice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphabetSong;
