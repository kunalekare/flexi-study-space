import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LetterRecognition = () => {
  const [currentLetter, setCurrentLetter] = useState(letters[0]);
  const [userInput, setUserInput] = useState("");

  const handleNextLetter = () => {
    const currentIndex = letters.indexOf(currentLetter);
    if (currentIndex < letters.length - 1) {
      setCurrentLetter(letters[currentIndex + 1]);
      setUserInput("");
    } else {
      alert("Great job! You have completed the activity.");
      setCurrentLetter(letters[0]);
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Letter Recognition Activity</h2>
      <p className="text-lg mb-4">Identify the letter shown below:</p>
      <div className="text-6xl font-bold text-primary">{currentLetter}</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.toUpperCase())}
        maxLength={1}
        className="mt-4 p-2 border rounded text-center"
      />
      <div className="mt-4">
        <Button
          onClick={handleNextLetter}
          disabled={userInput !== currentLetter}
        >
          {userInput === currentLetter ? "Next Letter" : "Check"}
        </Button>
      </div>
    </div>
  );
};

export default LetterRecognition;
