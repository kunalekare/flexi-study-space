
import React from "react";

const SortingByColor = () => {
  const items = [
    { name: "Apple", color: "red", emoji: "🍎" },
    { name: "Blueberry", color: "blue", emoji: "🫐" },
    { name: "Banana", color: "yellow", emoji: "🍌" },
    { name: "Strawberry", color: "red", emoji: "🍓" },
    { name: "Lemon", color: "yellow", emoji: "🍋" },
    { name: "Grapes", color: "purple", emoji: "🍇" },
    { name: "Orange", color: "orange", emoji: "🍊" },
    { name: "Watermelon", color: "green", emoji: "🍉" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sorting by Color</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-3">Sort the fruits by color</h3>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Items to sort:</h4>
          <div className="flex flex-wrap gap-3">
            {items.map((item, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-1">{item.emoji}</div>
                <p className="text-xs">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
            <h4 className="font-medium text-red-700 mb-2">Red Items</h4>
            <div className="min-h-20 flex flex-wrap gap-2">
              {items
                .filter(item => item.color === "red")
                .map((item, index) => (
                  <div key={index} className="bg-white p-2 rounded-lg shadow-sm text-center">
                    <div className="text-3xl">{item.emoji}</div>
                    <p className="text-xs">{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
            <h4 className="font-medium text-yellow-700 mb-2">Yellow Items</h4>
            <div className="min-h-20 flex flex-wrap gap-2">
              {items
                .filter(item => item.color === "yellow")
                .map((item, index) => (
                  <div key={index} className="bg-white p-2 rounded-lg shadow-sm text-center">
                    <div className="text-3xl">{item.emoji}</div>
                    <p className="text-xs">{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Sorting Tips</h4>
          <p className="text-sm mb-3">
            Sorting by color helps develop:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Color recognition skills</li>
            <li>• Classification and categorization abilities</li>
            <li>• Visual discrimination</li>
            <li>• Early math concepts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortingByColor;
