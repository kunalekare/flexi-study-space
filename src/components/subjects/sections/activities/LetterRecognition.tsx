
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Star, CircleCheck } from "lucide-react";

const LetterRecognition = () => {
  const [currentLetter, setCurrentLetter] = useState('');
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [completedLetters, setCompletedLetters] = useState<string[]>([]);
  const [mode, setMode] = useState<"uppercase" | "lowercase">("uppercase");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // Initialize with a random letter
  useEffect(() => {
    if (!currentLetter) {
      selectRandomLetter();
    }
  }, [currentLetter]);

  const selectRandomLetter = () => {
    const availableLetters = letters.filter(letter => !completedLetters.includes(letter));
    
    if (availableLetters.length === 0) {
      // All letters completed - reset
      setCompletedLetters([]);
      const newLetter = letters[Math.floor(Math.random() * letters.length)];
      setCurrentLetter(mode === "uppercase" ? newLetter : newLetter.toLowerCase());
      return;
    }
    
    const newLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    setCurrentLetter(mode === "uppercase" ? newLetter : newLetter.toLowerCase());
  };

  const checkAnswer = () => {
    const correctAnswer = mode === "uppercase" ? currentLetter : currentLetter.toUpperCase();
    const normalizedInput = userInput.toUpperCase();
    
    if (normalizedInput === correctAnswer.toUpperCase()) {
      // Correct answer
      setScore(score + 10);
      setConsecutiveCorrect(consecutiveCorrect + 1);
      setCompletedLetters([...completedLetters, currentLetter.toUpperCase()]);
      
      if (consecutiveCorrect % 5 === 4) { // Every 5 correct answers
        setShowAnimation(true);
        toast.success("Amazing! 5 correct in a row!", {
          description: "You're becoming a letter expert!",
        });
        setTimeout(() => setShowAnimation(false), 2000);
      } else {
        toast.success("Correct! Well done!", {
          icon: <CircleCheck className="h-4 w-4 text-green-500" />,
        });
      }
      
      setUserInput("");
      selectRandomLetter();
    } else {
      // Incorrect answer
      setConsecutiveCorrect(0);
      toast.error("Try again!", {
        description: `That's not the letter ${currentLetter}`,
      });
    }
  };

  const toggleMode = () => {
    setMode(mode === "uppercase" ? "lowercase" : "uppercase");
    setCurrentLetter(mode === "uppercase" 
      ? currentLetter.toLowerCase() 
      : currentLetter.toUpperCase()
    );
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Letter Recognition Activity</h2>
      
      <div className="bg-muted p-4 rounded-lg mb-6">
        <p className="text-center mb-4">
          Learn to recognize letters by typing the letter you see on the screen!
        </p>
        
        <div className="flex justify-end mb-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={toggleMode}
            className="text-xs"
          >
            {mode === "uppercase" ? "Switch to Lowercase" : "Switch to Uppercase"}
          </Button>
        </div>
        
        <div className="relative">
          <div className={`text-center p-8 rounded-lg bg-primary/10 mb-6 transition-all ${showAnimation ? 'scale-110' : ''}`}>
            <span className="text-8xl font-bold text-primary">
              {currentLetter}
            </span>
            
            {showAnimation && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`absolute h-6 w-6 text-yellow-400 animate-ping`}
                      style={{ 
                        top: `${Math.sin(i * 72 * Math.PI / 180) * 60}px`,
                        left: `${Math.cos(i * 72 * Math.PI / 180) * 60}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center mb-4">
          <label htmlFor="letter-input" className="block mb-2 text-lg font-medium">
            What letter is this?
          </label>
          <input
            id="letter-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            maxLength={1}
            className="px-4 py-2 w-20 text-center text-3xl font-bold border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            autoFocus
          />
        </div>
        
        <div className="flex justify-center mb-4">
          <Button 
            onClick={checkAnswer}
            className="px-8"
            disabled={!userInput}
          >
            Check Answer
          </Button>
        </div>
        
        <div className="flex justify-between items-center mt-6 p-2 bg-background rounded-lg">
          <div>
            <span className="text-sm font-medium">Letters Completed:</span>
            <span className="ml-2 px-2 py-1 bg-primary/20 rounded-md text-sm">
              {completedLetters.length} / 26
            </span>
          </div>
          
          <div>
            <span className="text-sm font-medium">Score:</span>
            <span className="ml-2 px-2 py-1 bg-primary/20 rounded-md text-sm">
              {score}
            </span>
          </div>
        </div>
        
        {completedLetters.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Letters you've identified:</h3>
            <div className="flex flex-wrap gap-1">
              {letters.map((letter) => (
                <div 
                  key={letter}
                  className={`w-7 h-7 flex items-center justify-center text-xs rounded-md
                    ${completedLetters.includes(letter) 
                      ? 'bg-primary/80 text-white' 
                      : 'bg-muted-foreground/20 text-muted-foreground'
                    }`}
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium mb-2">Learning Tips</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Look carefully at the shape of each letter</li>
            <li>• Practice writing the letter after you identify it</li>
            <li>• Try to think of words that start with this letter</li>
            <li>• Notice the difference between similar letters (p and q, b and d)</li>
          </ul>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Activity Extensions</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Find objects that start with each letter</li>
            <li>• Practice both uppercase and lowercase letters</li>
            <li>• Create an alphabet book with pictures</li>
            <li>• Play "I Spy" with letter sounds</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LetterRecognition;
