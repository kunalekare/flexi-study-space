
import React from "react";
import { Badge } from "@/components/ui/badge";

interface LevelSelectorProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  levels: {
    id: string;
    name: string;
    color: string;
  }[];
}

const LevelSelector = ({ selectedLevel, setSelectedLevel, levels }: LevelSelectorProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">Choose Your Learning Level</h3>
      <div className="flex flex-wrap gap-2">
        {levels.map((level) => (
          <Badge 
            key={level.id} 
            variant={selectedLevel === level.id ? "default" : "outline"}
            className={`cursor-pointer text-sm py-1.5 px-3 ${selectedLevel === level.id ? "bg-primary" : level.color}`}
            onClick={() => setSelectedLevel(level.id)}
          >
            {level.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
