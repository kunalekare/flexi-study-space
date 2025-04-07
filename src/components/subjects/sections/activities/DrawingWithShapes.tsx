
import React from "react";
import { Button } from "@/components/ui/button";

interface DrawingWithShapesProps {
  drawnShapes: string[];
  setDrawnShapes: (shapes: string[]) => void;
}

const DrawingWithShapes = ({ drawnShapes, setDrawnShapes }: DrawingWithShapesProps) => {
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

export default DrawingWithShapes;
