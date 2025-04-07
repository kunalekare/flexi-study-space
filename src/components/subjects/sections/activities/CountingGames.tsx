
import React from "react";
import { Button } from "@/components/ui/button";

interface CountingGamesProps {
  countValue: number | null;
  setCountValue: (value: number | null) => void;
}

const CountingGames = ({ countValue, setCountValue }: CountingGamesProps) => {
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

export default CountingGames;
