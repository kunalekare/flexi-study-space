
import React from "react";
import { Button } from "@/components/ui/button";

interface ColorMatchingGameProps {
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
}

const ColorMatchingGame = ({ selectedColor, setSelectedColor }: ColorMatchingGameProps) => {
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

export default ColorMatchingGame;
