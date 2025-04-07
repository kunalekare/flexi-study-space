
import React from "react";

const ShapeHunt = () => {
  const shapes = [
    { name: "Circle", emoji: "⭕", examples: ["Clock", "Wheels", "Plates"] },
    { name: "Square", emoji: "⬛", examples: ["Block", "Window", "Picture frame"] },
    { name: "Triangle", emoji: "🔺", examples: ["Roof", "Pizza slice", "Warning sign"] },
    { name: "Rectangle", emoji: "📱", examples: ["Door", "Book", "TV screen"] }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shape Hunt</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-3">Find shapes in your environment</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {shapes.map((shape, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">{shape.emoji}</span>
                <h4 className="font-medium">{shape.name}</h4>
              </div>
              <p className="text-sm mb-2">Examples:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {shape.examples.map((example, idx) => (
                  <li key={idx}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg mb-4">
          <h4 className="font-medium mb-2">Shape Hunt Challenge!</h4>
          <p className="text-sm mb-4">
            Go on a shape hunt around your home or classroom! How many different shapes can you find?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-3 rounded-lg text-center">
              <p className="text-xs mb-1">I found a:</p>
              <p className="font-bold">Circle</p>
              <p className="text-xs mt-1">Draw or tell what it was</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <p className="text-xs mb-1">I found a:</p>
              <p className="font-bold">Square</p>
              <p className="text-xs mt-1">Draw or tell what it was</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <p className="text-xs mb-1">I found a:</p>
              <p className="font-bold">Triangle</p>
              <p className="text-xs mt-1">Draw or tell what it was</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <p className="text-xs mb-1">I found a:</p>
              <p className="font-bold">Rectangle</p>
              <p className="text-xs mt-1">Draw or tell what it was</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeHunt;
