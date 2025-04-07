
import React from "react";

const ShapeExplorer = () => {
  const shapes = [
    { name: "Circle", color: "bg-blue-500", style: "rounded-full", description: "A round shape with no corners or edges." },
    { name: "Square", color: "bg-red-500", style: "rounded-none", description: "A shape with 4 equal sides and 4 corners." },
    { name: "Triangle", color: "bg-green-500", style: "triangle", description: "A shape with 3 sides and 3 corners." },
    { name: "Rectangle", color: "bg-purple-500", style: "rounded-none h-16 w-24", description: "A shape with 4 sides and 4 corners, where opposite sides are equal." }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shape Explorer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {shapes.map((shape) => (
          <div key={shape.name} className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-3">{shape.name}</h3>
            <div className="flex justify-center mb-4">
              <div 
                className={`${shape.color} ${shape.style} h-20 w-20 flex items-center justify-center text-white text-xl font-bold`}
              >
                {shape.name === "Triangle" && "▲"}
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">{shape.description}</p>
            <div className="mt-3 pt-3 border-t">
              <h4 className="text-sm font-medium mb-2">Real-world examples:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {shape.name === "Circle" && (
                  <>
                    <span role="img" aria-label="ball" className="text-2xl">⚽</span>
                    <span role="img" aria-label="plate" className="text-2xl">🍽️</span>
                    <span role="img" aria-label="cookie" className="text-2xl">🍪</span>
                  </>
                )}
                {shape.name === "Square" && (
                  <>
                    <span role="img" aria-label="box" className="text-2xl">📦</span>
                    <span role="img" aria-label="window" className="text-2xl">🪟</span>
                    <span role="img" aria-label="book" className="text-2xl">📚</span>
                  </>
                )}
                {shape.name === "Triangle" && (
                  <>
                    <span role="img" aria-label="pizza" className="text-2xl">🍕</span>
                    <span role="img" aria-label="mountain" className="text-2xl">⛰️</span>
                    <span role="img" aria-label="pyramid" className="text-2xl">🏔️</span>
                  </>
                )}
                {shape.name === "Rectangle" && (
                  <>
                    <span role="img" aria-label="door" className="text-2xl">🚪</span>
                    <span role="img" aria-label="phone" className="text-2xl">📱</span>
                    <span role="img" aria-label="tv" className="text-2xl">📺</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeExplorer;
