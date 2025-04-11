
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
  showGrades?: boolean;
  selectedGrade?: string;
  setSelectedGrade?: (grade: string) => void;
}

const LevelSelector = ({ 
  selectedLevel, 
  setSelectedLevel, 
  levels,
  showGrades = false,
  selectedGrade = "all",
  setSelectedGrade = () => {}
}: LevelSelectorProps) => {
  const grades = [
    { id: "all", name: "All Grades" },
    { id: "grade1", name: "Grade 1" },
    { id: "grade2", name: "Grade 2" },
    { id: "grade3", name: "Grade 3" },
    { id: "grade4", name: "Grade 4" },
    { id: "grade5", name: "Grade 5" },
    { id: "grade6", name: "Grade 6" },
    { id: "grade7", name: "Grade 7" },
    { id: "grade8", name: "Grade 8" },
    { id: "grade9", name: "Grade 9" },
    { id: "grade10", name: "Grade 10" }
  ];

  return (
    <div className="space-y-6">
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
      
      {showGrades && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Filter by Grade</h3>
          <div className="flex flex-wrap gap-2">
            {grades.map((grade) => (
              <Badge 
                key={grade.id} 
                variant={selectedGrade === grade.id ? "default" : "outline"}
                className={`cursor-pointer text-sm py-1.5 px-3 ${selectedGrade === grade.id ? "bg-primary" : ""}`}
                onClick={() => setSelectedGrade(grade.id)}
              >
                {grade.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelSelector;
